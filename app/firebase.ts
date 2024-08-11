import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHdNNYGnovPBChQkQ5S3N2SQRgwEY9qAQ",

  authDomain: "yudha-757ac.firebaseapp.com",

  projectId: "yudha-757ac",

  storageBucket: "yudha-757ac.appspot.com",

  messagingSenderId: "63532731830",

  appId: "1:63532731830:web:a807dd4af05395b4d40517",

  measurementId: "G-F6VR4M1SZP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendWish(name: string, wish: string) {
  try {
    await addDoc(collection(db, "wish"), {
      name: name,
      wish: wish,
      time: new Date(),
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendWish };
