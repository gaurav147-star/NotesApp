const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
connectToMongo();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// if (process.env.NODE_ENV==="production") {
//   app.use(express.static("client/build"))
// }

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
