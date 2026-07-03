"use client"

import React from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

interface ServiceRowProps {
    rowIdx: number
    tag: string
    title: string
    desc: string
    bullets: string[]
    mockupType: "signals" | "linkedin" | "whatsapp"
    isEven: boolean
}

function ServiceRow({ rowIdx, title, desc, bullets, mockupType, isEven }: ServiceRowProps) {
    const textOrderClass = isEven ? "lg:order-last" : "lg:order-first"
    const mockupOrderClass = isEven ? "lg:order-first" : "lg:order-last"

    // Helper to determine if a bullet point is active based on the reference screenshots
    // Row 1: bullet 0 is active. Row 2: bullet 0 is active. Row 3: bullet 2 is active.
    const isBulletActive = (bulletIdx: number) => {
        if (rowIdx === 0 && bulletIdx === 0) return true
        if (rowIdx === 1 && bulletIdx === 0) return true
        if (rowIdx === 2 && bulletIdx === 2) return true
        return false
    }

    return (
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-12 lg:py-16 ${rowIdx === 0 ? "pt-2 lg:pt-4" : ""} border-b border-surface-2/40 last:border-b-0`}>
            {/* Details Column */}
            <div className={`col-span-1 lg:col-span-5 ${textOrderClass}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
                        {title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-dim mt-4 leading-relaxed font-normal">
                        {desc}
                    </p>

                    {/* Timeline Bullets */}
                    <ul className="mt-8 space-y-4 font-sans text-xs sm:text-sm">
                        {bullets.map((bullet, idx) => {
                            const isActive = isBulletActive(idx)
                            return (
                                <li 
                                    key={idx} 
                                    className={`flex items-start gap-4 pl-4 border-l-2 transition-colors duration-300 relative ${
                                        isActive 
                                            ? "border-indigo-500 text-white font-medium" 
                                            : "border-surface-subtle/60 text-text-muted"
                                    }`}
                                >
                                    {isActive && (
                                        <span className="absolute -left-[5px] top-[6px] h-2 w-2 rounded-sm bg-indigo-500" />
                                    )}
                                    <span className="relative top-0">{bullet}</span>
                                </li>
                            )
                        })}
                    </ul>
                </motion.div>
            </div>

            {/* Mockup Column */}
            <div className={`col-span-1 lg:col-span-7 ${mockupOrderClass}`}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(12px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                    className="relative rounded-3xl bg-gradient-to-tr from-[#FAF8F5] via-[#F6F4FB] to-[#F1EEF8] p-4 sm:p-10 shadow-sm border border-white/20 aspect-auto md:aspect-square w-full max-w-[480px] mx-auto flex items-center justify-center overflow-hidden"
                >
                    {/* Inner White Box wrapper enclosing items */}
                    <div className="w-full bg-white rounded-2xl border border-[#F3F0EC] p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                        {/* Mockup Type Rendering */}
                        {mockupType === "signals" && <SignalsMockup />}
                        {mockupType === "linkedin" && <LinkedInMockup />}
                        {mockupType === "whatsapp" && <WhatsAppMockup />}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ SIGNAL FEED MOCKUP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function SignalsMockup() {
    return (
        <div className="w-full divide-y divide-[#F3F0EC]">
            {/* Bug Report */}
            <div className="pb-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEAE6] text-[#FF4D4F] shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">Bug: Payment gateway failure</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 truncate">#client-acme-connect</p>
                    </div>
                </div>
                <span className="text-[9px] font-mono text-[#FF4D4F] bg-[#FFEAE6] border border-[#FF4D4F]/20 px-2 py-0.5 rounded-full font-medium shrink-0">
                    High Risk
                </span>
            </div>

            {/* Churn Risk */}
            <div className="py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFBEB] text-[#D97706] shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">Churn Risk: 3 days latency complaints</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 truncate">#client-techflow-connect</p>
                    </div>
                </div>
                <span className="text-[9px] font-mono text-[#D97706] bg-[#FFFBEB] border border-[#FEF3C7] px-2 py-0.5 rounded-full font-medium shrink-0">
                    Escalated
                </span>
            </div>

            {/* Feature Request */}
            <div className="pt-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF5FC] text-[#0A66C2] shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-semibold text-gray-900 truncate">Feature: Custom PDF Export</p>
                        <p className="text-[10px] text-gray-400 mt-0.5 truncate">#client-globex-connect</p>
                    </div>
                </div>
                <span className="text-[9px] font-mono text-[#0A66C2] bg-[#EBF5FC] border border-[#0A66C2]/20 px-2 py-0.5 rounded-full font-medium shrink-0">
                    Requested
                </span>
            </div>
        </div>
    )
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ LINKEDIN CAMPAIGN MOCKUP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function LinkedInMockup() {
    return (
        <div className="w-full flex flex-col gap-3">
            {/* Header: Crisis Email */}
            <div className="pb-3 border-b border-[#F3F0EC] flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFEAE6] text-[#FF4D4F] shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-900 truncate">Surprise Escalation Email</p>
                        <p className="text-[10px] text-gray-400 truncate">From: CEO @ Acme Corp</p>
                    </div>
                </div>
                <span className="text-[9px] font-mono text-[#FF4D4F] bg-[#FFEAE6] border border-[#FF4D4F]/20 px-2 py-0.5 rounded-full font-medium shrink-0">
                    Crisis Alert
                </span>
            </div>

            {/* Crisis Executive Prep Summary */}
            <div className="space-y-2 bg-[#FAF8F5] p-3.5 rounded-xl border border-[#F3F0EC]">
                <p className="text-[10px] font-bold text-gray-700 uppercase tracking-wider">AI Executive Summary (3-Min Read)</p>
                <ul className="space-y-1.5 text-[10px] text-gray-600 font-sans list-disc pl-3">
                    <li>Latency spiked to 4.2s yesterday; client is furious.</li>
                    <li>CSM promised a fix by Tuesday (unresolved).</li>
                    <li>Support ticket #204 shows client threatening to churn.</li>
                    <li>Gong call transcript indicates budget cuts next month.</li>
                    <li>Recommendation: Acknowledge latency, offer SLA credit.</li>
                </ul>
            </div>
        </div>
    )
}

/* â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ WHATSAPP CONVERSATION MOCKUP â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */
function WhatsAppMockup() {
    return (
        <div className="w-full flex flex-col gap-3">
            {/* Header: Routine prep alert */}
            <div className="pb-3 border-b border-[#F3F0EC] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EBF5FC] text-[#0A66C2] shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-xs font-semibold text-gray-900">5-Min Meeting Alert</p>
                        <p className="text-[9px] text-indigo-600 font-medium">Sync with Globex starts at 2:00 PM</p>
                    </div>
                </div>
            </div>

            {/* Brief Box */}
            <div className="space-y-2 bg-[#F7F6FB] p-3.5 rounded-xl border border-[#EEECF5]">
                <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-indigo-900 uppercase">Globex Executive Prep Brief</span>
                    <span className="text-[9px] text-gray-400">14-Day History</span>
                </div>
                <div className="divide-y divide-[#EEECF5] text-[10px]">
                    <div className="py-1.5 flex justify-between">
                        <span className="text-gray-500">Slack Activity</span>
                        <span className="font-semibold text-gray-900">12 threads (2 escalated)</span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                        <span className="text-gray-500">Zendesk Tickets</span>
                        <span className="font-semibold text-emerald-600">3 Resolved â€¢ 0 Open</span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                        <span className="text-gray-500">NPS Score</span>
                        <span className="font-semibold text-gray-900">9/10 (Promoter)</span>
                    </div>
                    <div className="py-1.5 flex justify-between">
                        <span className="text-gray-500">Main Focus</span>
                        <span className="font-semibold text-indigo-600">Upgrade to enterprise tier</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function Services() {
    const t = useTranslations("Services")

    const SERVICES_DATA = [
        {
            tag: t('sectionLabel'),
            title: t('services.0.title'),
            desc: t('services.0.desc'),
            bullets: [
                t('services.0.bullets.0'),
                t('services.0.bullets.1'),
                t('services.0.bullets.2')
            ],
            mockupType: "signals" as const
        },
        {
            tag: t('sectionLabel'),
            title: t('services.1.title'),
            desc: t('services.1.desc'),
            bullets: [
                t('services.1.bullets.0'),
                t('services.1.bullets.1'),
                t('services.1.bullets.2')
            ],
            mockupType: "linkedin" as const
        },
        {
            tag: t('sectionLabel'),
            title: t('services.2.title'),
            desc: t('services.2.desc'),
            bullets: [
                t('services.2.bullets.0'),
                t('services.2.bullets.1'),
                t('services.2.bullets.2')
            ],
            mockupType: "whatsapp" as const
        }
    ]
    return (
        <section id="services" className="pt-4 pb-8 lg:pt-6 lg:pb-12 bg-[#030611] border-t border-surface-2">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-12">
                    <p className="text-xs font-semibold text-accent-2 uppercase tracking-widest mb-4">{t('sectionLabel')}</p>
                    <h2 className="text-2xl font-medium tracking-tight text-white md:text-4xl">
                        {t('headline')}
                    </h2>
                </div>

                {/* Rows Grid */}
                <div className="flex flex-col">
                    {SERVICES_DATA.map((srv, idx) => (
                        <ServiceRow
                            key={srv.title}
                            rowIdx={idx}
                            tag={srv.tag}
                            title={srv.title}
                            desc={srv.desc}
                            bullets={srv.bullets}
                            mockupType={srv.mockupType}
                            isEven={idx % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
