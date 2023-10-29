import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTllIxhMOCFj8frQeY0YVZnbZiyloIOZ4",
  authDomain: "setapat-mvp.firebaseapp.com",
  projectId: "setapat-mvp",
  storageBucket: "setapat-mvp.appspot.com",
  messagingSenderId: "58587766367",
  appId: "1:58587766367:web:157a79ff2557638c1f45ea",
  measurementId: "G-YTKV1L9LQK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)