"use client";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import DynamicCSS from "./components/DynamicCSS";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "var(--background)" }}>
        <DynamicCSS />
        <div className="h-screen w-full flex">
          <aside className="w-fit">
            <Sidebar />
          </aside>

          <main className="flex-1" style={{ backgroundColor: "var(--matcha)" }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
