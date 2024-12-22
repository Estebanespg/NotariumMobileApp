import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { db } from '../firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import Toast from 'react-native-toast-message';

export function StudentCard({ data }) {
  const handleDeleteStudent = () => {
    try {
      Alert.alert('Eliminar Estudiante', `¿Desea eliminar al estudiante: ${data.student}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => { }
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await deleteDoc(doc(db, "students", data.id));
                Toast.show({
                  type: 'error',
                  text1: 'Eliminar Estudiante',
                  text2: 'Eliminación exitosa! 👌'
                });
                router.replace("/Students");
              } catch (error) {
                Toast.show({
                  type: 'error',
                  text1: 'Error',
                  text2: `Código de error: \n${error.code}`
                });
              }
            }
          },
        ], {
        cancelable: true
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: `Código de error: \n${error.code}`
      });
    }
  }

  return (
    <>
      <Link href={`/${encodeURIComponent(JSON.stringify(data))}`} className="mb-5">
        <View className="flex-row w-full h-20 justify-between items-center bg-red-600 px-6 rounded-lg">
          <View>
            <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-lg">{data.student}</Text>
            <Text style={{ fontFamily: 'Sora_300Light' }} className="color-slate-400 text-base">{Object.keys(data.subjects).length} {Object.keys(data.subjects).length === 1 ? 'Asignatura' : 'Asignaturas'}</Text>
          </View>
          <Pressable onPress={handleDeleteStudent}>
            <View>
              <FontAwesome name="trash" size={26} color="#f93e3e" />
            </View>
          </Pressable>
        </View>
      </Link>
    </>
  );
}