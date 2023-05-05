import { NextPage } from "next";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const SecondaryBtn: NextPage<Props> = ({ href, children }) => {
  const style = `h-[48px] w-[160px] flex justify-center items-center border border-black 
            uppercase bg-white text-black text-[13px] tracking-[1px] font-bold transition-all`;
  const hoverStyle = `hover:bg-black hover:text-white`;

  return (
    <Link className={`${style} ${hoverStyle}`} href={href}>
      {children}
    </Link>
  );
};

export default SecondaryBtn;
