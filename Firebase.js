import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC46M1m7hz9Jwh3jfTzv8OQpSdBXXyaWT4",
  authDomain: "ghumante-761f6.firebaseapp.com",
  databaseURL: "https://ghumante-761f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ghumante-761f6",
  storageBucket: "ghumante-761f6.firebasestorage.app",
  messagingSenderId: "1042573497626",
  appId: "1:1042573497626:web:6afea56a2c9fd2adc488a3"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const auth = getAuth(app);
