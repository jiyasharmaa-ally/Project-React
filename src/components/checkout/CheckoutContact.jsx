import { FaEnvelope, FaPhone } from "react-icons/fa6";

function CheckoutContact() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

      {/* Heading */}
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
          <FaEnvelope />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
            CONTACT DETAILS
          </p>

          <h2 className="text-2xl font-semibold text-[#29231f]">
            Contact Information
          </h2>
        </div>

      </div>


      {/* Contact Details */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">

        {/* Email */}
        <div className="rounded-xl bg-[#f8f5f0] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
              <FaEnvelope />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-[#8B6F5A]">
                EMAIL
              </p>

              <p className="mt-1 font-medium text-[#29231f]">
                jiya@example.com
              </p>
            </div>

          </div>

        </div>


        {/* Phone */}
        <div className="rounded-xl bg-[#f8f5f0] p-5">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
              <FaPhone />
            </div>

            <div>
              <p className="text-xs font-semibold tracking-wider text-[#8B6F5A]">
                PHONE NUMBER
              </p>

              <p className="mt-1 font-medium text-[#29231f]">
                +91 98765 43210
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* Info */}
      <p className="mt-6 text-sm leading-6 text-gray-500">
        We'll use these details to send you order updates and delivery
        notifications.
      </p>

    </section>
  );
}

export default CheckoutContact;