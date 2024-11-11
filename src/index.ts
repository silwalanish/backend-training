'use strict'

const sortCostCenter = require('sort-cost-center') as any;

import http, { IncomingMessage, ServerResponse } from 'http';


const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        type CostCenter = [string, string];
        const input: CostCenter[] = [["100", "Cost Center B"], ["200", "Cost Center A"], ["100", "Cost Center B"]];
        console.log(sortCostCenter(input));
        res.end(JSON.stringify(sortCostCenter(input)));
    } else {
        // Handle other routes or methods
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
