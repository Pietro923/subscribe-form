"use client";
import React, { createContext, useContext } from 'react';
import { useTheme } from 'next-themes';

interface ThemeContextType {
  toggleTheme: () => void;
  currentTheme: string;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  currentTheme: 'dark'
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ 
      toggleTheme, 
      currentTheme: theme || 'dark' 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);