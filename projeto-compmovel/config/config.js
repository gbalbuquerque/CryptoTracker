// Import the functions you need from the SDKs you need
import firebase from "firebase";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDw4PxPGAaqs0oNxOZkXJfNMkhQRjV9DH4",
  authDomain: "teste2-f420c.firebaseapp.com",
  projectId: "teste2-f420c",
  storageBucket: "teste2-f420c.appspot.com",
  messagingSenderId: "151705535213",
  appId: "1:151705535213:web:f9534db70ad3fbcd8a82e4",
  measurementId: "G-C1HJ005TXQ"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;