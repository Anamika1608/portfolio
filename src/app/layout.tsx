import type { Metadata } from "next";
import { Crimson_Pro, Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import { profile, SITE_URL } from "@/data/profile";
import "./globals.css";

const crimson = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: profile.name, template: `%s · ${profile.name}` },
  description: profile.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: profile.name,
    description: profile.tagline,
    siteName: profile.name,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.tagline,
    images: ["/og.png"],
    creator: "@anamika_agg",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: profile.name,
      jobTitle: profile.title,
      description: profile.tagline,
      email: `mailto:${profile.email}`,
      url: SITE_URL,
      sameAs: profile.links.filter((l) => l.rel === "me").map((l) => l.url),
      knowsAbout: [
        "Backend systems",
        "Runtime infrastructure",
        "OpenTelemetry",
        "Go",
        "AWS",
        "Unikernels",
        "SAML",
        "OIDC",
        "CI/CD",
      ],
      worksFor: {
        "@type": "Organization",
        name: profile.work[0].company,
        url: profile.work[0].companyUrl,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: profile.name,
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${crimson.variable} ${geist.variable} ${geistMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
