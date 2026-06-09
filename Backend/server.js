const express = require("express");
const cors = require("cors");

const componentRoutes = require("./routes/componentRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/components", componentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});