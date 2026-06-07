// GHUMANTE Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC46M1m7hz9Jwh3jfTzv8OQpSdBXXyaWT4",
  authDomain: "ghumante-761f6.firebaseapp.com",
  databaseURL: "https://ghumante-761f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ghumante-761f6",
  storageBucket: "ghumante-761f6.firebasestorage.app",
  messagingSenderId: "1042573497626",
  appId: "1:1042573497626:web:29edd7ea6320736fc488a3"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
