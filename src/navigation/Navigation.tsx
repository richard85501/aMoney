import React from "react";
import { RiDashboardFill } from "react-icons/ri";
import Button from "../utility/Button";

const Navigation = () => {
  return (
    <div className="p-4 fixed h-full bg-gradient-to-b from-blue-300 via-purple-400 via-pink-500 to-red-500">
      <Button icon={<RiDashboardFill />} type={"pureIcon"} onClick={() => {}} />
    </div>
  );
};

export default Navigation;
