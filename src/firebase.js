import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAdqIm08U7jxVP7vp7llmsiI1TRGJ2094",
  authDomain: "clone-5a57e.firebaseapp.com",
  databaseURL: "https://clone-5a57e.firebaseio.com",
  projectId: "clone-5a57e",
  storageBucket: "clone-5a57e.appspot.com",
  messagingSenderId: "818359634877",
  appId: "1:818359634877:web:0895d4a28f49bf9b2be0d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
