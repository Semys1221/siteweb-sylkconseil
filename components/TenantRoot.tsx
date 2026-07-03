"use client";

import { ThemeProvider } from "next-themes";
import type { TenantConfig } from "@/lib/tenant-config";

export function TenantRoot({
  config,
  children,
}: {
  config: TenantConfig;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
