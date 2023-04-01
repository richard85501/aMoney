import React from "react";
import Button from "../../../Utility/Button.jsx";

const MainBlock = () => {
  return (
    <div className="p-4 shadow-lg rounded-sm w-fit h-fit bg-slate-50 flex">
      <div>
        <div className="text-black text-lg">DashBoard</div>
        <div className="mt-1 text-slate-400 text-xs">overveiw of lastmonth</div>
        <div className="mt-6 text-black text-2xl font-medium">$4568</div>
        <div className="mt-1 text-slate-400 text-xs">current month earnig</div>
        <div className="mt-6 text-black text-2xl font-medium">82</div>
        <div className="mt-1 mb-6 text-slate-400 text-xs">
          current month sales
        </div>
        <Button label="last month summary" type="primary" size="small" />
      </div>
      <div>
        <div className="flex ml-5 ">
          <div>DAILY</div>
          <div>WEEKLY</div>
          <div>MONTHLY</div>
          <div>YEARLY</div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
