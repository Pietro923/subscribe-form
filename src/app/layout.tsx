import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata específica para el proyecto
export const metadata: Metadata = {
  title: "Subscribe Form",
  description: "A simple and functional subscription form built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        style={{
          background: "linear-gradient(to top, #232526, #414345)"
        }}
      >

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center">
          
          {children}
        </main>

      </body>
    </html>
  );
}
