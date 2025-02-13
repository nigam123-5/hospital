import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import React from "react";  // ✅ Yeh line add karo
import { jwtDecode } from "jwt-decode";  // ✅ Correct Import

const GoogleLoginButton = ({ onLoginSuccess }) => {
  const [user, setUser] = useState(null);

  const clientId = process.env.REACT_APP_CLIENT_ID;
  console.log("Google Client ID:", clientId,process.env.REACT_APP_CLIENT_ID);
  console.log("User:", user);
  if(user){
    console.log("User:", user);
  }

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          const decoded = jwtDecode(credentialResponse.credential); // ✅ Correct Usage
          setUser(decoded);
          console.log("Login Success:", decoded);
          console.log("User:", user);
          console.log("credential:", credentialResponse.credential);
          console.log("creee:", credentialResponse);

          onLoginSuccess(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleLoginButton;
