import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { getSiteOrigin, absoluteUrl } from "./lib/site";
import { createPageMetadata } from "./lib/site-metadata";

const playfairDisplay = localFont({
  src: "./fonts/Playfair-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});

const siteTitle = "RK Architect, P.A. & RK Builders | Florida Resilient Design";
const siteDescription =
  "Architect and builder Robert Kirchgessner: disaster-resistant homes, multifamily inspections, and structural repairs in Florida and nationwide.";

const homeSocial = createPageMetadata("/", { title: siteTitle, description: siteDescription });

export const metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: {
    default: siteTitle,
    template: "%s | RK Architect, P.A.",
  },
  description: siteDescription,
  alternates: homeSocial.alternates,
  openGraph: homeSocial.openGraph,
  twitter: homeSocial.twitter,
  icons: {
    apple: [{ url: "/rk-architect-logo.jpg", sizes: "180x180", type: "image/jpeg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteTitle,
  description: siteDescription,
  url: absoluteUrl("/"),
  publisher: {
    "@type": "Organization",
    name: "RK Architect, P.A. & RK Builders, Inc.",
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/rk-architect-logo.jpg"),
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} antialiased`} style={{ backgroundColor: "#140D0C" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            (function () {
              var s = document.createElement('script');
              s.src = 'https://www.googletagmanager.com/gtag/js?id=G-LFC9D8DQT9';
              s.async = true;
              s.onload = function () {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LFC9D8DQT9');
              };
              document.head.appendChild(s);
            })();
          `}
        </Script>
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="absolute inset-0 bg-gradient-to-tr from-[#302a18] to-[#5A3A2F] opacity-30"
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
