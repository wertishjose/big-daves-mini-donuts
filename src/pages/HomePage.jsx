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
  const { siteContent, loading } = useSiteContent();

  return (
    <main className="pb-10">
      <HeroSection hero={siteContent.hero} todayLocation={siteContent.todayLocation} />
      <PhotoGallerySection />
      <LiveLocationSection location={siteContent.todayLocation} />
      <FeaturedFavoritesSection items={siteContent.featuredItems} />
      <TestimonialsSection testimonials={siteContent.testimonials} />
      <UpcomingEventsSection weeklySchedule={siteContent.weeklySchedule} promotions={siteContent.promotions} />
      <DonutAlertsSection />
      <Footer />
      <StickyMobileBar
        directionsUrl={siteContent.todayLocation.directionsUrl}
        phone={siteContent.todayLocation.phone}
      />
      {loading ? (
        <div className="pointer-events-none fixed right-4 top-4 z-40 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-donut shadow-lg">
          Loading latest location...
        </div>
      ) : null}
    </main>
  );
}
