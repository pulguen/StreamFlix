import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyASttFqB3ChLIFrPSzfjaCpOSCR4CTuGJ0",
  authDomain: "streamflix-d030d.firebaseapp.com",
  projectId: "streamflix-d030d",
  storageBucket: "streamflix-d030d.appspot.com",
  messagingSenderId: "824796225965",
  appId: "1:824796225965:web:b57fff8d96cfa4494d4124"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)