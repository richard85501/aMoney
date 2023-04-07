"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var Button_module_scss_1 = require("./styles/Button.module.scss");
var Button = function (_a) {
    var backgroundColor = _a.backgroundColor, size = _a.size, label = _a.label, type = _a.type, onClick = _a.onClick, icon = _a.icon, iconPlace = _a.iconPlace, disabled = _a.disabled, props = __rest(_a, ["backgroundColor", "size", "label", "type", "onClick", "icon", "iconPlace", "disabled"]);
    var buttonStyles = function () {
        var className = Button_module_scss_1.default['storybook-button'];
        if (size)
            className += ' ' + Button_module_scss_1.default["storybook-button--".concat(size)];
        if (type)
            className += ' ' + Button_module_scss_1.default["storybook-button--".concat(type)];
        if (disabled)
            className += ' ' + Button_module_scss_1.default['storybook-button--disabled'];
        return className;
    };
    var contentHandler = function (iconPlace) {
        if (!icon)
            return label;
        if (iconPlace === 'before') {
            return icon + label;
        }
        else {
            return label + icon;
        }
    };
    return (react_1.default.createElement("button", __assign({ type: 'button', className: buttonStyles(), onClick: function (e) { return !disabled && onClick(e); }, style: backgroundColor ? { backgroundColor: backgroundColor } : undefined }, props), contentHandler(iconPlace)));
};
exports.default = Button;
