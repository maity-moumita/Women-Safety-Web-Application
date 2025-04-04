"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/feature" },
  { name: "Sign Up", path: "/sign-up" },
  { name: "Login", path: "/login" },
];

const SignLinks = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Features", path: "/feature" },
  { name: "Logout", path: "/logout" },
];

const Nav = () => {
  const pathname = usePathname(); // Get current route
  const isHomePage = pathname === "/"; // Check if we're on Home

  // Mock authentication state (Replace with real authentication logic)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., using localStorage, context, or an API)
    const user = localStorage.getItem("user"); // Example: Replace with real auth check
    setIsAuthenticated(!!user);
  }, []);

  const navLinks = isAuthenticated ? SignLinks : Links;

  return (
    <nav className="link_box flex flex-col md:flex-row gap-8 items-center mt-8 md:mt-0 mr-10">
      {navLinks.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`hover:border-b-2 capitalize font-medium transition-all
            ${
              isHomePage
                ? "text-white border-[#00466f] hover:text-[#00466f] hover:border-[#00466f]" // All links blue if on Home
                : "text-pink-600 border-pink-600 hover:text-pink-600 hover:border-pink-600" // All links pink on other pages
            }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
