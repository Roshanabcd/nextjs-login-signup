"use client"; // Mark this as a Client Component
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginPage() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();
    if (response.ok) {
      router.push("/dashboard"); // Redirect to dashboard on success
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div >
      <h1>Login</h1>
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
        <Button type="submit" className="bg-blue-500 text-white">Login</Button>
        {/* <Link href="/signup">Signup</Link> */}
        </div>
      </form>
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
      <Link href="/signup"><Button className="bg-blue-500 text-white">Signup</Button></Link> <span>New User?</span>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}