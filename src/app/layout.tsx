"use client";
import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { LanguageProvider, useLanguageContext } from "@/context/LanguageContext";
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;  
  }
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex 
          flex-col 
          bg-gradient-dark 
          dark:bg-gradient-light
        `}>

        {/* Main Content */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <div className="absolute top-4 right-4 flex space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
            
            <main className="flex-grow flex flex-col items-center justify-center">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

// Componente de Toggle de Idioma
function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageContext();

  return (
    <button 
      onClick={toggleLanguage}
      className="p-2 bg-gray-200 dark:bg-gray-500 rounded-full"
    >
      {language === 'en' ? '🇺🇸' : '🇪🇸'}
    </button>
  );
}

// Componente de Toggle de Tema
function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-gray-500 rounded-full"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}