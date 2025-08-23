require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Routes
app.use("/api", userRoutes);

// DB Connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
