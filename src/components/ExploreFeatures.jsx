"use client";

import Link from "next/link";

const ExploreFeature = () => {
    return(
        <div className="bg-[#0d9b94] p-6 pb-5 my-5 md:p-24 rounded-lg shadow-lg bg-pattern text-white text-center"
        style={{
            backgroundImage: "url('/exploreFeature.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          >
            <h1 className="text-4xl font-bold mb-4">Experience Safety in Action — Explore Our Features Today!</h1>
            <p className="text-lg mb-10">
                Discover how our innovative tools and features empower women to stay safe and connected anytime, anywhere.
            </p>

            <Link href="/feature" className="bg-[#771931] p-3 rounded-2xl hover:bg-[#00466f] font-semibold text-lg ">
            Access Features
            </Link>
        </div>
    )
}

export default ExploreFeature