import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzSmTh0UR9PeDq_KF3XdVbje5ZGlauzbg",
  authDomain: "yt-classroom-clone-a07aa.firebaseapp.com",
  projectId: "yt-classroom-clone-a07aa",
  storageBucket: "yt-classroom-clone-a07aa.appspot.com",
  messagingSenderId: "683713236481",
  appId: "1:683713236481:web:bae92ebb545568a8377a00"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
