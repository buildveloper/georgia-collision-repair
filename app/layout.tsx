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
      <body suppressHydrationWarning className="bg-zinc-50 text-zinc-900">
        {children}
      </body>
    </html>
  );
}