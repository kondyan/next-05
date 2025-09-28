import Header from "@/components/header";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextPosts",
  description: "Browse and share amazing posts.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
