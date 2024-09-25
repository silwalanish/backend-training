"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSortedDistinctCC = getSortedDistinctCC;
function getSortedDistinctCC(costCenters) {
    var distinctCC = new Map();
    costCenters.forEach(function (_a) {
        var id = _a[0], name = _a[1];
        return distinctCC.set(id, name);
    });
    return Array.from(distinctCC, function (_a) {
        var id = _a[0], name = _a[1];
        return ({ id: id, name: name });
    })
        .sort(function (a, b) { return a.name.localeCompare(b.name); });
}
