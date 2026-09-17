import Footer from "../components/Footer";

function Retailer() {
  return (
    <>
      {/* HERO */}

      <section className="bg-[#29231f] px-6 pb-24 pt-40 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#d8c4ae]">
            PARTNER WITH LUMÉA
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Bring thoughtful skincare
            <br />
            to your customers.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[#d8cec4] md:text-base">
            Become a LUMÉA retailer and introduce your customers to
            simple, effective skincare designed with intention.
          </p>

        </div>
      </section>


      {/* INTRO */}

      <section className="bg-[#f8f5f0] px-6 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="h-[500px] overflow-hidden rounded-[2rem]">

            <img
              src="/images/retailer.png"
              alt="LUMÉA skincare products"
              className="h-full w-full object-cover"
            />

          </div>


          {/* CONTENT */}

          <div>

            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
              WHY LUMÉA
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-[#29231f] md:text-5xl">
              A skincare brand your customers can understand.
            </h2>

            <p className="mt-6 text-sm leading-7 text-[#756b63]">
              At LUMÉA, we believe skincare should feel simple,
              intentional, and accessible. Our products are created
              for modern routines without unnecessary complexity.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#756b63]">
              We work with selected retail partners who share our
              approach to thoughtful beauty and customer experience.
            </p>

          </div>

        </div>

      </section>


      {/* BENEFITS */}

      <section className="bg-[#e8dcc5] px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
              THE PARTNERSHIP
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#29231f] md:text-5xl">
              More than just products.
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl bg-white/50 p-8">

              <span className="text-3xl">01</span>

              <h3 className="mt-6 text-lg font-semibold text-[#29231f]">
                Curated Products
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#756b63]">
                A thoughtfully selected range of skincare products
                designed for everyday routines.
              </p>

            </div>


            <div className="rounded-3xl bg-white/50 p-8">

              <span className="text-3xl">02</span>

              <h3 className="mt-6 text-lg font-semibold text-[#29231f]">
                Brand Support
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#756b63]">
                Resources and brand information to help you introduce
                LUMÉA to your customers.
              </p>

            </div>


            <div className="rounded-3xl bg-white/50 p-8">

              <span className="text-3xl">03</span>

              <h3 className="mt-6 text-lg font-semibold text-[#29231f]">
                Retail Experience
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#756b63]">
                Create a considered skincare experience that fits
                naturally into your retail space.
              </p>

            </div>


            <div className="rounded-3xl bg-white/50 p-8">

              <span className="text-3xl">04</span>

              <h3 className="mt-6 text-lg font-semibold text-[#29231f]">
                Long-Term Partnership
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#756b63]">
                We value meaningful relationships with retailers who
                share our vision for modern skincare.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* APPLICATION FORM */}

      <section className="bg-[#f8f5f0] px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
              LET'S WORK TOGETHER
            </p>

            <h2 className="mt-4 text-4xl font-semibold text-[#29231f] md:text-5xl">
              Become a LUMÉA retailer
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#756b63]">
              Tell us a little about your business and our team
              will get in touch with you.
            </p>

          </div>


          <form className="mt-14 rounded-[2rem] border border-[#ddd2c7] bg-white/60 p-8 md:p-12">

            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-medium text-[#29231f]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium text-[#29231f]">
                  Business Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium text-[#29231f]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              <div>
                <label className="mb-2 block text-sm font-medium text-[#29231f]">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
                />
              </div>

            </div>


            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-[#29231f]">
                Business Type
              </label>

              <select
                className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm text-[#756b63] outline-none focus:border-[#8B6F5A]"
              >

                <option value="">
                  Select your business type
                </option>

                <option value="beauty-store">
                  Beauty Store
                </option>

                <option value="salon">
                  Salon
                </option>

                <option value="spa">
                  Spa
                </option>

                <option value="pharmacy">
                  Pharmacy
                </option>

                <option value="online">
                  Online Store
                </option>

                <option value="other">
                  Other
                </option>

              </select>

            </div>


            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-[#29231f]">
                Business Website
              </label>

              <input
                type="url"
                placeholder="https://yourwebsite.com"
                className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
              />

            </div>


            <div className="mt-6">

              <label className="mb-2 block text-sm font-medium text-[#29231f]">
                Tell us about your business
              </label>

              <textarea
                rows="5"
                placeholder="Tell us about your business..."
                className="w-full resize-none rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm outline-none transition focus:border-[#8B6F5A]"
              />

            </div>


            <button
              type="submit"
              className="mt-8 w-full cursor-pointer rounded-full bg-[#29231f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-[#3d3530]"
            >
              SUBMIT APPLICATION
            </button>

          </form>

        </div>

      </section>


      {/* BOTTOM CTA */}

      <section className="bg-[#29231f] px-6 py-20 text-center text-white">

        <p className="text-xs font-semibold tracking-[0.2em] text-[#d8c4ae]">
          HAVE QUESTIONS?
        </p>

        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
          Let's start a conversation.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#d8cec4]">
          If you're interested in carrying LUMÉA but aren't sure
          where to begin, we'd love to hear from you.
        </p>

      </section>


      <Footer />
    </>
  );
}

export default Retailer;