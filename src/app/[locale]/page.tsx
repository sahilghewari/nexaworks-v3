"use client"

import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { HowItWorks } from "@/components/sections/how-it-works";
import { QualityAssurance } from "@/components/sections/quality-assurance";
import { CaseStudies } from "@/components/sections/case-studies";
import { Industries } from "@/components/sections/industries";
import { CompanyStatistics } from "@/components/sections/company-statistics";
import { WhyNexaWorks } from "@/components/sections/why-nexaworks";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/ui/footer";
import { LogoLoop } from "@/components/ui/logo-loop";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { BookingModal } from "@/components/ui/booking-modal";
import { useTranslations } from "next-intl";

const INTEGRATION_LOGOS = [
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">OPENAI</span>
      </div>
    ),
    title: "OpenAI",
    href: "#"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">ANTHROPIC</span>
      </div>
    ),
    title: "Anthropic",
    href: "#"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">META</span>
      </div>
    ),
    title: "Meta",
    href: "#"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">GOOGLE</span>
      </div>
    ),
    title: "Google",
    href: "#"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">COHERE</span>
      </div>
    ),
    title: "Cohere",
    href: "#"
  },
  {
    node: (
      <div className="flex items-center gap-2.5 text-text-muted hover:text-white transition-colors duration-300 select-none group/logo">
        <span className="text-xs font-semibold tracking-wider font-mono">MISTRAL</span>
      </div>
    ),
    title: "Mistral",
    href: "#"
  }
];

export default function Home() {
  const t = useTranslations("HomePage");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);

  useEffect(() => {
    // 1. Timer trigger: automatically open after 20 seconds on page
    const timer = setTimeout(() => {
      const hasSeen = sessionStorage.getItem("hive-popup-seen");
      if (!hasSeen) {
        setIsBookingOpen(true);
        sessionStorage.setItem("hive-popup-seen", "true");
      }
    }, 20000);

    // 2. Exit Intent trigger: open when mouse moves towards browser tab boundary
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30) {
        const hasSeen = sessionStorage.getItem("hive-popup-seen");
        if (!hasSeen) {
          setIsBookingOpen(true);
          sessionStorage.setItem("hive-popup-seen", "true");
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <main className="min-h-screen relative font-sans tracking-tight">
      <Navbar onBookCall={openBooking} />
      
      {/* 1. Hero */}
      <Hero />
      
      {/* 2. Trust Logos */}
      <div className="w-full bg-black border-y border-surface-2 py-8 relative z-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase shrink-0">
            {t('automatedIntegrations')}
          </div>
          <div className="flex-1 w-full overflow-hidden">
            <LogoLoop
              logos={INTEGRATION_LOGOS}
              speed={40}
              direction="left"
              logoHeight={28}
              gap={64}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Trusted partners"
            />
          </div>
        </div>
      </div>

      {/* 3. Capabilities (Services) */}
      <Services />

      {/* Scroll Velocity Marquee */}
      <div className="w-full bg-black py-8 lg:py-12 border-y border-surface-2 overflow-hidden relative z-20">
        <ScrollVelocity
          texts={[
            t('marquee1'),
            t('marquee2')
          ]}
          velocity={40}
          className="text-4xl md:text-[5rem] font-semibold tracking-tighter uppercase text-white/10 md:text-white/5 font-sans selection:bg-transparent"
        />
      </div>

      {/* 4. Workflow */}
      <HowItWorks />
      
      {/* 5. Quality Assurance */}
      <QualityAssurance />

      {/* 6. Case Studies */}
      <CaseStudies />
      
      {/* 7. Industries */}
      <Industries />
      
      {/* 7. Statistics */}
      <CompanyStatistics />
      
      {/* 8. Why NexaWorks */}
      <WhyNexaWorks />
      
      {/* 9. FAQ */}
      <FAQ />
      
      {/* 10. Footer */}
      <Footer />
      
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
