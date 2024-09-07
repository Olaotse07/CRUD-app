const app = require("./app");
const mongoose = require("mongoose");

// Replace the placeholder with your actual MongoDB connection string
const mongoURI =
  "mongodb+srv://myUser:qRJgJmsJppqiaXws@crud-cluster.ag3t0.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
