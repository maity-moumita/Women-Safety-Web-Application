"use client";

import Image from "next/image";

const Information = () => {
    return (
        <div className="flex justify-center items-center mt-5">
            <div >
                <div className="text-4xl mx-4 md:text-5xl uppercase bg-gradient-to-r from-[#00466f] to-[#771931] bg-clip-text text-transparent">
                    How To Be a safe digital citizen✨
                </div>
                <div className="flex items-center justify-center bg-black">
                    <Image className="mt-6" src="/information.jpg" 
                    width={300}
                    height={50} alt="Information Section Image" />
                </div>
            </div>
        </div>
    )
}

export default Information