import { DonutAlertsSection } from "../components/DonutAlertsSection";
import { FeaturedFavoritesSection } from "../components/FeaturedFavoritesSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { LiveLocationSection } from "../components/LiveLocationSection";
import { PhotoGallerySection } from "../components/PhotoGallerySection";
import { StickyMobileBar } from "../components/StickyMobileBar";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { UpcomingEventsSection } from "../components/UpcomingEventsSection";
import { useSiteContent } from "../hooks/useSiteContent";

export function HomePage() {
  const { siteContent } = useSiteContent();

  return (
    <main className="pb-10">
      <HeroSection hero={siteContent.hero} />
      <PhotoGallerySection />
      <LiveLocationSection content={siteContent.whereYouCanFindUs} phone={siteContent.todayLocation.phone} />
      <FeaturedFavoritesSection items={siteContent.featuredItems} />
      <TestimonialsSection testimonials={siteContent.testimonials} />
      <UpcomingEventsSection
        typicalSchedule={siteContent.typicalSchedule}
        bookingTypes={siteContent.bookingTypes}
        promotions={siteContent.promotions}
      />
      <DonutAlertsSection />
      <Footer />
      <StickyMobileBar phone={siteContent.todayLocation.phone} />
    </main>
  );
}
