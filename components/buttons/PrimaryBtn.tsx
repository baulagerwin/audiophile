import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  type: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const PrimaryBtn: NextPage<Props> = ({ type, href, onClick, children }) => {
  const style = `h-[48px] w-[160px] uppercase bg-rust text-white text-[13px] tracking-[1px] font-bold transition-all`;
  const hoverStyle = `hover:bg-apricot`;

  // Hyperlink
  if (type === "hyperlink" && !!href)
    return (
      <Link
        className={`${style} ${hoverStyle} flex justify-center items-center`}
        href={href}
      >
        {children}
      </Link>
    );

  // Submit Button
  if (type === "submit")
    return (
      <button className={`${style} ${hoverStyle}`} type="submit">
        {children}
      </button>
    );

  // Button
  return (
    <button
      className={`${style} ${hoverStyle}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
