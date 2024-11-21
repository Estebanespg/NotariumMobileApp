import { View, Text, Image, Pressable, TextInput } from 'react-native';
import icon from '../assets/ic_notarium_light_white.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Login() {
  return (
    <>
      <Image className="w-40 h-40 mb-12" source={icon}/>

      <Text className="text-white font-bold text-4xl mb-12">Sign In</Text>

      <View className="flex-row items-center py-1/2 pl-4 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-5">
        <FontAwesome className="mr-2" name="user" size={22} color="white" />
        <TextInput className="placeholder:text-slate-600 color-white h-full text-lg" placeholder="Usuario" keyboardType="default"></TextInput>
      </View>

      <View className="flex-row items-center py-1/2 pl-4 w-full bg-[#11181d] border-2 border-slate-600 rounded-2xl px-3 mb-5">
        <FontAwesome className="mr-2" name="lock" size={22} color="white" />
        <TextInput className="placeholder:text-slate-600 color-white h-full text-lg" placeholder="Contraseña" secureTextEntry></TextInput>
      </View>

      <Pressable className="w-full h-14 bg-[#1E90FF] border-none rounded-lg items-center justify-center mt-5 mb-5">
        <Text className="color-white text-xl font-bold">Guardar</Text>
      </Pressable>

      <Text className="text-white font-medium text-lg mb-8">No tienes una cuenta? <Text className="color-[#1E90FF] font-bold">Regístrate</Text></Text>
    </>
  )
}