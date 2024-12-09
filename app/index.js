import { useAuth } from '../context/AuthContext';
import { router } from 'expo-router';
import { Text } from 'react-native';
import { useEffect } from 'react';

export default function Index() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.navigate('/(menu)/Students');
      } else {
        router.navigate('/SignIn');
      }
    }
  }, [loading, user]);

  if (loading) {
    return <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white">Cargando...</Text>;
  }

  return null;
}