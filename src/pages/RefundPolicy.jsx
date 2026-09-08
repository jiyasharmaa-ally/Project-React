import PolicyLayout from "../components/PolicyLayout";

function RefundPolicy() {
  return (
    <PolicyLayout
      title="Refund Policy"
      subtitle="We want every LUMÉA experience to feel thoughtful and worry-free."
    >
      <div className="space-y-10 text-gray-600">

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Returns
          </h2>

          <p className="mt-3 leading-8">
            Products may be eligible for return depending on their condition
            and the reason for the return request.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Refund Eligibility
          </h2>

          <p className="mt-3 leading-8">
            Refund requests are reviewed based on the condition of the product
            and the details of the order.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Damaged Products
          </h2>

          <p className="mt-3 leading-8">
            If your product arrives damaged or incorrect, please contact us as
            soon as possible so our team can assist you.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Refund Processing
          </h2>

          <p className="mt-3 leading-8">
            Once a refund has been approved, processing times may vary depending
            on your original payment method.
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}

export default RefundPolicy;