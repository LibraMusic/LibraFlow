import { DarkTheme, DefaultTheme } from "@react-navigation/native";

import { Theme } from "@/types/Theme";

export const DefaultLightTheme: Theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: '#0a7ea4',
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
}

export const DefaultDarkTheme: Theme = {
  colors: {
    ...DarkTheme.colors,
    primary: '#bd85b3',
    background: '#121212',
  },
  fonts: {
    ...DarkTheme.fonts,
  },
}
