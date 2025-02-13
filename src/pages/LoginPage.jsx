import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";

const LoginPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/home");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>
          Login with <span className="google-text">Google</span>
        </h2>
        <GoogleLoginButton onLoginSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
};

export default LoginPage;
