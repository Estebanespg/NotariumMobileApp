import { View } from 'react-native';

export default function ScreenLayout({ children }) {
  return <View className="flex-1 bg-[#11181d] items-center justify-center px-5">{children}</View>;
}