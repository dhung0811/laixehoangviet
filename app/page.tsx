import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValuesSection from "@/components/ValuesSection";
import TimelineSection from "@/components/TimelineSection";
import CoursesSection from "@/components/CoursesSection";
import NewsBenefitsSection from "@/components/NewsBenefitsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <TimelineSection />
      <CoursesSection />
      <NewsBenefitsSection />
      <GallerySection />
      <CTASection />
      <Footer />
    </main>
  );
}
