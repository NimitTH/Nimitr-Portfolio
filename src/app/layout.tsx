import type { Metadata } from "next";
import { Geist, Geist_Mono, Bai_Jamjuree } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const bai_Jamjuree = Bai_Jamjuree({
  variable: "--font-bai_Jamjuree",
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700',]
});

export const metadata: Metadata = {
  title: "Nimitr's Portfolio",
  description: "A showcase of my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bai_Jamjuree.className}>
      <body
        className={`${bai_Jamjuree.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
