"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ColorCards_1 = require("./components/ColorCards");
var MainInfo_1 = require("./components/MainInfo");
var PercentBlock_1 = require("./components/PercentBlock");
var Dashboard = function () {
    return (react_1.default.createElement("body", { className: 'p-8 bg-gray-100' },
        react_1.default.createElement("div", { className: 'flex ' },
            react_1.default.createElement(MainInfo_1.default, null),
            react_1.default.createElement(PercentBlock_1.default, null)),
        react_1.default.createElement(ColorCards_1.default, { type: 'pink', title: 'Revinues', subtitle: '$432', date: '2022/01/02' }),
        react_1.default.createElement(ColorCards_1.default, { type: 'yellow', title: 'Revinues', subtitle: '$432', date: '2022/01/02' })));
};
exports.default = Dashboard;
