"use client"

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import BlurText from "@/components/ui/blur-text";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { ShieldCheck, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

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
            <Navbar />
            
            {/* Background Elements to match Hero */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(3,6,17,0)_70%)] rounded-full blur-[140px]" />
                <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#030611] via-transparent to-[#030611] pointer-events-none opacity-40" />
            </div>

            <article className="pt-36 pb-24 lg:pt-44 lg:pb-32 relative z-10 overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl">
                    
                    <motion.header 
                        className="mb-24 flex flex-col items-center text-center relative z-20"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="text-[10px] font-mono text-text-muted tracking-widest uppercase mb-6">
                            Our Manifesto
                        </motion.div>
                        
                        <BlurText
                            as="h1"
                            delay={60}
                            animateBy="words"
                            direction="bottom"
                            className="mx-auto max-w-5xl font-sans text-3xl sm:text-[68px] font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.12] justify-center px-2 sm:px-0 mb-8"
                            segments={[
                                "The NexaWorks",
                                { br: true },
                                { text: "Manifesto", className: "italic font-serif font-medium text-blue-200" }
                            ]}
                        />
                        
                        <motion.p variants={itemVariants} className="mx-auto max-w-2xl text-lg text-text-dim leading-relaxed mb-10">
                            {t('subhead')}
                        </motion.p>
                    </motion.header>

                    {/* Marquee */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="w-full bg-black py-8 lg:py-12 border-y border-surface-2 mb-32 -mx-6 px-6 sm:mx-0 sm:px-0 relative z-20"
                    >
                        <ScrollVelocity
                            texts={["ELIMINATE THE ALIGNMENT BOTTLENECK • HIGH-FIDELITY GROUND TRUTH •", "STRICT QA PROTOCOLS • DOMAIN EXPERT OPS •"]}
                            velocity={30}
                            className="text-4xl md:text-[5rem] font-semibold tracking-tighter uppercase text-white/10 md:text-white/5 font-sans selection:bg-transparent"
                        />
                    </motion.div>

                    {/* Mission & Vision Split */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-32 relative z-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="enterprise-card p-10 md:p-14 rounded-[2rem] shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden h-full">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,transparent_70%)] pointer-events-none" />
                            <div className="w-12 h-12 bg-surface-2 border border-surface-elevated rounded-xl flex items-center justify-center mb-8 relative z-10">
                                <Target className="w-6 h-6 text-brand-400" />
                            </div>
                            <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4 relative z-10">Mission</h2>
                            <h3 className="text-3xl font-semibold text-white mb-6 relative z-10 tracking-tight">{t('missionTitle')}</h3>
                            <p className="text-text-dim text-lg leading-relaxed relative z-10">{t('missionDesc')}</p>
                        </div>
                        <div className="enterprise-card p-10 md:p-14 rounded-[2rem] shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden h-full">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.1)_0%,transparent_70%)] pointer-events-none" />
                            <div className="w-12 h-12 bg-surface-2 border border-surface-elevated rounded-xl flex items-center justify-center mb-8 relative z-10">
                                <Zap className="w-6 h-6 text-cyan-400" />
                            </div>
                            <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4 relative z-10">Vision</h2>
                            <h3 className="text-3xl font-semibold text-white mb-6 relative z-10 tracking-tight">{t('visionTitle')}</h3>
                            <p className="text-text-dim text-lg leading-relaxed relative z-10">{t('visionDesc')}</p>
                        </div>
                    </motion.div>

                    {/* Core Principles Grid */}
                    <motion.div 
                        className="mb-32 relative z-20"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">Core Principles</h2>
                            <p className="text-lg text-text-dim max-w-2xl mx-auto">The operational standards that govern every deployment.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full hover:bg-surface-elevated/50 transition-colors">
                                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-5 h-5 text-text-muted" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{t(`values.0.title`)}</h3>
                                <p className="text-sm text-text-dim flex-grow leading-relaxed">{t(`values.0.desc`)}</p>
                            </div>
                            <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full hover:bg-surface-elevated/50 transition-colors">
                                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-5 h-5 text-text-muted" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{t(`values.1.title`)}</h3>
                                <p className="text-sm text-text-dim flex-grow leading-relaxed">{t(`values.1.desc`)}</p>
                            </div>
                            <div className="enterprise-card p-8 rounded-2xl flex flex-col h-full hover:bg-surface-elevated/50 transition-colors">
                                <div className="w-10 h-10 bg-surface-2 rounded-xl flex items-center justify-center mb-6">
                                    <ShieldCheck className="w-5 h-5 text-text-muted" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3">{t(`values.2.title`)}</h3>
                                <p className="text-sm text-text-dim flex-grow leading-relaxed">{t(`values.2.desc`)}</p>
                            </div>
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
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 tracking-tight text-white">Join the frontier.</h2>
                        <p className="text-lg text-text-dim mb-10 max-w-2xl mx-auto relative z-10">
                            Partner with NexaWorks to scale your human evaluation operations without compromising on quality.
                        </p>
                        <Button size="lg" className="glossy-neon-btn group relative h-13 px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 relative z-10" onClick={() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank')}>
                            <span className="relative z-10 flex items-center justify-center">Talk to Sales</span>
                            <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200 shrink-0" />
                        </Button>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </main>
    )
}
