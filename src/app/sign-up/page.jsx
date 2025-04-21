"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/signup", { name, email, password })
      .then((res) => {
        if (res.status === 201) {
          alert("Signup successful! Redirecting to login...");
          router.push("/login");
        }
      })
      .catch((err) => {
        if (
          err.response?.status === 400 &&
          err.response?.data?.msg === "User Already Exists"
        ) {
          alert("User already exists! Redirecting to login...");
          router.push("/login");
        } else {
          alert("Something went wrong. Please try again.");
        }
      });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gradient-to-b from-zinc-900 to-black p-10 rounded-2xl shadow-lg border border-pink-700/30">
        <h1 className="text-3xl text-center text-pink-500 font-extrabold mb-6">
          Create Your Account 💫
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Join Alert Angel and make safety smarter.
        </p>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-zinc-800 text-white focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-gray-300 font-medium mb-1"
            >
              Email
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
            <label
              htmlFor="password"
              className="block text-sm text-gray-300 font-medium mb-1"
            >
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

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2.5 rounded-lg shadow-md transition"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-400 hover:underline font-medium">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
