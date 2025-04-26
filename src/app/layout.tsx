import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "App Development",
    "Web Development",
    "Software Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "DevOps",
    "Cloud Engineering",
    "Pakistan",
    "USA",
    "UK",
    "Canada",
    "International Clients",
    "Freelance Developer",
    "Mobile App Development",
    "Frontend Developer",
    "Backend Developer",
    "Islamabad",
    "Remote Developer",
    "Hire Developer",
    "Custom Software Solutions",
    "Modern Web Apps",
    "Cross Platform Apps",
    "React Native",
    "Portfolio",
    "Muneeb",
    "FAST NUCES",
    "Fiverr Developer",
    "Paklevel",
    "Telavets",
    "VibeShare",
    "TourMate",
    "Test Executor",
    "Cambridge Past Papers",
    "AI Automation",
    "Cloud Solutions"
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta name="google-site-verification" content="Adj9hb0CUisU8vp7wjhrBQkzMreXKch_2VYulgeH-RI" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      <Analytics/>
      </body>
    </html>
  );
}
