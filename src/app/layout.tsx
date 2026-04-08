import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saksham Senior — Complete Your Subscription",
  description: "Onboarding form for Saksham Senior plans",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
