import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import app from "./firebase";
import { useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants";

function Logout(){
  localStorage.clear()

  return <Navigate to="/login" />
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register />
}


function App() {
  const auth = getAuth(app);
  // const navigate = useNavigate();



  useEffect(() => {
        console.log("inside useeffect");
        getRedirectResult(auth)
          .then((result) => {
            if (result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // const token = credential.accessToken;
              const refreshToken = credential.refreshToken;
              localStorage.setItem(ACCESS_TOKEN, token);
              localStorage.setItem(REFRESH_TOKEN, refreshToken);
              // The signed-in user info.
              const user = result.user;
              console.log("User Info:", user);
              // navigate("/");


            }
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.error("Error:", errorCode, errorMessage, email, credential);
          });

      }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/login" element = { <Login />} />
        <Route path="/logout" element = { <Logout />} />
        <Route path="/*" element = { <NotFound />} />
        <Route path="/register" element = { <RegisterAndLogout />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
