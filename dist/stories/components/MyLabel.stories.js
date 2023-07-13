"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        size: "normal",
        allCaps: false,
        color: "tertiary"
    }
};
exports.AllCaps = {
    args: {
        label: "texto en mayúsculas",
        size: "h1",
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "h3",
        color: "secondary"
    }
};
