import {IncomingMessage, ServerResponse} from 'http'
import fs from 'fs'

export const home = (req : IncomingMessage, res: ServerResponse) => {
    fs.readFile('public/index.html',(err,data)=>{
        if(err){
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error loading homepage');
            return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
    } )
}