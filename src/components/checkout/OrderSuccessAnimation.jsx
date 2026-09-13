import { FaBox, FaTruckFast } from "react-icons/fa6";

function OrderSuccessAnimation() {
  return (
    <div className="relative mx-auto mb-8 flex h-28 w-72 items-center justify-center overflow-hidden">
      
      {/* Road */}
      <div className="absolute bottom-5 left-0 right-0 h-[2px] bg-[#e8dcc5]" />

      {/* Truck */}
      <div className="truck-animation absolute bottom-6 left-8 flex items-end gap-1">
        
        <div className="relative flex h-12 w-20 items-center justify-center rounded-md bg-[#29231f]">
          <FaBox className="text-lg text-[#e8dcc5]" />

          {/* Wheels */}
          <div className="absolute -bottom-2 left-3 h-4 w-4 rounded-full bg-[#29231f] ring-2 ring-[#f8f5f0]" />
          <div className="absolute -bottom-2 right-3 h-4 w-4 rounded-full bg-[#29231f] ring-2 ring-[#f8f5f0]" />
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-r-md bg-[#8B6F5A]">
          <FaTruckFast className="text-white" />
        </div>

      </div>

    </div>
  );
}

export default OrderSuccessAnimation;