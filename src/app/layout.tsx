"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import MobileHeader from "./components/MobileHeader";
import DynamicCSS from "./components/DynamicCSS";
import "./globals.css";
import {
  pixeloid,
  timetwist,
  helveticaNeue,
  milkyVintage,
} from "@/app/fonts/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pixeloid.variable} ${timetwist.variable} ${helveticaNeue.variable} ${milkyVintage.variable}`}
    >
      <body className="full-page">
        <DynamicCSS />
        <div className="h-screen w-full page-layout">
          <MobileHeader />
          <Sidebar />

          <main
            className="flex-1"
            style={{
              backgroundColor: "var(--background)",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
