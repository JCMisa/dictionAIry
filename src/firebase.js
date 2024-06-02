import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBfrtiDH1zet8Vsif670_adB4xOvhlOwD4",
  authDomain: "netflix-clone-3dd92.firebaseapp.com",
  projectId: "netflix-clone-3dd92",
  storageBucket: "netflix-clone-3dd92.appspot.com",
  messagingSenderId: "1023219890355",
  appId: "1:1023219890355:web:375c14c989867117f8d8c6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

async function getAccounts() {
  const accounts = [];

  try {
    // Replace 'accounts' with your actual collection name
    const querySnapshot = await getDocs(collection(db, "user"));

    querySnapshot.forEach((doc) => {
      accounts.push(doc.data());
    });
  } catch (error) {
    console.error("Error fetching accounts:", error);
  }

  return accounts;
}

export { auth, db, login, signup, logout, getAccounts };
