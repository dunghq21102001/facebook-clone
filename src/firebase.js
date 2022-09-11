import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYsj9Ez_igUOrVDJCBzYX4z68HoEdrAJU",
    authDomain: "bodybook-71ffa.firebaseapp.com",
    projectId: "bodybook-71ffa",
    storageBucket: "bodybook-71ffa.appspot.com",
    messagingSenderId: "934873659470",
    appId: "1:934873659470:web:16333bd17b5d5365156b1f",
    measurementId: "G-7ZK4J43HD7"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  // const db = firebaseApp.firestore()
  // const auth = firebase.auth()
  // const provider = new firebase.auth.GoogleAuthProvider()

  // export {auth, provider}
  // export default db

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
// export const createNote = async (note) => {
//   await addDoc(collection(db, 'notes'), coin);
// };