require('dotenv').config()
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

//imports

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use('/api',require('./routes/users'))

const PORT = process.env.port || 5000
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
