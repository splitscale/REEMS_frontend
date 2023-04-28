// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGLXduCGwc3-QV2-fi4dUR2BB0DZ_1DFY",
  authDomain: "reems-b3fb1.firebaseapp.com",
  databaseURL: "https://reems-b3fb1-default-rtdb.firebaseio.com",
  projectId: "reems-b3fb1",
  storageBucket: "reems-b3fb1.appspot.com",
  messagingSenderId: "415749727042",
  appId: "1:415749727042:web:b306fabf5f4b3fe834dedb",
  measurementId: "G-S4G7F118LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()