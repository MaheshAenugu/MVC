require("./utils/dbConnect"); //database connection
const express = require("express");
const router = require("./routes/router");
const app = express();

// middleware
app.use(express.json());

app.use("/employees", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
