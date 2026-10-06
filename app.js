const express = require("express");

const app = express();

const studentRoutes = require("./Routes/studentRoutes");
const logger = require("./middleware/logger");

// Middleware to read JSON data
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Student routes
app.use("/students", studentRoutes);

// Home route
app.get("/", (req, res) => {
    res.send("Student Management REST API is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(err.message);

    res.status(500).json({
        message: "Something went wrong"
    });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
