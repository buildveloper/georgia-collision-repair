import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Georgia Collision Repair | Free Local Quotes",
  description: "Fast free collision repair quotes in Georgia. Atlanta, Savannah, Augusta & more. Tell us once, trusted shops call you.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="fo-verify" content="3ad23b20-2ee1-47b1-80c5-1ca0afe0f077" />
      </head>

      <body suppressHydrationWarning className="bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}