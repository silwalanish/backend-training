export interface CostCenter {
  id: string;
  name: string;
}

export function getSortedDistinctCC(costCenters: Array<[string, string]>): CostCenter[] {
  const distinctCC = new Map<string, string>();

  costCenters.forEach(([id, name]) => distinctCC.set(id, name));

  return Array.from(distinctCC, ([id, name]) => ({ id, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
}
