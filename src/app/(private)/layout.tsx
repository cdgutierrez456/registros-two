import React from "react";

import CTA from "@/components/global/cta";
import Introduction from "@/components/global/introduction";
import LearnMore from "@/components/global/learnmore";
import FAQ from "@/components/global/faq";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <CTA />
      <Introduction />
      <LearnMore />
      <FAQ />
    </div>
  );
}
