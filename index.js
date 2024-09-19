"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const array_sort_1 = __importDefault(require("@swastika1/array-sort"));
const app = (0, express_1.default)();
app.get('/', function (req, res) {
    const cost_centers = [
        ["100", "Cost Center B"],
        ["50", "Cost Center C"],
        ["50", "Cost Center C"],
        ["200", "Cost Center A"]
    ];
    res.send((0, array_sort_1.default)(cost_centers));
});
app.listen(3000);
