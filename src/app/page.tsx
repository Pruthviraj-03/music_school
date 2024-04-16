import HeroSection from "../Components/HeroSection";
import FeaturedCourses from "../Components/FeaturedCourses";
import WhyChooseUs from "../Components/WhyChooseUs";
import MusicSchoolTestimonials from "../Components/TestimonialCards";
import UpcomingWebinars from "../Components/UpcomingWebinars";
import Instructors from "../Components/Instructors";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </div>
  );
}
