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
        Using 'flex flex-col gap-*' forces an exact physical gap 
        between every section that CANNOT collapse.
      */}
      <main className="flex flex-col gap-16 sm:gap-24 lg:gap-32 overflow-x-hidden">
        <Hero />
        <BrandPromise />
        <FeaturedProducts />
        <Ingredients />
        <WhyChooseUs />
        <OurStory />
        <OurPromise />
        <OurProcess />
      </main>

      <Footer />
    </>
  );
}