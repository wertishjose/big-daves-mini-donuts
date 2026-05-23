import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="px-4 pb-28 pt-8 sm:px-6 lg:px-8 lg:pb-10">
      <div className="section-shell rounded-[2rem] bg-[#fff5e1] px-5 py-6 text-sm text-donut/75 shadow-[0_12px_40px_rgba(122,74,43,0.08)] sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
          <div className="inline-flex max-w-max rounded-full bg-white p-2 shadow-[0_12px_28px_rgba(122,74,43,0.12)]">
            <BrandLogo className="h-20 w-auto rounded-full object-contain" />
          </div>
          <div>
            <p className="font-display text-2xl text-donut-deep">Big Dave's Mini Donuts</p>
            <p className="mt-2 max-w-2xl text-base leading-7">
              Warm fair favorites, real Minnesota pop-ups, and a site designed to help families quickly find the trailer, the hours, and the next fresh batch.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
