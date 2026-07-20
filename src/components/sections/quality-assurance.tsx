"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function QualityAssurance() {
    const t = useTranslations("QualityAssurance")

    return (
        <section className="bg-black py-24 lg:py-32 border-t border-surface-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Text */}
                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                            {t('headline')}
                        </h2>
                        <p className="text-xl text-text-dim mb-6 font-medium">
                            {t('subhead')}
                        </p>
                        <p className="text-base text-text-muted leading-relaxed mb-10">
                            {t('body')}
                        </p>
                        <button className="enterprise-btn px-6 py-3 rounded-lg font-medium text-sm">
                            {t('cta')}
                        </button>
                    </div>

                    {/* Right: Dashboard Mockup */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="enterprise-card p-6 rounded-2xl overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-surface-subtle">
                                <span className="text-sm font-semibold text-white">Quality Metrics</span>
                                <span className="text-xs font-mono text-brand-400 bg-brand-500/10 px-2 py-1 rounded">LIVE</span>
                            </div>
                            
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-text-dim">Consensus Rate</span>
                                        <span className="text-white font-mono">98.4%</span>
                                    </div>
                                    <div className="w-full bg-surface-subtle h-2 rounded-full overflow-hidden">
                                        <div className="bg-brand-500 h-full rounded-full" style={{ width: '98.4%' }} />
                                    </div>
                                </div>
                                
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-text-dim">Audit Pass Rate</span>
                                        <span className="text-white font-mono">99.1%</span>
                                    </div>
                                    <div className="w-full bg-surface-subtle h-2 rounded-full overflow-hidden">
                                        <div className="bg-brand-500 h-full rounded-full" style={{ width: '99.1%' }} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-surface-subtle flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                <span className="text-xs text-text-muted">Continuous validation active at every pipeline stage.</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
