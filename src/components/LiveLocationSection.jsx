import { MapPin, PhoneCall, TentTree, Ticket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function LiveLocationSection({ content, phone = "(320) 555-1234" }) {
  return (
    <section id="find-us" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#a12418,#d44b22_55%,#f0a427)] px-5 py-8 text-white shadow-[0_30px_80px_rgba(143,34,24,0.32)] sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,217,111,0.24),transparent_30%)]" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <SectionHeading eyebrow="Where You Can Find Us" title={content.title} body={content.body} tone="light" />

            <div className="mt-8 grid gap-5 lg:grid-cols-[0.94fr_1.06fr]">
              <div className="glass-card rounded-[1.9rem] p-5 text-donut sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-carnival-red">Areas We Commonly Serve</p>
                <div className="mt-5 space-y-4">
                  {content.areas.map((area) => (
                    <div key={area} className="rounded-[1.5rem] bg-cream p-4">
                      <div className="flex gap-3">
                        <MapPin className="mt-1 h-5 w-5 text-carnival-red" />
                        <p className="text-base font-semibold leading-7 text-donut">{area}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={`tel:${phone.replaceAll(/[^0-9+]/g, "")}`}
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-carnival-red px-5 py-4 text-base font-extrabold text-white transition duration-300 hover:-translate-y-1 hover:bg-carnival-red-deep"
                >
                  Call for Booking Info
                  <PhoneCall className="h-5 w-5" />
                </a>
              </div>

              <div className="rounded-[1.9rem] border border-white/22 bg-white/94 p-5 text-donut shadow-2xl shadow-black/10 sm:p-6">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-carnival-red">Typical Stops</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {content.eventTypes.map((type) => (
                    <div key={type} className="rounded-[1.5rem] bg-[#fff7ea] p-4">
                      <div className="flex items-start gap-3">
                        <TentTree className="mt-1 h-5 w-5 text-carnival-red" />
                        <div>
                          <p className="text-base font-semibold text-donut">{type}</p>
                          <p className="mt-1 text-sm leading-6 text-donut/68">
                            Availability varies by season, event calendar, and private bookings.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-[1.5rem] bg-[#fff0d6] p-4">
                  <div className="flex items-start gap-3">
                    <Ticket className="mt-1 h-5 w-5 text-carnival-red" />
                    <div>
                      <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-carnival-red/80">Good To Know</p>
                      <p className="mt-2 text-base font-semibold leading-7 text-donut">
                        This site is meant to stay useful year-round, so it highlights the places and event types Big Dave typically serves instead of relying on daily updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
