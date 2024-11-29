import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Student } from '../components/Student';

export default function Read() {
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
    return <Text>Cargando fuentes...</Text>;
  }

  return (
    <>
      {/* TITLE */}
      <View className="h-1/4 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Consultar Estudiante</Text>
      </View>

      {/* TABLE */}
      <View className="w-full h-1/2 pt-5 pr-10 pb-10 pl-10">
        <ScrollView>
          <Student />
        </ScrollView>

        {/* SCROLLVIEW OR THIS... */}
        {/* <View className="h-full justify-center items-center">
          <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white text-lg">Aún no hay estudiantes</Text>
        </View> */}
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/4">
        <Link asChild href="/Menu">
          <Pressable className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
            <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
              Atrás
            </Text>
          </Pressable>
        </Link>
      </View>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  );
}