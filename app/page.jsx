import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkDemo from '@/components/WorkDemo';
import AIStack from '@/components/AIStack';
import FeatureSection from '@/components/FeatureSection';
import HowItWorks from '@/components/HowItWorks';
import ProofSection from '@/components/ProofSection';
import UseCases from '@/components/UseCases';
import ModelChoice from '@/components/ModelChoice';
import PricingTeaser from '@/components/PricingTeaser';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkDemo />
        <AIStack />
        <ProofSection />
        <UseCases />
        <FeatureSection />
        <HowItWorks />
        <ModelChoice />
        <PricingTeaser />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
