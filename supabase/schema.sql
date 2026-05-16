create table if not exists public.site_content (
  slug text primary key,
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

drop policy if exists "Allow authenticated users to read site content" on public.site_content;
drop policy if exists "Allow public users to read site content" on public.site_content;
drop policy if exists "Allow authenticated users to update site content" on public.site_content;

create policy "Allow public users to read site content"
on public.site_content
for select
to anon, authenticated
using (true);

create policy "Allow authenticated users to update site content"
on public.site_content
for all
to authenticated
using (true)
with check (true);

insert into public.site_content (slug, content)
values (
  'main',
  '{
    "hero": {
      "trailerImage": "/images/661908500_122259026036059769_238648391896525221_n.jpg",
      "foodImage": "/images/663107727_122259026348059769_347286374704656782_n.jpg",
      "featuredImage": "/images/696792504_122263002350059769_6589352645923373101_n.jpg"
    },
    "todayLocation": {
      "venue": "Cash Wise Monday Pop-Up",
      "address": "1300 Babcock Blvd E, Delano, MN 55328",
      "hours": "12:00 PM - 6:00 PM",
      "isOpen": true,
      "directionsUrl": "https://www.google.com/maps/search/?api=1&query=1300+Babcock+Blvd+E+Delano+MN+55328",
      "mapEmbedUrl": "https://www.google.com/maps?q=1300+Babcock+Blvd+E+Delano+MN+55328&z=13&output=embed",
      "featuredSpecial": "Mini Bag $6, Corn Dogs $6, and a 2 for $10 donut special while supplies last.",
      "phone": "(320) 555-1234"
    }
  }'::jsonb
)
on conflict (slug) do nothing;
