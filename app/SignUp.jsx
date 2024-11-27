import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import icon from '../assets/ic_notarium_light_white.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function SignUp() {
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

  // VALIDATION
  const SignUpSchema = Yup.object().shape({
    user: Yup.string()
      .min(2, 'Muy corto!')
      .max(20, 'Muy Largo!')
      .required('Por favor ingresa un usuario!'),
    password: Yup.string()
      .min(8, 'Muy corta!')
      .required('Por favor ingresa una contraseña!')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un símbolo especial."),
  });

  // HANDLE SIGNIN
  const handleSignUp = (values) => {
    console.log(values);
  }

  return (
    <>
      {/* IMAGE */}
      <Image className="w-32 h-32 mb-12" source={icon} />

      {/* TITLE */}
      <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-white text-4xl mb-12">Registrarse</Text>

      {/* FORM */}
      <Formik
       initialValues={{user: "", password: ""}}
       validationSchema={SignUpSchema}
       onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
          <>
            {/* USER INPUT */}
            <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
              <FontAwesome className="ml-1 mr-2" name="user" size={22} color="white" />
              <TextInput
                style={{ fontFamily: 'Sora_400Regular' }}
                className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
                placeholder="Usuario"
                keyboardType="default"
                onChangeText={handleChange('user')}
                onBlur={handleBlur('user')}
                values={values.user}
              />
            </View>
            <View className="flex justify-start w-full mb-6">
              <ErrorMessage name="user">
                {msg =>
                  <Text
                    style={{ fontFamily: 'Sora_700Bold' }}
                    className="justify-start text-red-700 text-sm"
                  >
                    {msg}
                  </Text>
                }
              </ErrorMessage>
            </View>

            {/* PASSWORD INPUT */}
            <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
              <FontAwesome className="ml-1 mr-2" name="lock" size={22} color="white" />
              <TextInput
                style={{ fontFamily: 'Sora_400Regular' }}
                className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                values={values.password}
              />
            </View>
            <View className="flex justify-start w-full mb-8">
              <ErrorMessage name="password">
                {msg =>
                  <Text
                    style={{ fontFamily: 'Sora_700Bold' }}
                    className="justify-start text-red-700 text-sm"
                  >
                    {msg}
                  </Text>
                }
              </ErrorMessage>
            </View>

            {/* BUTTON */}
            <Pressable
              disabled={!isValid}
              className={`w-full h-14 ${isValid ? 'bg-[#6440a5]' : 'bg-[#8067ad]'} border-none rounded-lg items-center justify-center mb-5`}
              title="Submit"
              onPress={handleSubmit}
            >
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Registrarse</Text>
            </Pressable>
          </>
        )}
      </Formik>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_500Medium' }} className="text-white font-medium">Ya tienes una cuenta? <Link href="/"><Text style={{ fontFamily: 'Sora_700Bold' }} className="color-[#1E90FF]">Inicia Sesión</Text></Link></Text>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  )
}