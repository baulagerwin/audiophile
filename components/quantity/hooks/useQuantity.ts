import { useState } from "react";

const useQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }

  return {
    quantity,
    handleDecrement,
    handleIncrement,
  };
};

export default useQuantity;
