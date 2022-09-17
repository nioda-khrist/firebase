import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBbz-XHNDVLFeL3Uw2ms3ssQ6HbkCJ9j8g',
  authDomain: 'web-shop-c622f.firebaseapp.com',
  databaseURL: 'https://web-shop-c622f.firebaseio.com',
  projectId: 'web-shop-c622f',
  storageBucket: 'web-shop-c622f.appspot.com',
  messagingSenderId: '817181493992',
  appId: '1:817181493992:web:e104168615c9a80e91d75d',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
