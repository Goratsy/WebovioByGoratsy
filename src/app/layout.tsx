import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./homepage.css";
import Header from "@/pages/Homepage/Header/Header";
import Footer from "@/pages/Homepage/Footer/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic']
});


export const metadata: Metadata = {
  title: "Webovio",
  description: "Webovio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
