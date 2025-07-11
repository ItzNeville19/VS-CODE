import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export interface AppTheme {
  isDark: boolean;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    error: string;
    background: string;
    surface: string;
    surfaceVariant: string;
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    elevation: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
    surfaceDisabled: string;
    onSurfaceDisabled: string;
    backdrop: string;
    // Custom colors for LIFEØS
    gradientStart: string;
    gradientEnd: string;
    cardBackground: string;
    cardBorder: string;
    success: string;
    warning: string;
    info: string;
  };
  fonts: any;
  animation: {
    scale: number;
  };
}

export const lightTheme: AppTheme = {
  isDark: false,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4285F4', // Google Blue
    secondary: '#34A853', // Google Green
    tertiary: '#FBBC04', // Google Yellow
    error: '#EA4335', // Google Red
    background: '#FAFAFA',
    surface: '#FFFFFF',
    surfaceVariant: '#F8F9FA',
    onSurface: '#202124',
    onSurfaceVariant: '#5F6368',
    outline: '#DADCE0',
    outlineVariant: '#E8EAED',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#202124',
    inverseOnSurface: '#FFFFFF',
    inversePrimary: '#8AB4F8',
    elevation: {
      level0: 'transparent',
      level1: '#FFFFFF',
      level2: '#FFFFFF',
      level3: '#FFFFFF',
      level4: '#FFFFFF',
      level5: '#FFFFFF',
    },
    surfaceDisabled: '#F1F3F4',
    onSurfaceDisabled: '#9AA0A6',
    backdrop: 'rgba(0, 0, 0, 0.5)',
    // Custom colors
    gradientStart: '#4285F4',
    gradientEnd: '#34A853',
    cardBackground: '#FFFFFF',
    cardBorder: '#E8EAED',
    success: '#34A853',
    warning: '#FBBC04',
    info: '#4285F4',
  },
  fonts: MD3LightTheme.fonts,
  animation: {
    scale: 1.0,
  },
};

export const darkTheme: AppTheme = {
  isDark: true,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#8AB4F8', // Lighter Google Blue for dark mode
    secondary: '#81C995', // Lighter Google Green for dark mode
    tertiary: '#FDD663', // Lighter Google Yellow for dark mode
    error: '#F28B82', // Lighter Google Red for dark mode
    background: '#0F0F0F',
    surface: '#1C1C1E',
    surfaceVariant: '#2C2C2E',
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#EBEBF5',
    outline: '#38383A',
    outlineVariant: '#48484A',
    shadow: '#000000',
    scrim: '#000000',
    inverseSurface: '#FFFFFF',
    inverseOnSurface: '#1C1C1E',
    inversePrimary: '#4285F4',
    elevation: {
      level0: 'transparent',
      level1: '#1C1C1E',
      level2: '#2C2C2E',
      level3: '#3A3A3C',
      level4: '#48484A',
      level5: '#636366',
    },
    surfaceDisabled: '#1C1C1E',
    onSurfaceDisabled: '#3A3A3C',
    backdrop: 'rgba(0, 0, 0, 0.7)',
    // Custom colors for dark mode
    gradientStart: '#8AB4F8',
    gradientEnd: '#81C995',
    cardBackground: '#1C1C1E',
    cardBorder: '#38383A',
    success: '#81C995',
    warning: '#FDD663',
    info: '#8AB4F8',
  },
  fonts: MD3DarkTheme.fonts,
  animation: {
    scale: 1.0,
  },
};

// Default theme (will be set based on system preference)
export let theme: AppTheme = lightTheme;

export const setTheme = (isDark: boolean) => {
  theme = isDark ? darkTheme : lightTheme;
};

export const getTheme = (): AppTheme => theme;