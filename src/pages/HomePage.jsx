import React from 'react';
import Hero from '../components/home/Hero';
import CapabilityStrip from '../components/home/CapabilityStrip';
import ServicesSection from '../components/home/ServicesSection';
import TechEcosystemMarquee from '../components/home/TechEcosystemMarquee';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import CaseStudiesSection from '../components/home/CaseStudiesSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';
import TeamSection from '../components/home/TeamSection';
import FinalCtaSection from '../components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 2. Hero */}
      <Hero />

      {/* 3. Capability strip */}
      <CapabilityStrip />

      {/* 4. Services (All 11 Disciplines) */}
      <ServicesSection />

      {/* 5. Animated Tech Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* 6. Featured Work */}
      <FeaturedWorkSection />

      {/* 7. Case Studies */}
      <CaseStudiesSection />

      {/* 8. Why Anehit Tech */}
      <WhyUsSection />

      {/* 9. Development Process */}
      <ProcessSection />

      {/* 10. About / Team */}
      <TeamSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. High-Converting Direct CTA Section */}
      <FinalCtaSection />
    </div>
  );
}
