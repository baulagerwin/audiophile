import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const H4: NextPage<Props> = ({ children }) => {
  return (
    <h4 className="text-[28px] font-bold leading-[38px] tracking-[2px] uppercase">
      {children}
    </h4>
  );
};

export default H4;
