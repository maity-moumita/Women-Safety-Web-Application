"use client";

import Image from "next/image";
import Link from "next/link";

const AboutAlertAngel = () => {
    return (
        <div className="bg-[#23234922] text-white py-10 px-6 md:px-12">
            {/* About Us Section */}
            <div className="bg-black p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#00466f] to-[#771931] bg-clip-text text-transparent text-center mb-4">About Us</h2>
                <p className="text-white text-lg text-center leading-relaxed">
                    Welcome to <span className="font-semibold text-[#00466f]">AlertAngel</span>, your trusted platform dedicated to ensuring
                    women’s safety and empowerment. We strive to create a world where every woman feels secure, supported,
                    and empowered to achieve her dreams without fear.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    <div className="bg-blue-200 box p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Mission</h3>
                        <p className="text-black">
                            We are committed to creating a safer environment for women through technology, education, and awareness.
                            Our mission is to foster a society where women can thrive with confidence and dignity.
                        </p>
                    </div>
                    <div className="bg-blue-200 box p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">What We Offer</h3>
                        <p className="text-black">
                            Our platform provides a range of features, including safety tips, emergency assistance, self-defense tutorials,
                            real-time location tracking, and a supportive community to help you stay safe and informed.
                        </p>
                    </div>
                    <div className="bg-blue-200 p-6 box rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Join Us</h3>
                        <p className="text-black">
                            Together, we can make a difference. Join the <span className="font-semibold text-blue-700">AlertAngel</span>
                            community and help us build a safer, brighter future for women everywhere.
                        </p>
                    </div>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-200 box p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Why Choose Us?</h3>
                        <p className="text-black">
                            With a focus on innovation and user-centric design, we offer tools and resources tailored to your safety needs.
                            Our commitment to excellence ensures you’re always supported.
                        </p>
                    </div>
                    <div className="bg-blue-200 box p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">Our Vision</h3>
                        <p className="text-black">
                            To create a world where every woman feels safe and empowered, supported by technology and a compassionate community.
                        </p>
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-white text-lg mb-4 leading-relaxed">
                        Want to learn more about our initiatives or become a part of the change?
                    </p>
                    <Link href="/feature-without-login" className="bg-[#771931] p-3 rounded-2xl hover:text-black font-semibold text-lg ">
                        Access Features
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default AboutAlertAngel;