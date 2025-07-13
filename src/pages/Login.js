
import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

function Login() {
  const navigate = useNavigate();

  const signIn = async () => {
    const auth = getAuth();
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-6">Welcome to MacroTracker</h1>
      <button onClick={signIn} className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
