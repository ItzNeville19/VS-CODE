import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '../context/ThemeContext';

interface LiquidGlassProps {
  children: React.ReactNode;
  style?: ViewStyle;
  intensity?: number;
  tint?: 'light' | 'dark' | 'default';
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
}

const LiquidGlass: React.FC<LiquidGlassProps> = ({
  children,
  style,
  intensity = 20,
  tint = 'default',
  borderRadius = 16,
  borderWidth = 1,
  borderColor,
}) => {
  const { theme } = useTheme();

  const getTint = () => {
    if (tint === 'light') return 'light';
    if (tint === 'dark') return 'dark';
    return theme.isDark ? 'dark' : 'light';
  };

  const getBorderColor = () => {
    if (borderColor) return borderColor;
    return theme.isDark 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.05)';
  };

  return (
    <View style={[styles.container, style]}>
      <BlurView
        intensity={intensity}
        tint={getTint()}
        style={[
          styles.blurView,
          {
            borderRadius,
            borderWidth,
            borderColor: getBorderColor(),
          },
        ]}
      >
        {children}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  blurView: {
    overflow: 'hidden',
  },
});

export default LiquidGlass;