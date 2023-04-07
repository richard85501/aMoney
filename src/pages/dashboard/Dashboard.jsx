import React from "react";
import ColorCards from "./components/ColorCards.jsx";
import MainInfo from "./components/MainInfo.jsx";
import PercentBlock from "./components/PercentBlock.jsx";

const Dashboard = () => {
  return (
    <body className="p-8 bg-gray-100">
      <div className="flex ">
        <MainInfo />
        <PercentBlock />
      </div>
      <ColorCards type="pink" />
      <ColorCards type="yellow" />
    </body>
  );
};

export default Dashboard;
