"use client"

import Script from "next/script"

export function RB2BAnalytics() {
  const apiKey = process.env.NEXT_PUBLIC_RB2B_API_KEY || "5NRP9H7JJ5O1"

  if (!apiKey) {
    return null
  }

  return (
    <Script
      id="rb2b-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(key) {
            if (window.reb2b) return;
            window.reb2b = {loaded: true};
            var s = document.createElement("script");
            s.async = true;
            s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";
            var first = document.getElementsByTagName("script")[0];
            if (first && first.parentNode) {
              first.parentNode.insertBefore(s, first);
            } else {
              document.head.appendChild(s);
            }
          }("${apiKey}");
        `,
      }}
    />
  )
}
