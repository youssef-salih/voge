import Navbar from "@/layout/Navbar";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";
import Footer from "@/layout/Footer";
import { Metadata } from "next";

const roboto = Roboto_Condensed({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
