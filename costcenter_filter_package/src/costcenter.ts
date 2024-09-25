export interface CostCenter {
    id: string;
    name: string;
  }
  
  /**
   * This function takes an array of cost centers and returns
   * a unique list of cost centers ordered alphabetically by name.
   */
  export function getUniqueOrderedCostCenters(data: [string, string][]): CostCenter[] {
    const uniqueCostCenters = new Map<string, string>();
  
    // Create a map to ensure uniqueness
    data.forEach(([id, name]) => {
      uniqueCostCenters.set(id, name);
    });
  
    // Convert map to array and sort by name
    const sortedCostCenters: CostCenter[] = Array.from(uniqueCostCenters, ([id, name]) => ({ id, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  
    return sortedCostCenters;
  }
