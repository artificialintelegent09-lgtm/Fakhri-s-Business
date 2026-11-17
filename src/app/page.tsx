import Collection from "@/components/Collection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ServiceInfo from "@/components/ServiceInfo";
import SpecialPrice from "@/components/SpecialPrice";
import WhyRiWed from "@/components/WhyRiWed";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Collection />
        <SpecialPrice />
        <WhyRiWed />
        <HowItWorks />
        <ServiceInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
