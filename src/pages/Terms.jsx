import PolicyLayout from "../components/PolicyLayout";

function Terms() {
  return (
    <PolicyLayout
      title="Terms of Service"
      subtitle="Please read these terms before using the LUMÉA website."
    >
      <div className="space-y-10 text-gray-600">

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Website Use
          </h2>

          <p className="mt-3 leading-8">
            By using this website, you agree to use it responsibly and in
            accordance with applicable laws.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Product Information
          </h2>

          <p className="mt-3 leading-8">
            We aim to provide accurate product descriptions and information.
            However, product packaging or details may occasionally change.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Orders
          </h2>

          <p className="mt-3 leading-8">
            We reserve the right to accept, refuse, or cancel orders when
            necessary.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#29231f]">
            Changes To These Terms
          </h2>

          <p className="mt-3 leading-8">
            These terms may be updated from time to time. Continued use of the
            website means you accept the updated terms.
          </p>
        </div>

      </div>
    </PolicyLayout>
  );
}

export default Terms;