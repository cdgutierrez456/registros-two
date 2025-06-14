"use client";

import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

interface FaqQuestionProps {
  data: {
    question: string;
    answer?: string;
  }[];
}

export default function FAQuestion({ data }: FaqQuestionProps) {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };


  return data.map(({ question, answer }, index) => {
    const isOpen = openIndex === index;
    return (
    <div
      key={index}
      className={`flex flex-col ${
        isOpen
          ? "gap-5 justify-center items-center p-5 w-full bg-blue-100"
          : "gap-5 justify-between items-center p-5 w-full bg-indigo-50"
      } rounded-xl max-sm:gap-4 max-sm:p-4`}
    >
      <button
        onClick={() => handleToggle(index)}
        className="flex gap-5 justify-between items-center w-full max-sm:gap-4"
        aria-expanded={isOpen}
      >
        <h3 className="flex-1 text-2xl font-semibold leading-8 text-zinc-800 max-md:text-xl max-sm:text-lg text-left">
          {question}
        </h3>
        <span className="flex-shrink-0">
          {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
        </span>
      </button>
      {isOpen && answer && (
        <p className="w-full text-base leading-6 text-gray-500 max-sm:text-sm">
          {answer}
        </p>
      )}
    </div>
  );
});
}
