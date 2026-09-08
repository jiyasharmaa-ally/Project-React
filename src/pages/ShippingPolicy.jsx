import PolicyLayout from "../components/PolicyLayout";

function ShippingPolicy() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      subtitle="Everything you need to know about the delivery of your LUMÉA order."
    >
      <div className="space-y-10 text-gray-600">

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Order Processing
          </h2>

          <p className="mt-3 leading-8">
            Orders are processed within 1–3 business days after confirmation.
            During high-demand periods, processing times may vary slightly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Delivery Time
          </h2>

          <p className="mt-3 leading-8">
            Delivery timelines depend on your location and the shipping method
            selected during checkout. Estimated delivery information will be
            provided once your order has been dispatched.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Tracking Your Order
          </h2>

          <p className="mt-3 leading-8">
            Once your order has been shipped, you will receive tracking details
            to help you follow your package until it arrives.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Shipping Delays
          </h2>

          <p className="mt-3 leading-8">
            Occasionally, deliveries may be delayed due to weather conditions,
            courier delays, or other circumstances outside our control.
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}

export default ShippingPolicy;