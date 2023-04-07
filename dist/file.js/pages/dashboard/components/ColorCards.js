"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ColorCards_module_scss_1 = require("./styles/ColorCards.module.scss");
var rx_1 = require("react-icons/rx");
var ColorCards = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, date = _a.date, _b = _a.type, type = _b === void 0 ? 'pink' : _b, props = __rest(_a, ["title", "subtitle", "date", "type"]);
    var stylesHandler = function (type) {
        var className = '';
        if (type === 'pink')
            className = ColorCards_module_scss_1.default.styleOne;
        if (type === 'yellow')
            className = ColorCards_module_scss_1.default.styleTwo;
        return className;
    };
    return (React.createElement("div", { className: "".concat(ColorCards_module_scss_1.default.wrapper, " ").concat(stylesHandler(type)) },
        React.createElement("div", { className: ColorCards_module_scss_1.default.wrapper_title }, "Revinues"),
        React.createElement("div", { className: ColorCards_module_scss_1.default.wrapper_block },
            React.createElement("div", { className: ColorCards_module_scss_1.default.icon },
                React.createElement(rx_1.RxBarChart, null)),
            React.createElement("div", { className: ColorCards_module_scss_1.default.content },
                React.createElement("div", { className: ColorCards_module_scss_1.default.content_title }, "$432"),
                React.createElement("div", { className: ColorCards_module_scss_1.default.content_subtitle }, "2022/01/02")))));
};
exports.default = ColorCards;
