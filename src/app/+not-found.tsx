import { View } from 'react-native';
import { Link } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <View>
      <Link href="/">
        Go back to Home screen!
      </Link>
    </View>
  );
}
