import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="(home)" options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="(settings)" options={{
        title: 'Settings',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'cog-sharp' : 'cog-outline'} color={color} size={24}/>
        ),
      }} />
    </Tabs>
  );
}
