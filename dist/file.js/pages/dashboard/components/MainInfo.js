"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = require("../../../utility/Button");
var MainInfo_module_scss_1 = require("./styles/MainInfo.module.scss");
var MainInfo = function () {
    return (react_1.default.createElement("div", { className: 'p-4 shadow-lg rounded-sm w-fit h-fit bg-slate-50 flex' },
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { className: 'text-black text-lg' }, "DashBoard"),
            react_1.default.createElement("div", { className: 'mt-1 text-slate-400 text-xs' }, "overveiw of lastmonth"),
            react_1.default.createElement("div", { className: 'mt-6 text-black text-2xl font-medium' }, "$4568"),
            react_1.default.createElement("div", { className: 'mt-1 text-slate-400 text-xs' }, "current month earnig"),
            react_1.default.createElement("div", { className: 'mt-6 text-black text-2xl font-medium' }, "82"),
            react_1.default.createElement("div", { className: 'mt-1 mb-6 text-slate-400 text-xs' }, "current month sales"),
            react_1.default.createElement(Button_1.default, { label: 'last month summary', type: 'primary', size: 'small' })),
        react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.right },
            react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.right_header },
                react_1.default.createElement("div", null, "DAILY"),
                react_1.default.createElement("div", null, "WEEKLY"),
                react_1.default.createElement("div", null, "MONTHLY"),
                react_1.default.createElement("div", null, "YEARLY"),
                react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.legend },
                    react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.current }, "current"),
                    react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.online }, "online"))),
            react_1.default.createElement("div", { className: MainInfo_module_scss_1.default.right_content }))));
};
exports.default = MainInfo;
