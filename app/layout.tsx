import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Lato,
  Dancing_Script,
} from "next/font/google";
import "leaflet/dist/leaflet.css";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust based on needs
  variable: "--font-lato",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust as needed
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cat's Paw Café",
  description: "A cozy place for coffee and cats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
