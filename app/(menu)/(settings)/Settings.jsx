import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../../../context/AuthContext';
import { auth, db } from '../../../firebase';
import { signOut, deleteUser } from 'firebase/auth';
import ScreenLayout from '../../../components/ScreenLayout';
import Toast from 'react-native-toast-message';
import { router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import HtmlReport from '../../../components/HtmlReport';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';

export default function Settings() {
  const { user } = useAuth();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentList = [];
      const q = query(collection(db, "students"), where("uid", "==", user.uid));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          studentList.push({ id: doc.id, ...doc.data() });
        });
        // console.log(JSON.stringify(studentList));
        setStudents(studentList);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Código de error: \n${error}`
        });
      }
    }
    fetchStudents();
  }, [user]);

  const handleDownloadReport = async () => {
    try {
      Toast.show({
        type: 'success',
        text1: 'Generación satisfactoria! 😎',
        text2: 'El reporte PDF se ha generado.'
      });

      const htmlContent = HtmlReport(students, user);
      const { uri } = await Print.printToFileAsync({ html: htmlContent });

      // console.log('PDF temporal creado en:', uri);

      const downloadUri = `${FileSystem.documentDirectory}ReporteEstudiantes.pdf`;

      await FileSystem.moveAsync({
        from: uri,
        to: downloadUri,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(downloadUri);
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `No se pudo descargar el PDF: \n${error}`
      });
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const currentUser = auth.currentUser;
      await deleteUser(currentUser);
      Toast.show({
        type: 'error',
        text1: 'Eliminar Cuenta',
        text2: 'Su cuenta se ha eliminado. Adiós 👋',
      });
      router.replace("/");
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Código de error: \n${error}`
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Código de error: \n${error}`
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
      <View className="w-full h-1/5 pr-12 pb-5 pl-12 justify-end">
        <Pressable
          onPress={handleSignOut}
          className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-base">
            Cerrar Sesión
          </Text>
        </Pressable>
      </View>
    </ScreenLayout>
  );
}