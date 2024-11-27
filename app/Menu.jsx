import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { Text, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Menu() {
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
      <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl mb-24">Menú</Text>

      {/* CREATE */}
      <Link asChild href="/Create">
        <Pressable className="w-60 h-14 bg-[#49cc90] border-none rounded-lg items-center justify-center mb-16">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Registrar</Text>
        </Pressable>
      </Link>

      {/* READ */}
      <Pressable className="w-60 h-14 bg-[#61affe] border-none rounded-lg items-center justify-center mb-16">
        <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Consultar</Text>
      </Pressable>

      {/* UPDATE */}
      <Pressable className="w-60 h-14 bg-[#fca130] border-none rounded-lg items-center justify-center mb-16">
        <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Actualizar</Text>
      </Pressable>

      {/* LOGOUT */}
      <Link asChild href="/">
        <Pressable className="w-60 h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Log Out</Text>
        </Pressable>
      </Link>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  )
}