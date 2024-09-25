export interface CostCenter {
    id: string;
    name: string;
}
/**
 * This function takes an array of cost centers and returns
 * a unique list of cost centers ordered alphabetically by name.
 */
export declare function getUniqueOrderedCostCenters(data: [string, string][]): CostCenter[];
