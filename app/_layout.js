import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router'
import { View } from 'react-native'
import "../global.css";
import { AuthContextProvider } from '../context/AuthContext';

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("#11181d");
  return (
    <AuthContextProvider>
      <View className="flex-1 bg-[#11181d] items-center justify-center px-5">
        <StatusBar style="light" />
        <Slot />
      </View>
    </AuthContextProvider>
  )
}