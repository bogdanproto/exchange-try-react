// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAwo5lat_ffKKYJf-iKxzSIub1BWwEHC5E',
  authDomain: 'exchange-try-react.firebaseapp.com',
  projectId: 'exchange-try-react',
  storageBucket: 'exchange-try-react.appspot.com',
  messagingSenderId: '1064439447973',
  appId: '1:1064439447973:web:8a6d86f3c70cec1cf5284c',
  measurementId: 'G-VX4FNT00YQ',
};

// Initialize Firebase
export const appTest = initializeApp(firebaseConfig);
