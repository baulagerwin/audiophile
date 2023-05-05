import { NextPage } from "next";

interface Props {
  quantity: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const Quantity: NextPage<Props> = ({ quantity, onDecrement, onIncrement }) => {
  return (
    <div className="w-[120px] h-[48px] flex border border-whiteSmoke bg-whiteSmoke">
      <button
        type="button"
        className="flex-1 flex justify-center items-center text-[13px] font-bold text-graySmoke hover:text-rust"
        onClick={onDecrement}
      >
        -
      </button>
      <span className="flex-1 flex justify-center items-center text-[13px] font-bold text-black">
        {quantity}
      </span>
      <button
        type="button"
        className="flex-1 flex justify-center items-center text-[13px] font-bold text-graySmoke hover:text-rust"
        onClick={onIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
