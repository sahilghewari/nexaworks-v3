"use client";

import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Cpu, Database, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollVelocity } from '@/components/ui/scroll-velocity';
import { useState } from 'react';
import { BookingModal } from '@/components/ui/booking-modal';
import BlurText from '@/components/ui/blur-text';
import { Button } from '@/components/ui/button';

export default function RLHFPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className="min-h-screen relative font-sans tracking-tight bg-bg text-white selection:bg-brand-500/30">
      <Navbar onBookCall={openBooking} />
      
      {/* Background Elements to match Hero */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(3,6,17,0)_70%)] rounded-full blur-[140px]" />
          <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#030611] via-transparent to-[#030611] pointer-events-none opacity-40" />
      </div>
      
      <article className="pt-36 pb-24 lg:pt-44 lg:pb-36 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <motion.header 
            className="mb-24 flex flex-col items-center text-center relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-6">
              NexaWorks Enterprise Solutions
            </motion.div>
            
            <BlurText
                as="h1"
                delay={60}
                animateBy="words"
                direction="bottom"
                className="mx-auto max-w-5xl font-sans text-3xl sm:text-[68px] font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.12] justify-center px-2 sm:px-0 mb-8"
                segments={[
                    "Managed",
                    { text: " RLHF", className: "italic font-serif font-medium text-blue-200" },
                    " Services"
                ]}
            />
            
            <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-text-dim leading-relaxed mb-10">
              Build better foundation models with better human data. From instruction tuning to complex pairwise ranking, we provide scalable, high-quality contributor networks backed by rigorous QA.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <Button size="lg" className="glossy-neon-btn group relative h-13 px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300" onClick={() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank')}>
                <span className="relative z-10 flex items-center justify-center">Talk to Sales about RLHF</span>
                <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200 shrink-0" />
              </Button>
            </motion.div>
          </motion.header>

          {/* Marquee */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-full bg-black py-8 lg:py-12 border-y border-surface-2 mb-32 -mx-6 px-6 sm:mx-0 sm:px-0 relative z-20"
          >
            <ScrollVelocity
              texts={["INSTRUCTION TUNING • REWARD MODELING • PAIRWISE RANKING • SAFETY & ALIGNMENT •", "MULTI-STAGE QA • DOMAIN EXPERTISE • RED TEAMING • DATASET CURATION •"]}
              velocity={30}
              className="text-4xl md:text-[5rem] font-semibold tracking-tighter uppercase text-white/10 md:text-white/5 font-sans selection:bg-transparent"
            />
          </motion.div>

          {/* Detailed Features Grid */}
          <motion.div 
            className="mb-32 relative z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">The Alignment Bottleneck</h2>
              <p className="text-lg text-text-dim max-w-2xl mx-auto">General crowdsourcing platforms are not built to handle the rigorous QA requirements of modern frontier models. Cheap data poisons reward models.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Low Inter-Annotator Agreement</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Crowdsourced platforms optimize for speed, not accuracy. Disagreement among raters leads to noisy reward modeling signals.</p>
              </div>
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Lack of Domain Expertise</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Evaluating complex medical, legal, or financial LLM outputs requires verified professionals, not random internet workers.</p>
              </div>
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Broken QA Pipelines</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Without strict consensus scoring and escalation paths, you end up manually verifying the data you paid someone else to label.</p>
              </div>
            </div>
          </motion.div>

          {/* Solution Focus */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center mb-32 relative z-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col justify-center px-4">
              <div className="w-12 h-12 bg-surface-2 border border-surface-elevated rounded-xl flex items-center justify-center mb-8">
                <Network className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">Flawless execution at scale.</h3>
              <p className="text-lg text-text-dim leading-relaxed mb-6">
                NexaWorks manages the entire human-in-the-loop lifecycle. From sourcing highly specialized domain experts to executing multi-stage consensus QA, we deliver data you can trust.
              </p>
              <p className="text-lg text-text-dim leading-relaxed">
                Whether you need adversarial red-teaming for safety alignment, or thousands of pairwise rankings for instruction tuning, our infrastructure scales to meet your model's demands.
              </p>
            </div>

            <div className="enterprise-card p-10 md:p-14 rounded-[2rem] shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
              <h2 className="text-2xl font-bold mb-8 text-white relative z-10">NexaWorks RLHF Operations</h2>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Verified Domain Experts</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">We source, vet, and onboard specialized talent (Lawyers, Doctors, Financial Analysts) for highly technical prompting.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Multi-Stage Consensus QA</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">Our operations mandate strict inter-annotator agreement logic and senior review escalation to guarantee &gt;99% acceptance rates.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Seamless Infrastructure Integration</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">We work within your proprietary labeling platforms or deploy our secure, SOC2-compliant enterprise toolstack.</span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="text-center enterprise-card rounded-[3rem] py-24 px-6 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(3,6,17,0)_70%)] rounded-full blur-[100px] pointer-events-none" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight text-white">Scale your model alignment.</h2>
            <p className="text-lg text-text-dim mb-10 max-w-2xl mx-auto relative z-10">
              Get high-quality pairwise ranking, instruction tuning, and red-teaming data from vetted professionals.
            </p>
            <Button size="lg" className="glossy-neon-btn group relative h-13 px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 relative z-10" onClick={() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank')}>
                <span className="relative z-10 flex items-center justify-center">Talk to Sales about RLHF Data</span>
                <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200 shrink-0" />
            </Button>
          </motion.div>
          
        </div>
      </article>

      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </main>
  );
}
