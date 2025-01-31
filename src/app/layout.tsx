import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arham Memorial Coaching",
  description: "Generated by Arham Memorial Coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
