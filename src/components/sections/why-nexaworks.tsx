"use client"

import { useTranslations } from "next-intl"
import { ArrowUpRight } from "lucide-react"

export function WhyNexaWorks() {
    const t = useTranslations("WhyNexaWorks")

    return (
        <section className="bg-surface-2 py-24 lg:py-32 border-t border-surface-1">
            <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl mb-6">
                    {t('headline')}
                </h2>
                <p className="text-xl text-text-dim mb-8 font-medium">
                    {t('subhead')}
                </p>
                <p className="text-base text-text-muted leading-relaxed max-w-3xl mx-auto mb-10">
                    {t('body')}
                </p>
                <button 
                    className="enterprise-btn-secondary px-6 py-3 rounded-lg font-medium text-sm inline-flex items-center gap-2"
                    onClick={() => window.location.href = '/about'}
                >
                    {t('cta')}
                    <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    )
}
