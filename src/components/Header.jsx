"use client";

import Link from "next/link"
import Nav from "./Nav";
import { useState } from "react";

// React Icons
import { TfiAlignRight } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const Header = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return(
        <>
        <header className="py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/">
                        <h1 className="text-4xl uppercase ml-10">Alert
                        <span className={isHomePage ? "text-[#00466f]" : "text-pink-600"}>Angel.</span>
                        </h1>

                    </Link>
                    {/* Desktop NavBar */}
                    <div className="hidden lg:flex gap-1">
                        <Nav />
                    </div>

                    {/* Mobile NavBar */}
                    <div className="lg:hidden text-3xl text-[#00466f]">
                        {mobileNavOpen ? (
                            <IoMdClose onClick={toggleMobileNav} className="mr-10" />
                        ) : (
                            <TfiAlignRight onClick={toggleMobileNav}  className="mr-10"/>
                        )}
                    </div>
                </div>
                {/* Mobile Navigation Menu */}
                {mobileNavOpen && (
                    <div className="md:hidden flex flex-col items-center justify-center h-full space-y-6">
                    <Nav />
                </div>
                )}
            </header>
        </>
    )
}

export default Header