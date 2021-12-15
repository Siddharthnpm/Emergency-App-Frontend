import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import SignUp from "./components/SignUp/SignUp";
import Services from "./components/Services/Service.js";

import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLoginState = () => {
    setIsLogin(prevState => !prevState);
  }
  return (
    <div className="App">
      {/* {isLogin ? <Form /> : <SignUp />} */}
      <Router>
        <Navbar isLogin={isLogin} toggleState={toggleLoginState} />
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/login" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          {/* default path , if not path exits */}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
