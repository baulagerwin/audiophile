import { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const Paragraph: NextPage<Props> = ({ children }) => {
  return <p className="text-[15px] leading-[25px]">{children}</p>;
};

export default Paragraph;
