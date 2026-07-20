"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function HowItWorks() {
    const t = useTranslations("HowItWorks")
    
    // There are 8 workflow steps
    const numPhases = 8;
    const PHASES = Array.from({ length: numPhases }).map((_, i) => ({
        week: t(`phases.${i}.week`),
        title: t(`phases.${i}.title`),
        body: t(`phases.${i}.body`),
    }))

    return (
        <section id="workflow" className="bg-black border-t border-surface-2 pt-24 pb-24 lg:pt-32 lg:pb-32 relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mb-16 lg:mb-24">
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">{t('sectionLabel')}</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                        {t('headline')}
                    </h2>
                    <p className="text-lg text-text-dim max-w-2xl">
                        {t('subhead')}
                    </p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l border-surface-elevated ml-4 md:ml-6">
                    {PHASES.map((phase, i) => (
                        <motion.div
                            key={phase.week}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="mb-12 last:mb-0 pl-8 md:pl-12 relative"
                        >
                            <div className="absolute w-3 h-3 bg-brand-500 rounded-full -left-[6.5px] top-1.5 ring-4 ring-black" />
                            
                            <div className="text-xs font-mono text-text-muted uppercase tracking-widest mb-2 font-semibold">
                                {phase.week}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight mb-3">
                                {phase.title}
                            </h3>
                            <p className="text-base text-text-dim leading-relaxed max-w-3xl">
                                {phase.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
