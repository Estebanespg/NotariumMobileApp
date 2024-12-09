import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SubjectCard } from '../../components/SubjectCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ScreenLayout from '../../components/ScreenLayout';

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
    return <ScreenLayout><Text className="color-white">Cargando fuentes...</Text></ScreenLayout>;
  }

  return (
    <ScreenLayout>
      {/* TITLE */}
      <View className="h-1/4 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Student</Text>
        <Text style={{ fontFamily: 'Sora_300Light' }} className="color-slate-400 text-base"># Subjects</Text>
      </View>

      {/* TABLE */}
      <View className="w-full h-1/2 pt-5 pr-2 pb-10 pl-2">
        <ScrollView>
          <SubjectCard />
        </ScrollView>

        {/* SCROLLVIEW OR THIS... */}
        {/* <View className="h-full justify-center items-center">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Aún no hay asignaturas registradas...</Text>
        </View> */}
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/4 items-end">
        <Link asChild href="/CreateSubject">
          <Pressable className="w-16 h-16 bg-[#6440a5] border-none rounded-full items-center justify-center mb-3">
            <FontAwesome name="plus" size={18} color="white" />
          </Pressable>
        </Link>
        <Link asChild href="/Students">
          <Pressable className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
            <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
              Atrás
            </Text>
          </Pressable>
        </Link>
      </View>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </ScreenLayout>
  );
}