import { Clock3, MapPin, Navigation, PhoneCall, Store } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function LiveLocationSection({ location }) {
  return (
    <section id="find-us" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#a12418,#d44b22_55%,#f0a427)] px-5 py-8 text-white shadow-[0_30px_80px_rgba(143,34,24,0.32)] sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,111,0.24),transparent_30%)]" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <SectionHeading
              eyebrow="Find Big Dave Today 🍩"
              title="The fastest way to figure out where the trailer is right now."
              body="Built as the operational centerpiece of the site, with today's stop, current hours, live status, and one-tap directions all in the same place."
              tone="light"
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="glass-card rounded-[1.9rem] p-5 text-donut sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.24em] text-carnival-red">Current Location</p>
                    <h3 className="mt-3 font-display text-4xl leading-none text-donut-deep">{location.venue}</h3>
                  </div>
                  <div
                    className={`rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.16em] ${
                      location.isOpen ? "bg-[#dff7ea] text-leaf" : "bg-[#fde2df] text-carnival-red-deep"
                    }`}
                  >
                    {location.isOpen ? "Open Now" : "Closed"}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-[1.5rem] bg-cream p-4">
                    <div className="flex gap-3">
                      <MapPin className="mt-1 h-5 w-5 text-carnival-red" />
                      <div>
                        <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-carnival-red/80">Address</p>
                        <p className="mt-1 text-base font-semibold leading-7 text-donut">{location.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-cream p-4">
                      <div className="flex gap-3">
                        <Clock3 className="mt-1 h-5 w-5 text-carnival-red" />
                        <div>
                          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-carnival-red/80">Operating Hours</p>
                          <p className="mt-1 text-base font-semibold text-donut">{location.hours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] bg-cream p-4">
                      <div className="flex gap-3">
                        <Store className="mt-1 h-5 w-5 text-carnival-red" />
                        <div>
                          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-carnival-red/80">Today's Special</p>
                          <p className="mt-1 text-base font-semibold text-donut">{location.featuredSpecial}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={location.directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-carnival-red px-5 py-4 text-base font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-carnival-red-deep"
                  >
                    Get Directions
                    <Navigation className="h-5 w-5" />
                  </a>
                  <a
                    href={`tel:${location.phone?.replaceAll(/[^0-9+]/g, "") ?? "+13205551234"}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-donut/10 bg-white px-5 py-4 text-base font-extrabold text-donut transition duration-300 hover:-translate-y-1"
                  >
                    Call Trailer
                    <PhoneCall className="h-5 w-5 text-carnival-red" />
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.9rem] border border-white/22 bg-white shadow-2xl shadow-black/10">
                <iframe
                  title="Big Dave location map"
                  src={location.mapEmbedUrl}
                  className="h-[360px] w-full border-0 sm:h-[440px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
