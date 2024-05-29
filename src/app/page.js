import Footer from "@/components/Footer/Footer";
import { Navbar } from "@/components/Header/Navbar";
import Hero from "@/components/Main/Hero";
import Process from "@/components/Process/Process";
import AllServices from "@/components/Services/AllServices";
import WeDo from "@/components/WeDo/WeDo";
import Wellcome from "@/components/Wellcome/Wellcome";
import WhyChooseUs from "@/components/Why-Choose-Us/Why-Choose-Us";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Wellcome />
      <WhyChooseUs />
      <WeDo />
      <AllServices />
      <Process />
      <Footer />
    </>
  );
}
