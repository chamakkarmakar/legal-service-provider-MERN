const express = require("express")
const cors = require("cors")
require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

// middleware 
app.use(cors())
app.use(express.json())

// Root API
app.get('/', (req, res) => {
    res.send('Legal Service Provider')
  })
  
  app.listen(port, () => {
    console.log(`Legal Service Provider listening on port ${port}`)
  })


