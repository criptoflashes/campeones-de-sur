require('dotenv').config();

import {connect, connection}from 'mongoose'
const {
    MONGODB_URI
  } = process.env;
const conn = {
    isConnected: false
}

export async function connectDb(){
//if already connected don't repeat the connection again if not, continue code and connect
if(conn.isConnected) return


   /* const db = await connect('mongodb://localhost/campeonesdb') */
   const db = await connect('MONGODB_URI')
console.log(db.connection.db.databaseName)
conn.isConnected = db.connections[0].readyState
}



connection.on('connected', () => {
    console.log("Mongoose is connected")
})

connection.on('error', (err)=>{
    console.log('Mongoose connection error', err)
})