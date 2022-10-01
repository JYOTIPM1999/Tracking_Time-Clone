// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZWNN-DWUrVkc7HAswLqP73W8YPadDopc",
  authDomain: "fir-auth-masai.firebaseapp.com",
  projectId: "fir-auth-masai",
  storageBucket: "fir-auth-masai.appspot.com",
  messagingSenderId: "804936727526",
  appId: "1:804936727526:web:c2183e3b0545347e7f3427",
//   measurementId: "G-TMB40D5WBS"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

// const analytics = getAnalytics(app);