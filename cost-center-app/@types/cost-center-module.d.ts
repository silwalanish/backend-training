declare module 'cost-center-module' {
    interface CostCenter {
        id: string;
        name: string;
    }

    export function getUniqueCostCenters(data: Array<[string, string]>): CostCenter[];
}
