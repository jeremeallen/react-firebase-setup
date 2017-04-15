import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBNqKqftgibiZnXxvnTGDL2ASesttelH0c',
  authDomain: 'first-flight-with-friend-5f3b2.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-5f3b2.firebaseio.com',
  projectId: 'first-flight-with-friend-5f3b2',
  storageBucket: 'first-flight-with-friend-5f3b2.appspot.com',
  messagingSenderId: '697348939997',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();