import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { AppTheme, lightTheme, darkTheme, setTheme } from '../theme/theme';

interface ThemeContextType {
  theme: AppTheme;
  isDark: boolean;
  toggleTheme: () => void;
  setAutoTheme: (auto: boolean) => void;
  isAutoTheme: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');
  const [isAutoTheme, setIsAutoTheme] = useState(true);

  useEffect(() => {
    if (isAutoTheme) {
      setIsDark(systemColorScheme === 'dark');
    }
  }, [systemColorScheme, isAutoTheme]);

  useEffect(() => {
    setTheme(isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setIsAutoTheme(false);
  };

  const setAutoTheme = (auto: boolean) => {
    setIsAutoTheme(auto);
    if (auto) {
      setIsDark(systemColorScheme === 'dark');
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        setAutoTheme,
        isAutoTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};