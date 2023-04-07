"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./styles/tailwind.css");
var Dashboard_1 = require("./pages/dashboard/Dashboard");
// import { MdClear } from 'react-icons/md'
var App = function () {
    return react_1.default.createElement(Dashboard_1.default, null);
};
exports.default = App;
