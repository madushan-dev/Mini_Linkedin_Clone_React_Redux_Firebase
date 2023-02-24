import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuoMXOQV2yEZBiy5cQlsHc55c2KrL93w0",
    authDomain: "linkedin-clone-fbd95.firebaseapp.com",
    projectId: "linkedin-clone-fbd95",
    storageBucket: "linkedin-clone-fbd95.appspot.com",
    messagingSenderId: "262471470077",
    appId: "1:262471470077:web:23bdeffa58717ba322e794"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };