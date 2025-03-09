import { NextResponse } from "next/server";
import clientPromise from "../../../lib/db";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const { name, password } = await request.json();

  const client = await clientPromise;
  const db = client.db("nextjs-auth");
  const collection = db.collection("users");

  const existingUser = await collection.findOne({ name });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  await collection.insertOne({ name, password: hashedPassword });

  return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}