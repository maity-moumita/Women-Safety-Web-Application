"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut, signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

const Nav = () => {
  const { data: session, status } = useSession();
  console.log('session',session);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [providers, setProviders] = useState(null);

  // ✅ Fetch available auth providers
  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    fetchProviders();
  }, []);

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  const navLinks = session?.user
    ? [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
        { name: "Features", path: "/feature" },
        { name: "User Details", path:"/user-details" },
        { name: "Logout", onClick: handleLogout },
        
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Features", path: "/feature" },
        { name: "Sign Up", path: "/sign-up" },
        ...(providers
          ? Object.values(providers).map((provider) => ({
              name: "Login",
              onClick: () => signIn(provider.id),
            }))
          : []),
      ];

  return (
    <nav className="link_box flex flex-col md:flex-row gap-8 items-center mt-8 md:mt-0 mr-10">
      {navLinks.map((link, index) =>
        link.onClick ? (
          <button
            key={index}
            onClick={link.onClick}
            className={`capitalize font-medium transition-all ${
              isHomePage
                ? "text-white hover:text-[#00466f]"
                : "text-pink-600 hover:text-pink-800"
            }`}
          >
            {link.name}
          </button>
        ) : (
          <Link
            key={index}
            href={link.path}
            className={`hover:border-b-2 capitalize font-medium transition-all ${
              isHomePage
                ? "text-white border-[#00466f] hover:text-[#00466f] hover:border-[#00466f]"
                : "text-pink-600 border-pink-600 hover:text-pink-600 hover:border-pink-600"
            }`}
          >
            {link.name}
          </Link>
        )
      )}
    </nav>
  );
};

export default Nav;
