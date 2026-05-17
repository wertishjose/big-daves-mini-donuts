import { useEffect, useMemo, useState } from "react";
import { defaultSiteContent, weeklyScheduleOrder } from "../data/mockData";
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

function normalizeImagePath(path, fallbackPath = "") {
  const value = path ?? fallbackPath;

  if (!value) {
    return "";
  }

  if (/^(https?:)?\/\//.test(value) || value.startsWith("data:") || value.startsWith("blob:")) {
    return value;
  }

  const basePath = import.meta.env.BASE_URL || "/";

  if (basePath !== "/" && value.startsWith(basePath)) {
    const strippedBasePath = value.slice(basePath.length);
    return strippedBasePath.startsWith("/") ? strippedBasePath : `/${strippedBasePath}`;
  }

  return value.startsWith("/") ? value : `/${value}`;
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
      badge: defaultItem.badge,
      price: defaultItem.price,
      bonus: defaultItem.bonus,
      description: defaultItem.description,
      image:
        item.id === "cotton-candy"
          ? "/images/cotton-candy.jpg"
          : normalizeImagePath(item.image, defaultItem.image),
      accent: defaultItem.accent,
    };
  });
}

function normalizeEvents(events) {
  const defaultEventsById = new Map(defaultSiteContent.events.map((event) => [event.id, event]));

  if (!events?.length) {
    return defaultSiteContent.events;
  }

  return events.map((event) => {
    const defaultEvent = defaultEventsById.get(event.id);

    if (!defaultEvent) {
      return event;
    }

    const normalizedLocation =
      event.id === "1" && (!event.location || event.location === "Delano, MN")
        ? "Hutchinson, MN"
        : event.location;

    return {
      ...defaultEvent,
      ...event,
      location: normalizedLocation ?? defaultEvent.location,
    };
  });
}

function normalizeWeeklySchedule(schedule, events, hasWeeklyScheduleProperty) {
  const defaultScheduleByDay = new Map(
    defaultSiteContent.weeklySchedule.map((entry) => [entry.day, entry]),
  );

  if (hasWeeklyScheduleProperty) {
    return weeklyScheduleOrder.map((day) => {
      const defaultEntry = defaultScheduleByDay.get(day);
      const existingEntry =
        schedule?.find((entry) => entry.day === day) ??
        schedule?.find((entry) => entry.id === day.toLowerCase());

      if (existingEntry) {
        return {
          ...existingEntry,
          id: existingEntry.id ?? defaultEntry.id,
          day: existingEntry.day ?? day,
          active: existingEntry.active === true,
        };
      }

      return {
        id: defaultEntry.id,
        day,
        active: false,
        title: "",
        location: "",
        address: "",
        hours: "",
        notes: "",
      };
    });
  }

  const normalizedEvents = normalizeEvents(events);
  const derivedMonday = normalizedEvents.find((event) => event.id === "1") ?? normalizedEvents[0];
  const derivedFriday = normalizedEvents.find((event) => event.id === "2");
  const derivedSaturday = normalizedEvents.find((event) => event.id === "3");

  return defaultSiteContent.weeklySchedule.map((entry) => {
    if (entry.day === "Monday" && derivedMonday) {
      return {
        ...entry,
        active: true,
        title: derivedMonday.title,
        location: derivedMonday.location,
        address: derivedMonday.location,
        hours: derivedMonday.time,
        notes: defaultSiteContent.todayLocation.featuredSpecial,
      };
    }

    if (entry.day === "Friday" && derivedFriday) {
      return {
        ...entry,
        active: true,
        title: derivedFriday.title,
        location: derivedFriday.location,
        address: derivedFriday.location,
        hours: derivedFriday.time,
        notes: derivedFriday.date,
      };
    }

    if (entry.day === "Saturday" && derivedSaturday) {
      return {
        ...entry,
        active: true,
        title: derivedSaturday.title,
        location: derivedSaturday.location,
        address: derivedSaturday.location,
        hours: derivedSaturday.time,
        notes: derivedSaturday.date,
      };
    }

    return entry;
  });
}

function mergeSiteContent(payload) {
  const normalizedEvents = normalizeEvents(payload?.events);
  const hasWeeklyScheduleProperty = Boolean(
    payload && Object.prototype.hasOwnProperty.call(payload, "weeklySchedule"),
  );

  return {
    ...defaultSiteContent,
    ...payload,
    todayLocation: normalizeTodayLocation(payload?.todayLocation),
    hero: {
      ...defaultSiteContent.hero,
      ...(payload?.hero ?? {}),
      trailerImage: normalizeImagePath(payload?.hero?.trailerImage, defaultSiteContent.hero.trailerImage),
      foodImage: normalizeImagePath(payload?.hero?.foodImage, defaultSiteContent.hero.foodImage),
      featuredImage: normalizeImagePath(payload?.hero?.featuredImage, defaultSiteContent.hero.featuredImage),
    },
    featuredItems: normalizeFeaturedItems(payload?.featuredItems),
    testimonials: payload?.testimonials ?? defaultSiteContent.testimonials,
    events: normalizedEvents,
    weeklySchedule: normalizeWeeklySchedule(
      payload?.weeklySchedule,
      normalizedEvents,
      hasWeeklyScheduleProperty,
    ),
    promotions: {
      ...defaultSiteContent.promotions,
      ...(payload?.promotions ?? {}),
      image: normalizeImagePath(payload?.promotions?.image, defaultSiteContent.promotions.image),
    },
  };
}

export function useSiteContent() {
  const [siteContent, setSiteContent] = useState(() => mergeSiteContent(defaultSiteContent));
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
