import { FaTruck, FaBolt } from "react-icons/fa6";

function DeliveryOptions({
  selectedDelivery,
  setSelectedDelivery,
}) {
    

  const deliveryOptions = [
    {
      id: "standard",
      title: "Standard Delivery",
      description: "Delivered within 3–5 business days",
      price: "FREE",
      icon: <FaTruck />,
    },
    {
      id: "express",
      title: "Express Delivery",
      description: "Delivered within 1–2 business days",
      price: "₹99",
      icon: <FaBolt />,
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      
      {/* Heading */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
          <FaTruck />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
            DELIVERY METHOD
          </p>

          <h2 className="text-2xl font-semibold text-[#29231f]">
            Choose Delivery Option
          </h2>
        </div>
      </div>

      {/* Options */}
      <div className="mt-8 space-y-4">
        {deliveryOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelectedDelivery(option.id)}
            className={`flex w-full cursor-pointer items-center justify-between rounded-xl border-2 p-5 text-left transition duration-300 ${
              selectedDelivery === option.id
                ? "border-[#29231f] bg-[#f8f5f0]"
                : "border-[#e8dcc5] hover:border-[#8B6F5A]"
            }`}
          >
            <div className="flex items-center gap-4">
              
              {/* Radio */}
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                  selectedDelivery === option.id
                    ? "border-[#29231f]"
                    : "border-gray-300"
                }`}
              >
                {selectedDelivery === option.id && (
                  <div className="h-2.5 w-2.5 rounded-full bg-[#29231f]" />
                )}
              </div>

              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
                {option.icon}
              </div>

              {/* Details */}
              <div>
                <h3 className="font-semibold text-[#29231f]">
                  {option.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {option.description}
                </p>
              </div>
            </div>

            {/* Price */}
            <span className="font-semibold text-[#29231f]">
              {option.price}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default DeliveryOptions;