import React from "react";
import ColorCards from "./components/ColorCards.jsx";
import MainBlock from "./components/MainBlock.jsx";

const Dashboard = () => {
  return (
    <body className="p-8 bg-gray-100">
      <MainBlock />
      <ColorCards type="pink" />
      <ColorCards type="yellow" />
    </body>
  );
};

export default Dashboard;
