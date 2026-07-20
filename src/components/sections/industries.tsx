"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function Industries() {
    const t = useTranslations("WhoWeWorkWith")

    const numPoints = 6;
    const POINTS = Array.from({ length: numPoints }).map((_, i) => ({
        label: t(`points.${i}.label`),
        desc: t(`points.${i}.desc`),
    }))

    return (
        <section id="industries" className="bg-surface-1 py-24 lg:py-32 border-t border-surface-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 lg:mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-8">
                    <div className="max-w-2xl">
                        <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">{t('sectionLabel')}</p>
                        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                            {t('headline')}
                        </h2>
                    </div>
                    <div className="max-w-md">
                        <p className="text-lg text-text-dim leading-relaxed">
                            {t('subhead')}
                        </p>
                    </div>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface-elevated border border-surface-elevated rounded-2xl overflow-hidden">
                    {POINTS.map((point, i) => (
                        <motion.div
                            key={point.label}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-surface-1 p-8 md:p-12"
                        >
                            <h3 className="text-xl font-semibold text-white tracking-tight mb-4">{point.label}</h3>
                            <p className="text-sm md:text-base text-text-dim leading-relaxed">
                                {point.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
