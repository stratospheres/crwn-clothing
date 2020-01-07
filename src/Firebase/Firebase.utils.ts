import firebase, { auth } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// comes from https://console.firebase.google.com/project/crwn-db-ce00e/overview
// for user "adamstrat@outlook.com"
export const config = {
    apiKey: "AIzaSyBd3yT46WFAWUoxZH48if39NXuuATIuk-I",
    authDomain: "crwn-db-ce00e.firebaseapp.com",
    databaseURL: "https://crwn-db-ce00e.firebaseio.com",
    projectId: "crwn-db-ce00e",
    storageBucket: "crwn-db-ce00e.appspot.com",
    messagingSenderId: "489596798528",
    appId: "1:489596798528:web:93585b297cfedc3e0881a5"
  };

  firebase.initializeApp(config);

  export const Auth = firebase.auth();
  export const FireStore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  export const SignInWithGoogle = () => Auth.signInWithPopup(provider);
