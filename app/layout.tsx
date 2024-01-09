import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
