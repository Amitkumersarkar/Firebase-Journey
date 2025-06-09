// do not store config on the client side

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB11VRLGtQLxtKKDgI5wiJtyPA68vohuz8",
    authDomain: "simple-firebase-3ee27.firebaseapp.com",
    projectId: "simple-firebase-3ee27",
    storageBucket: "simple-firebase-3ee27.firebasestorage.app",
    messagingSenderId: "857086470273",
    appId: "1:857086470273:web:e27ebbd557c8e2cbf44580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;