import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDa2B1teJYeQ_I-I374hCqUOhLIt_KAfv4",
  authDomain: "ocean-live-project-ea2e7.firebaseapp.com",
  projectId: "ocean-live-project-ea2e7",
  storageBucket: "ocean-live-project-ea2e7.appspot.com",
  messagingSenderId: "253446058996",
  appId: "1:253446058996:web:0b086e9db154c333263fa1",
  measurementId: "G-C6YBEGH5EW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default firebase;
