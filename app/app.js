"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const costcenter_filter_1 = require("@banmalasanjeev/costcenter_filter");
const app = (0, express_1.default)();
const port = 3000;
const costCenters = [
    ["100", "Cost Center B"],
    ["200", "Cost Center A"],
    ["100", "Cost Center B"]
];
app.get('/cost-centers', (req, res) => {
    const uniqueCostCenters = (0, costcenter_filter_1.getUniqueOrderedCostCenters)(costCenters);
    res.json(uniqueCostCenters);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
