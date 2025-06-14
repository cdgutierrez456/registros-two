import React from "react";
import Banner from "@/components/global/banner";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Banner />
      {children}
    </div>
  );
}
