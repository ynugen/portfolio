"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import DynamicCSS from "./components/DynamicCSS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "var(--matcha)",
          border: "var(--slate-grey) 1px solid",
        }}
      >
        <DynamicCSS />
        <div className="h-screen w-full page-layout">
          <Sidebar />
          <MobileHeader />

          <main
            className="flex-1"
            style={{ backgroundColor: "var(--background)" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
