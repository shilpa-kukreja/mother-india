import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTA from "./components/CTA";
import Story from "./components/Story";
import Restaurants from "./components/Restaurants";
import Gallery from "./components/Gallery";
import Join from "./components/Join";
import AnnouncementBar from "./components/AnnouncementBar";
import HeroSlider from "./components/HeroSlider";

export default function Home() {
  return (
    <>
     <AnnouncementBar/>
      <Navbar />
      <HeroSlider/>
      {/* <Restaurants /> */}
      <Story />
      
      <Gallery />
      <CTA />

      <Footer />
    </>
  );
}
