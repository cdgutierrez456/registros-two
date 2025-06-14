import React from "react";

interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="gap-2.5 px-5 py-3 text-2xl font-bold leading-8 text-indigo-50 rounded-lg bg-[linear-gradient(101deg,#006CCF_35.48%,#004482_87.48%)] max-sm:px-4 max-sm:py-2.5 max-sm:text-xl">
      {children}
    </div>
  );
}
