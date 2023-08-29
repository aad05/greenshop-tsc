import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUgjA_OXB-erY6-VS-3Z4W9Kz72enDqEw",
  authDomain: "aema-image-upload.firebaseapp.com",
  projectId: "aema-image-upload",
  storageBucket: "aema-image-upload.appspot.com",
  messagingSenderId: "1056117759937",
  appId: "1:1056117759937:web:4495d5151f4aa8805b9940",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle };
