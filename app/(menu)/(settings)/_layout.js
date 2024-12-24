import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SettingsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#0c1114', borderTopWidth: 0 },
        tabBarActiveTintColor: "#6440a5",
      }}
    >
      <Tabs.Screen
        name="Students"
        options={{
          title: 'Estudiantes',
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={26} color={color} />
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => <FontAwesome name="gear" size={26} color={color} />
        }}
      />
    </Tabs>
  )
}