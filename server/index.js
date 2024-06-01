const express = require("express");
var cors = require("cors");
const connectDB = require("./database");
const routes = require("./routes/index");

connectDB();

const app = express();
let port = process.env.PORT;


app.use(cors());
app.use(express.json());

app.use(routes());


app.listen(port, () => {
  console.log("Server started at port: " +process.env.PORT);
});