"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/admin");
    } catch (error) {
      alert("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F5EF] flex items-center justify-center px-6">

      <div className="bg-white rounded-[40px] shadow-lg p-10 w-full max-w-md">

        <h1 className="text-4xl font-bold text-[#2E473B] text-center">
          Admin Login
        </h1>

        <p className="text-center text-gray-500 mt-3">
          R & N Botanics Dashboard
        </p>

        <div className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#2E473B] text-white py-4 rounded-xl hover:bg-[#23392F]"
          >
            {loading ? "Signing In..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  );
}