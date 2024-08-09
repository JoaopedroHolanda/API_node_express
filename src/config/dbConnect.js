import mongoose from "mongoose"

async function conector(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)
    return mongoose.connection
}

export default conector

