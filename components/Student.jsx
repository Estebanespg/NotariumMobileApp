import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text } from 'react-native';

export function Student() {
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
      <View className="flex-row w-full h-16 justify-between items-center bg-slate-600 px-6 mt-5 rounded-lg">
        <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-lg">Student</Text>
        <Text style={{ fontFamily: 'Sora_300Light' }} className="color-slate-400 text-base"># Asignaturas</Text>
      </View>
    </>
  );
}