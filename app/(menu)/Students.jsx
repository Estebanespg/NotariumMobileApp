import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { StudentCard } from '../../components/StudentCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from '../../context/AuthContext';
import { auth, db } from '../../firebase';
import { signOut } from 'firebase/auth';
import ScreenLayout from '../../components/ScreenLayout';
import { useEffect, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';

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
        Alert.alert('Error', `${error}`, [
          { text: 'OK', onPress: () => { } },
        ]);
      }
    }
    fetchStudents();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.replace("/");
    } catch (error) {
      Alert.alert('Error', `${error.code}`, [
        { text: 'OK', onPress: () => { } },
      ]);
    }
  }

  return (
    <ScreenLayout>
      {/* TITLE */}
      <View className="h-1/5 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Estudiantes del usuario:</Text>
        {user ? <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white">{user.email}</Text> : <Text></Text>}
      </View>

      {/* TABLE */}
      <View className="w-full h-3/5 pt-5 pr-2 pb-5 pl-2">
        {
          student.length > 0 ? (
            <ScrollView>
              {
                student.map((studentData) => (
                  <StudentCard key={studentData.id} data={studentData} />
                ))
              }
            </ScrollView>
          ) : (
            <View className="h-full justify-center items-center">
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Aún no hay estudiantes registrados...</Text>
            </View>
          )
        }
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/4 items-end">
        <Link asChild href="/Create">
          <Pressable className="w-16 h-16 bg-[#6440a5] border-none rounded-2xl items-center justify-center mb-3">
            <FontAwesome name="plus" size={18} color="white" />
          </Pressable>
        </Link>
        <Pressable
          onPress={handleSignOut}
          className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-lg">
            Cerrar Sesión
          </Text>
        </Pressable>
      </View>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </ScreenLayout>
  );
}