import { Camera, MapPinned, PhoneCall } from "lucide-react";
import { scrollToSection } from "../lib/scrollToSection";

export function StickyMobileBar({ phone = "(320) 555-1234" }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-donut/10 bg-[#fff7ea]/95 px-4 py-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => scrollToSection("find-us")}
          className="inline-flex flex-col items-center justify-center rounded-2xl bg-white px-3 py-3 text-xs font-black uppercase tracking-[0.14em] text-donut shadow-lg shadow-amber-950/10"
        >
          <MapPinned className="mb-1 h-5 w-5 text-carnival-red" />
          Find Us
        </button>
        <a href={`tel:${phone.replaceAll(/[^0-9+]/g, "")}`} className="inline-flex flex-col items-center justify-center rounded-2xl bg-carnival-red px-3 py-3 text-xs font-black uppercase tracking-[0.14em] text-white shadow-lg shadow-red-900/20">
          <PhoneCall className="mb-1 h-5 w-5" />
          Call
        </a>
        <button
          type="button"
          onClick={() => scrollToSection("gallery")}
          className="inline-flex flex-col items-center justify-center rounded-2xl bg-golden px-3 py-3 text-xs font-black uppercase tracking-[0.14em] text-donut-deep shadow-lg shadow-amber-800/20"
        >
          <Camera className="mb-1 h-5 w-5" />
          Gallery
        </button>
      </div>
    </div>
  );
}
