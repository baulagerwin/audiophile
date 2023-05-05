import { NextPage } from "next";

interface Props {
  name: string;
  radioKey: string;
  currentMode: string;
  onChangeMode: (radioKey: string) => void;
}

const RadioSelection: NextPage<Props> = ({
  name,
  radioKey,
  currentMode,
  onChangeMode,
}) => {
  const style = `w-[309px] h-[56px] px-3 rounded-[8px] flex gap-4 items-center border border-grainsBoro cursor-pointer`;
  const hoverStyle = `hover:border-rust`;
  const isActive = currentMode === radioKey;
  const inputStyle = `h-[10px] w-[10px] appearance-none ${
    isActive && "bg-rust"
  } rounded-full`;
  const beforeInputStyle = `before:content-[""] before:inline-block before:border before:border-grainsBoro before:${
    isActive && "border-rust"
  }
    before:h-[20px] before:w-[20px] before:rounded-full before:-translate-y-[5px] before:-translate-x-[5px]`;

  return (
    <label
      className={`${style} ${hoverStyle} ${isActive && "border-rust"}`}
      onClick={() => onChangeMode(radioKey)}
    >
      <input
        type="radio"
        name="radio"
        className={`${inputStyle} ${beforeInputStyle}`}
        checked={isActive}
        onChange={() => onChangeMode(radioKey)}
      />
      <span className="text-[14px] font-bold text-black">{name}</span>
    </label>
  );
};

export default RadioSelection;
