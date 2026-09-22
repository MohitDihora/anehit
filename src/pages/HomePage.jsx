import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import TechEcosystemMarquee from '../components/home/TechEcosystemMarquee';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import WhyUsSection from '../components/home/WhyUsSection';
import ProcessSection from '../components/home/ProcessSection';
import FaqSection from '../components/home/FaqSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 2. Hero */}
      <Hero />

      {/* 4. Services (All 11 Disciplines) */}
      <ServicesSection />

      {/* 5. Animated Tech Ecosystem Marquee */}
      <TechEcosystemMarquee />

      {/* 6. Case Studies & Deployments */}
      <FeaturedWorkSection />

      {/* 7. Why Anehit Tech */}
      <WhyUsSection />

      {/* 9. Development Process */}
      <ProcessSection />

      {/* 10. Frequently Asked Questions */}
      <FaqSection />
    </div>
  );
}
