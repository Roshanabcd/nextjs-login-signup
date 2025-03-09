import clientPromise from "../lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, password } = req.body;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("nextjs-auth");
    const collection = db.collection("users");

    // Find the user
    const user = await collection.findOne({ name });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}