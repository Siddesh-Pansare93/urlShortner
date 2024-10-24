import express from 'express';
import dotenv from 'dotenv' 
import connectToDb from './connect.js';
import urlRouter from './src/routes/url.route.js';
import cors from 'cors';



dotenv.config({
    path : "./.env"
})


const app = express();
const port = 8000;

// DB connection
connectToDb();


app.use(cors());


// Middleware to handle JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/url", urlRouter);




// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`) 
});
