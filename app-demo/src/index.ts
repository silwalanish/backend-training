import express, { Request, Response } from 'express';
import { getDistinctCostCenter } from 'cost-center-sort';

const app = express();
const port = 3000;

const costCenters: [string, string][] = [
    ["100", "Cost Center B"],
    ["200", "Cost Center A"],
    ["100", "Cost Center B"],
    ["000", "Unknown Cost Center"]
];

app.get('/cost-centers', (req: Request, res: Response) => {
    const uniqueCostCenters = getDistinctCostCenter(costCenters);
    res.json(uniqueCostCenters);
});

app.listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
});
