
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProductPresentation from '@/components/ProductPresentation';
import MechanismSection from '@/components/MechanismSection';
import EvidenceSection from '@/components/EvidenceSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import PricingSection from '@/components/PricingSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <ProductPresentation />
        <MechanismSection />
        <EvidenceSection />
        <ReviewsSection />
        <FAQSection />
        <PricingSection />
        <GuaranteeSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
