import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCkRj_vsuzdvftN41rsVoehFFP8_MPw21o',
  authDomain: 'cacophone-85bfa.firebaseapp.com',
  projectId: 'cacophone-85bfa',
  storageBucket: 'cacophone-85bfa.appspot.com',
  messagingSenderId: '797406842581',
  appId: '1:797406842581:web:f0296968746cd6bb341c5c',
});

export default firebase;
export const firestore = firebase.firestore();
