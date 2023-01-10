import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC9AWZHGw8ZbN-z4jvOsP1S61bKt_TqmQ4",
  authDomain: "chatapp-2f98c.firebaseapp.com",
  databaseURL: "https://chatapp-2f98c-default-rtdb.firebaseio.com",
  projectId: "chatapp-2f98c",
  storageBucket: "chatapp-2f98c.appspot.com",
  messagingSenderId: "586490135001",
  appId: "1:586490135001:web:96ac7b8f99e554768dd9c8",
  measurementId: "G-M9197NBXRW"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app)
export const auth = getAuth(app)



