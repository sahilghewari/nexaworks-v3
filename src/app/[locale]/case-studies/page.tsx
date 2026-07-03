import { getTranslations } from 'next-intl/server';
import { CaseStudiesHero } from '@/components/case-studies/CaseStudiesHero';
import { CaseStudiesGrid } from '@/components/case-studies/CaseStudiesGrid';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'metadata' });
  return {
    title: 'Case Studies | NexaWorks by NexaWorks',
    description: 'Discover how modern Customer Success teams reclaimed hours of manual data digging using NexaWorks.',
  };
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen relative font-sans tracking-tight bg-[#030611] text-white">
      <Navbar />
      <div className="pt-20">
        <CaseStudiesHero />
        <CaseStudiesGrid />
      </div>
      <Footer />
    </main>
  );
}
