import { MD3LightTheme } from 'react-native-paper';

export const theme = {
  ...MD3LightTheme,
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
  },
  fonts: {
    ...MD3LightTheme.fonts,
  },
  animation: {
    scale: 1.0,
  },
};