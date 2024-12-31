import { View, Text, Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { StudentCard } from '../../../components/StudentCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '../../../context/AuthContext';
import { db } from '../../../firebase';
import ScreenLayout from '../../../components/ScreenLayout';
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import Toast from 'react-native-toast-message';
import { ActivityIndicator } from 'react-native';

export default function Students() {
  const { user } = useAuth();

  const [student, setStudent] = useState([]);

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
        setStudent(studentList);
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: `Código de error: \n${error.code}`
        });
      }
    }
    fetchStudents();
  }, [user]);

  return (
    <ScreenLayout>
      {/* TITLE */}
      <View className="h-1/5 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Estudiantes del usuario:</Text>
        {user ? <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white">{user.email}</Text> : <Text></Text>}
      </View>

      {/* TABLE */}
      <View className="w-full h-3/5 pt-5 pr-2 pl-2">
        {
          student.length > 0 ? (
            <ScrollView>
              {
                student.map((studentData) => (
                  <StudentCard key={studentData.id} data={studentData} />
                ))
              }
            </ScrollView>
          ) : !user ? (
            <View className="h-full justify-center items-center">
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Conéctate a Internet. Comprueba la conexión</Text>
              <ActivityIndicator color={"#fff"} size={"large"} />
            </View>
          ) : (
            <View className="h-full justify-center items-center">
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Aún no hay estudiantes registrados...</Text>
            </View>
          )
        }
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/5 justify-center items-end">
        <Link asChild href="/Create">
          <Pressable className="w-16 h-16 bg-[#6440a5] border-none rounded-2xl items-center justify-center">
            <FontAwesome name="plus" size={18} color="white" />
          </Pressable>
        </Link>
      </View>
    </ScreenLayout>
  );
}