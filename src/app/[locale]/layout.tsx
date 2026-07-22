import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { GoogleAnalytics } from "@next/third-parties/google";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const BASE_URL = "https://nexaworks.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NexaWorks | AI Data Operations & Human Evaluation",
    template: "%s | NexaWorks",
  },
  description:
    "NexaWorks provides managed RLHF services, AI code evaluation, and human-in-the-loop data operations for frontier AI labs. Deploy vetted Senior SWE pods for pairwise ranking.",
  keywords: [
    "managed RLHF services",
    "ai code evaluation agency",
    "human-in-the-loop data operations",
    "pairwise ranking for LLMs",
    "SWE-bench human evaluation",
    "enterprise AI data annotation",
    "senior SWE evaluation pods",
    "multimodal AI evaluation",
  ],
  authors: [{ name: "NexaWorks", url: "https://nexaworks.tech" }],
  creator: "NexaWorks",
  publisher: "NexaWorks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "NexaWorks",
    title: "NexaWorks | AI Data Operations & Human Evaluation",
    description:
      "NexaWorks builds and manages high-quality human data operations for foundation models, RLHF, and AI evaluation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NexaWorks | AI Data Operations & Human Evaluation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks | AI Data Operations & Human Evaluation",
    description:
      "High-quality human data operations for foundation models, RLHF, and AI evaluation.",
    images: ["/og-image.jpg"],
    creator: "@nexaworks",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": `${BASE_URL}/en`,
      "x-default": `${BASE_URL}/en`,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/logos/bgless.png", type: "image/png" }
    ],
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

// Organization JSON-LD structured data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NexaWorks",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.png`,
  description:
    "NexaWorks builds and manages high-quality human data operations for foundation models, RLHF, and AI evaluation.",
  sameAs: [
    "https://www.linkedin.com/company/nexaworks",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "sales@nexaworks.tech",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Data Operations Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed RLHF Services",
          description: "End-to-end Reinforcement Learning from Human Feedback operations for foundation models.",
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Code Evaluation",
          description: "Vetted Senior Software Engineer pods for pairwise ranking and repository-level code evaluation.",
        }
      }
    ]
  }
};

// Website JSON-LD for sitelinks searchbox eligibility
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexaWorks",
  url: BASE_URL,
  description: "AI Data Operations & Human Evaluation",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-bg text-text-primary overflow-x-hidden w-full relative`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          <div aria-hidden="true" className="data-grid-bg" />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <GoogleAnalytics gaId="G-YD34N1NRVL" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
