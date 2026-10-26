import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince Earl Gabatino | IT Student Portfolio",
  description:
    "Personal CV and project portfolio of Prince Earl Gabatino, a BS Information Technology student at Davao del Norte State College.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
