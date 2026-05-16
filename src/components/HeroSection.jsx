import { ArrowDownRight, CalendarDays, Clock3, MapPinned } from "lucide-react";

export function HeroSection({ hero, todayLocation }) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-14">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-donut-deep shadow-[0_35px_100px_rgba(76,43,24,0.32)]">
          <img
            src={hero.trailerImage}
            alt="Big Dave's Mini Donuts trailer"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="hero-night absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(33,18,12,0.84)_0%,rgba(33,18,12,0.72)_38%,rgba(33,18,12,0.18)_74%,rgba(33,18,12,0.45)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,217,111,0.28),transparent_70%)]" />

          <div className="relative grid min-h-[720px] gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:min-h-[760px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    <span className="inline-flex h-3 w-3 rounded-full bg-golden" />
                    Minnesota fair-food trailer
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-md">
                    <Clock3 className="h-4 w-4 text-golden-soft" />
                    {todayLocation.hours}
                  </div>
                </div>

                <div className="mt-5 inline-flex max-w-max rounded-[1.5rem] border border-dashed border-white/35 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                  <div>
                    <p className="font-display text-2xl leading-none text-golden-soft">Future Logo Area</p>
                    <p className="mt-1 text-sm text-white/74">Reserved for the official Big Dave's logo lockup.</p>
                  </div>
                </div>

                <h1 className="mt-6 max-w-xl font-display text-5xl leading-[0.92] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.34)] sm:text-6xl lg:text-7xl">
                  {hero.headline}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/84 sm:text-xl">
                  {hero.subheadline}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#find-us"
                    className="cta-shadow inline-flex items-center justify-center gap-2 rounded-full bg-golden px-6 py-4 text-base font-extrabold text-donut-deep transition duration-300 hover:-translate-y-1 hover:bg-golden-soft"
                  >
                    Find Us Today
                    <MapPinned className="h-5 w-5" />
                  </a>
                  <a
                    href="#events"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/10 px-6 py-4 text-base font-extrabold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/18"
                  >
                    Upcoming Events
                    <CalendarDays className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Today</p>
                  <p className="mt-2 font-display text-2xl leading-none">{todayLocation.venue}</p>
                </div>
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Hours</p>
                  <p className="mt-2 text-lg font-extrabold">{todayLocation.hours}</p>
                </div>
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Status</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-lg font-extrabold">
                    <span
                      className={`inline-flex h-3 w-3 rounded-full ${todayLocation.isOpen ? "bg-[#73d8a6]" : "bg-[#ff8a7d]"}`}
                    />
                    {todayLocation.isOpen ? "Open Now" : "Closed"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <div className="grid w-full gap-4 lg:ml-auto lg:max-w-[520px]">
                <div className="glass-card rounded-[1.8rem] p-4 text-donut">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-carnival-red">Find Big Dave Today</p>
                      <p className="mt-2 font-display text-3xl leading-none text-donut-deep">{todayLocation.venue}</p>
                    </div>
                    <div className="rounded-full bg-[#fff1cf] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-carnival-red">
                      Most Important
                    </div>
                  </div>
                  <p className="mt-4 text-base font-semibold leading-7 text-donut/78">{todayLocation.address}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={todayLocation.directionsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-carnival-red px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-carnival-red-deep"
                    >
                      Directions
                      <ArrowDownRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#find-us"
                      className="inline-flex items-center gap-2 rounded-full border border-donut/10 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-donut"
                    >
                      View Live Stop
                    </a>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-[#fff4de] shadow-[0_22px_60px_rgba(61,32,17,0.2)]">
                    <img
                      src={hero.featuredImage ?? hero.foodImage}
                      alt="Big Dave's featured fair food"
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(46,24,15,0.82))] p-5 text-white">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-golden-soft">Fresh Fair Favorites</p>
                      <p className="mt-2 font-display text-3xl leading-none">Hot mini donuts, corn dogs, and sweet summer extras.</p>
                    </div>
                  </div>

                  <div className="carnival-dots ticket-cut rounded-[1.8rem] bg-[#bf2d20] p-5 text-white shadow-[0_22px_60px_rgba(61,32,17,0.24)]">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-golden-soft">Featured Special</p>
                    <p className="mt-4 font-display text-[2.2rem] leading-[0.95]">{todayLocation.featuredSpecial}</p>
                    <p className="mt-5 text-sm font-semibold leading-6 text-white/80">
                      Built for quick walk-ups, family cravings, and summer-event snack runs.
                    </p>
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
