// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId
// }

const firebaseConfig = {
  apiKey: "AIzaSyBxfHJhHwBt5su7T_tFfMiz8yOcApJealI",
  authDomain: "react-redux-store-app.firebaseapp.com",
  projectId: "react-redux-store-app",
  storageBucket: "react-redux-store-app.appspot.com",
  messagingSenderId: "1096567107897",
  appId: "1:1096567107897:web:08cc33a11ef238618ab8e8",
  measurementId: "G-B4KZZRKPWH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
