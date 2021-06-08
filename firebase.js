import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBR2gIY2mtGVbsHWnxhurbjbaqHVpQK6hM",
  authDomain: "authentications-9aa54.firebaseapp.com",
  projectId: "authentications-9aa54",
  storageBucket: "authentications-9aa54.appspot.com",
  messagingSenderId: "476800007993",
  appId: "1:476800007993:web:9d345fffe53b6c633bb2e8",
  measurementId: "G-T9BCK3H5P6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const auth = app.auth();
const provider = new firebase.auth.FacebookAuthProvider();

export { auth, provider };
