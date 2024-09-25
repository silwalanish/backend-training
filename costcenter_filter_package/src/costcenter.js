"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueOrderedCostCenters = void 0;
/**
 * This function takes an array of cost centers and returns
 * a unique list of cost centers ordered alphabetically by name.
 */
function getUniqueOrderedCostCenters(data) {
    const uniqueCostCenters = new Map();
    // Create a map to ensure uniqueness
    data.forEach(([id, name]) => {
        uniqueCostCenters.set(id, name);
    });
    // Convert map to array and sort by name
    const sortedCostCenters = Array.from(uniqueCostCenters, ([id, name]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name));
    return sortedCostCenters;
}
exports.getUniqueOrderedCostCenters = getUniqueOrderedCostCenters;
