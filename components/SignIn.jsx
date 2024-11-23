import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { Formik } from 'formik';
import icon from '../assets/ic_notarium_light_white.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function SignIn() {
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

  // HANDLE SIGNIN
  const handleSignIn = (values) => {
    console.log(values);
  }

  return (
    <>
      {/* IMAGE */}
      <Image className="w-32 h-32 mb-12" source={icon} />

      {/* TITLE */}
      <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-white text-4xl mb-12">Sign In</Text>

      {/* FORM */}
      <Formik initialValues={{user: "", password: ""}} onSubmit={handleSignIn}>
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            {/* USER INPUT */}
            <View className="flex-row items-center py-1/2 pl-4 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-5">
              <FontAwesome className="mr-2" name="user" size={22} color="white" />
              <TextInput
                style={{ fontFamily: 'Sora_400Regular' }}
                className="placeholder:text-slate-600 color-white h-full text-lg"
                placeholder="Usuario"
                keyboardType="default"
                onChangeText={handleChange('user')}
                onBlur={handleBlur('user')}
                values={values.user}
              />
            </View>

            {/* PASSWORD INPUT */}
            <View className="flex-row items-center py-1/2 pl-4 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-10">
              <FontAwesome className="mr-2" name="lock" size={22} color="white" />
              <TextInput
                style={{ fontFamily: 'Sora_400Regular' }}
                className="placeholder:text-slate-600 color-white h-full text-lg"
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                values={values.password}
              />
            </View>

            {/* BUTTON */}
            <Pressable
              className="w-full h-14 bg-[#6440a5] border-none rounded-lg items-center justify-center mb-5"
              onPress={handleSubmit}
              title="Submit"
            >
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Iniciar Sesión</Text>
            </Pressable>
          </>
        )}
      </Formik>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_500Medium' }} className="text-white font-medium">No tienes una cuenta? <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-[#1E90FF]">Regístrate</Text></Text>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  )
}