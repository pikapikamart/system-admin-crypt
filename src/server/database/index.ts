import mongoose from 'mongoose';


const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_URI_PROD = process.env.MONGODB_URI_PROD as string;

const deployment = process.env.NODE_ENV;

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

type Mongoose = {
  conn: null | typeof mongoose,
  promise: null | Promise<typeof mongoose>
}

declare global {
  var mongooseGlobal: Mongoose;
}

let cached = global.mongooseGlobal;

if (!cached) {
  cached = global.mongooseGlobal = { conn: null, promise: null };
}

async function connectDatabase() {

  if (cached.conn) {
    // return cached.conn;
    return;
  }   

  if (!cached.promise) {
    const opts = { bufferCommands: false };

    if ( deployment === "development" ){
      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
    } else if ( deployment === "production" ) {
      cached.promise = mongoose.connect(MONGODB_URI_PROD, opts).then((mongoose) => mongoose);
    }
  }
  cached.conn = await cached.promise; 

  return cached.conn ;
}


export { connectDatabase };