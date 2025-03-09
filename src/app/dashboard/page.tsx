import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function DashboardPage() {
    return (
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <Link href="/login"><Button className="bg-blue-400 text-white"> Login</Button></Link>
        <Link href="/signup"><Button className="bg-blue-400 text-white">Signup</Button></Link>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Welcome to your dashboard!</p>
      </div>
    );
  }