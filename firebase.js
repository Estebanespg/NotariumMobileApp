// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsM06VPTslIARKZpUOB_lhrR54lj8-d3g",
  authDomain: "test-2be2e.firebaseapp.com",
  projectId: "test-2be2e",
  storageBucket: "test-2be2e.firebasestorage.app",
  messagingSenderId: "126861830121",
  appId: "1:126861830121:web:9f1c8ba6d0469f601fcd78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const auth = getAuth(app);
export const db = getFirestore(app);