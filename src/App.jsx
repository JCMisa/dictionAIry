import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatWithAI from "./components/ChatWithAI/ChatWithAI";
import Login from "./pages/Login/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";

export const InputContext = createContext();

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In");
        console.log(user.email);
        setUserEmail(user.email);
        navigate("/");
      } else {
        console.log("Logged Out");
        navigate("/login");
      }
    });
  }, []);

  const [inputValue, setInputValue] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const value = {
    inputValue,
    setInputValue,
    userEmail,
  };
  return (
    <>
      <InputContext.Provider value={value}>
        <div>
          <ToastContainer theme="dark" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/chatai" element={<ChatWithAI />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </InputContext.Provider>
    </>
  );
}

export default App;
