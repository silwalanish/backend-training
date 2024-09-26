// src/index.ts

interface CostCenter {
    id: string;
    name: string;
}

export function getUniqueCostCenters(costCenters: [string, string][]): CostCenter[] {
    const uniqueCenters = new Map<string, string>();

    for (const [id, name] of costCenters) {
        uniqueCenters.set(id, name);
    }

    const sortedCenters = Array.from(uniqueCenters.entries())
        .map(([id, name]) => ({ id, name }))
        .sort((a, b) => a.name.localeCompare(b.name));

    return sortedCenters;
}
