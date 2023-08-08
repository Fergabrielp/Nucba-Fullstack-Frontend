import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDMtOb-sR9wtVv3N_w5QQ5hgWiX-H2zUa0",
    authDomain: "fer-games.firebaseapp.com",
    projectId: "fer-games",
    storageBucket: "fer-games.appspot.com",
    messagingSenderId: "520953814253",
    appId: "1:520953814253:web:089e5f17b3de52eda3c0e4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);