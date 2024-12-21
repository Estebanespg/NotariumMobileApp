import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import ScreenLayout from '../../components/ScreenLayout';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Settings() {
  const handleDownloadReport = () => {
    Toast.show({
      type: 'success',
      text1: 'Descarga en proceso',
      text2: 'El reporte se descargará en breve.',
    });
  };

  const handleDeleteAccount = () => {
    Toast.show({
      type: 'info',
      text1: 'Funcionalidad no implementada',
      text2: 'Esta opción estará disponible pronto.',
    });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Código de error: \n${error.code}`
      });
    }
  };

  return (
    <ScreenLayout>
      {/* TITLE */}
      <View className="h-1/5 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">
          Configuración
        </Text>
      </View>

      {/* CONTENT */}
      <View className="w-full h-3/5 pr-6 pl-6">
        <View className="h-full justify-evenly items-center">
          <View className="w-full">
            <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-base mb-2">¿Desea generar un reporte académico?</Text>
            <Pressable onPress={handleDownloadReport} className="w-full h-14 bg-[#6440a5] border-none rounded-lg flex-row items-center justify-center">
              <FontAwesome6 name="file-pdf" size={22} color="white" className="mr-2" />
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-base">Descargar</Text>
            </Pressable>
          </View>
          <View className="w-full">
            <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-base mb-2">¿Desea eliminar su cuenta?</Text>
            <Pressable onPress={handleDeleteAccount} className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-base">Eliminar Cuenta</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* FOOTER */}
      <View className="w-full h-1/4 justify-center items-end">
        <Pressable
          onPress={handleSignOut}
          className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-lg">
            Cerrar Sesión
          </Text>
        </Pressable>
      </View>

      {/* TEXT */}
      <Text
        style={{ fontFamily: 'Sora_600SemiBold' }}
        className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">
        Notarium
      </Text>
    </ScreenLayout>
  );
}