// app.js
import express from 'express';

const app = express();

// Your routes and middleware setup here
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

export default app;  // Export the app
