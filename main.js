const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json()); // req body
app.use(cors());

const mainRoute = require("./routes/main");
const docsRoute = require("./routes/docs");

app.use("/", mainRoute);
app.use("/", docsRoute);

module.exports = app;
