import React from "react";
import "./styles/tailwind.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Navigation from "./navigation/Navigation";

const App = () => {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-full ml-10">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
