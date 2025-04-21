"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (!result) {
        setError("Something went wrong. Please try again.");
        return;
      }

      if (result.ok) {
        router.push("/dashboard");
      } else {
        setError(result.error || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-b from-zinc-900 to-black p-10 rounded-2xl shadow-lg border border-pink-700/30">
        <h1 className="text-3xl text-center text-pink-500 font-extrabold mb-6">Welcome Back 👋</h1>
        <p className="text-center text-gray-400 mb-8">Login to continue to Alert Angel</p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm text-gray-300 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-zinc-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm text-gray-300 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-zinc-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Don’t have an account?{" "}
          <Link href="/sign-up" className="text-pink-400 hover:underline font-medium">
            Sign up here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
