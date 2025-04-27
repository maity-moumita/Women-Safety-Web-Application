"use client";

import { useState } from "react";

const FrequentlyAskedQuestions = () => {
    return (
        <div className="mt-10 ml-4">
            <h1 className="text-3xl md:text-4xl md:text-center ml-10">Frequently Asked</h1>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#771931] to-[#00466f] bg-clip-text text-transparent md:text-5xl md:text-center ml-10">
                Questions
            </h1>
            <div className="mt-10 bg-black bg-opacity-70 rounded-lg shadow-lg p-6 md:flex md:flex-wrap md:gap-6 md:justify-center">
                {faqData.map((faq, index) => (
                    <div key={index} className="md:w-1/2 lg:w-1/3">
                        <Accordion question={faq.question} answer={faq.answer} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const faqData = [
    {
        question: "What is this website about?",
        answer: "This website is dedicated to empowering women by providing safety tips, resources, and tools to ensure their security and well-being.",
    },
    {
        question: "How can I contact support?",
        answer: "You can contact us via email at moumitamity220275@acropolis.in.",
    },
    {
        question: "How to access features?",
        answer: "Visit the 'features' section. After creating your account, you can access all the features just by one click.",
    },
    {
        question: "Do you provide custom solutions?",
        answer: "Yes, we offer personalized safety solutions and resources tailored to meet specific needs.",
    },
    {
        question: "Is my data secure on this website?",
        answer: "Absolutely. We prioritize your privacy and security. All your data is encrypted, and we comply with industry-standard practices to protect your information.",
    },
];

// Accordion Component
function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4">
            <div
                className="cursor-pointer bg-gradient-to-r from-[#00466f] to-[#771931] text-white rounded-md px-4 py-3 font-medium flex justify-between items-center md:w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{props.question}</span>
                <span>{isOpen ? "-" : "+"}</span>
            </div>
            {isOpen && (
                <div className="mt-2 bg-gradient-to-r from-[#00466f] to-[#771931] text-white rounded-md px-4 py-3 shadow-inner md:w-full">
                    {props.answer}
                </div>
            )}
        </div>
    );
}

export default FrequentlyAskedQuestions;
