import { SignIn } from './SignIn';
import Students from './Students';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const user = useAuth(); 
  return user ? <Students /> : <SignIn />;
}