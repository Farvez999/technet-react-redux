// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCrWtw9yXx5yKZuhq6YPzoRMMgiVrQ42VY',
  authDomain: 'tech-net-6ccee.firebaseapp.com',
  projectId: 'tech-net-6ccee',
  storageBucket: 'tech-net-6ccee.appspot.com',
  messagingSenderId: '665067467197',
  appId: '1:665067467197:web:dd76bd0e88499325fae2d4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
