import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@components/navbar";

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
  title: "Enrico Mattei",
  description: "L'uomo che rese l'italia una superpotenza",
  icons: {
    icon: "/images/Eni-logo.png",  // non funziona l'icona
  },
};

const navItems = [
  { text: 'Home', link: '/', current: true },
  { text: 'Enrico Mattei', link: '/Mattei' },
  { text: "L'ENI", link: '/Eni' },
  { text: 'La potenza mondiale', link: '#' },
  { text: 'La morte', link: '#' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar navItems={navItems}/>
        {children}
      </body>
    </html>
  );
}
