const express = require("express");
const cors = require("cors");

const app = express();


app.set("port", 3000)
app.use(cors)