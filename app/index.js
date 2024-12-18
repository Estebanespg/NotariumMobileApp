import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import ScreenLayout from '../components/ScreenLayout';

export default function Index() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/Students');
      } else {
        router.replace('/SignIn');
      }
    }
  }, [loading, user]);

  if (loading) {
    return <ScreenLayout><ActivityIndicator color={"#fff"} size={"large"} /></ScreenLayout>;
  }

  return null;
}