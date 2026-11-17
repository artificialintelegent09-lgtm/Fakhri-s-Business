import BottomNav from "@/components/BottomNav";
import Collection from "@/components/Collection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import WhyRiWed from "@/components/WhyRiWed";

export default function Home() {
  return (
    <>
      <Navbar logo={<Logo />} />
      <main id="main">
        <Hero />
        <Collection />
        <WhyRiWed />
        <HowItWorks />
        <Contact />
      </main>
      {/* Footer is on the dark cocoa field, so use the logo on a light ring. */}
      <Footer logo={<Logo size={56} priority={false} className="[&_span]:text-cream [&_img]:ring-cream/30" />} />
      <BottomNav />
    </>
  );
}
