import http from 'http';
import fs from 'fs';
import formidable from 'formidable';
import processCostCenters from 'prakriti-cost-center-module';
import { error } from 'console';

const server = http.createServer((req, res) => {
    // Handle different routes
    if (req.url === '/') {
        // Serve the homepage
        fs.readFile('./index.html', (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } 
    else if (req.url === '/file-upload' && req.method.toLowerCase() === 'post') {
        // Handle file upload
        const form = formidable({});
        
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.log(err)
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
                return;
            }

            // Check for file type (ensure it's a CSV file)
            const uploadedFile = files.csvFile[0];
            const fileExtension = uploadedFile.originalFilename.split('.').pop().toLowerCase();
            if (fileExtension !== 'csv') {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Uploaded file must be a CSV file.' }));
                return;
            }

            // Read the uploaded CSV file
            fs.readFile(uploadedFile.filepath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Error reading file' }));
                    return;
                }

                // Parse CSV data
                const rows = data.trim().split('\n');

                const malformedRows = [];
                const costCenters = [];

                const idNameObj = {}; // Object to track unique IDs and their names
                const conflictingrows = []; // To track conflicting cost center IDs

                rows.slice(1).forEach((row, index) => {
                    const columns = row
                        .split(',')
                        .map(item => item.trim().replace(/"/g, ''));

                    if (columns.length !== 2) {
                        malformedRows.push({ rowIndex: index + 2, rowContent: row });
                    } else {
                        const [id, name] = columns;

                        if (id in idNameObj) {
                            // Check for name conflict
                            if (idNameObj[id] !== name) {
                                conflictingrows.push({ id: id, names: [idNameObj[id], name] });
                            }
                        } else {
                            idNameObj[id] = name;
                        }

                        costCenters.push([id, name]);
                    }
                });

            
        
            // If there are malformed rows, return an error response
            if (malformedRows.length > 0) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({
                    error: 'Malformed CSV file. Some rows are invalid.',
                    malformedRows: malformedRows
                }, null, 2));
                return;
            }


                // Validate headers (first row)
                 // Clean and validate headers (first row)
                const headers = rows[0]
                .split(',')
                .map(header => header.trim().replace(/"/g, '').toLowerCase());
                const requiredHeaders = ['id', 'name'];

                const missingHeaders = requiredHeaders.filter(header => !headers.includes(header));
                if (missingHeaders.length > 0) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        error: 'Uploaded CSV file is missing required columns.',
                        missingHeaders: missingHeaders
                    }));
                    return;
                }
        

                // Process using your published module
                const processedData = processCostCenters(costCenters);

                // Send response
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({data:processedData, errors: conflictingrows}, null, 2));
            });
        });
    } 
    else {
        // Handle 404
        res.writeHead(404);
        res.end('Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
