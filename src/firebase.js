import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ24XnQPVtBTNo565ETfla6LhOM6l_2Yo",
  authDomain: "foodstudio-c3b1c.firebaseapp.com",
  projectId: "foodstudio-c3b1c",
  storageBucket: "foodstudio-c3b1c.appspot.com",
  messagingSenderId: "1040383570099",
  appId: "1:1040383570099:web:428b7ee2be3f8b05b300c6",
  measurementId: "G-535FPFL80Q"
};

const firebaseApp =initializeApp(firebaseConfig); 
const db= getFirestore(firebaseApp);
const auth =  getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Initialize Firebase
export {auth,provider,storage};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default db;