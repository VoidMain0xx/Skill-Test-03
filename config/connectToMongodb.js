import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017/data";

let client

export const connectToMongoDb = () =>{
    MongoClient.connect(url)
    .then(clientInstance =>{
        client = clientInstance
        console.log("Mongo Db is connected");
    }).catch(err =>{
        console.log(err);
    })
}


export const getDb = ()=>{
    return client.db();
}