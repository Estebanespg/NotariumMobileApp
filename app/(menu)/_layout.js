import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import "../../global.css";
import { AuthContextProvider } from '../../context/AuthContext';
import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import ScreenLayout from '../../components/ScreenLayout';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import icon from '../../assets/ic_notarium_light_white.png';

export default function MenuLayout() {
  const [fontsLoaded] = useFonts({
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <ScreenLayout><ActivityIndicator color={"#fff"} size={"large"} /></ScreenLayout>;
  }

  return (
    <AuthContextProvider>
      <>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#0c1114" },
            headerTintColor: "white",
            title: "",
            headerTitle: () =>
              <View className="flex-row items-center">
                <Image className="w-10 h-10" source={icon} />
                <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white tracking-wide ml-2">Notarium</Text>
              </View>,
            // headerLeft: () => <Image className="w-10 h-10 mt-5" source={icon} />,
          }}
        />
      </>
    </AuthContextProvider>

  )
}