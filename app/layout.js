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
        <script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFC9D8DQT9"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LFC9D8DQT9');
          `}
        </script>
      </head>
      <body className={`${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
