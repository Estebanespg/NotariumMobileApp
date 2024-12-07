import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { StudentCard } from '../components/StudentCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Students() {
  const { user } = useAuth();

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

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.navigate("/");
    } catch (error) {
      Alert.alert('Error', `${error.code}`, [
        { text: 'OK', onPress: () => { } },
      ]);
    }
  }

  return (
    <>
      {/* TITLE */}
      <View className="h-1/4 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Estudiantes del usuario:</Text>
        {user ? <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white">{user.email}</Text> : <Text></Text>}
      </View>

      {/* TABLE */}
      <View className="w-full h-1/2 pt-5 pr-2 pb-10 pl-2">
        <ScrollView>
          <StudentCard />
        </ScrollView>

        {/* SCROLLVIEW OR THIS... */}
        {/* <View className="h-full justify-center items-center">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Aún no hay estudiantes registrados...</Text>
        </View> */}
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/4 items-end">
        <Link asChild href="/Create">
          <Pressable className="w-16 h-16 bg-[#6440a5] border-none rounded-full items-center justify-center mb-3">
            <FontAwesome name="plus" size={18} color="white" />
          </Pressable>
        </Link>
        <Pressable
          onPress={handleSignOut}
          className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
            Log Out
          </Text>
        </Pressable>
      </View>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  );
}