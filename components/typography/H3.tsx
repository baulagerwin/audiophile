import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const H3: NextPage<Props> = ({ children }) => {
  return (
    <h3 className="text-[32px] font-bold leading-[36px] tracking-[1.15px] uppercase">
      {children}
    </h3>
  );
};

export default H3;
