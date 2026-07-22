import { getCaseStudyBySlug } from '@/data/case-studies';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CheckCircle2, Quote, ArrowLeft, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import * as motion from 'framer-motion/client';
import BlurText from '@/components/ui/blur-text';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);
  
  if (!study) {
    return { title: 'Case Study Not Found | NexaWorks' };
  }

  return {
    title: `${study.title} Case Study | NexaWorks by NexaWorks`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const study = getCaseStudyBySlug(resolvedParams.slug);

  if (!study) {
    notFound();
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <main className="min-h-screen relative font-sans tracking-tight bg-bg text-white selection:bg-brand-500/30">
      <Navbar />
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(3,6,17,0)_70%)] rounded-full blur-[140px]" />
          <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#030611] via-transparent to-[#030611] pointer-events-none opacity-40" />
      </div>
      
      <article className="pt-32 pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/case-studies" className="inline-flex items-center gap-2 text-text-dim hover:text-white mb-12 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium uppercase tracking-wider">Back to Case Studies</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.header 
            className="mb-24 flex flex-col items-center text-center relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants as any} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-2 border border-surface-elevated text-xs font-semibold text-text-muted uppercase tracking-widest mb-8 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
              Client Success Story
            </motion.div>
            
            <BlurText
              as="h1"
              delay={40}
              animateBy="words"
              direction="bottom"
              className="mx-auto max-w-5xl font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-12 px-2 sm:px-0"
              segments={[
                "How we transformed",
                { br: true },
                { text: study.title, className: "italic font-serif font-medium text-brand-300" }
              ]}
            />
            
            <motion.div variants={itemVariants as any} className="flex items-center justify-center p-10 enterprise-card rounded-3xl w-full max-w-3xl shadow-[0_0_50px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              {study.logoUrl !== '/logos/placeholder.png' ? (
                <img src={study.logoUrl} alt={`${study.title} Logo`} className="max-h-28 w-auto object-contain filter drop-shadow-2xl relative z-10" />
              ) : (
                <div className="h-20 px-10 flex items-center justify-center bg-surface-elevated rounded-2xl text-3xl font-bold tracking-wider text-white relative z-10 border border-white/5">
                  {study.title}
                </div>
              )}
            </motion.div>
          </motion.header>

          {/* Bento Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8 relative z-20">
            
            {/* Left Column: Context & Solution */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Constraint Card */}
              <motion.div 
                className="enterprise-card rounded-3xl p-10 md:p-12 relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.15)]">
                    <Target className="w-7 h-7 text-red-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">The Data Fragmentation Nightmare (Before)</h2>
                </div>
                <p className="text-lg leading-relaxed text-text-dim relative z-10">
                  {study.constraint}
                </p>
              </motion.div>

              {/* Solution Card */}
              <motion.div 
                className="enterprise-card rounded-3xl p-10 md:p-12 relative overflow-hidden h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500/50 via-brand-500/20 to-transparent" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center border border-brand-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                    <Lightbulb className="w-7 h-7 text-brand-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">The Magic Moment (After)</h2>
                </div>
                <p className="text-lg leading-relaxed text-text-dim relative z-10">
                  {study.solution}
                </p>
              </motion.div>

            </div>

            {/* Right Column: Results */}
            <motion.div 
                className="lg:col-span-4 flex flex-col gap-8"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
              
              {/* Results Card */}
              <div className="enterprise-card bg-surface-1 border border-brand-500/20 rounded-3xl p-10 backdrop-blur-sm h-full shadow-[0_0_50px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/10 to-transparent pointer-events-none" />
                
                <div className="flex items-center gap-5 mb-10 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-surface-2 flex items-center justify-center border border-brand-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <TrendingUp className="w-7 h-7 text-brand-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">Measurable Impact</h2>
                </div>
                
                <div className="mb-10 pb-10 border-b border-surface-elevated text-center relative z-10">
                  <div className="text-5xl font-bold tracking-tighter text-white mb-2">{study.highlightMetric}</div>
                  <div className="text-sm font-mono text-text-muted uppercase tracking-widest">{study.metricLabel}</div>
                </div>

                <ul className="space-y-6 relative z-10">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center border border-brand-500/30 group-hover:bg-brand-500/20 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                      </div>
                      <span className="text-base text-text-dim leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>

            {/* Full Width Bottom: Testimonial & Impact */}
            <div className="lg:col-span-12 grid lg:grid-cols-2 gap-8 mt-4">
              
              {/* Testimonial */}
              <motion.div 
                className="enterprise-card rounded-3xl p-10 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Quote className="absolute -top-6 -left-6 w-32 h-32 text-surface-elevated/40 rotate-12 pointer-events-none" />
                <blockquote className="relative z-10 h-full flex flex-col justify-between">
                  <p className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed mb-12">
                    "{study.testimonial}"
                  </p>
                  <footer className="flex items-center gap-5 mt-auto">
                    <div className="w-14 h-14 rounded-full bg-surface-2 border border-surface-elevated flex items-center justify-center overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${study.title}&backgroundColor=111827`} alt="Avatar" />
                    </div>
                    <div>
                      <div className="text-lg text-white font-semibold">{study.authorName || `${study.title} Team`}</div>
                      <div className="text-sm text-text-muted font-medium">{study.authorRole || 'Verified Client'}</div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>

              {/* Impact / CTA styled block */}
              <motion.div 
                className="bg-brand-600 rounded-3xl p-10 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-[0_0_60px_-15px_rgba(59,130,246,0.4)]"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-400/20 rounded-full blur-3xl pointer-events-none" />
                
                <h2 className="text-sm font-mono text-brand-200 uppercase tracking-widest mb-6 relative z-10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  What This Means For You
                </h2>
                <p className="text-2xl md:text-3xl leading-relaxed text-white font-medium relative z-10">
                  {study.impact}
                </p>
              </motion.div>

            </div>
          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
