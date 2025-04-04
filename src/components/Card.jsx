"use client";

const Card = ({ icon, title, description }) => {  
        return (
          <div className="max-w-sm p-5 bg-gradient-to-r from-[#00466f] to-[#771931] text-white rounded-xl shadow-lg  cursor-pointer mb-6 lg:mb-2 lg:m-3">
            {/* Icon */}
            <div className="flex justify-center mb-4">{icon}</div>
            {/* Description */}
            <h2 className="text-2xl font-semibold text-center mb-2">{title}</h2>
            <p className="text-center">{description}</p>
          </div>
        );
      };

export default Card      
