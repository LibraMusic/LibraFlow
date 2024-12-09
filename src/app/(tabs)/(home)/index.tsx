import { Text, View, StyleSheet, ViewStyle, ImageStyle, TextStyle, StyleProp } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
});
