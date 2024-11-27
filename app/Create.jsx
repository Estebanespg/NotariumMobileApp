import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Create() {
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
      <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl mb-16">Registrar Estudiante</Text>

      {/* NAME */}
      <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-5">
        <FontAwesome className="ml-1 mr-2" name="user" size={22} color="white" />
        <TextInput
          style={{ fontFamily: 'Sora_400Regular' }}
          className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
          placeholder="Estudiante"
          keyboardType="default"
        />
      </View>

      {/* SUBJECT */}
      <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-5">
        <FontAwesome className="ml-1 mr-2" name="book" size={22} color="white" />
        <TextInput
          style={{ fontFamily: 'Sora_400Regular' }}
          className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
          placeholder="Asignatura"
          keyboardType="default"
        />
      </View>

      {/* GRADE, PERCENTAGE, AND PARAMETER */}
      <View className="flex-row items-center justify-between w-full mb-10">
        {/* GRADE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '24%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Nota"
            keyboardType="numeric"
          />
        </View>
        {/* PERCENTAGE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '29%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="%"
            keyboardType="numeric"
          />
        </View>
        {/* PARAMETER */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '43%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Parámetro"
            keyboardType="default"
          />
        </View>
      </View>

      {/* BUTTON ADD */}
      <Pressable className="w-24 h-14 bg-[#49cc90] border-none rounded-lg items-center justify-center mb-12">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">+</Text>
      </Pressable>

      {/* BUTTON CREATE */}
      <Pressable className="w-full h-14 bg-[#6440a5] border-none rounded-lg items-center justify-center mb-5">
        <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Crear</Text>
      </Pressable>

      {/* BUTTON CANCEL */}
      <Link asChild href="/Menu">
        <Pressable className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Cancelar</Text>
        </Pressable>
      </Link>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  )
}