import { CalendarRange, Megaphone, Sparkles, TentTree } from "lucide-react";
import { publicImage } from "../lib/publicAsset";
import { BrandLogo } from "./BrandLogo";
import { SectionHeading } from "./SectionHeading";

export function UpcomingEventsSection({ typicalSchedule, bookingTypes, promotions }) {
  return (
    <section id="events" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Typical Schedule"
          title={typicalSchedule.title}
          body={typicalSchedule.body}
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(122,74,43,0.13)]">
            <div className="relative bg-[linear-gradient(135deg,#8f2218,#d64f24,#f1b130)] p-4">
              <img
                src={publicImage(promotions.image)}
                alt="Big Dave promotional event graphic"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-7 right-7 hidden rounded-[1.1rem] bg-white/92 p-2 shadow-[0_16px_40px_rgba(61,32,17,0.24)] sm:block">
                <BrandLogo
                  variant="miniDonutsToday"
                  className="h-16 w-auto object-contain lg:h-20"
                  alt="Mini donuts today sign graphic"
                />
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-carnival-red">Book Us For Your Event</p>
              <h3 className="mt-3 font-display text-4xl leading-none text-donut-deep">{promotions.title}</h3>
              <p className="mt-4 text-lg leading-8 text-donut/78">{promotions.body}</p>
            </div>
          </article>

          <div className="grid gap-5">
            <article className="rounded-[1.75rem] bg-[#fffaf2] p-5 shadow-[0_18px_55px_rgba(122,74,43,0.13)]">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-donut/60">
                <CalendarRange className="h-4 w-4 text-carnival-red" />
                Seasonal Rhythm
              </div>
              <div className="mt-5 grid gap-4">
                {typicalSchedule.items.map((item) => (
                  <div key={item.id} className="rounded-[1.35rem] bg-white/85 p-4">
                    <p className="font-display text-2xl leading-none text-donut-deep">{item.title}</p>
                    <p className="mt-3 text-base font-semibold leading-7 text-donut/76">{item.body}</p>
                  </div>
                ))}
              </div>
            </article>

            <article id="book-us" className="rounded-[1.75rem] bg-[#fff0d6] p-5 shadow-[0_18px_55px_rgba(122,74,43,0.13)]">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-donut/60">
                <Megaphone className="h-4 w-4 text-carnival-red" />
                Booking Highlights
              </div>

              <h3 className="mt-5 font-display text-3xl leading-none text-donut-deep">
                Available for public events and private bookings.
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {bookingTypes.map((type) => (
                  <div key={type} className="rounded-[1.35rem] bg-white/85 p-4">
                    <div className="flex items-start gap-3">
                      <TentTree className="mt-1 h-5 w-5 text-carnival-red" />
                      <p className="text-base font-semibold text-donut/82">{type}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-[1.35rem] bg-white/75 p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-carnival-red" />
                  <p className="text-base font-semibold leading-7 text-donut/78">
                    Reach out to ask about availability, booking details, and the best fit for your event.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
