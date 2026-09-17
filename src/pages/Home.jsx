import BestSeller from "../components/BestSeller";
import FeaturedProduct from "../components/FeaturedProduct";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import PressMarquee from "../components/PressMarquee";
import Footer from "../components/Footer";
import SkinAnalysis from "../components/SkinAnalysis";

function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <FeaturedProduct />
      <SkinAnalysis />
      <PressMarquee />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;