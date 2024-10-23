import express from 'express';
import connectToDb from './connect.js';
import urlRouter from './src/routes/url.route.js';
import cors from 'cors';

const app = express();
const port = 8000;

// DB connection
connectToDb();

// CORS Configuration
const corsOptions = {
    origin: 'https://minimizer.vercel.app',  // Allow only your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allowed methods
    credentials: true,  // Allow credentials like cookies
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allow specific headers
    optionsSuccessStatus: 200  // Response for preflight requests
};

// Enable CORS with options
app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));

// Middleware to handle JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/url", urlRouter);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
