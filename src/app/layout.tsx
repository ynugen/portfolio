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
      <body style={{ backgroundColor: "var(--marigold)" }}>
        <div className="grid grid-cols-8 h-screen w-full">
          <aside className="col-span-3">
            <Sidebar />
          </aside>

          <main className="col-span-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
