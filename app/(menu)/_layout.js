import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import "../../global.css";
import { AuthContextProvider } from '../../context/AuthContext';

export default function MenuLayout() {
  NavigationBar.setBackgroundColorAsync("#11181d");
  return (
    <AuthContextProvider>
      <>
        <StatusBar style="light" />
        <Stack />
      </>
    </AuthContextProvider>

  )
}