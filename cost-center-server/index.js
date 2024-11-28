import express from "express"
import generateUniqueCostCenters from "prakriti-cost-center-module"
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle POST requests to /data
app.post('/', (req, res) => {
  // Get the data sent in the request body
  const data = req.body;
  console.log(data)

  // Respond with the received data
  res.json(
    generateUniqueCostCenters(data)
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
