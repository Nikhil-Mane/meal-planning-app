const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");

const app = express();
app.use(bodyParser.json());

// Mount the auth routes under different paths
app.post("/register", authRoutes.register); // Register route
app.post("/login", authRoutes.login); // Login route
app.get("/users", authRoutes.getUsers); // Get user route
// MongoDB connection
const { connectMongoDB } = require("./database");
connectMongoDB();

// Routes
app.get("/", (req, res) => res.send("Auth Service is running"));

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
