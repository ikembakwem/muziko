import type { Metadata } from "next";
import "./globals.css";
import Header from "@components/header";
import Footer from "@components/footer";

export const metadata: Metadata = {
  title: "Muziko",
  description: "Enjoy your best gbedu on the web.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
