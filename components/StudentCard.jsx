import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';

export function StudentCard({ data }) {
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

  const handleDeleteStudent = async () => {
    try {
      await deleteDoc(doc(db, "students", data.id));
      router.replace("/Students");
    } catch (error) {
      Alert.alert('Error', `${error}`, [
        { text: 'OK', onPress: () => { } },
      ]);
    }
  }

  return (
    <>
      <Link href={`/${encodeURIComponent(JSON.stringify(data))}`} className="mb-5">
        <View className="flex-row w-full h-20 justify-between items-center bg-slate-600 px-6 rounded-lg">
          <View>
            <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-lg">{data.student}</Text>
            <Text style={{ fontFamily: 'Sora_300Light' }} className="color-slate-400 text-base">{Object.keys(data.subjects).length} {Object.keys(data.subjects).length === 1 ? 'Asignatura' : 'Asignaturas'}</Text>
          </View>
          <Pressable onPress={handleDeleteStudent}>
            <View>
              <FontAwesome name="trash" size={26} color="#f93e3e" />
            </View>
          </Pressable>
        </View>
      </Link>
    </>
  );
}