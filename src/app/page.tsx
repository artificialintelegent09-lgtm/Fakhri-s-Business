import Collection from "@/components/Collection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import ServiceInfo from "@/components/ServiceInfo";
import SpecialPrice from "@/components/SpecialPrice";
import WhatsAppFab from "@/components/WhatsAppFab";
import WhyRiWed from "@/components/WhyRiWed";
import { products } from "@/data/products";
import { getProductCoverSrc } from "@/lib/assets";

export default function Home() {
  // Resolved at build time: real previews are used as soon as they exist in public/images/<slug>/.
  const covers = Object.fromEntries(
    products.map((product) => [product.slug, getProductCoverSrc(product.slug)]),
  );

  return (
    <>
      <Navbar logo={<Logo />} />
      <main id="main">
        <Hero />
        <Collection covers={covers} />
        <SpecialPrice />
        <WhyRiWed />
        <HowItWorks />
        <ServiceInfo />
        <Contact />
      </main>
      <Footer logo={<Logo size={64} priority={false} />} />
      <WhatsAppFab />
    </>
  );
}
