import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import "../global.css";
import { AuthContextProvider } from '../context/AuthContext';

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("#11181d");
  return (
    <AuthContextProvider>
      <>
        <StatusBar style="light" />
        <Slot />
      </>
    </AuthContextProvider>
  )
}