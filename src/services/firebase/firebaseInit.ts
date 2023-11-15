import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const appInit = initializeApp(firebaseConfig);
export const auth = getAuth(appInit);
