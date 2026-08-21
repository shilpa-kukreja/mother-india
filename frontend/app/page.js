import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Story from "./components/Story";
import Restaurants from "./components/Restaurants";
import Gallery from "./components/Gallery";
import Join from "./components/Join";

export default function Home() {
  return (
    <>
      <Navbar />
      <Restaurants />
      <Story />
      {/* <Join /> */}
      <Gallery />
      <CTA />

      <Footer />
    </>
  );
}
