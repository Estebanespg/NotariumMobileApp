import SignIn from './SignIn';
import Students from './Students';
import { useAuth } from '../context/AuthContext';
import { Text } from 'react-native';


export default function Index() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Text style={{ fontFamily: 'Sora_400Regular' }} className="color-white">Cargando...</Text>;  // Aquí puedes poner un spinner o cualquier indicativo de carga
  }

  return user ? <Students /> : <SignIn />;
}