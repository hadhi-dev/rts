import React,{useState} from "react";
import { BrowserRouter, Routes, Route,Navigate} from 'react-router-dom';
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import {NotFoundPage} from "./pages/NotFoundPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={() => setIsLoggedIn('true')} />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


