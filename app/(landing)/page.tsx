import CTA from "@/components/landing/cta";
import FAQ from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Pricing from "@/components/landing/pricing";
import Testimonials from "@/components/landing/testimonials";
import TrustedBy from "@/components/landing/trustedBy";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks /> 
      <Testimonials />
      <Pricing />
      <CTA />
      <FAQ />
    </>
  );
}
