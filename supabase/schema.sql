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

create table if not exists public.email_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  first_name text null,
  created_at timestamptz not null default now()
);

create unique index if not exists email_signups_email_unique_idx
on public.email_signups (lower(email));

alter table public.email_signups enable row level security;

drop policy if exists "Allow public users to add email signups" on public.email_signups;

create policy "Allow public users to add email signups"
on public.email_signups
for insert
to anon, authenticated
with check (email = lower(email));

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
    },
    "events": [
      {
        "id": "1",
        "title": "Cash Wise Monday Stop",
        "location": "Hutchinson, MN",
        "date": "Every Monday",
        "time": "12:00 PM - 6:00 PM",
        "type": "Grocery Lot Pop-Up"
      },
      {
        "id": "2",
        "title": "County Fair Rotation",
        "location": "Central Minnesota",
        "date": "Summer Weekends",
        "time": "Posted Weekly",
        "type": "County Fair"
      },
      {
        "id": "3",
        "title": "Community Festival Nights",
        "location": "Around the Twin Cities and west-central Minnesota",
        "date": "Seasonal Pop-Ups",
        "time": "Afternoon + Evening",
        "type": "Festival"
      }
    ],
    "weeklySchedule": [
      {
        "id": "sunday",
        "day": "Sunday",
        "active": false,
        "title": "",
        "location": "",
        "address": "",
        "hours": "",
        "notes": "No scheduled stop"
      },
      {
        "id": "monday",
        "day": "Monday",
        "active": true,
        "title": "Cash Wise Monday Pop-Up",
        "location": "Hutchinson, MN",
        "address": "Cash Wise Parking Lot",
        "hours": "12:00 PM - 6:00 PM",
        "notes": "Mini Bag $6, Corn Dogs $6, 2 for $10 donut special"
      },
      {
        "id": "tuesday",
        "day": "Tuesday",
        "active": false,
        "title": "",
        "location": "",
        "address": "",
        "hours": "",
        "notes": "No scheduled stop"
      },
      {
        "id": "wednesday",
        "day": "Wednesday",
        "active": false,
        "title": "",
        "location": "",
        "address": "",
        "hours": "",
        "notes": "No scheduled stop"
      },
      {
        "id": "thursday",
        "day": "Thursday",
        "active": false,
        "title": "",
        "location": "",
        "address": "",
        "hours": "",
        "notes": "No scheduled stop"
      },
      {
        "id": "friday",
        "day": "Friday",
        "active": true,
        "title": "County Fair Rotation",
        "location": "Central Minnesota",
        "address": "Posted weekly",
        "hours": "Afternoon + Evening",
        "notes": "Watch social for the latest fair or festival stop"
      },
      {
        "id": "saturday",
        "day": "Saturday",
        "active": true,
        "title": "Community Festival Nights",
        "location": "Central Minnesota",
        "address": "Posted weekly",
        "hours": "Afternoon + Evening",
        "notes": "Watch social for the latest festival and weekend pop-up schedule"
      }
    ]
  }'::jsonb
)
on conflict (slug) do nothing;
