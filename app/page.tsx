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
        {/* Padding after Hero: 64px on mobile, 96px on tablet, 128px on laptop */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <Hero />
        </div>

        {/* Padding after BrandPromise */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <BrandPromise />
        </div>

        {/* Padding after FeaturedProducts */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <FeaturedProducts />
        </div>

        {/* Padding after Ingredients */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <Ingredients />
        </div>

        {/* Padding after WhyChooseUs */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <WhyChooseUs />
        </div>

        {/* Padding after OurStory */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <OurStory />
        </div>

        {/* Padding after OurPromise */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <OurPromise />
        </div>

        {/* Padding after OurProcess */}
        <div className="pb-16 md:pb-24 lg:pb-32">
          <OurProcess />
        </div>
      </main>

      <Footer />
    </>
  );
}