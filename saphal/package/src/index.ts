
export function sortCostCenter(array: [string, string][]): { id: string; name: string }[] {
    array = array.sort((a, b) => a[1].localeCompare(b[1]));

    const newArray: { id: string; name: string }[] = [];

    for (const data of array) {
        newArray.push({
            id: data[0],
            name: data[1],
        });
    }

    const ids = newArray.map(({ id }) => id);
    const filtered = newArray.filter(
        ({ id }, index) => !ids.includes(id, index + 1)
    );
    return filtered;
}
