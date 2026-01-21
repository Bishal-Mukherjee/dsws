import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

import { Navbar } from "@/components/layout/Navbar";
import { Main } from "@/components/layout/Main";
import { Footer } from "@/components/layout/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dhagagia Social Welfare Society (DSWS)",
  keywords: ["DSWS", "Dhagagia Social Welfare Society", "Social Welfare"],
  description:
    "Dhagagia Social Welfare Society (DSWS) is a organization dedicated to fostering social welfare and community development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("tracking-tight antialiased", lexend.className)}>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
