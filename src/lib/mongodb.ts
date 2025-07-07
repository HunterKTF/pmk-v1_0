import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {}

if (!uri) {
  throw new Error("Mongo DB URI not found")
}

// Extend the Node.js global type to include our custom property
declare global {
  // Allow modifying the global object
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const client = new MongoClient(uri, options)

const clientPromise: Promise<MongoClient> =
  global._mongoClientPromise ?? client.connect()

if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise
}

export default clientPromise
