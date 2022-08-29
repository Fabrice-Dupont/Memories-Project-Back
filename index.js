import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js';
//const express = require('express')

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);
const CONNECTION_URL = 'mongodb+srv://FabriceDupont:AndrewMongoLewis62@cluster0.q2depnp.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5001;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas