"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useTranslations } from "next-intl"
import { ThreeCrystals } from "@/components/ui/three-crystals"

import BlurText from "@/components/ui/blur-text"

interface HeroProps {
    onBookCall?: () => void
}

export function Hero({ onBookCall }: HeroProps) {
    const t = useTranslations("Hero")
    const [mounted, setMounted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <section ref={containerRef} className="relative pt-36 pb-24 lg:pt-44 lg:pb-36 min-h-[82vh] flex flex-col justify-center overflow-hidden bg-bg">
            
            {/* HIVE LinkedIn Banner Themed Radial Glow Background */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18)_0%,rgba(3,6,17,0)_70%)] rounded-full blur-[140px]" />
                <div className="absolute top-0 inset-x-0 h-[800px] bg-gradient-to-b from-[#030611] via-transparent to-[#030611] pointer-events-none opacity-40" />
            </div>

            {/* WebGL 3D Crystals Background Component */}
            {mounted && <ThreeCrystals />}

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Top section: Headline + CTA */}
                <div className="text-center mb-16 lg:mb-20 relative z-20">

                    {/* Headline styled to match HIVE LinkedIn Banner exactly */}
                    <BlurText
                        as="h1"
                        delay={60}
                        animateBy="words"
                        direction="bottom"
                        className="mx-auto max-w-5xl font-sans text-3xl sm:text-[68px] font-bold tracking-tight text-white leading-[1.2] sm:leading-[1.12] justify-center px-2 sm:px-0"
                        segments={[
                            t('headlineWe'),
                            { text: t('headlineMaster'), className: "italic font-serif font-medium text-blue-200" },
                            t('headlineMechanics'),
                            { br: true, className: "hidden sm:block" },
                            { text: t('headlineFutureAgency'), className: "italic font-serif font-medium text-blue-200" },
                            t('headlineGrowth')
                        ]}
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="mx-auto mt-8 max-w-2xl text-lg text-text-dim leading-relaxed"
                    >
                        {t('description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto sm:max-w-none"
                    >
                        <Button size="lg" className="glossy-neon-btn group relative h-13 w-full sm:w-auto px-8 text-base font-bold text-white overflow-hidden shadow-[0_0_35px_rgba(59,130,246,0.6)] hover:shadow-[0_0_65px_rgba(6,182,212,0.95)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300" onClick={onBookCall || (() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank'))}>
                            <span className="relative z-10 flex items-center justify-center">{t('bookDemo')}</span>
                            <ArrowUpRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200 shrink-0" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="lg" 
                            className="h-12 w-full sm:w-auto px-7 text-base font-medium border-brand-400/30 bg-surface-1/40 backdrop-blur-md text-white hover:bg-surface-1/70 hover:border-teal/50 hover:shadow-[0_0_20px_rgba(62,214,196,0.2)] transition-all"
                            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('learnMore')}
                        </Button>
                    </motion.div>
                </div>


            </div>
        </section>
    )
}
