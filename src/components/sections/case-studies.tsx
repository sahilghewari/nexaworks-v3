"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function CaseStudies() {
  const t = useTranslations("CaseStudies");

  // We are mapping over the case studies defined in the translation JSON.
  const studies = [
    {
      client: t("magic.client"),
      challenge: t("magic.challenge"),
      solution: t("magic.solution"),
      outcome: t("magic.outcome"),
      tags: [t("magic.tag1"), t("magic.tag2"), t("magic.tag3")],
    },
  ];

  return (
    <section className="w-full bg-black py-24 relative overflow-hidden border-b border-surface-2">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-surface-2 bg-surface px-3 py-1 text-sm text-text-muted mb-6 font-mono">
            {t("sectionLabel")}
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            {t("headline")}
          </h2>
          <p className="text-lg text-text-muted max-w-2xl font-mono">
            {t("subhead")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {studies.map((study, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-surface-2 bg-surface/50 p-8 md:p-12 transition-all hover:bg-surface"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-6xl font-bold">
                0{idx + 1}
              </div>
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Left Column: Client & Tags */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">
                      {study.client}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-3 py-1 rounded-full border border-surface-2 bg-black text-xs font-mono text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/case-studies/magic-ai" className="mt-12 hidden lg:flex items-center gap-2 text-text-muted group-hover:text-white transition-colors cursor-pointer">
                    <span className="font-mono text-sm uppercase tracking-widest">Read Full Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Column: Challenge, Solution, Outcome */}
                <div className="lg:col-span-2 space-y-8 font-mono text-sm">
                  <div>
                    <h4 className="text-white uppercase tracking-widest mb-2 font-semibold">The Challenge</h4>
                    <p className="text-text-muted leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-white uppercase tracking-widest mb-2 font-semibold">Our Solution</h4>
                    <p className="text-text-muted leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-surface-2">
                    <h4 className="text-white uppercase tracking-widest mb-4 font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      The Outcome
                    </h4>
                    <p className="text-text-muted leading-relaxed">
                      {study.outcome}
                    </p>
                  </div>
                  
                  {/* Mobile Only Read More */}
                  <Link href="/case-studies/magic-ai" className="mt-8 flex lg:hidden items-center gap-2 text-text-muted group-hover:text-white transition-colors cursor-pointer">
                    <span className="font-mono text-sm uppercase tracking-widest">Read Full Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
