import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "../globals.css";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { GoogleAnalytics } from "@next/third-parties/google";
import { RB2BAnalytics } from "@/components/analytics/rb2b";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const sora = Sora({ subsets: ["latin"], variable: "--font-sans" });

const BASE_URL = "https://usehive.tech";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NexaWorks — Chrome Extension for Customer Success Prep",
    template: "%s | NexaWorks by NexaWorks",
  },
  description:
    "NexaWorks is a browser extension that silently reads Slack, Zendesk, and CRM data to give you a 1-page executive prep brief 5 minutes before every customer call.",
  keywords: [
    "csm prep",
    "customer success management",
    "slack integration",
    "crm sync",
    "executive brief",
    "zendesk extension",
    "salesforce integration",
    "hubspot csm tool",
    "meeting intelligence",
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
    siteName: "NexaWorks by NexaWorks",
    title: "NexaWorks — Chrome Extension for Customer Success Prep",
    description:
      "NexaWorks silently reads your Slack, Zendesk, and CRM data to give you a 1-page executive prep brief 5 minutes before every customer call.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexaWorks — Chrome Extension for Customer Success Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaWorks — Chrome Extension for Customer Success Prep",
    description:
      "Never walk into a customer conversation blind again. Get a 1-page executive brief 5 minutes before every call.",
    images: ["/og-image.png"],
    creator: "@nexaworks",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en": `${BASE_URL}/en`,
      "de": `${BASE_URL}/de`,
      "fr": `${BASE_URL}/fr`,
      "ar": `${BASE_URL}/ar`,
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
  verification: {
    google: "google85224852cc74b547",
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
    "NexaWorks builds intelligent software utilities for modern B2B professionals.",
  sameAs: [
    "https://linkedin.com/in/pavanbabar",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "pavan@nexaworks.tech",
    availableLanguage: "English",
  },
};

// Website JSON-LD for sitelinks searchbox eligibility
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NexaWorks",
  url: BASE_URL,
  description: "Chrome Extension for Customer Success Prep",
};

// SoftwareApplication JSON-LD structured data for AI engines & SEO rich results
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "NexaWorks",
  url: BASE_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Chrome, Web Browser",
  description:
    "NexaWorks silently reads messy Slack, Zendesk, and CRM data to hand Customer Success teams a 1-page executive prep brief 5 minutes before every call.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Beta Access Available",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "48",
  },
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
        {/* Preconnect to Supabase for faster data fetching */}
        <link rel="preconnect" href="https://hftctbmruaepokrokdwv.supabase.co" />
        <link rel="dns-prefetch" href="https://hftctbmruaepokrokdwv.supabase.co" />
        {/* Preconnect to Google Fonts (already handled by next/font but belt-and-suspenders) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Organization structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* SoftwareApplication structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body className={`${sora.variable} font-sans antialiased bg-bg text-text-primary overflow-x-hidden w-full relative`}>
        <NextIntlClientProvider messages={messages}>
          <ScrollProgress />
          {/* Aurora gradient background — fixed, behind everything */}
          <div aria-hidden="true" className="aurora-bg" />
          <SmoothScroll>
            {children}
          </SmoothScroll>
          <WhatsAppButton />
          <GoogleAnalytics gaId="G-YD34N1NRVL" />
          <RB2BAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
