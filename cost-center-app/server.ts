// server.ts
import express from 'express';
import { getUniqueCostCenters } from 'cost-center-module';

const app = express();
const port = 3000;

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Cost Center API! Use /cost-centers to get unique cost centers.');
});

app.get('/cost-centers', (req, res) => {
    const costCenters: [string, string][] = [
        ["100", "Cost Center B"],
        ["200", "Cost Center A"],
        ["100", "Cost Center B"],
        // Add more as needed
    ];

    const uniqueCenters = getUniqueCostCenters(costCenters);
    res.json(uniqueCenters);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
