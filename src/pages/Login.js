
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const continueAsGuest = () => {
    // You can set a fake user in state/context here if needed
    navigate("/dashboard"); // or wherever your main app starts
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">Welcome to MacroTracker</h1>
      
      {/* Optional: Keep Google Sign-In button here if needed */}
      {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}

      <button
        onClick={continueAsGuest}
        className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
      >
        Continue without Signing In
      </button>
    </div>
  );
};

export default Login;
