import http from 'http';
import { router as fileRouter } from './routers/fileRouter.js';
import { router as homeRouter } from './routers/homeRouter.js';

const server = http.createServer((req, res) => {
    // Route handling
    if (req.url?.startsWith('/upload_file')) {
        fileRouter(req, res);
    } else {
        homeRouter(req, res);
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
