require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const employees = require("./routes/employees");

// Database connect
connection();

// MIDDLEWARES
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/employees", employees);

// Listening on port
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
