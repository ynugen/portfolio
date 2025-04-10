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
        <div className=" h-screen w-full">
          <aside className="">
            <Sidebar />
          </aside>

          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
