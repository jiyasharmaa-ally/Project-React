import BestSeller from "../components/BestSeller";
import FeaturedProduct from "../components/FeaturedProduct";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import AsSeenOn from "../components/AsSeenOn";
import SkinAnalysis from "../components/SkinAnalysis";

function Home() {
  return (
    <>
      <Hero />
      <BestSeller />
      <FeaturedProduct />
      <SkinAnalysis />
      <AsSeenOn />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;