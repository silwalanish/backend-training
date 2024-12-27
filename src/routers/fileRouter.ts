import { IncomingMessage, ServerResponse } from 'http';
import { fileUpload } from '../controllers/fileController.js';

export const router = (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'POST' && req.url === '/upload_file') {
        fileUpload(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
};
