import { useState } from "react";
import { FaLocationDot, FaTruck } from "react-icons/fa6";

function PincodeChecker() {
  const [pincode, setPincode] = useState("");
  const [message, setMessage] = useState("");

  const checkDelivery = () => {
    // Basic Indian pincode validation
    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      setMessage("Please enter a valid 6-digit pincode.");
      return;
    }

    // Demo delivery calculation
    const deliveryDate = new Date();

    deliveryDate.setDate(deliveryDate.getDate() + 4);

    const formattedDate = deliveryDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
    });

    setMessage(`Estimated delivery by ${formattedDate}`);
  };

  return (
    <div className="mt-8 border-t border-[#e8dcc5] pt-8">

      {/* Heading */}
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
          <FaLocationDot />
        </div>

        <div>
          <h3 className="font-semibold text-[#29231f]">
            Check Delivery
          </h3>

          <p className="text-sm text-gray-500">
            Enter your pincode to check availability
          </p>
        </div>

      </div>

      {/* Input */}
      <div className="mt-5 flex gap-3">

        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter pincode"
          maxLength="6"
          className="w-full rounded-full border border-[#d8cbb9] bg-[#f8f5f0] px-5 py-3 outline-none transition focus:border-[#29231f]"
        />

        <button
          onClick={checkDelivery}
          className="cursor-pointer rounded-full bg-[#29231f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#3d3530]"
        >
          CHECK
        </button>

      </div>

      {/* Delivery Result */}
      {message && (

        <div className="mt-5 flex items-center gap-3 rounded-xl bg-[#e8dcc5] p-4">

          <FaTruck className="text-[#29231f]" />

          <p className="text-sm font-medium text-[#29231f]">
            {message}
          </p>

        </div>

      )}

    </div>
  );
}

export default PincodeChecker;