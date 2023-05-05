import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Subtitle: NextPage<Props> = ({ children }) => {
  return (
    <span className="text-[13px] font-bold text-rust leading-[25px] tracking-[1px] uppercase">
      {children}
    </span>
  );
};

export default Subtitle;
