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
        <div className="h-screen w-full flex">
          <aside className="w-fit">
            <Sidebar />
          </aside>

          <main
            className="flex-1"
            style={{ backgroundColor: "var(--marigold)" }}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
