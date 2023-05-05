import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const H6: NextPage<Props> = ({ children }) => {
  return (
    <h6 className="text-[18px] leading-[24px] tracking-[1.3px] font-bold uppercase">
      {children}
    </h6>
  );
};

export default H6;
