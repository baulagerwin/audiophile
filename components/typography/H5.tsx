import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const H5: NextPage<Props> = ({ children }) => {
  return (
    <h5 className="text-[24px] leading-[33px] tracking-[1.7px] font-bold uppercase">
      {children}
    </h5>
  );
};

export default H5;
