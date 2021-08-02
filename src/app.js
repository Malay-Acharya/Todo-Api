const express = require("express");
const morgan = require("morgan");
require("./db/conn");

const app = express();
const port = process.env.PORT||3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('GET request to the homepage');
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

