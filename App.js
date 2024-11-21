import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import icon from './assets/ic_notarium_light.png';

export default function App() {
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <StatusBar style="auto" />
      <Image source={icon} style={{ width: 100, height: 100 }} />
      <Text className="text-green-600 text-4xl">Notarium</Text>
      <Pressable  className="bg-black items-center justify-center py-3 px-8 rounded">
        <Text className="color-white text-lg font-bold tracking-wide">Guardar</Text>
      </Pressable>
    </View>
  );
}