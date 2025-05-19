import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Provider from "@/redux/provider"
import { Navbar, Footer } from "@/components/common"
import { Setup } from "@/components/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Full Auth",
  description: "Fukk Auth application that provides jwt authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <Setup />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
