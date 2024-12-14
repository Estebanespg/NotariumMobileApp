import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export function SubjectCard({ data }) {
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
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-center text-lg mr-5">{data.subject}</Text>
        </View>
        <View className="flex-row w-3/12 justify-center">
          <Link asChild href="/Update">
            <FontAwesome name="pencil" size={26} color="#fca130" />
          </Link>
          <FontAwesome className="ml-5" name="trash" size={26} color="#f93e3e" />
        </View>
      </View>
      <View className="w-full h-auto items-center bg-slate-400 pr-4 pb-4 pl-4">
        {
          data.grades.map((grade, index) => (
            <View key={index} className="w-full flex-row justify-between mt-5">
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-3/5 color-black text-left">{grade.parameter}</Text>
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/5 color-black text-left">{grade.grade}</Text>
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/5 color-black text-center">{grade.percentage}%</Text>
            </View>
          ))
        }
      </View>
      <View className="w-full h-auto items-center bg-slate-600 mb-8 pr-4 pb-4 pl-4 rounded-b-lg">
        <View className="w-full flex-row justify-between mt-5">
          <Text style={{ fontFamily: 'Sora_700Bold' }} className="w-3/5 color-emerald-500 text-left">State</Text>
          <Text style={{ fontFamily: 'Sora_700Bold' }} className="w-1/5 color-emerald-500 text-left">Grade</Text>
          <Text style={{ fontFamily: 'Sora_700Bold' }} className="w-1/5 color-emerald-500 text-center">%</Text>
        </View>
      </View>
    </>
  );
}