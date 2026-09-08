import PolicyLayout from "../components/PolicyLayout";

function PrivacyPolicy() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      subtitle="Your privacy and trust are important to us."
    >
      <div className="space-y-10 text-gray-600">

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Information We Collect
          </h2>

          <p className="mt-3 leading-8">
            We may collect information that you provide when placing an order,
            creating an account, or contacting our team.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            How We Use Your Information
          </h2>

          <p className="mt-3 leading-8">
            Your information may be used to process orders, improve our services,
            communicate with you, and provide a better shopping experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Data Protection
          </h2>

          <p className="mt-3 leading-8">
            We take reasonable measures to protect your personal information
            and keep it secure.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Your Choices
          </h2>

          <p className="mt-3 leading-8">
            You may contact us if you have questions about your personal
            information or how it is handled.
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}

export default PrivacyPolicy;