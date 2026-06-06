import { ArrowDownRight, CalendarDays, Camera, TentTree } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { publicImage } from "../lib/publicAsset";
import { scrollToSection } from "../lib/scrollToSection";

export function HeroSection({ hero }) {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pb-14">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-donut-deep shadow-[0_35px_100px_rgba(76,43,24,0.32)]">
          <img
            src={publicImage(hero.trailerImage)}
            alt="Big Dave's Mini Donuts trailer"
            className="absolute inset-0 h-full w-full object-cover object-[52%_center] sm:object-[50%_center] lg:object-[50%_34%]"
          />
          <div className="hero-night absolute inset-0" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(25,13,9,0.38)_0%,rgba(25,13,9,0.76)_100%)] sm:bg-[linear-gradient(180deg,rgba(25,13,9,0.28)_0%,rgba(25,13,9,0.64)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,10,7,0.96)_0%,rgba(22,10,7,0.86)_42%,rgba(22,10,7,0.44)_74%,rgba(22,10,7,0.28)_100%)] lg:bg-[linear-gradient(110deg,rgba(33,18,12,0.86)_0%,rgba(33,18,12,0.7)_34%,rgba(33,18,12,0.18)_70%,rgba(33,18,12,0.36)_100%)]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(255,217,111,0.28),transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(26,13,8,0.38))]" />

          <div className="relative grid min-h-[600px] gap-8 px-5 py-6 sm:min-h-[640px] sm:px-8 sm:py-8 lg:min-h-[660px] lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="font-display text-4xl leading-none tracking-[0.03em] text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.38)] sm:text-5xl lg:text-[3.6rem]">
                  Big Dave&apos;s Mini Donuts
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                    <span className="inline-flex h-3 w-3 rounded-full bg-golden" />
                    Minnesota event trailer
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/85 backdrop-blur-md">
                    <TentTree className="h-4 w-4 text-golden-soft" />
                    Fairs, festivals, and private bookings
                  </div>
                </div>

                <div className="mt-5 inline-flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.98),rgba(255,247,231,0.9)_62%,rgba(255,233,189,0.74)_100%)] p-0 text-donut shadow-[0_22px_52px_rgba(0,0,0,0.22)] ring-1 ring-white/20 backdrop-blur-md sm:h-42 sm:w-42 lg:h-46 lg:w-46">
                  <BrandLogo
                    className="h-[84%] w-[84%] shrink-0 object-contain object-center"
                    alt="Big Dave's Mini Donuts primary logo"
                  />
                </div>

                <div className="mt-6 max-w-2xl rounded-[2rem] bg-[linear-gradient(135deg,rgba(24,11,8,0.82),rgba(24,11,8,0.58)_56%,rgba(24,11,8,0.28)_100%)] px-5 py-5 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-[6px] sm:px-6 sm:py-6">
                  <h1 className="max-w-xl font-display text-5xl leading-[0.92] text-white drop-shadow-[0_14px_36px_rgba(0,0,0,0.5)] sm:text-6xl lg:text-7xl">
                    {hero.headline}
                  </h1>
                  <p className="mt-5 max-w-lg text-lg leading-8 text-white/92 drop-shadow-[0_8px_24px_rgba(0,0,0,0.34)] sm:text-xl">
                    {hero.subheadline}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => scrollToSection("gallery")}
                    className="cta-shadow inline-flex items-center justify-center gap-2 rounded-full bg-golden px-6 py-4 text-base font-extrabold text-donut-deep transition duration-300 hover:-translate-y-1 hover:bg-golden-soft"
                  >
                    View Gallery
                    <Camera className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToSection("book-us")}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/10 px-6 py-4 text-base font-extrabold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/18"
                  >
                    Book an Event
                    <CalendarDays className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Menu</p>
                  <p className="mt-2 font-display text-2xl leading-none">Mini Donuts</p>
                </div>
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Snack Favorite</p>
                  <p className="mt-2 text-lg font-extrabold">Corn Dogs</p>
                </div>
                <div className="rounded-[1.6rem] bg-white/12 p-4 text-white backdrop-blur-lg soft-ring">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-golden-soft">Sweet Extra</p>
                  <p className="mt-2 text-lg font-extrabold">Cotton Candy</p>
                </div>
              </div>
            </div>

            <div className="flex items-end">
              <div className="grid w-full gap-4 lg:ml-auto lg:max-w-[520px]">
                <div className="glass-card rounded-[1.8rem] p-4 text-donut">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-carnival-red">Where You Can Find Us</p>
                      <p className="mt-2 font-display text-3xl leading-none text-donut-deep">Serving seasonal events across Minnesota.</p>
                    </div>
                    <div className="rounded-full bg-[#fff1cf] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-carnival-red">
                      Evergreen Info
                    </div>
                  </div>
                  <p className="mt-4 text-base font-semibold leading-7 text-donut/78">
                    Big Dave&apos;s Mini Donuts typically serves fairs, festivals, school events, church events, community celebrations, and private parties.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => scrollToSection("find-us")}
                      className="inline-flex items-center gap-2 rounded-full bg-carnival-red px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-1 hover:bg-carnival-red-deep"
                    >
                      Find Us
                      <ArrowDownRight className="h-4 w-4 text-white" />
                    </button>
                    <button
                      type="button"
                      onClick={() => scrollToSection("events")}
                      className="inline-flex items-center gap-2 rounded-full border border-donut/10 bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-donut"
                    >
                      Typical Schedule
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-[#fff4de] shadow-[0_22px_60px_rgba(61,32,17,0.2)]">
                    <img
                      src={publicImage(hero.featuredImage ?? hero.foodImage)}
                      alt="Big Dave's featured food"
                      className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,14,9,0.08)_0%,rgba(28,14,9,0.18)_38%,rgba(28,14,9,0.86)_72%,rgba(28,14,9,0.94)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5 pb-10 text-white sm:pb-8 lg:bottom-48 lg:pb-8 xl:bottom-52 2xl:bottom-56">
                      <div className="max-w-[18rem] rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(24,11,8,0.78),rgba(24,11,8,0.54)_62%,rgba(24,11,8,0.28)_100%)] px-4 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.24)] backdrop-blur-[4px] lg:bg-[linear-gradient(135deg,rgba(20,9,6,0.88),rgba(20,9,6,0.68)_58%,rgba(20,9,6,0.42)_100%)] lg:shadow-[0_22px_48px_rgba(0,0,0,0.28)] lg:backdrop-blur-[6px] lg:py-3.5">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-golden-soft">Fresh Favorites</p>
                        <p className="mt-2 font-display text-3xl leading-none drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)] lg:mt-1.5">
                          Hot mini donuts, corn dogs, and sweet extras.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="carnival-dots ticket-cut rounded-[1.8rem] bg-[#bf2d20] p-5 text-white shadow-[0_22px_60px_rgba(61,32,17,0.24)]">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-golden-soft">Book the Trailer</p>
                    <p className="mt-4 font-display text-[2.2rem] leading-[0.95]">Festivals, school events, church events, private parties, and more.</p>
                    <p className="mt-5 text-sm font-semibold leading-6 text-white/80">
                      A simple, reliable site for families and event organizers to learn what Big Dave serves and where the trailer typically rolls.
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
