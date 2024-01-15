import express  from 'express';
import mongoose from 'mongoose';
import { getDb } from './config/connectToMongodb.js';
import { connectToMongoDb } from './config/connectToMongodb.js';
import router from './src/productRoutes/products.Routes.js';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());
// server.use(express.json());
server.use('/products', router)



server.listen(3400 , () =>{
    console.log("the server is hosted to http://localhost:3400");
    connectToMongoDb();
})