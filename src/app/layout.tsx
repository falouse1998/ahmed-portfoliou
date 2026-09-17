import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "DevOps & Cloud Infrastructure Engineer in Tunis. Google Cloud certified. Terraform, GKE, Kubernetes, GitLab CI/CD and Vault in production. Open to remote roles and relocation.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "DevOps Engineer",
    "Cloud Infrastructure Engineer",
    "Google Cloud",
    "GKE",
    "Kubernetes",
    "Terraform",
    "GitLab CI/CD",
    "HashiCorp Vault",
    "Site Reliability",
    "Tunis",
    "Remote",
  ],
  authors: [{ name: site.name, url: site.linkedin }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en",
    url: site.url,
    title: `${site.name} — ${site.role}`,
    description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0f",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.url,
  image: site.photo,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Tunis", addressCountry: "TN" },
  knowsAbout: [
    "Google Cloud Platform",
    "Kubernetes",
    "Terraform",
    "CI/CD",
    "HashiCorp Vault",
    "Linux infrastructure",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cloud Certified — Professional Cloud Architect",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Google Cloud Certified — Professional Cloud DevOps Engineer",
      credentialCategory: "certification",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrument.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border focus:border-line-strong focus:bg-elevated focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
