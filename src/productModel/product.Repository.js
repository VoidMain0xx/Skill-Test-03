import { ObjectId } from "mongodb";
import { getDb } from "../../config/connectToMongodb.js";
import ProductModel from "./product.Schema.js";
import mongoose from "mongoose";

export default class productRepository {
    constructor() {
        this.collection = "Product"
    }

    async add(product) {
        try {
            const db = getDb();
            const collection = db.collection(this.collection);
            await collection.insertOne(product);
            return product
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const db = getDb();
            const collection = db.collection(this.collection);
            const posts = await collection.find().toArray();
            console.log(posts);
            return posts
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const db = getDb();
            const collection = db.collection(this.collection);
            const savePost = await collection.deleteOne({ _id: new ObjectId(id) }, {
                $set: {
                    save: true
                }
            })
            return savePost
        } catch (error) {
            console.log(error);
        }
    }


    async update(id, number) {

        try {
            const db = getDb();
            const collection = db.collection(this.collection);
            const savePost = await collection.findOneAndUpdate({ _id: new ObjectId(id) }, {
                $set: {
                    quantity: number
                }
            })
            return savePost
        } catch (error) {
            console.log(error);
        }
    }

    async getByid(id){
        try {
            const db = getDb();
            const collection = db.collection(this.collection);
            const product = collection.findOne({ _id : new ObjectId(id)})
            if(!product){
                return "Product not Found"
            }else{
            return product
            }
        } catch (error) {

            console.log(error);
        }
    }
}

