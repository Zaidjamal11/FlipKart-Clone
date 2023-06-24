import mongoose from 'mongoose';




export const Connection = async (username, password) => {

   // const URL = `mongodb://${username}:${password}@ac-z1y8pav-shard-00-00.josglsx.mongodb.net:27017,ac-z1y8pav-shard-00-01.josglsx.mongodb.net:27017,ac-z1y8pav-shard-00-02.josglsx.mongodb.net:27017/?ssl=true&replicaSet=atlas-z73mpw-shard-0&authSource=admin&retryWrites=true&w=majority`;

   const URL = `mongodb://${username}:${password}@ac-npn5gxq-shard-00-00.kwjdfot.mongodb.net:27017,ac-npn5gxq-shard-00-01.kwjdfot.mongodb.net:27017,ac-npn5gxq-shard-00-02.kwjdfot.mongodb.net:27017/?ssl=true&replicaSet=atlas-1zs5xx-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try {
        
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully ')

    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }

}


export default Connection;