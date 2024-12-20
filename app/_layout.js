import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Slot } from 'expo-router';
import "../global.css";
import { AuthContextProvider } from '../context/AuthContext';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{
        borderLeftColor: 'green',
        borderLeftWidth: 7,
        width: '90%',
        height: '70',
        borderRightColor: 'green',
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: '700'
      }}
      text2Style={{
        fontSize: 14,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: '#EF4444',
        borderLeftWidth: 7,
        width: '90%',
        height: '80',
        borderRightColor: '#EF4444',
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: '700'
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  ),
  info: (props) => (
    <ErrorToast
      {...props}
      text2NumberOfLines={3}
      style={{
        borderLeftColor: '#6440a5',
        borderLeftWidth: 7,
        width: '90%',
        height: '70',
        borderRightColor: '#6440a5',
        borderRightWidth: 7,
      }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
        fontWeight: '700'
      }}
      text2Style={{
        fontSize: 14
      }}
    />
  )
};

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("#11181d");
  return (
    <AuthContextProvider>
      <>
        <StatusBar style="light" />
        <Slot />
        <Toast config={toastConfig} />
      </>
    </AuthContextProvider>
  )
}