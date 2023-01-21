// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Also added a import statement to use getAuth fuction present in firebase -> auth file


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv-_YEORr6U1FWKr6MN64cMjqnl_z86qM",
  authDomain: "chat-3fc6e.firebaseapp.com",
  projectId: "chat-3fc6e",
  storageBucket: "chat-3fc6e.appspot.com",
  messagingSenderId: "228939933439",
  appId: "1:228939933439:web:debc243622a7fb3311ceca"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); //We exported  this app
export const auth = getAuth(); //We too exported this auth
// The getAuth() function is needed for sign in email password (Authentication purposes)
// Create a root reference
export const storage = getStorage();//used for image upload
export const db=getFirestore();