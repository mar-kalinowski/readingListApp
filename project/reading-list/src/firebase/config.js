import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwYnIZpIdQXNR5JmtLVOykMleCczcOCVg",
  authDomain: "readinglistreactapp.firebaseapp.com",
  projectId: "readinglistreactapp",
  storageBucket: "readinglistreactapp.appspot.com",
  messagingSenderId: "345257649799",
  appId: "1:345257649799:web:f0e1d0d3ec747c7e31fa22",
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };
