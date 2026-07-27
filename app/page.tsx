import Hero from "./components/home/Hero";
import BrandPromise from "./components/home/BrandPromise";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Ingredients from "./components/home/Ingredients";
import WhyChooseUs from "./components/home/WhyChooseUs";
import OurStory from "./components/home/OurStory";
import OurPromise from "./components/home/OurPromise";
import OurProcess from "./components/home/OurProcess";
import Footer from "./components/home/Footer";

export default function Home() {
  return (
    <>
      {/* 
        space-y-16 on mobile (64px)
        space-y-24 on tablet (96px)
        space-y-32 on desktop (128px)
      */}
      <main className="space-y-16 sm:space-y-24 lg:space-y-32 overflow-x-hidden">
        <Hero />
        <BrandPromise />
        <FeaturedProducts />
        <Ingredients />
        <WhyChooseUs />
        <OurStory />
        <OurPromise />
        <OurProcess />
      </main>

      {/* Footer placed outside main so it attaches naturally to the bottom */}
      <Footer />
    </>
  );
}