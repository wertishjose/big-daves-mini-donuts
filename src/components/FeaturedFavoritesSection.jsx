import { BadgeDollarSign } from "lucide-react";
import { publicImage } from "../lib/publicAsset";
import { SectionHeading } from "./SectionHeading";

export function FeaturedFavoritesSection({ items }) {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Featured Favorites"
          title="Real trailer favorites styled to feel warm, local, and impossible to scroll past."
          body="Simple favorites, fresh-made treats, and crowd-pleasing snacks served hot and ready."
        />

        <div className="mt-8 space-y-5">
          {items.map((item, index) => (
            <article
              key={item.id}
              className={`grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_65px_rgba(122,74,43,0.14)] lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className={`relative min-h-[290px] bg-gradient-to-br ${item.accent} p-4 sm:p-5`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_40%)]" />
                <img
                  src={publicImage(item.image)}
                  alt={item.name}
                  className="relative h-full w-full rounded-[1.5rem] object-cover object-center shadow-[0_22px_45px_rgba(76,43,24,0.2)] transition duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7">
                <div className="inline-flex max-w-max items-center gap-2 rounded-full bg-[#fff2d7] px-4 py-2 text-sm font-black uppercase tracking-[0.18em] text-carnival-red">
                  <BadgeDollarSign className="h-4 w-4" />
                  Fair Favorite
                </div>
                <h3 className="mt-5 font-display text-4xl leading-none text-donut-deep sm:text-5xl">{item.name}</h3>
                <p className="mt-4 max-w-lg text-lg leading-8 text-donut/78">{item.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <div className="rounded-[1.4rem] bg-carnival-red px-4 py-3 text-white shadow-[0_16px_30px_rgba(183,50,36,0.22)]">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-golden-soft">Price</p>
                    <p className="mt-1 font-display text-3xl leading-none">{item.price}</p>
                  </div>
                  <div className="rounded-[1.4rem] bg-cream px-4 py-3 text-donut shadow-[0_12px_24px_rgba(122,74,43,0.08)]">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-carnival-red">Special</p>
                    <p className="mt-1 text-lg font-extrabold">{item.bonus}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
