// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtTedd_sjm8KPw7MrkJndA9uQKmyAkITE",
  authDomain: "klovep-ed8f5.firebaseapp.com",
  projectId: "klovep-ed8f5",
  storageBucket: "klovep-ed8f5.appspot.com",
  messagingSenderId: "779578921451",
  appId: "1:779578921451:web:ff5a7c929e6b01a23249ae",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
