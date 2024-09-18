import { arrayFunction } from './utils/util';

type CostCenter = [string, string];

const costCenters: CostCenter[] = [
  ["100", "Cost Center A"],
  ["200", "Cost Center B"],
  ["300", "Cost Center B"],
  ["100", "Cost Center A"],
  ["500", "Cost Center C"],
];

console.log("Input: ", costCenters);
console.log("Output: ", arrayFunction(costCenters));
