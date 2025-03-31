import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
  const Navigate=useNavigate();
    const questionsAndAnswers = [
        {
            question: "What is your medical care?",
            answer: "One Medical was founded on a better model of care designed around patients' needs that provides smarter, faster, and more personalized care. Our approach combines exceptional providers with innovative technology to deliver high-quality care when and where you need it.",
        },
        {
            question: "What happens if I need to go to a hospital?",
            answer: "If you need to go to a hospital, we will collaborate with the care team there to ensure continuity of your treatment. We have partnerships with several top-rated hospitals and can help coordinate your care during hospital stays.",
        },
        {
            question: "Can I visit your medical office?",
            answer: "Yes, we welcome all patients to our modern, comfortable medical offices. We offer same-day appointments and extended hours for your convenience. Our offices are designed with your comfort and privacy in mind.",
        },
        {
            question: "Do you provide urgent care?",
            answer: "Yes, we provide urgent care services for non-life-threatening conditions. Our same-day appointments and virtual visits make it easy to get care when you need it most, without the long waits of traditional urgent care centers.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="text-center mb-10 md:mb-14">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    Frequently Asked Questions
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Answers to the most common questions from our patients
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {questionsAndAnswers.map((faq, index) => (
                    <div
                        key={index}
                        className={`border-b border-gray-200 last:border-b-0 transition-colors duration-200 ${activeIndex === index ? 'bg-blue-50' : 'hover:bg-gray-50'
                            }`}
                    >
                        <button
                            className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-content-${index}`}
                        >
                            <span className="text-lg font-medium text-gray-900">
                                {faq.question}
                            </span>
                            <span className="ml-4 flex-shrink-0 text-blue-600">
                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div
                            id={`faq-content-${index}`}
                            className={`px-6 pb-5 text-gray-600 transition-all duration-300 overflow-hidden ${activeIndex === index ? 'block' : 'hidden'
                                }`}
                        >
                            <p className="leading-relaxed">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">
                    Still have questions?
                </p>
                <button onClick={() => Navigate('/From')}className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                    Contact Our Support Team
                </button>
            </div>
        </div>
    );
};

export default FAQs;