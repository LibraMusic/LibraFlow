import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';

import { convertTheme } from '@/hooks/convertTheme';
import { DefaultLightTheme, DefaultDarkTheme } from '@/constants/DefaultThemes';

export default function RootLayout() {
  const lightTheme = DefaultLightTheme;
  const darkTheme = DefaultDarkTheme;

  // TODO: Utilize a global StyleSheet variable for the theme

  return (
    <ThemeProvider value={convertTheme(lightTheme, darkTheme)}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops! Not Found' }} />
      </Stack>
    </ThemeProvider>
  );
}
