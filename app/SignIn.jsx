import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Image, Pressable, TextInput, ActivityIndicator } from 'react-native';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import icon from '../assets/ic_notarium_light_white.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import ScreenLayout from '../components/ScreenLayout';
import Toast from 'react-native-toast-message';

export default function SignIn() {
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
    return <ScreenLayout><ActivityIndicator color={"#fff"} size={"large"} /></ScreenLayout>;
  }

  // VALIDATION
  const SignUpSchema = Yup.object().shape({
    email: Yup.string()
      .required('Por favor ingresa un correo!'),
    password: Yup.string()
      .required('Por favor ingresa tu contraseña!'),
  });

  // HANDLE SIGNIN
  const handleSignIn = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      Toast.show({
        type: 'info',
        text1: 'Iniciar Sesión',
        text2: 'Inicio de sesión exitoso! 👋'
      });
      router.replace("/Students");
    } catch (error) {
      if (error.code === 'auth/invalid-credential') {
        Toast.show({
          type: 'error',
          text1: 'Correo y/o contraseña incorrectos',
          text2: `Código de error: \n${error.code}`
        });
      } else if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'error',
          text1: 'Correo inválido',
          text2: `Código de error: \n${error.code}`
        });
      } else {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Código de error: \n${error.code}`
        });
      }
    }
  }

  return (
    <ScreenLayout>
      {/* IMAGE */}
      <Image className="w-32 h-32 mb-12" source={icon} />

      {/* TITLE */}
      <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-white text-4xl mb-12">Iniciar Sesión</Text>

      {/* FORM */}
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignIn}
      >
        {({ handleChange, handleBlur, handleSubmit, isValid, values }) => (
          <>
            {/* EMAIL INPUT */}
            <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
              <FontAwesome className="ml-1 mr-2" name="at" size={22} color="white" />
              <TextInput
                style={{ fontFamily: 'Sora_400Regular' }}
                className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
                placeholder="Correo"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                values={values.email}
              />
            </View>
            <View className="flex justify-start w-full mb-6">
              <ErrorMessage name="email">
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
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Iniciar Sesión</Text>
            </Pressable>
          </>
        )}
      </Formik>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_500Medium' }} className="text-white">No tienes una cuenta? <Link href="/SignUp"><Text style={{ fontFamily: 'Sora_700Bold' }} className="color-[#1E90FF]">Regístrate</Text></Link></Text>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </ScreenLayout>
  )
}