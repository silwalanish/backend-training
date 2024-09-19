import express from "express";
import remove_duplicates from '@swastika1/array-sort'

const app = express()
// app.use(express.json());

// app.post('/', function (req, res) {
//     const cost_centers = req.body
//     if (Array.isArray(cost_centers)) {
//         console.log('Received array:', cost_centers);
    
//         // You can perform operations with the array here
//         res.json({
//           message: 'Array received successfully!',
//           sortedArray: remove_duplicates(cost_centers)
//         });
//       }
//     else{
//         res.json({message: "Array Required"})
//     }
//   })
  
  app.get('/', function (req, res) {
    const cost_centers = [
    ["100", "Cost Center B"],
    ["50", "Cost Center C"],
    ["50", "Cost Center C"],
    ["200", "Cost Center A"]
  ];
    res.send(remove_duplicates(cost_centers))
  })

  app.listen(3000)

