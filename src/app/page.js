import { HomeGalleryComponent } from "@/components/Home-Gallery/HomeGallery";
import Main from "@/components/Main/Main";
import Mission from "@/components/Mission/Mission";
import Offices from "@/components/Our-Offices/Offices";
import Process from "@/components/Process/Process";
import AllServices from "@/components/Services/AllServices";
import { Testimonial } from "@/components/Testimonial/Testimonial";
import WeDo from "@/components/WeDo/WeDo";
import Wellcome from "@/components/Wellcome/Wellcome";
import WhyChooseUs from "@/components/Why-Choose-Us/Why-Choose-Us";
export default function Home() {
  return (
    <>
        <Main />
        <Wellcome />
        <WhyChooseUs />
        <WeDo />
        <AllServices />
        <HomeGalleryComponent />
        <Testimonial />
        <Mission />
        <Process />
        <Offices />
    </>
  );
}
