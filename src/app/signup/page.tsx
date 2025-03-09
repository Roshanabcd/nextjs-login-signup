"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function SignupPage() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();
      console.log("API response:", data); // Debugging

      if (response.ok) {
        router.push("/login"); // Redirect to login page on success
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 justify-center items-center">
        <input className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input className="border-2 border-gray-300 rounded-md p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        </div>
        <div className="flex flex-col gap-2 justify-center items-center mt-4">
        <Button type="submit" className="bg-blue-500 text-white">Signup</Button>
        </div>
      </form>
      {message && <p>{message}</p>}
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
        <Link href="/login"><Button className="bg-blue-400 text-white">Login</Button></Link> <span>Already have an account?</span>
      </div>
    </div>
  );
}