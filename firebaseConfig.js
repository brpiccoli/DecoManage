
import firebase from 'firebase/app';
import 'firebase/auth'; 
import 'firebase/firestore'; 
import 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC9VgVock4xqzPkGbdAb9q6mwqZ51vU4xE",
    authDomain: "decomanage-79f2d.firebaseapp.com",
    projectId: "decomanage-79f2d",
    storageBucket: "decomanage-79f2d.appspot.com",
    messagingSenderId: "130454199337",
    appId: "1:130454199337:web:fb1a210ee17a21d6801038",
    measurementId: "G-BVPK785HJD"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
