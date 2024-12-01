import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export function SubjectCard() {
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
      <View className="flex-row w-full h-14 justify-center items-center bg-slate-600 p-2 rounded-t-lg">
        <View className="w-9/12">
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-center text-lg mr-5">Subject</Text>
        </View>
        <View className="flex-row w-3/12 justify-center">
          <Link asChild href="/Update">
            <FontAwesome name="pencil" size={26} color="#fca130" />
          </Link>
          <FontAwesome className="ml-5" name="trash" size={26} color="#f93e3e" />
        </View>
      </View>
      <View className="w-full h-auto items-center bg-slate-400 mb-8 pr-4 pb-4 pl-4 rounded-b-lg">
        <View className="w-full flex-row justify-between mt-5">
          <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/2 color-black text-left">Parameter</Text>
          <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/4 color-black text-center">Grade</Text>
          <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/4 color-black text-center">Percentage</Text>
        </View>
      </View>
    </>
  );
}