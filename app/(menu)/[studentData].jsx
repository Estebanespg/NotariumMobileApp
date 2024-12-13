import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import { View, Text, Pressable, ScrollView, Alert } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import { SubjectCard } from '../../components/SubjectCard';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import ScreenLayout from '../../components/ScreenLayout';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase';
import { query, collection, where, getDocs } from 'firebase/firestore';

export default function Read() {
  const { user } = useAuth();

  const { studentData } = useLocalSearchParams();
  const parsedData = JSON.parse(decodeURIComponent(studentData));

  const [studentSubjects, setStudentSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      const studentInfo = [];
      const q = query(collection(db, "students"), where("uid", "==", user.uid), where("student", "==", parsedData.student));
      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          studentInfo.push({ id: doc.id, ...doc.data() });
        });
        // console.log(studentInfo);
        setStudentSubjects(studentInfo);
      } catch (error) {
        Alert.alert('Error', `${error}`, [
          { text: 'OK', onPress: () => { } },
        ]);
      }
    }
    fetchSubjects();
  }, []);

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
    return <ScreenLayout><Text className="color-white">Cargando fuentes...</Text></ScreenLayout>;
  }

  return (
    <ScreenLayout>
      {/* TITLE */}
      <View className="h-1/5 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">{parsedData.student}</Text>
        <Text style={{ fontFamily: 'Sora_300Light' }} className="color-slate-400 text-base">{parsedData.subjectCount} {parsedData.subjectCount === 1 ? 'Asignatura' : 'Asignaturas'}</Text>
      </View>

      {/* TABLE */}
      <View className="w-full h-3/5 pt-5 px-2">
        {
          studentData ? (
            <ScrollView>
              <SubjectCard />
            </ScrollView>

            // SCROLLVIEW OR THIS...
            // <View className="h-full justify-center items-center">
            //   <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">Aún no hay asignaturas registradas...</Text>
            // </View>
          ) : (
            <View className="h-full justify-center items-center">
              <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">{studentData.student} aún no tiene asignaturas...</Text>
            </View>
          )
        }
      </View>

      {/* BUTTONS */}
      <View className="w-full h-1/5 items-end justify-center px-2">
        <Link asChild href="/CreateSubject">
          <Pressable className="w-16 h-16 bg-[#6440a5] border-none rounded-2xl items-center justify-center mb-12">
            <FontAwesome name="plus" size={18} color="white" />
          </Pressable>
        </Link>
      </View>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </ScreenLayout>
  );
}