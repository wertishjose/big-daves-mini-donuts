import { CheckCircle2, LogOut, Sparkles } from "lucide-react";

export function AdminDashboard({
  saveMessage,
  saveState,
  dataSource,
  onSignOut,
}) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#8f2218,#c53d23_55%,#f2b12d)] p-[1px] shadow-[0_30px_80px_rgba(122,74,43,0.2)]">
        <div className="rounded-[calc(2rem-1px)] bg-[#fff8ee] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-carnival-red">Admin Dashboard</p>
              <h1 className="mt-3 font-display text-4xl leading-none text-donut-deep sm:text-5xl">
                Low-maintenance site mode
              </h1>
              <p className="mt-3 text-base leading-7 text-donut/75">
                This website has been simplified so it stays accurate even when it is not updated often. Daily location, hours, open status, and weekly stop management are now hidden from the public experience.
              </p>
            </div>

            <button
              type="button"
              onClick={onSignOut}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-donut/10 bg-white px-4 py-2 text-sm font-extrabold text-donut shadow-[0_8px_18px_rgba(122,74,43,0.08)]"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </button>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-donut shadow-[0_8px_18px_rgba(122,74,43,0.08)]">
            <Sparkles className="h-4 w-4 text-carnival-red" />
            {dataSource === "supabase" ? "Connected to Supabase" : "Using local fallback mode"}
          </div>

          <div
            className={`mt-5 flex items-start gap-3 rounded-[1.5rem] px-4 py-4 text-sm font-semibold ${
              saveState === "error" ? "bg-[#fde7e2] text-carnival-red-deep" : "bg-[#fff3d8] text-donut"
            }`}
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p>{saveMessage}</p>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-[1.5rem] bg-cream p-4">
              <p className="text-base font-black text-donut-deep">What changed</p>
              <p className="mt-2 text-base leading-7 text-donut/75">
                The homepage now focuses on evergreen information: menu favorites, photo gallery, where Big Dave typically serves, the typical seasonal schedule, and event booking details.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-cream p-4">
              <p className="text-base font-black text-donut-deep">Why this helps</p>
              <p className="mt-2 text-base leading-7 text-donut/75">
                Customers get a professional, accurate site even if nobody updates it for weeks or months, and event organizers can still understand what Big Dave offers and where the trailer usually goes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
