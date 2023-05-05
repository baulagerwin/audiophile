import { NextPage } from "next";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const H1: NextPage<Props> = ({ children }) => {
  return (
    <h1 className="text-[56px] font-bold leading-[58px] tracking-[2px] uppercase">
      {children}
    </h1>
  );
};

export default H1;
