const express = require("express");
const app = express();
const itemRoutes = require("./routes/itemRoutes");

app.use(express.json());

app.use("/items", itemRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
