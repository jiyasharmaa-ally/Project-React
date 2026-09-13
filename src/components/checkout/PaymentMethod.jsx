import { useState } from "react";
import {
  FaCreditCard,
  FaMobileScreen,
  FaMoneyBillWave,
} from "react-icons/fa6";

function PaymentMethod() {
  const [selectedPayment, setSelectedPayment] = useState("upi");

  const paymentMethods = [
    {
      id: "upi",
      title: "UPI",
      description: "Pay securely using any UPI app",
      icon: <FaMobileScreen />,
    },
    {
      id: "card",
      title: "Credit / Debit Card",
      description: "Visa, Mastercard, RuPay and more",
      icon: <FaCreditCard />,
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      description: "Pay when your order arrives",
      icon: <FaMoneyBillWave />,
    },
  ];

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

      {/* Heading */}
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
          <FaCreditCard />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
            PAYMENT METHOD
          </p>

          <h2 className="text-2xl font-semibold text-[#29231f]">
            How would you like to pay?
          </h2>
        </div>

      </div>


      {/* Payment Options */}
      <div className="mt-8 space-y-4">

        {paymentMethods.map((method) => (

          <button
            key={method.id}
            onClick={() => setSelectedPayment(method.id)}
            className={`flex w-full cursor-pointer items-center gap-4 rounded-xl border-2 p-5 text-left transition duration-300 ${
              selectedPayment === method.id
                ? "border-[#29231f] bg-[#f8f5f0]"
                : "border-[#e8dcc5] bg-white hover:border-[#8B6F5A]"
            }`}
          >

            {/* Radio Button */}
            <div
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                selectedPayment === method.id
                  ? "border-[#29231f]"
                  : "border-gray-300"
              }`}
            >
              {selectedPayment === method.id && (
                <div className="h-2.5 w-2.5 rounded-full bg-[#29231f]" />
              )}
            </div>


            {/* Icon */}
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
              {method.icon}
            </div>


            {/* Details */}
            <div>
              <h3 className="font-semibold text-[#29231f]">
                {method.title}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {method.description}
              </p>
            </div>

          </button>

        ))}

      </div>


      {/* Security Message */}
      <p className="mt-6 text-sm leading-6 text-gray-500">
        Your payment information is securely processed and protected.
      </p>

    </section>
  );
}

export default PaymentMethod;