const express = require("express");
const cookieParser = require("cookie-parser");
const { createUserTable } = require("./models/auth-model");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Create table on startup
createUserTable()
  .then(() => console.log("Table 'users' ready"))
  .catch((error) => console.log(error));

// Routes
app.use("/api/auth", require("./routes/auth-route"));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
