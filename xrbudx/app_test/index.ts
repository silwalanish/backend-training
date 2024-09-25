import * as express from 'express';
import { getSortedDistinctCC } from '@xrbudx/cost-center-sorting';

const app = express();
const port = 3200;

const costCenters: [string, string][] = [
  ["100", "Cost Center B"],
  ["200", "Cost Center A"],
  ["100", "Cost Center B"],
  ["00", "Cost Center 0"],
  ["101", "Cost Center B"],
  ["100", "Cost Center A"]
];

app.get('/distinct-cost-centers-sort', (req, res) => {
  console.log(`Received a ${req.method} request for ${req.url}`);
  const distinctCostCenters = getSortedDistinctCC(costCenters);
  res.json(distinctCostCenters);
});

app.listen(port, () => {
    console.log(`Distinct Cost Center Sort app is running on http://localhost:${port}/distinct-cost-centers-sort`);
});
