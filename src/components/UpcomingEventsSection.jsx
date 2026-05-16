import { CalendarRange, MapPinned, Store, TentTree } from "lucide-react";
import { publicImage } from "../lib/publicAsset";
import { SectionHeading } from "./SectionHeading";

export function UpcomingEventsSection({ weeklySchedule, promotions }) {
  const todayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(new Date());

  return (
    <section id="events" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="This Week's Stops"
          title="Where to find Big Dave from Sunday through Saturday."
          body="A simple weekly view makes it easier for families to check the trailer's next stop, today's hours, and whether a day is closed before they head out."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_60px_rgba(122,74,43,0.13)]">
            <div className="bg-[linear-gradient(135deg,#8f2218,#d64f24,#f1b130)] p-4">
              <img
                src={publicImage(promotions.image)}
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
            {weeklySchedule.map((day) => (
              <article
                key={day.id}
                className={`rounded-[1.75rem] p-5 shadow-[0_18px_55px_rgba(122,74,43,0.13)] ${
                  day.day === todayName ? "bg-[#fff0d6]" : "bg-[#fffaf2]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex rounded-full bg-[#ffe6b5] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-carnival-red">
                    {day.day}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-donut/60">
                    {day.active ? (
                      <>
                        <TentTree className="h-4 w-4 text-carnival-red" />
                        {day.day === todayName ? "Today" : "Scheduled"}
                      </>
                    ) : (
                      <>
                        <Store className="h-4 w-4 text-carnival-red" />
                        Closed
                      </>
                    )}
                  </div>
                </div>

                {day.active ? (
                  <>
                    <h3 className="mt-5 font-display text-3xl leading-none text-donut-deep">{day.title}</h3>
                    <div className="mt-5 grid gap-4 sm:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPinned className="mt-1 h-5 w-5 text-carnival-red" />
                          <div>
                            <p className="text-base font-semibold text-donut/82">{day.location}</p>
                            <p className="mt-1 text-sm text-donut/65">{day.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CalendarRange className="mt-1 h-5 w-5 text-carnival-red" />
                          <p className="text-base font-semibold text-donut/82">{day.hours}</p>
                        </div>
                      </div>
                      <div className="rounded-[1.35rem] bg-white/80 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-carnival-red">Notes</p>
                        <p className="mt-2 text-base font-semibold leading-7 text-donut/78">{day.notes}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="mt-5 font-display text-3xl leading-none text-donut-deep">Closed</h3>
                    <p className="mt-4 text-base font-semibold text-donut/72">
                      {day.notes || "No scheduled stop"}
                    </p>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
