// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx05cmDM-Sv31DZpy9DcPfjPI5J0z-ItE",
  authDomain: "daktar-bari.firebaseapp.com",
  projectId: "daktar-bari",
  storageBucket: "daktar-bari.appspot.com",
  messagingSenderId: "284944694881",
  appId: "1:284944694881:web:80a39cad59cb6b3b2d7420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
