import { BellRing, Send } from "lucide-react";

export function DonutAlertsSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#4c2b18,#7a4a2b_42%,#b73224_88%)] px-5 py-8 text-white shadow-[0_24px_70px_rgba(76,43,24,0.28)] sm:px-8 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex rounded-full bg-white/12 p-3 text-golden-soft backdrop-blur-md">
                <BellRing className="h-6 w-6" />
              </div>
              <p className="mt-4 font-display text-5xl leading-none">Get Donut Alerts 🍩</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-white/78">
                Get notified when Big Dave comes to your town plus occasional specials and event updates.
              </p>
            </div>
            <form className="rounded-[1.75rem] bg-white/10 p-4 backdrop-blur-md sm:p-5">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-[0.22em] text-golden-soft">
                Email Address
              </label>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-14 flex-1 rounded-full border border-white/15 bg-white px-5 text-base font-semibold text-donut outline-none ring-0 placeholder:text-donut/40"
                />
                <button
                  type="button"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-golden px-6 text-base font-extrabold text-donut-deep transition duration-300 hover:-translate-y-1 hover:bg-golden-soft"
                >
                  Sign Up
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-sm text-white/70">Signup is a front-end placeholder for V1.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
