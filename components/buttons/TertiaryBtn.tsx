import { NextPage } from "next";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

const TertiaryBtn: NextPage<Props> = ({ href, children }) => {
  const style = `text-[13px] text-graySmoke font-bold uppercase transition-all`;
  const lastLetterStyle = `text-xl text-apricot font-bold inline-block translate-y-[1px]`;
  const hoverStyle = `hover:text-apricot`;

  return (
    <Link className={`${style} ${hoverStyle}`} href={href}>
      {children} <span className={`${lastLetterStyle}`}>&gt;</span>
    </Link>
  );
};

export default TertiaryBtn;
