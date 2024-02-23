import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Toolkit",
  description: "Toolkit App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"min-h-screen bg-green-50 flex flex-col " + inter.className}
      >
        <header>
          <Navbar />
        </header>
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
