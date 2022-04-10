// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3-JF-I-XxPHMq9G_7S5sSOlS57qPa2RU",
    authDomain: "ema-jhon-simple-b9b3f.firebaseapp.com",
    projectId: "ema-jhon-simple-b9b3f",
    storageBucket: "ema-jhon-simple-b9b3f.appspot.com",
    messagingSenderId: "826679818610",
    appId: "1:826679818610:web:e9649bec0fe12abcab05eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

