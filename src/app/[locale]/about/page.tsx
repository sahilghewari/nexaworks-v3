"use client"

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("AboutPage");

    return (
        <main className="min-h-screen relative font-sans tracking-tight bg-black">
            <Navbar />
            
            <div className="pt-36 pb-24 lg:pt-44 lg:pb-32 px-6 lg:px-8 mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-24">
                    <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                        {t('headline')}
                    </h1>
                    <p className="text-xl md:text-2xl text-text-dim max-w-3xl leading-relaxed">
                        {t('subhead')}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    <div>
                        <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">Mission</h2>
                        <h3 className="text-2xl font-semibold text-white mb-4">{t('missionTitle')}</h3>
                        <p className="text-text-dim text-lg leading-relaxed">{t('missionDesc')}</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-mono text-text-muted uppercase tracking-widest mb-4">Vision</h2>
                        <h3 className="text-2xl font-semibold text-white mb-4">{t('visionTitle')}</h3>
                        <p className="text-text-dim text-lg leading-relaxed">{t('visionDesc')}</p>
                    </div>
                </div>

                {/* Values */}
                <div className="mt-32">
                    <h2 className="text-3xl font-semibold text-white mb-12">Core Principles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="enterprise-card p-8 rounded-2xl">
                                <h3 className="text-xl font-semibold text-white mb-4">{t(`values.${i}.title`)}</h3>
                                <p className="text-text-dim leading-relaxed">{t(`values.${i}.desc`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
