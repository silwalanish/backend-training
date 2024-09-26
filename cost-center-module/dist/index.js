"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueCostCenters = void 0;
function getUniqueCostCenters(costCenters) {
    const uniqueCenters = new Map();
    for (const [id, name] of costCenters) {
        uniqueCenters.set(id, name);
    }
    const sortedCenters = Array.from(uniqueCenters.entries())
        .map(([id, name]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name));
    return sortedCenters;
}
exports.getUniqueCostCenters = getUniqueCostCenters;
