import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDS2f2r3XeOcS5Fj5LjuDR-oJLUdujnu-A",
  authDomain: "baby-growth-system.firebaseapp.com",
  projectId: "baby-growth-system",
  storageBucket: "baby-growth-system.appspot.com",
  messagingSenderId: "534720282100",
  appId: "1:534720282100:web:03b08a69daa7c8286d4da1",
  measurementId: "G-ZH79929NE6"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
