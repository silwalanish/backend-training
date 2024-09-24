import express from "express";
import { sortCostCenter } from "@saphall/sort-cost-center";

const app = express();
const port = 3000;

app.get("/sort-cost-centers", (req, res) => {
  const inputCostCenters = [
    ["100", "Cost Center B"],
    ["200", "Cost Center A"],
    ["100", "Cost Center B"],
    ["300", "Cost Center C"],
    ["500", "Cost Center A"],
  ];

  const sortedCostCenters = sortCostCenter(inputCostCenters);
  res.json(sortedCostCenters);
});

app.listen(port, () => {
  console.log(
    `Cost Center Sort app listening at http://localhost:${port}/sort-cost-centers`
  );
});
