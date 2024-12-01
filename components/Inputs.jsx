import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, TextInput } from 'react-native';

export function Inputs({ handleChange, handleBlur, values }) {
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
      <View className="flex-row items-center justify-between w-full mt-3 mb-4">
        {/* PARAMETER */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '47%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="pl-3 placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Parámetro"
            keyboardType="default"
            onChangeText={handleChange('parameter')}
            onBlur={handleBlur('parameter')}
            value={values.parameter}
          />
        </View>
        {/* GRADE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '22%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="pl-3 placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Nota"
            keyboardType="numeric"
            onChangeText={handleChange('grade')}
            onBlur={handleBlur('grade')}
            value={values.grade}
          />
        </View>
        {/* PERCENTAGE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '27%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="pl-3 placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="%"
            keyboardType="numeric"
            onChangeText={handleChange('percentage')}
            onBlur={handleBlur('percentage')}
            value={values.percentage}
          />
        </View>
      </View>
    </>
  )
}