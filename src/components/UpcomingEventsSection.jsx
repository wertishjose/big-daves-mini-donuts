import { CalendarRange, MapPinned, TentTree } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function UpcomingEventsSection({ events, promotions }) {
  return (
    <section id="events" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Upcoming Events"
          title="Catch the trailer at fairs, festivals, and grocery-lot pop-ups across Minnesota."
          body="This section mixes the next stops with a real event graphic so the page feels active, local, and clearly tied to real-world weekly movement."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(122,74,43,0.13)]">
            <div className="bg-[linear-gradient(135deg,#8f2218,#d64f24,#f1b130)] p-4">
              <img
                src={promotions.image}
                alt="Big Dave promotional event graphic"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-carnival-red">Promotions + Pop-Ups</p>
              <h3 className="mt-3 font-display text-4xl leading-none text-donut-deep">{promotions.title}</h3>
              <p className="mt-4 text-lg leading-8 text-donut/78">{promotions.body}</p>
            </div>
          </article>

          <div className="grid gap-5">
            {events.map((event) => (
              <article
                key={event.id}
                className="rounded-[1.75rem] bg-[#fffaf2] p-5 shadow-[0_18px_55px_rgba(122,74,43,0.13)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex rounded-full bg-[#ffe6b5] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-carnival-red">
                    {event.type}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-donut/60">
                    <TentTree className="h-4 w-4 text-carnival-red" />
                    Minnesota stop
                  </div>
                </div>
                <h3 className="mt-5 font-display text-3xl leading-none text-donut-deep">{event.title}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <MapPinned className="mt-1 h-5 w-5 text-carnival-red" />
                    <p className="text-base font-semibold text-donut/82">{event.location}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarRange className="mt-1 h-5 w-5 text-carnival-red" />
                    <p className="text-base font-semibold text-donut/82">
                      {event.date}
                      <span className="block text-sm font-medium text-donut/65">{event.time}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
