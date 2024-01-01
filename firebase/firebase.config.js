import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBVXP1HvD79fkK_sTVs7KOldg8sujFbOBQ",
  authDomain: "expo-46a09.firebaseapp.com",
  projectId: "expo-46a09",
  storageBucket: "expo-46a09.appspot.com",
  messagingSenderId: "88725363281",
  appId: "1:88725363281:web:4d38b2f632f908c8657670",
  measurementId: "G-CJ5CJ45DY7",
};
// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();
