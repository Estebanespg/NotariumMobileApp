// import { useState } from 'react';
// import { useFonts } from 'expo-font';
// import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Link } from 'expo-router';
// import { Inputs } from '../components/Inputs';

// export default function Create() {
//   const [fontsLoaded] = useFonts({
//     Sora_100Thin,
//     Sora_200ExtraLight,
//     Sora_300Light,
//     Sora_400Regular,
//     Sora_500Medium,
//     Sora_600SemiBold,
//     Sora_700Bold,
//     Sora_800ExtraBold,
//   });

//   if (!fontsLoaded) {
//     return <Text>Cargando fuentes...</Text>;
//   }

//   const validationSchema = Yup.object().shape({
//     student: Yup.string().required('El nombre del estudiante es obligatorio'),
//     subject: Yup.string().required('La asignatura es obligatoria'),
//     inputs: Yup.array().of(
//       Yup.object().shape({
//         grade: Yup.number()
//           .required('La calificación es obligatoria')
//           .min(0, 'La calificación mínima es 0')
//           .max(5, 'La calificación máxima es 5'),
//         percentage: Yup.number()
//           .required('El porcentaje es obligatorio')
//           .max(100, 'Máximo 100%')
//           .min(0, 'Mínimo 0%'),
//         parameter: Yup.string().required('El parámetro es obligatorio'),
//       })
//     ),
//   });

//   // Estado para manejar entradas dinámicas
//   const [dynamicInputs, setDynamicInputs] = useState([{ id: 1 }]);

//   return (
//     <View>
//       {/* TITLE */}
//       <View className="h-1/4 -mb-12 justify-end items-center">
//         <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl mb-16">Registrar Estudiante</Text>
//       </View>
//       <Formik
//         initialValues={{
//           student: '',
//           subject: '',
//           inputs: [{ grade: '', percentage: '', parameter: '' }],
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           console.log('Formulario enviado:', values);
//         }}
//       >
//         {({ handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue }) => {
//           const addInputs = () => {
//             const newInput = { grade: '', percentage: '', parameter: '' };
//             setFieldValue('inputs', [...values.inputs, newInput]);
//             setDynamicInputs([...dynamicInputs, { id: dynamicInputs.length + 1 }]);
//           };

//           return (
//             <>
//               <View className="h-1/2 mb-12">
//                 <ScrollView>
//                   {/* STUDENT */}
//                   <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
//                     <FontAwesome className="ml-1 mr-2" name="user" size={22} color="white" />
//                     <TextInput
//                       style={{ fontFamily: 'Sora_400Regular' }}
//                       className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
//                       placeholder="Estudiante"
//                       keyboardType="default"
//                       onChangeText={handleChange('student')}
//                       onBlur={handleBlur('student')}
//                       value={values.student}
//                     />
//                   </View>
//                   <View className="flex justify-start w-full mb-5">
//                     <ErrorMessage name="student">
//                       {(msg) => (
//                         <Text style={{ fontFamily: 'Sora_700Bold' }} className="justify-start text-red-700 text-sm">
//                           {msg}
//                         </Text>
//                       )}
//                     </ErrorMessage>
//                   </View>

//                   {/* SUBJECT */}
//                   <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
//                     <FontAwesome className="ml-1 mr-2" name="book" size={22} color="white" />
//                     <TextInput
//                       style={{ fontFamily: 'Sora_400Regular' }}
//                       className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
//                       placeholder="Asignatura"
//                       keyboardType="default"
//                       onChangeText={handleChange('subject')}
//                       onBlur={handleBlur('subject')}
//                       value={values.subject}
//                     />
//                   </View>
//                   <View className="flex justify-start w-full mb-2">
//                     <ErrorMessage name="subject">
//                       {(msg) => (
//                         <Text style={{ fontFamily: 'Sora_700Bold' }} className="justify-start text-red-700 text-sm">
//                           {msg}
//                         </Text>
//                       )}
//                     </ErrorMessage>
//                   </View>

//                   {/* DYNAMIC INPUTS */}
//                   {dynamicInputs.map((input, index) => (
//                     <View key={input.id} className="mb-2">
//                       <Inputs
//                         handleChange={(field) => handleChange(`inputs[${index}].${field}`)}
//                         handleBlur={(field) => handleBlur(`inputs[${index}].${field}`)}
//                         values={values.inputs[index] || { grade: '', percentage: '', parameter: '' }}
//                       />

//                       {/* ERROR MSG */}
//                       <ErrorMessage name={`inputs[${index}].grade`}>
//                         {(msg) => (
//                           <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
//                             {msg}
//                           </Text>
//                         )}
//                       </ErrorMessage>
//                       <ErrorMessage name={`inputs[${index}].percentage`}>
//                         {(msg) => (
//                           <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
//                             {msg}
//                           </Text>
//                         )}
//                       </ErrorMessage>
//                       <ErrorMessage name={`inputs[${index}].parameter`}>
//                         {(msg) => (
//                           <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
//                             {msg}
//                           </Text>
//                         )}
//                       </ErrorMessage>
//                     </View>
//                   ))}

//                   {/* ADD INPUT */}
//                   <View className="items-center">
//                     <Pressable
//                       className="w-24 h-14 bg-[#49cc90] border-none rounded-lg items-center justify-center"
//                       title="Add Input"
//                       onPress={addInputs}
//                     >
//                       <FontAwesome name="plus" size={18} color="white" />
//                     </Pressable>
//                   </View>
//                 </ScrollView>
//               </View>

//               {/* BUTTONS */}
//               <View className="h-1/4">
//                 <Pressable
//                   disabled={!isValid}
//                   className={`w-full h-14 ${isValid ? 'bg-[#6440a5]' : 'bg-[#8067ad]'} border-none rounded-lg items-center justify-center mb-5`}
//                   title="Submit"
//                   onPress={handleSubmit}>
//                   <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
//                     Crear
//                   </Text>
//                 </Pressable>
//                 <Link asChild href="/Menu">
//                   <Pressable className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
//                     <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
//                       Cancelar
//                     </Text>
//                   </Pressable>
//                 </Link>
//               </View>
//             </>
//           );
//         }}
//       </Formik>

//       {/* TEXT */}
//       <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
//     </View>
//   );
// }
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Sora_100Thin, Sora_200ExtraLight, Sora_300Light, Sora_400Regular, Sora_500Medium, Sora_600SemiBold, Sora_700Bold, Sora_800ExtraBold } from '@expo-google-fonts/sora';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'expo-router';
import { Inputs } from '../components/Inputs';

export default function Create() {
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

  const validationSchema = Yup.object().shape({
    student: Yup.string().required('El nombre del estudiante es obligatorio'),
    subject: Yup.string().required('La asignatura es obligatoria'),
    inputs: Yup.array().of(
      Yup.object().shape({
        grade: Yup.number()
          .required('La calificación es obligatoria')
          .min(0, 'La calificación mínima es 0')
          .max(5, 'La calificación máxima es 5'),
        percentage: Yup.number()
          .required('El porcentaje es obligatorio')
          .max(100, 'Máximo 100%')
          .min(0, 'Mínimo 0%'),
        parameter: Yup.string().required('El parámetro es obligatorio'),
      })
    ),
  });

  // Estado para manejar entradas dinámicas
  const [dynamicInputs, setDynamicInputs] = useState([{ id: 1 }]);

  return (
    <>
      {/* TITLE */}
      <View className="h-1/4 justify-end items-center">
        <Text style={{ fontFamily: 'Sora_700Bold' }} className="color-white text-2xl">Registrar Estudiante</Text>
      </View>
      <Formik
        initialValues={{
          student: '',
          subject: '',
          inputs: [{ grade: '', percentage: '', parameter: '' }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Formulario enviado:', values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid, setFieldValue }) => {
          const addInputs = () => {
            const newInput = { grade: '', percentage: '', parameter: '' };
            setFieldValue('inputs', [...values.inputs, newInput]);
            setDynamicInputs([...dynamicInputs, { id: dynamicInputs.length + 1 }]);
          };

          return (
            <>
              <View className="h-1/2 py-10">
                <ScrollView>
                  {/* STUDENT */}
                  <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
                    <FontAwesome className="ml-1 mr-2" name="user" size={22} color="white" />
                    <TextInput
                      style={{ fontFamily: 'Sora_400Regular' }}
                      className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
                      placeholder="Estudiante"
                      keyboardType="default"
                      onChangeText={handleChange('student')}
                      onBlur={handleBlur('student')}
                      value={values.student}
                    />
                  </View>
                  <View className="flex justify-start w-full mb-5">
                    <ErrorMessage name="student">
                      {(msg) => (
                        <Text style={{ fontFamily: 'Sora_700Bold' }} className="justify-start text-red-700 text-sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </View>

                  {/* SUBJECT */}
                  <View className="flex-row items-center h-14 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-2">
                    <FontAwesome className="ml-1 mr-2" name="book" size={22} color="white" />
                    <TextInput
                      style={{ fontFamily: 'Sora_400Regular' }}
                      className="flex-1 placeholder:text-slate-600 color-white h-full text-lg"
                      placeholder="Asignatura"
                      keyboardType="default"
                      onChangeText={handleChange('subject')}
                      onBlur={handleBlur('subject')}
                      value={values.subject}
                    />
                  </View>
                  <View className="flex justify-start w-full mb-2">
                    <ErrorMessage name="subject">
                      {(msg) => (
                        <Text style={{ fontFamily: 'Sora_700Bold' }} className="justify-start text-red-700 text-sm">
                          {msg}
                        </Text>
                      )}
                    </ErrorMessage>
                  </View>

                  {/* DYNAMIC INPUTS */}
                  {dynamicInputs.map((input, index) => (
                    <View key={input.id} className="mb-2">
                      <Inputs
                        handleChange={(field) => handleChange(`inputs[${index}].${field}`)}
                        handleBlur={(field) => handleBlur(`inputs[${index}].${field}`)}
                        values={values.inputs[index] || { grade: '', percentage: '', parameter: '' }}
                      />

                      {/* ERROR MSG */}
                      <ErrorMessage name={`inputs[${index}].grade`}>
                        {(msg) => (
                          <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
                            {msg}
                          </Text>
                        )}
                      </ErrorMessage>
                      <ErrorMessage name={`inputs[${index}].percentage`}>
                        {(msg) => (
                          <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
                            {msg}
                          </Text>
                        )}
                      </ErrorMessage>
                      <ErrorMessage name={`inputs[${index}].parameter`}>
                        {(msg) => (
                          <Text style={{ fontFamily: 'Sora_700Bold' }} className="text-red-700 text-sm mb-1">
                            {msg}
                          </Text>
                        )}
                      </ErrorMessage>
                    </View>
                  ))}

                  {/* ADD INPUT */}
                  <View className="items-center mb-24">
                    <Pressable
                      className="w-24 h-14 bg-[#49cc90] border-none rounded-lg items-center justify-center"
                      title="Add Input"
                      onPress={addInputs}
                    >
                      <FontAwesome name="plus" size={18} color="white" />
                    </Pressable>
                  </View>
                </ScrollView>
              </View>

              {/* BUTTONS */}
              <View className="w-full h-1/4">
                <Pressable
                  disabled={!isValid}
                  className={`w-full h-14 ${isValid ? 'bg-[#6440a5]' : 'bg-[#8067ad]'} border-none rounded-lg items-center justify-center mb-5`}
                  title="Submit"
                  onPress={handleSubmit}>
                  <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
                    Crear
                  </Text>
                </Pressable>
                <Link asChild href="/Menu">
                  <Pressable className="w-full h-14 bg-[#f93e3e] border-none rounded-lg items-center justify-center">
                    <Text style={{ fontFamily: 'Sora_500Medium' }} className="color-white text-lg">
                      Atrás
                    </Text>
                  </Pressable>
                </Link>
              </View>
            </>
          );
        }}
      </Formik>

      {/* TEXT */}
      <Text style={{ fontFamily: 'Sora_600SemiBold' }} className="absolute bottom-2.5 left-0 right-0 text-center color-white tracking-wide">Notarium</Text>
    </>
  );
}