import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function TestimonialsSection({ testimonials }) {
  const normalizedTestimonials = testimonials.map((review, index) =>
    typeof review === "string"
      ? {
          id: `legacy-review-${index}`,
          author: "Big Dave's customer",
          quote: review,
          featured: index === 0,
        }
      : review,
  );

  const featuredReview =
    normalizedTestimonials.find((review) => review.featured) ?? normalizedTestimonials[0];
  const remainingReviews = normalizedTestimonials.filter((review) => review.id !== featuredReview?.id);

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Reviews"
          body="Local customers sharing their favorite stops, snacks, and sweet treats from the trailer."
          align="center"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#fff6e7,#fff0cf)] p-6 shadow-[0_26px_70px_rgba(122,74,43,0.14)] sm:p-8">
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-[#ffd36d]/35 blur-3xl" />
            <div className="relative">
              <div className="mb-5 flex items-center gap-2 text-carnival-red">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <div className="inline-flex rounded-full bg-white px-3 py-3 text-carnival-red shadow-md">
                <Quote className="h-5 w-5" />
              </div>
              <p className="mt-5 max-w-2xl font-display text-4xl leading-[1.02] text-donut-deep sm:text-5xl">
                “It's always a treat when he comes to town.”
              </p>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-donut/80">{featuredReview.quote}</p>
              <p className="mt-6 text-sm font-black uppercase tracking-[0.2em] text-carnival-red">{featuredReview.author}</p>
            </div>
          </article>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {remainingReviews.map((review) => (
              <article
                key={review.id}
                className="rounded-[1.75rem] bg-white p-5 shadow-[0_20px_50px_rgba(122,74,43,0.11)]"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-1 text-carnival-red">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div className="rounded-full bg-[#fff1cf] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-carnival-red">
                    Recommended
                  </div>
                </div>
                <p className="text-lg font-semibold leading-8 text-donut">{review.quote}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-donut/55">{review.author}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
