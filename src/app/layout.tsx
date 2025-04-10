"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "var(--background)" }}>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
}
