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
      <main className="w-full overflow-x-hidden">
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