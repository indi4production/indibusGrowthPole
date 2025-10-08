import AboutSoftware from "@/components/landingPage/aboutSoftware";
import AboutTeam from "@/components/landingPage/aboutTeam";
import FeaturesSection from "@/components/landingPage/featuresSection";
import Heroes from "@/components/landingPage/heroes";
import Pricing from "@/components/landingPage/pricing";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Home() {
  return (
    <div>
      <Heroes/>
      <AboutSoftware/>
      <Pricing/>
      <AboutTeam/>
      <FeaturesSection/>
      <ScrollToTop/>
    </div>
  );
}
