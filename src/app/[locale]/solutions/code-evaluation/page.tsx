"use client";

import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CheckCircle2, ArrowUpRight, Code2, Users, LayoutDashboard, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollVelocity } from '@/components/ui/scroll-velocity';
import { useState } from 'react';
import { BookingModal } from '@/components/ui/booking-modal';
import BlurText from '@/components/ui/blur-text';
import { Button } from '@/components/ui/button';

export default function CodeEvaluationPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
                    "AI Code Evaluation by",
                    { br: true },
                    { text: "Senior Engineers", className: "italic font-serif font-medium text-blue-200" }
                ]}
            />
            
            <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-text-dim leading-relaxed mb-10">
              Standard automated benchmarks like SWE-bench are not enough. We provide fully managed pods of vetted Software Engineers to perform pairwise ranking and logic verification on complex repository-level outputs.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <Button size="lg" className="glossy-neon-btn group relative h-13 px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300" onClick={() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank')}>
                <span className="relative z-10 flex items-center justify-center">Deploy a SWE Pod Today</span>
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
              texts={["PAIRWISE RANKING • REPOSITORY LEVEL EVALUATION • SENIOR SWE PODS • VULNERABILITY ANALYSIS •", "LOGIC VERIFICATION • HUMAN-IN-THE-LOOP • GROUND TRUTH DATA • QA ACCEPTANCE •"]}
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
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">Why crowdsourcing <span className="text-red-500/80">fails</span> for code</h2>
              <p className="text-lg text-text-dim max-w-2xl mx-auto">Evaluating complex LLM outputs requires deep architectural context and engineering taste. General crowdsourcing platforms cannot deliver reliable ground truth for code.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <Terminal className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">No Architectural Context</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Crowdsourced workers review code in a vacuum. They cannot evaluate cross-file logic dependencies or massive repository-level changes effectively.</p>
              </div>
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Inconsistent Quality</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Freelance marketplaces yield wild variance in "engineering taste," corrupting your reward models and poisoning your datasets with false positives.</p>
              </div>
              <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full">
                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-5 h-5 text-text-muted" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Management Overhead</h3>
                <p className="text-sm text-text-dim flex-grow leading-relaxed">Your internal researchers end up spending 40% of their time grading the graders, destroying R&D velocity.</p>
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
            <div className="enterprise-card p-10 md:p-14 rounded-[2rem] shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.15)_0%,transparent_70%)] pointer-events-none" />
              <h2 className="text-2xl font-bold mb-8 text-white relative z-10">The NexaWorks SWE Pod Model</h2>
              <ul className="space-y-8 relative z-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Vetted Senior Engineers</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">We match dedicated pods of Senior SWEs directly to your tech stack (Python, Rust, C++, Go).</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Managed QA & Consensus</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">Our internal technical leads enforce strict inter-annotator agreement and consensus scoring protocols.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  </div>
                  <div>
                    <strong className="text-white block mb-1 text-base">Zero R&D Distraction</strong>
                    <span className="text-sm text-text-dim leading-relaxed block">Your researchers reclaim 100% of their time. We deliver high-fidelity ground truth data directly to your pipelines.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-center px-4">
              <div className="w-12 h-12 bg-surface-2 border border-surface-elevated rounded-xl flex items-center justify-center mb-8">
                <Code2 className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight text-white">Built for frontier models.</h3>
              <p className="text-lg text-text-dim leading-relaxed mb-6">
                As context windows expand to millions of tokens, evaluating AI output requires human engineers who can parse massive repositories and hold complex system architectures in their heads.
              </p>
              <p className="text-lg text-text-dim leading-relaxed">
                NexaWorks is the only human data operations partner designed specifically to handle ultra-long context code evaluation at scale.
              </p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight text-white">Stop wasting researcher time.</h2>
            <p className="text-lg text-text-dim mb-10 max-w-2xl mx-auto relative z-10">
              Deploy a fully managed pod of Senior Software Engineers to evaluate your model's code generation this week.
            </p>
            <Button size="lg" className="glossy-neon-btn group relative h-13 px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 relative z-10" onClick={() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank')}>
                <span className="relative z-10 flex items-center justify-center">Talk to Sales about Code Evaluation</span>
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
