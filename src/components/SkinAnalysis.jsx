import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck } from "react-icons/fa";

function SkinAnalysis() {
  return (
    <section className="overflow-hidden bg-[#e9dfd2] px-6 py-20 md:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center overflow-hidden rounded-[2.5rem] bg-[#f8f5f0] lg:grid-cols-2">


        {/* LEFT SIDE - IMAGE */}
<div
  className="relative h-[500px] overflow-hidden lg:h-full"
  data-aos="fade-right"
  data-aos-duration="1000"
>
  <img
    src="/images/skinanlysis.png"
    alt="Skin analysis"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* Label */}
  <div className="absolute left-8 top-8 rounded-full border border-white/40 bg-white/20 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-white backdrop-blur-md">
    PERSONALIZED SKINCARE
  </div>
</div>

        {/* RIGHT SIDE - CONTENT */}
        <div
          className="px-8 py-14 md:px-16 lg:px-20"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
            DISCOVER YOUR SKIN
          </p>

          <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#29231f] md:text-6xl">
            Your skin is unique.
            <br />
            Your routine should be too.
          </h2>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            Answer a few simple questions about your skin and we'll create a
            personalized LUMÉA skincare routine designed around your needs.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6F5A] text-xs text-white">
                <FaCheck />
              </div>

              <span className="text-gray-700">
                Understand your skin type
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6F5A] text-xs text-white">
                <FaCheck />
              </div>

              <span className="text-gray-700">
                Identify your skin concerns
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6F5A] text-xs text-white">
                <FaCheck />
              </div>

              <span className="text-gray-700">
                Get your personalized product routine
              </span>
            </div>

          </div>

          {/* Button */}
          <Link
            to="/skin-quiz"
            className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wider text-white transition duration-300 hover:bg-[#3d3530]"
          >
            START YOUR ANALYSIS

            <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
          </Link>

          <p className="mt-5 text-xs tracking-wide text-gray-400">
            TAKES LESS THAN 2 MINUTES ✦
          </p>

        </div>
      </div>
    </section>
  );
}

export default SkinAnalysis;