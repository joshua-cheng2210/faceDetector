import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(express.urlencoded({extended: false}))
app.use = express()

// app.post('/proxy', async (req, res) => {
//     const url = 'https://api.clarifai.com/v2/models/face-detection/outputs';
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': 'Key 1165295fdb9c481aacbfc38c59efc702',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(req.body)
//     };
  
//     try {
//       const response = await fetch(url, requestOptions);
//       const data = await response.json();
//       res.json(data);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   });


app.listen(port, () => {
    console.log(`Proxy server running at http://localhost:${port}`);
  });