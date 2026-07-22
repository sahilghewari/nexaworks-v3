import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Code Evaluation Agency & Senior SWE Pods',
  description: 'Deploy managed pods of Senior Software Engineers for repository-level AI code evaluation, SWE-bench human evaluation, and complex pairwise ranking.',
};

export default function CodeEvaluationPage() {
  return (
    <main className="min-h-screen relative font-sans tracking-tight bg-[#030611] text-white selection:bg-blue-500/30">
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-blue-900/20 via-[#030611]/50 to-[#030611] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
      
      <article className="pt-32 pb-32 relative z-10">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <header className="mb-24 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 uppercase tracking-widest mb-8 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Service Overview
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-12 bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent max-w-4xl leading-tight">
              AI Code Evaluation by <span className="text-blue-500">Senior Engineers</span>
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
              Standard benchmarks like SWE-bench are not enough. We provide fully managed pods of vetted Software Engineers to perform pairwise ranking and logic verification on repository-level outputs.
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 mb-24">
            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold mb-6 text-white">Why crowdsourcing fails for code</h2>
              <ul className="space-y-4 text-zinc-400">
                <li className="flex items-start gap-3"><span className="text-red-500">✕</span> Lack of deep architectural context.</li>
                <li className="flex items-start gap-3"><span className="text-red-500">✕</span> Cannot evaluate cross-file logic dependencies.</li>
                <li className="flex items-start gap-3"><span className="text-red-500">✕</span> High variance in qualitative "engineering taste."</li>
              </ul>
            </div>
            <div className="bg-gradient-to-b from-blue-900/20 to-white/[0.02] border border-blue-500/20 rounded-3xl p-10 backdrop-blur-sm shadow-[0_0_40px_-15px_rgba(59,130,246,0.2)]">
              <h2 className="text-2xl font-bold mb-6 text-white">The NexaWorks SWE Pod Model</h2>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" /> Vetted Senior SWEs matched to your tech stack.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" /> Fully managed QA and inter-annotator agreement.</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" /> Zero R&D distraction for your internal engineering team.</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link href="/en/book" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
              Talk to Sales about Code Evaluation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
