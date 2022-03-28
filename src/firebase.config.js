// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyApmHwP0fruJV_4LYbNI84JVGMowAhFSvw',
  authDomain: 'house-marketplace-694c2.firebaseapp.com',
  projectId: 'house-marketplace-694c2',
  storageBucket: 'house-marketplace-694c2.appspot.com',
  messagingSenderId: '779224738091',
  appId: '1:779224738091:web:f86f2b9c83527a675dfd6e',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
