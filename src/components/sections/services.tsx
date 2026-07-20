"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export function Services() {
    const t = useTranslations("Services")

    // Assuming we have 6 services based on our new en.json
    const numServices = 6;
    const services = Array.from({ length: numServices }).map((_, i) => ({
        title: t(`services.${i}.title`),
        desc: t(`services.${i}.desc`),
        bullets: [
            t(`services.${i}.bullets.0`),
            t(`services.${i}.bullets.1`),
            t(`services.${i}.bullets.2`),
        ]
    }));

    return (
        <section id="services" className="pt-24 pb-24 lg:pt-32 lg:pb-32 bg-black border-t border-surface-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mb-16 lg:mb-24">
                    <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-4">{t('sectionLabel')}</p>
                    <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                        {t('headline')}
                    </h2>
                    <p className="text-lg text-text-dim">
                        {t('subhead')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="enterprise-card p-8 rounded-2xl flex flex-col h-full"
                        >
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {srv.title}
                            </h3>
                            <p className="text-sm text-text-dim mb-8 flex-grow leading-relaxed">
                                {srv.desc}
                            </p>
                            
                            <ul className="space-y-3 font-sans text-xs text-text-muted">
                                {srv.bullets.map((bullet, bIdx) => (
                                    <li key={bIdx} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-surface-elevated mt-1.5 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
