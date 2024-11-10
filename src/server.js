const express = require("express");
const authRoutes = require("./api/routes/authRoute");
const imageRoutes = require("./api/routes/imageRoute");
const notFoundMiddleware = require("./api/middlewares/notFoundMiddleware");
const errorHandlerMiddleware = require("./api/middlewares/errorHandlerMiddleware");

const app = express();

// Middleware to parse JSON
app.use(express.json());


// Public route for assets
app.get("/public/*", (req, res) => {
    // Replace this with logic to serve static assets, e.g., using Express static middleware
    res.send("Serve public assets here.");
});

// Home route
app.get("/", (req, res) => {
    res.send("Hello world, this is Express!! TEST");
});

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/image', imageRoutes);

// Global middleware for undefined routes
app.use(notFoundMiddleware);

// Global error handling middleware
app.use(errorHandlerMiddleware);

// Start the server
const PORT = process.env.PORT || 3000;

const start = async () => {
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

start();