const express = require("express");
const morgan = require("morgan");
require("./db/conn");

const app = express();
const port = process.env.PORT||3000;

app.use(express.json());
app.use(morgan('dev'));

app.use('/api/todo/auth', require("./routes/user"));

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

