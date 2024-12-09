import { useColorScheme } from 'react-native';
import { Theme as NativeTheme } from '@react-navigation/native';

import { Theme } from '@/types/Theme';

export function convertTheme(
  lightTheme: Theme,
  darkTheme: Theme,
): NativeTheme {
  const colorScheme = useColorScheme() ?? 'light';

  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;
  const convertedTheme: NativeTheme = {
    dark: colorScheme === 'dark',
    colors: theme.colors,
    fonts: theme.fonts,
  };

  // TODO: Use ConvertedTheme as the return type (contains a NativeTheme and StyleSheet)

  return convertedTheme;
}
