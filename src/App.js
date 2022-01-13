import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Services from "./components/Services/Service.js";
import Banking from "./components/Banking/Banking";
import About from "./components/About/About.js";
import AddContact from "./components/AddContact/AddContact";
import AuthProvider, { useAuthContext } from "./util/Context/AuthContext";
import useAuth from "./util/Hooks/useAuth";

import "./App.css";

// this line is written by rohit

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLoginState = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <AuthProvider>
      <Router>
        <Navbar isLogin={isLogin} toggleState={toggleLoginState} />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<AddContact />} />
          {/* default path , if not path exits */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
