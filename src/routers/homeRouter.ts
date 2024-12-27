import { IncomingMessage, ServerResponse } from "http";
import { home } from "../controllers/homeController.js";

export const router = (req:IncomingMessage , res:ServerResponse) =>{
    if (req.method === 'GET' && req.url === '/') {
        home(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
}