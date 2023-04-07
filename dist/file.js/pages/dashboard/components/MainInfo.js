"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../utility/Button");
var MainInfo_module_scss_1 = require("./styles/MainInfo.module.scss");
var MainInfo = function () {
    return (React.createElement("div", { className: 'p-4 shadow-lg rounded-sm w-fit h-fit bg-slate-50 flex' },
        React.createElement("div", null,
            React.createElement("div", { className: 'text-black text-lg' }, "DashBoard"),
            React.createElement("div", { className: 'mt-1 text-slate-400 text-xs' }, "overveiw of lastmonth"),
            React.createElement("div", { className: 'mt-6 text-black text-2xl font-medium' }, "$4568"),
            React.createElement("div", { className: 'mt-1 text-slate-400 text-xs' }, "current month earnig"),
            React.createElement("div", { className: 'mt-6 text-black text-2xl font-medium' }, "82"),
            React.createElement("div", { className: 'mt-1 mb-6 text-slate-400 text-xs' }, "current month sales"),
            React.createElement(Button_1.default, { label: 'last month summary', type: 'primary', size: 'small' })),
        React.createElement("div", { className: MainInfo_module_scss_1.default.right },
            React.createElement("div", { className: MainInfo_module_scss_1.default.right_header },
                React.createElement("div", null, "DAILY"),
                React.createElement("div", null, "WEEKLY"),
                React.createElement("div", null, "MONTHLY"),
                React.createElement("div", null, "YEARLY"),
                React.createElement("div", { className: MainInfo_module_scss_1.default.legend },
                    React.createElement("div", { className: MainInfo_module_scss_1.default.current }, "current"),
                    React.createElement("div", { className: MainInfo_module_scss_1.default.online }, "online"))),
            React.createElement("div", { className: MainInfo_module_scss_1.default.right_content }))));
};
exports.default = MainInfo;
