
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Scanner from "./pages/Scanner";
import Suggestions from "./pages/Suggestions";
import Dashboard from "./components/Dashboard";
import WaterTracker from "./components/WaterTracker";
import MealPlanner from "./components/MealPlanner";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/suggestions" element={<Suggestions />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/water" element={<WaterTracker />} />
        <Route path="/planner" element={<MealPlanner />} />
      </Routes>
    </div>
  );
}

export default App;
