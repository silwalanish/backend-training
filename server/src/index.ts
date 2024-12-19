import fs from 'fs';
import removeDuplicates from '@swastika1/array-sort';
import formidable, { Files, Fields } from 'formidable';
import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 5000;

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.url === '/file-upload' && req.method?.toLowerCase() === 'post') {
    const form = formidable();

    form.parse(req, (err: Error, fields: Fields, files: Files) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error parsing the file');
        return;
      }

      const filePath = (files.file as formidable.File[])[0].filepath;

      fs.readFile(filePath, 'utf8', (err: any, data: any) => {
        if (err) {
          res.statusCode = 500;
          res.end('Error reading the file');
          return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
        const rows: string[] = data.replaceAll('"', '').split('\n');
        const array = rows.filter(row => row).map(row => row.split(','));

        const requiredArray = removeDuplicates(array);
        const requiredResponse = requiredArray.map(item => ({
          id: item[0],
          name: item[1]
        }));

        res.end(
          JSON.stringify({
            data: requiredResponse,
            message: 'Successfully transformed the data'
          })
        );
      });
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
