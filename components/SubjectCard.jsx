import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, Pressable, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { db } from '../firebase'
import { updateDoc, doc, arrayRemove } from 'firebase/firestore';
import Toast from 'react-native-toast-message';

export function SubjectCard({ data, userId }) {
  const [subjectInfo, setSubjectInfo] = useState({});
  useEffect(() => {
    const gradeAvgAndTotalPerc = () => {
      var state = "";
      var color;
      var gradeAverage = 0;
      var totalPercentage = 0;

      for (let i = 0; i < data.grades.length; i++) {
        const grade = parseFloat(data.grades[i].grade);
        const percentage = (data.grades[i].percentage / 100);

        gradeAverage += (grade * percentage);
        totalPercentage += percentage * 100;
      }

      if (totalPercentage == 100 & gradeAverage >= 3) {
        state = "✔ Aprobado";
        color = true;
      } else if (totalPercentage == 100 & gradeAverage < 3) {
        state = "❌ Reprobado";
        color = false;
      } else if (totalPercentage < 100 & gradeAverage >= 3) {
        state = "Aprobando...";
        color = true;
      } else if (totalPercentage < 100 & gradeAverage < 3) {
        state = "Reprobando...";
        color = false;
      }
      setSubjectInfo({ state: state, color: color, gradeAverage: gradeAverage, totalPercentage: totalPercentage })
    }
    gradeAvgAndTotalPerc();
  }, []);

  const handleDeleteSubject = async () => {
    try {
      Alert.alert('Eliminar Asignatura', `¿Desea eliminar la asignatura: ${data.subject}?`,
        [
          {
            text: 'Cancelar',
            onPress: () => { }
          },
          {
            text: 'Aceptar',
            onPress: async () => {
              try {
                await updateDoc(doc(db, "students", userId), {
                  subjects: arrayRemove({ subject: data.subject, grades: data.grades })
                });
                Toast.show({
                  type: 'error',
                  text1: 'Eliminar Asignatura',
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
      <View className="flex-row w-full h-14 justify-center items-center bg-slate-600 p-2 rounded-t-lg">
        <View className="w-9/12">
          <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="color-white text-center text-lg mr-5">{data.subject}</Text>
        </View>
        <View className="flex-row w-3/12 justify-center">
          <Link asChild href={`/Update?subjectData=${encodeURIComponent(JSON.stringify({ data, userId }))}`}>
            <FontAwesome name="pencil" size={26} color="#fca130" />
          </Link>
          <Pressable onPress={handleDeleteSubject}>
            <FontAwesome className="ml-5" name="trash" size={26} color="#f93e3e" />
          </Pressable>
        </View>
      </View>
      <View className="w-full h-auto items-center bg-slate-400 pr-4 pb-4 pl-4">
        {
          data.grades.map((grade, index) => (
            <View key={index} className="w-full flex-row justify-between mt-5">
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-3/5 color-black text-left">{grade.parameter}</Text>
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/5 color-black text-left">{parseFloat(grade.grade).toFixed(1)}</Text>
              <Text style={{ fontFamily: 'Sora_400Regular' }} className="w-1/5 color-black text-center">{grade.percentage}%</Text>
            </View>
          ))
        }
      </View>
      <View className="w-full h-auto items-center bg-slate-600 mb-8 pr-4 pb-4 pl-4 rounded-b-lg">
        <View className="w-full flex-row justify-between mt-5">
          <Text style={{ fontFamily: 'Sora_700Bold', color: subjectInfo.color ? '#10B981' : '#EF4444' }} className={`w-3/5 text-left`}>{subjectInfo.state}</Text>
          <Text style={{ fontFamily: 'Sora_700Bold', color: subjectInfo.color ? '#10B981' : '#EF4444' }} className={`w-1/5 text-left`}>{parseFloat(subjectInfo.gradeAverage).toFixed(1)}</Text>
          <Text style={{ fontFamily: 'Sora_700Bold', color: subjectInfo.color ? '#10B981' : '#EF4444' }} className={`w-1/5 text-center`}>{parseFloat(subjectInfo.totalPercentage).toFixed(0)}%</Text>
        </View>
      </View>
    </>
  );
}