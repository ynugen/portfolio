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
      <body
        style={{
          backgroundColor: "var(--matcha)",
          height: "100vh",
          scrollBehavior: "smooth",
          overflowY: "scroll",
          maxHeight: "100vh",
          position: "relative",
        }}
      >
        <DynamicCSS />
        <div className="h-screen w-full page-layout">
          <Sidebar />
          <MobileHeader />

          <main
            className="flex-1"
            style={{
              backgroundColor: "var(--background)",
              border: "var(--slate-grey) 1px solid",
            }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
