import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { TenantRoot } from "@/components/TenantRoot";
import { NavbarWrapper } from "@/components/NavbarWrapper";
import { tenantConfig } from "@/lib/tenant-config";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${tenantConfig.name} | ${tenantConfig.tagline}`,
  description: "Conseil indépendant en gestion de patrimoine — optimisation fiscale, retraite & transmission.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${playfair.variable} antialiased bg-white text-black`}>
        <TenantRoot config={tenantConfig}>
          <div className="flex flex-col min-h-screen">
            <NavbarWrapper />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </TenantRoot>
      </body>
    </html>
  );
}
