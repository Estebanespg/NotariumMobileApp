import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, TextInput  } from 'react-native';

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
      <View className="flex-row items-center justify-between w-full mb-5">
        {/* GRADE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '24%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Nota"
            keyboardType="numeric"
            onChangeText={handleChange('grade')}
            onBlur={handleBlur('grade')}
            values={values.grade}
          />
        </View>
        {/* PERCENTAGE */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '29%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="%"
            keyboardType="numeric"
            onChangeText={handleChange('percentage')}
            onBlur={handleBlur('percentage')}
            values={values.percentage}
          />
        </View>
        {/* PARAMETER */}
        <View className="h-14 bg-[#11181d] border-2 border-slate-600 rounded-2xl" style={{ width: '43%' }}>
          <TextInput
            style={{ fontFamily: 'Sora_400Regular' }}
            className="text-center placeholder:text-slate-600 color-white h-full text-lg"
            placeholder="Parámetro"
            keyboardType="default"
            onChangeText={handleChange('parameter')}
            onBlur={handleBlur('parameter')}
            values={values.parameter}
          />
        </View>
      </View>
    </>
  )
}