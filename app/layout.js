import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = localFont({
  src: "./fonts/Playfair-VariableFont_opsz,wdth,wght.ttf",
  variable: "--font-playfair-display",
  weight: "100 900",
});

export const metadata = {
  title: "RK Architect, PA | RK Builders, Inc.",
  description: "Robert Kirchgessner - Architect | Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
