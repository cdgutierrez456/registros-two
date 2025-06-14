import React from "react";

interface ContactInfoProps {
  data: {
    icon: string;
    title: string;
    content: React.ReactNode;
  }[];
}

export default function ContactInfo({ data }: ContactInfoProps) {
  return data.map(({ icon, title, content }, index) => (
    <div className="flex gap-6 items-start max-sm:gap-4" key={index}>
      <div className="flex justify-center items-center w-16 h-16 bg-sky-800 rounded-lg flex-[shrink] max-sm:w-14 max-sm:h-14">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className="flex flex-col gap-2.5 items-start">
        <h2 className="text-2xl font-bold leading-8 text-zinc-800 max-md:text-2xl max-sm:text-xl">
          {title}
        </h2>
        <p className="text-base leading-6 text-gray-500 max-sm:text-sm">
          {content}
        </p>
      </div>
    </div>
  ));
}
