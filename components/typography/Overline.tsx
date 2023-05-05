import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Overline: NextPage<Props> = ({ children }) => {
  return (
    <span className="text-[14px] text-rust leading-[19px] tracking-[10px] uppercase">
      {children}
    </span>
  );
};

export default Overline;
