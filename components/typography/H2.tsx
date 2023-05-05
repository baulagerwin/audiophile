import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const H2: NextPage<Props> = ({ children }) => {
  return (
    <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] uppercase">
      {children}
    </h2>
  );
};

export default H2;
