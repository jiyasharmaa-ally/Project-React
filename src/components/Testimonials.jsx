import { Link } from "react-router-dom";
import testimonials from "../Data/testimonials";
import { FaStar, FaQuoteLeft } from "react-icons/fa";


function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#eee7dc] px-8 py-24">

      {/* Decorative Background */}
      <div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#d8c3a5]/40 blur-3xl"
        data-aos="fade-right"
        data-aos-duration="1500"
      ></div>

      <div
        className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#cbb89a]/40 blur-3xl"
        data-aos="fade-left"
        data-aos-duration="1500"
      ></div>


      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div
          className="mb-16 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <p
            className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            LOVED BY YOU
          </p>

          <h2
            className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Real Skin. Real Results.
          </h2>

          <p
            className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Thousands of skincare lovers have made LUMÉA a part of their
            everyday ritual.
          </p>
        </div>


        {/* Rating Summary */}
        <div
          className="mb-14 flex flex-col items-center justify-center gap-4"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >

          <div className="flex gap-1 text-[#D69E00]">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              />
            ))}
          </div>

          <div className="flex items-end gap-3">

            <span className="text-5xl font-bold text-[#29231f]">
              4.9
            </span>

            <span className="mb-1 text-gray-500">
              / 5 from 2,000+ reviews
            </span>

          </div>

        </div>


        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {testimonials.map((testimonial, index) => (

            <div
              key={testimonial.id}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              data-aos-duration="900"
              className={`group relative rounded-[2rem] border border-white/60 bg-white/70 p-8 backdrop-blur-sm transition duration-500 hover:-translate-y-3 hover:bg-white hover:shadow-2xl ${index === 1 ? "lg:-mt-6" : ""
                }`}
            >

              {/* Quote Icon */}
              <div
                className="mb-6 text-4xl text-[#B89B72]/40"
                data-aos="fade-right"
                data-aos-delay={index * 200 + 200}
              >
                <FaQuoteLeft />
              </div>


              {/* Stars */}
              <div className="mb-6 flex gap-1 text-[#D69E00]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>


              {/* Review */}
              <p className="min-h-[120px] text-lg leading-8 text-[#4a423a]">
                "{testimonial.review}"
              </p>


              <div className="my-7 h-px bg-[#d8cbb9]"></div>


              {/* Customer */}
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#29231f] font-semibold text-white">
                  {testimonial.initials}
                </div>

                <div>
                  <h4 className="font-semibold text-[#29231f]">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Verified Customer • {testimonial.location}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>


        {/* Bottom CTA */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >

          <p className="text-gray-600">
            Join thousands of people discovering their healthiest-looking skin.
          </p>

          <Link
            to="/reviews"
            className="mt-6 inline-block rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wider text-white transition duration-300 hover:scale-105 hover:bg-[#3d3530]"
          >
            READ ALL REVIEWS
          </Link>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;