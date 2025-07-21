import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
    <Header />
    <Hero />
    <FeaturedCategories />
    <FeaturedProducts />
    <Footer />
    </>
   
  );
}