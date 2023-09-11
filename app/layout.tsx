"use client";
import { useState, useEffect } from "react";
import Navbar from "@/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Footer from "@/layout/Footer";
import Preloader from "@/components/preloader/Preloader";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "voge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 2 seconds (adjust as needed)
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <html lang="en">
      <body className={roboto.className}>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
