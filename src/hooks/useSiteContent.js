import { useEffect, useMemo, useState } from "react";
import { defaultSiteContent } from "../data/mockData";
import { hasSupabaseEnv, supabase } from "../lib/supabase";

function buildLocationLinks(address, fallbackLocation) {
  const rawValue = (address ?? "").trim() || (fallbackLocation ?? "").trim();

  if (!rawValue) {
    return {
      directionsUrl: defaultSiteContent.todayLocation.directionsUrl,
      mapEmbedUrl: defaultSiteContent.todayLocation.mapEmbedUrl,
    };
  }

  const query = encodeURIComponent(rawValue);

  return {
    directionsUrl: `https://www.google.com/maps/search/?api=1&query=${query}`,
    mapEmbedUrl: `https://www.google.com/maps?q=${query}&z=13&output=embed`,
  };
}

function normalizeTodayLocation(location) {
  const mergedLocation = {
    ...defaultSiteContent.todayLocation,
    ...(location ?? {}),
  };

  const dynamicLinks = buildLocationLinks(mergedLocation.address, mergedLocation.venue);

  return {
    ...mergedLocation,
    directionsUrl: dynamicLinks.directionsUrl,
    mapEmbedUrl: dynamicLinks.mapEmbedUrl,
  };
}

function normalizeFeaturedItems(items) {
  const defaultItemsById = new Map(
    defaultSiteContent.featuredItems.map((item) => [item.id, item]),
  );

  if (!items?.length) {
    return defaultSiteContent.featuredItems;
  }

  return items.map((item) => {
    const defaultItem = defaultItemsById.get(item.id);

    if (!defaultItem) {
      return item;
    }

    return {
      ...defaultItem,
      ...item,
      image: defaultItem.image,
      accent: defaultItem.accent,
    };
  });
}

function mergeSiteContent(payload) {
  return {
    ...defaultSiteContent,
    ...payload,
    todayLocation: normalizeTodayLocation(payload?.todayLocation),
    hero: {
      ...defaultSiteContent.hero,
      ...(payload?.hero ?? {}),
    },
    featuredItems: normalizeFeaturedItems(payload?.featuredItems),
    testimonials: payload?.testimonials ?? defaultSiteContent.testimonials,
    events: payload?.events ?? defaultSiteContent.events,
  };
}

export function useSiteContent() {
  const [siteContent, setSiteContent] = useState(defaultSiteContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [source, setSource] = useState(hasSupabaseEnv ? "supabase" : "local");

  useEffect(() => {
    let ignore = false;

    async function loadContent() {
      if (!hasSupabaseEnv || !supabase) {
        setLoading(false);
        return;
      }

      const { data, error: fetchError } = await supabase
        .from("site_content")
        .select("content")
        .eq("slug", "main")
        .maybeSingle();

      if (ignore) {
        return;
      }

      if (fetchError) {
        setError(fetchError.message);
        setSource("local");
        setLoading(false);
        return;
      }

      if (data?.content) {
        setSiteContent(mergeSiteContent(data.content));
        setSource("supabase");
      }

      setLoading(false);
    }

    loadContent();

    if (!hasSupabaseEnv || !supabase) {
      return () => {
        ignore = true;
      };
    }

    const refreshInterval = window.setInterval(() => {
      loadContent();
    }, 30000);

    const handleFocus = () => {
      loadContent();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      ignore = true;
      window.clearInterval(refreshInterval);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const helpers = useMemo(
    () => ({
      async saveContent(nextContent) {
        const normalizedContent = mergeSiteContent(nextContent);

        setSiteContent(normalizedContent);

        if (!hasSupabaseEnv || !supabase) {
          setSource("local");
          return { ok: true, mode: "local" };
        }

        setSaving(true);
        setError("");

        const { error: saveError } = await supabase.from("site_content").upsert(
          {
            slug: "main",
            content: normalizedContent,
          },
          {
            onConflict: "slug",
          },
        );

        setSaving(false);

        if (saveError) {
          setError(saveError.message);
          return { ok: false, mode: "supabase", error: saveError };
        }

        return { ok: true, mode: "supabase" };
      },
    }),
    [],
  );

  return {
    siteContent,
    setSiteContent,
    loading,
    saving,
    error,
    source,
    ...helpers,
  };
}
