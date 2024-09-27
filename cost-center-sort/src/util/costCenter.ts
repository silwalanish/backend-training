export interface CostCenter {
    id: string;
    name: string;
}

export const getDistinctCostCenter = (costCenters: [string, string][]): CostCenter[] => {
    const distinctCosCenter: Map<string, string> = new Map();

    costCenters.forEach(([id, name]) => {
        distinctCosCenter.set(id, name);
    });

    return Array.from(distinctCosCenter, ([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
};
