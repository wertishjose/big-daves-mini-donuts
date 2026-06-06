import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryPhotos } from "../data/galleryPhotos";
import { publicImage } from "../lib/publicAsset";
import { SectionHeading } from "./SectionHeading";

function tileClassName(index) {
  if (index === 0) {
    return "col-span-2 row-span-2";
  }

  if (index === 5 || index === 10) {
    return "sm:col-span-2";
  }

  return "";
}

export function PhotoGallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    if (!selectedPhoto) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto]);

  return (
    <>
      <section id="gallery" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Fresh looks at the trailer, the donuts, and the crowd favorites."
            body="A visual gallery of Big Dave's Mini Donuts so visitors can get a feel for the trailer, the food, and the atmosphere before they stop by."
          />

          <div className="mt-8 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,248,238,0.96),rgba(255,239,215,0.92))] p-4 shadow-[0_24px_70px_rgba(122,74,43,0.12)] sm:p-5 lg:p-6">
            <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 lg:auto-rows-[220px] lg:grid-cols-4 lg:gap-4">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group relative overflow-hidden rounded-[1.5rem] bg-white text-left shadow-[0_14px_35px_rgba(61,32,17,0.12)] transition duration-300 hover:-translate-y-1 ${tileClassName(index)}`}
                >
                  <img
                    src={publicImage(photo.src)}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(26,13,8,0.28))]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedPhoto ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(23,12,8,0.88)] p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/92 text-donut shadow-lg"
              aria-label="Close gallery image"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
              <img
                src={publicImage(selectedPhoto.src)}
                alt={selectedPhoto.alt}
                className="max-h-[82vh] w-full object-contain bg-[#fff9ef]"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
