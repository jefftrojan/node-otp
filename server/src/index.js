const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
// Todo:  env configs 



// routes

const authRoutes = require('./routes/auth.route')


//init express app

const app= express();

//middlewares

app.use(express.json());
app.use(
    cors({
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

// index route

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running successfully",
        type: "Success",
        data: null,
    });
});

// middlewares routes

app.use('api/auth', authRoutes)


// middleware 404

app.use("*", (req, res, next)=> {
    const error = {
        status: 404,
        message: "API endpoint not found"
    };
    next(error);
})

app.listen(8080, () => console.log('Server listening'));
if (error) {
    console.log(error);
    process.exit(1)
}