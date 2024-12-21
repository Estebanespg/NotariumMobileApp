import { Tabs } from "expo-router";

export default function SettingsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="Students"
        options={{
          title: 'Menú'
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: 'Configuración'
        }}
      />
    </Tabs>
  )
}