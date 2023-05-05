import React, { useState } from 'react';

const useTextField = () => {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleStatusChange(value: string) {
    setStatus(value);
  }

  return {
    value,
    handleChange,
    status,
    handleStatusChange,
  };

};

export default useTextField;