import { CheckCircle2, LogOut, MapPin, Save, Sparkles } from "lucide-react";

export function AdminDashboard({
  siteContent,
  setSiteContent,
  onSave,
  saving,
  saveMessage,
  saveState,
  dataSource,
  onSignOut,
}) {
  const updateTodayLocation = (field, value) => {
    setSiteContent((current) => ({
      ...current,
      todayLocation: {
        ...current.todayLocation,
        [field]: value,
      },
    }));
  };

  const primaryPopupEvent =
    siteContent.events?.find((event) => event.id === "1") ?? siteContent.events?.[0] ?? null;

  const updatePrimaryPopupLocation = (value) => {
    setSiteContent((current) => {
      const existingEvents = current.events?.length ? current.events : [];

      if (!existingEvents.length) {
        return current;
      }

      return {
        ...current,
        events: existingEvents.map((event, index) => {
          const isPrimaryPopup = event.id === "1" || (!existingEvents.some((item) => item.id === "1") && index === 0);

          return isPrimaryPopup
            ? {
                ...event,
                location: value,
              }
            : event;
        }),
      };
    });
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#8f2218,#c53d23_55%,#f2b12d)] p-[1px] shadow-[0_30px_80px_rgba(122,74,43,0.2)]">
        <div className="rounded-[calc(2rem-1px)] bg-[#fff8ee] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-carnival-red">Update Today's Business Status</p>
              <h1 className="mt-3 font-display text-4xl leading-none text-donut-deep sm:text-5xl">
                Make today's stop easy to find.
              </h1>
              <p className="mt-3 text-base leading-7 text-donut/75">
                Quick update form for the live location, hours, open status, and today's special.
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
              saveState === "success"
                ? "bg-[#e8f8ef] text-leaf"
                : saveState === "error"
                  ? "bg-[#fde7e2] text-carnival-red-deep"
                  : "bg-[#fff3d8] text-donut"
            }`}
          >
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p>{saveMessage}</p>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              onSave();
            }}
          >
            <label className="block">
              <span className="text-base font-black text-donut-deep">Current Location</span>
              <input
                value={siteContent.todayLocation.venue}
                onChange={(e) => updateTodayLocation("venue", e.target.value)}
                className="mt-2 h-14 w-full rounded-[1.35rem] border border-donut/10 bg-cream px-4 text-base font-semibold text-donut outline-none transition focus:border-carnival-red/40 focus:bg-white"
                placeholder="Ex: Cash Wise in Delano"
              />
            </label>

            <label className="block">
              <span className="text-base font-black text-donut-deep">Address</span>
              <div className="relative mt-2">
                <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-carnival-red" />
                <input
                  value={siteContent.todayLocation.address}
                  onChange={(e) => updateTodayLocation("address", e.target.value)}
                  className="h-14 w-full rounded-[1.35rem] border border-donut/10 bg-cream pl-12 pr-4 text-base font-semibold text-donut outline-none transition focus:border-carnival-red/40 focus:bg-white"
                  placeholder="Street address"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-base font-black text-donut-deep">Hours</span>
              <input
                value={siteContent.todayLocation.hours}
                onChange={(e) => updateTodayLocation("hours", e.target.value)}
                className="mt-2 h-14 w-full rounded-[1.35rem] border border-donut/10 bg-cream px-4 text-base font-semibold text-donut outline-none transition focus:border-carnival-red/40 focus:bg-white"
                placeholder="Ex: 12:00 PM - 6:00 PM"
              />
            </label>

            <label className="flex items-center justify-between gap-4 rounded-[1.5rem] bg-[#fff2db] px-4 py-4">
              <div>
                <p className="text-base font-black text-donut-deep">OPEN NOW</p>
                <p className="mt-1 text-sm text-donut/70">Turn this on when the trailer is serving.</p>
              </div>
              <button
                type="button"
                onClick={() => updateTodayLocation("isOpen", !siteContent.todayLocation.isOpen)}
                aria-pressed={siteContent.todayLocation.isOpen}
                className={`relative inline-flex h-9 w-16 shrink-0 items-center rounded-full p-1 transition ${
                  siteContent.todayLocation.isOpen ? "bg-leaf" : "bg-carnival-red/35"
                }`}
              >
                <span
                  className={`h-7 w-7 rounded-full bg-white shadow-md transition ${
                    siteContent.todayLocation.isOpen ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
            </label>

            <label className="block">
              <span className="text-base font-black text-donut-deep">Featured Special</span>
              <input
                value={siteContent.todayLocation.featuredSpecial}
                onChange={(e) => updateTodayLocation("featuredSpecial", e.target.value)}
                className="mt-2 h-14 w-full rounded-[1.35rem] border border-donut/10 bg-cream px-4 text-base font-semibold text-donut outline-none transition focus:border-carnival-red/40 focus:bg-white"
                placeholder="Ex: 2 for $10 mini donut special"
              />
            </label>

            <label className="block">
              <span className="text-base font-black text-donut-deep">Pop-Up Location</span>
              <input
                value={primaryPopupEvent?.location ?? ""}
                onChange={(e) => updatePrimaryPopupLocation(e.target.value)}
                className="mt-2 h-14 w-full rounded-[1.35rem] border border-donut/10 bg-cream px-4 text-base font-semibold text-donut outline-none transition focus:border-carnival-red/40 focus:bg-white"
                placeholder="Ex: Hutchinson, MN"
              />
            </label>

            <button
              type="submit"
              disabled={saving}
              className="mt-2 inline-flex h-15 w-full items-center justify-center gap-2 rounded-full bg-carnival-red text-base font-extrabold text-white shadow-[0_18px_35px_rgba(183,50,36,0.25)] transition hover:bg-carnival-red-deep disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save className="h-5 w-5" />
              {saving ? "Saving Changes..." : "Save Changes"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
