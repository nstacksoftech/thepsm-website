import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { BusinessesSlider } from './BusinessesSlider';
import { TrackingSection } from './TrackingSection';
import { CtaBanner } from './CtaBanner';
import { FeaturesSection } from './FeaturesSection';
import { AboutSection } from './AboutSection';
import { TestimonialsSection } from './TestimonialsSection';
import { BlogSection } from './BlogSection';
import { ContactSection } from './ContactSection';
import { SiteFooter } from './SiteFooter';
import { FloatingActions } from './FloatingActions';

export function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BusinessesSlider />
        <TrackingSection />
        <CtaBanner />
        <FeaturesSection />
        <AboutSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
