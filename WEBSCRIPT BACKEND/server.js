const express = require('express')
const cors =require("cors")

const app = express()

global.__basedir = __dirname;

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));

initRoutes(app);

let port = 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})