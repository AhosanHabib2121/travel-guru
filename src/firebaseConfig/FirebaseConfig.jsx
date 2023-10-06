// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  
  apiKey: "AIzaSyAXUexoMWCyfU5rv3L-ij3FogsOglYEIeM",
  authDomain: "travel-guru-eecc8.firebaseapp.com",
  projectId: "travel-guru-eecc8",
  storageBucket: "travel-guru-eecc8.appspot.com",
  messagingSenderId: "421442520459",
  appId: "1:421442520459:web:6de6eb94f7b477c55d1b8e"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;