"use client"

import { useTranslations } from "next-intl"

export function CompanyStatistics() {
    const t = useTranslations("Results")

    return (
        <section className="bg-surface-1 py-16 lg:py-24 border-t border-surface-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-2xl font-semibold text-white md:text-4xl mb-4">
                        {t('headline')}
                    </h2>
                    <p className="text-text-dim text-lg">
                        {t('subhead')}
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-elevated border border-surface-elevated rounded-2xl overflow-hidden">
                    {[0, 1, 2].map((i) => (
                        <div key={i} className="bg-surface-1 p-8 text-center flex flex-col justify-center items-center">
                            <div className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-2">
                                {t(`metrics.${i}.change`)}
                            </div>
                            <div className="text-sm text-text-muted font-medium uppercase tracking-wider">
                                {t(`metrics.${i}.label`)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
