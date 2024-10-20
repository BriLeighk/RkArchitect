import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = localFont({
  src: "./fonts/Playfair-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});

export const metadata = {
  title: "RK Architect, PA & RK Builders, Inc. | Disaster Resistant Homes",
  description: "Explore innovative architectural designs and construction solutions by Robert Kirchgessner, specializing in disaster-resistant homes and multifamily building inspections.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://robertkarchitect.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": metadata.title,
              "description": metadata.description,
              "url": "https://robertkarchitect.com",
              "publisher": {
                "@type": "Organization",
                "name": "RK Architect, PA & RK Builders",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://robertkarchitect.com/rk-architect-logo.jpg"
                }
              }
            }),
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFC9D8DQT9"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LFC9D8DQT9');
            `,
          }}
        />
      </head>
      <body className={`${playfairDisplay.variable} antialiased`} style={{ backgroundColor: '#140D0C' }}>
        <div
          aria-hidden="true"
          className="fixed inset-0 z-0 transform-gpu overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="absolute inset-0 bg-gradient-to-tr from-[#302a18] to-[#5A3A2F] opacity-30"
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
