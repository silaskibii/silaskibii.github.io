const firebaseConfig = {
  apiKey: "AIzaSyA98MQO4OoOOsnq-TpMV9vuYAgTk-x7zxA",
  authDomain: "smartattendance-aa94a.firebaseapp.com",
  databaseURL: "https://smartattendance-aa94a-default-rtdb.firebaseio.com",
  projectId: "smartattendance-aa94a",
  storageBucket: "smartattendance-aa94a.firebasestorage.app",
  messagingSenderId: "417764530152",
  appId: "1:417764530152:web:c0150e83613e89936e765d",
  measurementId: "G-HNQYM24D7F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

console.log ('connected to firebase')