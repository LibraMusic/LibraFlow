import { Theme as NativeTheme } from '@react-navigation/native';

export type Theme = Omit<NativeTheme, 'dark'>;