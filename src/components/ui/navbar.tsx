"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { Button } from "./button"
import { GlimpseLogo } from "./glimpse-logo"
import { ArrowUpRight, Menu, X } from "lucide-react"

interface NavbarProps {
    onBookCall?: () => void
}

export function Navbar({ onBookCall }: NavbarProps) {
    const t = useTranslations("Navbar")
    const [scrolled, setScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled || isMobileMenuOpen ? "bg-[#030611]/90 backdrop-blur-md border-brand-500/10" : "border-transparent"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
                        <GlimpseLogo className="h-8 w-8" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-wider text-white leading-none uppercase">NexaWorks</span>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-text-secondary">
                        <Link href="/en/solutions/code-evaluation" className="hover:text-white transition-colors">Code Evaluation</Link>
                        <Link href="/en/solutions/rlhf-alignment" className="hover:text-white transition-colors">RLHF</Link>
                        <Link href="/en/#how-it-works" className="hover:text-white transition-colors">{t('howItWorks')}</Link>
                        <Link href="/en/#services" className="hover:text-white transition-colors">{t('results')}</Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button
                            className="glossy-neon-btn hidden sm:flex group relative h-10 px-5 text-sm font-semibold text-white overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_35px_rgba(6,182,212,0.85)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                            onClick={onBookCall || (() => window.open('https://calendly.com/nexaworkss/waitlist', '_blank'))}
                        >
                            <span className="relative z-10 flex items-center">{t('bookDemo')}</span>
                            <ArrowUpRight className="relative z-10 ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200" />
                        </Button>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-brand-500/10 bg-[#030611]/60 text-text-muted hover:text-white transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden border-t border-brand-500/10 bg-[#030611]/95 backdrop-blur-lg px-6 py-8 space-y-6 flex flex-col items-center text-center overflow-hidden"
                    >
                        <Link
                            href="/en/solutions/code-evaluation"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2 block w-full"
                        >
                            Code Evaluation
                        </Link>
                        <Link
                            href="/en/solutions/rlhf-alignment"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2 block w-full"
                        >
                            RLHF
                        </Link>
                        <Link
                            href="/en/#how-it-works"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2 block w-full"
                        >
                            {t('howItWorks')}
                        </Link>
                        <Link
                            href="/en/#services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-text-secondary hover:text-white transition-colors py-2 block w-full"
                        >
                            {t('results')}
                        </Link>
                        <div className="pt-4 w-full border-t border-brand-500/5">
                            <Button
                                className="glossy-neon-btn group h-12 w-full px-5 text-sm font-medium text-white"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    if (onBookCall) onBookCall();
                                    else window.open('https://calendly.com/nexaworkss/waitlist', '_blank');
                                }}
                            >
                                {t('bookDemo')}
                                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-200" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
