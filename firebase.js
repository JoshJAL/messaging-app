import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn3u79TqHUq_k6GjY3G-pamlcpTZuowJM",
  authDomain: "whatsapp-2-f6765.firebaseapp.com",
  projectId: "whatsapp-2-f6765",
  storageBucket: "whatsapp-2-f6765.appspot.com",
  messagingSenderId: "461758019713",
  appId: "1:461758019713:web:113cd17905b9ba32457580",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
