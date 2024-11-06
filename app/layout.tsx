import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import { Toaster } from "../components/ui/toaster";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quiz Foot, apprends l'histoire du foot en t'amusant !",
  description:
    "Quiz sur le football. De la Ligue 1 à la Coupe du monde, en passant par la Ligue des Champions ou la Coupe de France, réponds à des centaines de questions...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gradient-to-r from-slate-950 to-indigo-500 antialiased`}
      >
        {/* <SessionProvider> */}
        <Navbar />
        {children}
        <Toaster />
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
