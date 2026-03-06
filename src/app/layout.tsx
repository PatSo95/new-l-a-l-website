import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lion & Land | International Real Estate Advisory",
  description:
    "Lion & Land is a premium international real estate advisory for buyers exploring opportunities in the UAE, Greece, and Thailand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
