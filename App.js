import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Login } from './components/Login';

export default function App() {
  NavigationBar.setBackgroundColorAsync("#11181d");
  return (
    <View className="flex-1 bg-[#11181d] items-center justify-center px-5">
      <StatusBar style="light" />
      <Login />
    </View>
  );
}