import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa6";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#f8f5f0] pt-28">

        {/* HEADER */}
        <section className="px-6 py-20 text-center md:px-12 lg:py-24">
          <p
            className="mb-4 text-sm font-semibold tracking-[0.35em] text-[#8B6F5A]"
            data-aos="fade-down"
          >
            GET IN TOUCH
          </p>

          <h1
            className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-7xl"
            data-aos="fade-up"
          >
            We'd love to hear from you.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Have a question about your skincare routine, an order, or LUMÉA?
            Our team is here to help.
          </p>
        </section>

        {/* MAIN CONTACT SECTION */}
        <section className="px-6 pb-24 md:px-12">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">

            {/* LEFT SIDE */}
            <div
              className="bg-[#29231f] p-10 text-white md:p-16"
              data-aos="fade-right"
            >
              <p className="text-sm font-semibold tracking-[0.3em] text-[#cbbba0]">
                CONTACT LUMÉA
              </p>

              <h2 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight">
                Let's start a conversation.
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/70">
                Whether you need help choosing a product or have a question
                about your order, we're always happy to hear from you.
              </p>

              {/* Contact Info */}
              <div className="mt-12 space-y-7">

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#e8dcc5]">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-sm text-white/50">EMAIL US</p>
                    <p className="mt-1 text-white">
                      hello@lumea.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#e8dcc5]">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="text-sm text-white/50">CALL US</p>
                    <p className="mt-1 text-white">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#e8dcc5]">
                    <FaLocationDot />
                  </div>

                  <div>
                    <p className="text-sm text-white/50">OUR LOCATION</p>
                    <p className="mt-1 text-white">
                      New Delhi, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Instagram */}
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="text-sm tracking-wider text-white/50">
                  FOLLOW OUR JOURNEY
                </p>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 text-[#e8dcc5] transition duration-300 hover:text-white"
                >
                  <FaInstagram />
                  @lumea.skincare
                </a>
              </div>

            </div>


            {/* RIGHT SIDE - FORM */}
            <div
              className="p-10 md:p-16"
              data-aos="fade-left"
            >
              <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
                SEND A MESSAGE
              </p>

              <h2 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f]">
                How can we help?
              </h2>

              <form className="mt-10 space-y-6">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                    YOUR NAME
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-[#d8cbb9] bg-transparent px-0 py-4 text-[#29231f] outline-none transition focus:border-[#29231f]"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                    EMAIL ADDRESS
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border-b border-[#d8cbb9] bg-transparent px-0 py-4 text-[#29231f] outline-none transition focus:border-[#29231f]"
                  />
                </div>


                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                    SUBJECT
                  </label>

                  <select className="w-full border-b border-[#d8cbb9] bg-transparent px-0 py-4 text-[#29231f] outline-none">
                    <option value="">Select a subject</option>
                    <option>Product Question</option>
                    <option>Order Support</option>
                    <option>Shipping</option>
                    <option>Returns & Refunds</option>
                    <option>Other</option>
                  </select>
                </div>


                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                    YOUR MESSAGE
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none border-b border-[#d8cbb9] bg-transparent px-0 py-4 text-[#29231f] outline-none transition focus:border-[#29231f]"
                  />
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="group mt-4 inline-flex items-center gap-3 rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-[#3d3530]"
                >
                  SEND MESSAGE

                  <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </button>

              </form>
            </div>

          </div>
        </section>


        {/* SUPPORT STRIP */}
        <section className="border-y border-[#e8dcc5] bg-[#f3eee8] px-6 py-12">
          <div
            className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3"
            data-aos="fade-up"
          >
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                Quick Response
              </h3>
              <p className="mt-2 text-gray-600">
                We'll get back to you as soon as possible.
              </p>
            </div>

            <div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                Skincare Support
              </h3>
              <p className="mt-2 text-gray-600">
                Get help choosing products for your routine.
              </p>
            </div>

            <div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                Order Assistance
              </h3>
              <p className="mt-2 text-gray-600">
                Need help with an order? We're here for you.
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;