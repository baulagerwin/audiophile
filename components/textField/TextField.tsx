import { NextPage } from "next";
import React from "react";

interface Props {
  type?: string;
  name: string;
  status: string;
  onStatusChange: (value: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const TextField: NextPage<Props> = ({
  type = "text",
  name,
  status,
  onStatusChange,
  value,
  onChange,
  placeholder,
}) => {
  const initial = "";
  const focused = "focused";
  const invalid = "invalid";

  const isFocused = status === focused && "border-rust";
  const isInvalid = status === invalid && "border-2 border-error";

  const inputStyle = `border border-grainsBoro ${isFocused} ${isInvalid} font-bold px-4 text-[14px] rounded-[8px] h-[56px] caret-rust outline-none`;
  const placeholderStyle = `placeholder:text-[14px] font-bold placeholder:text-graySmoke`;

  function handleFocus() {
    onStatusChange(focused);
  }

  function handleBlur() {
    if (value) return;

    onStatusChange(initial);
  }

  return (
    <label
      className={`w-[309px] h-[81px] flex flex-col justify-between ${
        isInvalid && "shake-animation"
      }`}
    >
      <div className="flex justify-between">
        <span
          className={`text-black text-[12px] font-bold uppercase ${
            isInvalid && "text-error"
          }`}
        >
          {name}
        </span>
        {isInvalid && (
          <span className={`text-[12px] font-medium text-error`}>
            Wrong format
          </span>
        )}
      </div>

      <input
        type={type}
        className={`${inputStyle} ${placeholderStyle}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </label>
  );
};

export default TextField;
