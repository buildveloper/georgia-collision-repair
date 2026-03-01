import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collision Repair Georgia | Free Auto Body Repair Quotes in Atlanta & More",
  description: "Get fast, free collision repair quotes in Georgia. Trusted auto body shops in Atlanta, Savannah, Augusta, Macon. No hassle – submit once for local car collision repair near me.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="fo-verify" content="3ad23b20-2ee1-47b1-80c5-1ca0afe0f077" />
        <meta name="google-site-verification" content="WXJUxjQIQ0GIPaLe5zuYlz5jA1dyA696KxjuXoyiHAE" />
        <script type="application/ld+json">
                {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Georgia Collision Repair",
          "url": "https://georgiacollisionrepair.com/",
          "description": "Free collision repair quotes in Georgia. Trusted auto body shops in Atlanta, Savannah, Augusta.",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "GA",
            "addressCountry": "US"
            // Add these if you have a real/virtual address for better local signals:
            // "addressLocality": "Atlanta",
            // "postalCode": "30303",
            // "streetAddress": "Virtual / Online Service - Serving Georgia"
          },
          "areaServed": "Georgia",  // Or ["Atlanta", "Savannah", "Augusta", "Macon"]
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Free Collision Repair Quotes",
                "serviceType": "Collision Repair, Auto Body Repair, Dent Repair, Auto Paint Services"
              }
            }
          ]
        })}
      </script>
      </head>

      <body suppressHydrationWarning className="bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}