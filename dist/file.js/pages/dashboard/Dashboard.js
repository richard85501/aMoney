"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorCards_1 = require("./components/ColorCards");
var MainInfo_1 = require("./components/MainInfo");
var PercentBlock_1 = require("./components/PercentBlock");
var Dashboard = function () {
    return (React.createElement("body", { className: 'p-8 bg-gray-100' },
        React.createElement("div", { className: 'flex ' },
            React.createElement(MainInfo_1.default, null),
            React.createElement(PercentBlock_1.default, null)),
        React.createElement(ColorCards_1.default, { type: 'pink', title: 'Revinues', subtitle: '$432', date: '2022/01/02' }),
        React.createElement(ColorCards_1.default, { type: 'yellow', title: 'Revinues', subtitle: '$432', date: '2022/01/02' })));
};
exports.default = Dashboard;
