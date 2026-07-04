import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { BlogPostContent } from "./blog-post-content"

import { FALLBACK_POSTS } from "@/data/fallback-posts"

const BASE_URL = "https://www.nexaworks.tech"

async function getPost(slug: string) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .single()
    if (data) return data
  } catch {
    // Supabase error or unreachable
  }
  return FALLBACK_POSTS.find((p) => p.slug === slug) || null
}

// Dynamic metadata per blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
      robots: { index: false, follow: false },
    }
  }

  const ogImage = post.cover_image || "/og-image.png"
  const publishedDate = post.published_at || post.created_at

  return {
    title: post.title,
    description: post.excerpt || `Read "${post.title}" on the NexaWorks blog.`,
    alternates: {
      canonical: `${BASE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      url: `${BASE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt || `Read "${post.title}" on the NexaWorks blog.`,
      publishedTime: publishedDate,
      modifiedTime: post.updated_at,
      authors: [`${BASE_URL}`],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || `Read "${post.title}" on the NexaWorks blog.`,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  // Article JSON-LD structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt || "",
    image: post.cover_image || `${BASE_URL}/og-image.png`,
    datePublished: post.published_at || post.created_at,
    dateModified: post.updated_at,
    author: {
      "@type": "Organization",
      name: "NexaWorks",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "NexaWorks",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostContent post={post} />
    </>
  )
}
