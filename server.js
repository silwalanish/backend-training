import http from 'http'
import fs from 'fs'
import formidable  from 'formidable';
import processCostCenters from 'prakriti-cost-center-module'

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
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error processing upload' }));
                return;
            }

            // Read the uploaded CSV file
            fs.readFile(files.csvFile[0].filepath, 'utf8', (err, data) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Error reading file' }));
                    return;
                }

                // Parse CSV data
                const rows = data.trim().split('\n');
                const costCenters = rows.map(row => {
                    const [id, name] = row.split(',').map(item => 
                        item.trim().replace(/"/g, '')
                    );
                    return [ id, name ];
                });

                // Process using your published module
                const processedData = processCostCenters(costCenters);

                // Send response
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(processedData, null, 2));
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