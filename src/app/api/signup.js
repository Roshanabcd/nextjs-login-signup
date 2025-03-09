import clientPromise from "../../lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("nextjs-auth");
    const collection = db.collection("users");

    // Check if the user already exists
    const existingUser = await collection.findOne({ name });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Insert the new user
    await collection.insertOne({ name, password: hashedPassword });

    res.status(201).json({ message: "User created successfully" });
    } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}