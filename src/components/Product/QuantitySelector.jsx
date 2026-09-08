import { FaMinus, FaPlus } from "react-icons/fa6";

function QuantitySelector({ quantity, setQuantity }) {

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="mt-8">

      <p className="mb-3 text-sm font-semibold tracking-wider text-[#29231f]">
        QUANTITY
      </p>

      <div className="flex w-fit items-center overflow-hidden rounded-full border border-[#d8cbb9] bg-[#f8f5f0]">

        <button
          onClick={decreaseQuantity}
          className="flex h-12 w-12 cursor-pointer items-center justify-center transition hover:bg-[#e8dcc5]"
          aria-label="Decrease quantity"
        >
          <FaMinus className="text-sm" />
        </button>

        <span className="flex h-12 w-12 items-center justify-center font-semibold text-[#29231f]">
          {quantity}
        </span>

        <button
          onClick={increaseQuantity}
          className="flex h-12 w-12 cursor-pointer items-center justify-center transition hover:bg-[#e8dcc5]"
          aria-label="Increase quantity"
        >
          <FaPlus className="text-sm" />
        </button>

      </div>

    </div>
  );
}

export default QuantitySelector;