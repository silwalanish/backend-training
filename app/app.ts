import express, { Request, Response } from 'express';
import { getUniqueOrderedCostCenters } from '@banmalasanjeev/costcenter_filter';

const app = express();
const port = 3000;

const costCenters: [string, string][] = [
  ["100", "Cost Center B"],
  ["200", "Cost Center A"],
  ["100", "Cost Center B"]
];

app.get('/cost-centers', (req, res) => {
  const uniqueCostCenters = getUniqueOrderedCostCenters(costCenters);
  res.json(uniqueCostCenters);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
