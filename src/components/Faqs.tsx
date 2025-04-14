"use client";

import React, { useState } from "react";

const FaqSection = () => {
  // Define FAQ items
  const faqItems = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most standard websites take between 2 to 6 weeks depending on the scope, features, and content readiness. We’ll give you a timeline after our initial discovery session.",
    },
    {
      question: "Can you help improve my website’s SEO?",
      answer:
        "Absolutely. We offer complete SEO services, including technical audits, keyword research, on-page optimization, and content strategy to improve your search visibility.",
    },
    {
      question: "Do you offer custom web development or just templates?",
      answer:
        "We specialize in custom web development tailored to your business goals. Every site we build is unique, responsive, and optimized for performance.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Yes, all our websites are designed to be fully responsive and mobile-friendly, ensuring a seamless experience across all devices.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes, we offer ongoing maintenance plans to keep your website secure, updated, and performing well, including backups, plugin updates, and technical support.",
    },
    {
      question: "How does your SEO strategy work?",
      answer:
        "Our SEO strategy starts with an in-depth audit, followed by keyword planning, content optimization, backlink building, and monthly performance tracking.",
    },
  ];

  // Use an array of booleans to track open state for each FAQ item
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(faqItems.length).fill(false) // initialize all to closed
  );

  // Toggle function to handle each FAQ item independently
  const toggleFaq = (index: number) => {
    setOpenStates((prev) => {
      // Toggle the state of the clicked FAQ
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-2 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-600">FAQ</span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                Any Questions? We Have Got Answers
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Curious about how SEO works or what goes into building a high-performing website? We Have answered some of the most common questions to help you get started.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8 dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]"
              >
                <button
                  className="faq-btn flex w-full text-left"
                  onClick={() => toggleFaq(index)} // Toggle only this FAQ
                >
                  <div className="mr-5 flex h-10 w-full hover:cursor-pointer max-w-[40px] items-center justify-center rounded-lg bg-gray-100 text-blue-600 dark:bg-white/5">
                    <svg
                      className={openStates[index] ? "rotate-180" : ""}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
                      {item.question}
                    </h4>
                  </div>
                </button>
                <div
                  className={`faq-content pl-[62px] ${
                    openStates[index] ? "block" : "hidden"
                  }`}
                >
                  <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
