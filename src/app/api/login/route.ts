import { NextResponse } from "next/server";
import clientPromise from "@/lib/db"; // Use absolute import
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, password } = await request.json();

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("nextjs-auth");
    const collection = db.collection("users");

    // Find the user
    const user = await collection.findOne({ name });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: "Invalid password" }, { status: 400 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}