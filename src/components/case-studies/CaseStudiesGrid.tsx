import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/case-studies';

export function CaseStudiesGrid() {
  return (
    <section id="case-studies-grid" className="py-24 bg-transparent text-white relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Proven Results Across Industries
          </h2>
          <p className="text-lg text-zinc-400">
            Read exactly how these companies transformed their outbound process, scaled revenue, and saved hundreds of hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="group glossy-neon-card flex flex-col rounded-3xl p-8 transition-all duration-300 relative overflow-hidden hover:-translate-y-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)]">
              {/* Subtle Top Cyber Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-cyan-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              {/* Ambient Background Glow */}
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-brand-500/10 rounded-full blur-3xl group-hover:bg-brand-500/20 transition-all duration-500 pointer-events-none" />

              {/* Industry Tag */}
              <div className="mb-5 flex items-center justify-between relative z-10">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-brand-500/15 border border-brand-500/30 text-cyan-300 font-semibold shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                  {study.industry || 'Enterprise SaaS'}
                </span>
              </div>
              
              {/* Client Title */}
              <h3 className="text-2xl font-bold mb-3 text-white tracking-tight flex items-center gap-3 relative z-10 group-hover:text-cyan-200 transition-colors">
                {study.title}
              </h3>

              {/* Highlight Metric Badge */}
              {study.highlightMetric && (
                <div className="my-4 p-5 rounded-2xl bg-gradient-to-br from-brand-500/15 via-surface-1/40 to-transparent border border-brand-500/30 shadow-[0_4px_25px_rgba(59,130,246,0.15)] flex items-center gap-4 relative z-10 group-hover:border-cyan-400/50 transition-colors">
                  <div className="text-2xl lg:text-3xl font-black font-sans tracking-tight bg-gradient-to-r from-brand-400 via-cyan-300 to-white bg-clip-text text-transparent whitespace-nowrap">
                    {study.highlightMetric}
                  </div>
                  <div className="text-xs text-text-dim leading-snug font-medium border-l border-surface-subtle/50 pl-3">
                    {study.metricLabel}
                  </div>
                </div>
              )}
              
              <p className="text-text-dim text-sm mb-6 flex-grow leading-relaxed relative z-10">
                {study.summary}
              </p>

              {/* Testimonial Excerpt */}
              {study.testimonial && (
                <div className="mb-6 pl-4 border-l-2 border-brand-500/50 italic text-xs text-text-muted leading-relaxed relative z-10 bg-surface-1/20 py-2 rounded-r-xl">
                  "{study.testimonial}"
                </div>
              )}
              
              <div className="pt-5 border-t border-surface-subtle/30 mt-auto flex items-center justify-between relative z-10">
                <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-brand-400 font-semibold text-sm hover:text-cyan-300 transition-colors">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
