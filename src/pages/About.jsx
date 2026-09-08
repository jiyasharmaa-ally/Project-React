import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaLeaf, FaFlask, FaHeart, FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#f8f5f0] pt-24">

        {/* HERO */}
        <section className="px-6 py-20 md:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl text-center">

            <p
              className="mb-5 text-sm font-semibold tracking-[0.35em] text-[#8B6F5A]"
              data-aos="fade-down"
            >
              ABOUT LUMÉA
            </p>

            <h1
              className="mx-auto max-w-4xl font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#29231f] md:text-7xl"
              data-aos="fade-up"
            >
              Skincare designed for your
              <span className="block italic text-[#8B6F5A]">
                natural glow.
              </span>
            </h1>

            <p
              className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              At LUMÉA, we believe skincare should feel simple, thoughtful,
              and personal. Every product is designed to support healthy,
              comfortable, and naturally radiant-looking skin.
            </p>

          </div>
        </section>


        {/* BRAND STORY */}
        <section className="px-6 py-16 md:px-12">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

            {/* Image */}
            <div
              className="relative overflow-hidden rounded-[2rem]"
              data-aos="fade-right"
            >
              <img
                src="/images/ladies.png"
                alt="LUMÉA skincare"
                className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#29231f]/10"></div>

              {/* Floating box */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-[#f8f5f0]/95 px-6 py-5 backdrop-blur-sm">
                <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                  Made with intention.
                </p>
              </div>
            </div>


            {/* Content */}
            <div data-aos="fade-left">

              <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
                OUR STORY
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#29231f] md:text-6xl">
                A simpler approach to beautiful skin.
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                LUMÉA was created with one simple idea: skincare doesn't need
                to be complicated to be effective. We focus on thoughtful
                formulas, essential routines, and products that fit naturally
                into everyday life.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                Instead of overwhelming your skin with countless products,
                we believe in understanding what your skin needs and giving it
                the care it deserves.
              </p>

              <Link
                to="/skin-quiz"
                className="group mt-8 inline-flex items-center gap-3 font-semibold tracking-wide text-[#29231f]"
              >
                FIND YOUR PERFECT ROUTINE

                <FaArrowRight className="transition duration-300 group-hover:translate-x-2" />
              </Link>

            </div>

          </div>
        </section>


        {/* VALUES */}
        <section className="my-16 bg-[#e8dcc5] px-6 py-24 md:px-12">

          <div className="mx-auto max-w-7xl">

            <div className="text-center" data-aos="fade-up">

              <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
                WHAT WE BELIEVE
              </p>

              <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
                Skincare with purpose.
              </h2>

            </div>


            <div className="mt-16 grid gap-8 md:grid-cols-3">

              {/* Value 1 */}
              <div
                className="rounded-2xl bg-[#f8f5f0] p-8 transition duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#29231f] text-xl text-white">
                  <FaLeaf />
                </div>

                <h3 className="mt-7 font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                  Thoughtful Care
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Products designed with intention, focusing on what your skin
                  truly needs.
                </p>
              </div>


              {/* Value 2 */}
              <div
                className="rounded-2xl bg-[#f8f5f0] p-8 transition duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#29231f] text-xl text-white">
                  <FaFlask />
                </div>

                <h3 className="mt-7 font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                  Simple Formulas
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  No unnecessary complexity. Just skincare that fits easily
                  into your everyday routine.
                </p>
              </div>


              {/* Value 3 */}
              <div
                className="rounded-2xl bg-[#f8f5f0] p-8 transition duration-300 hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#29231f] text-xl text-white">
                  <FaHeart />
                </div>

                <h3 className="mt-7 font-['Cormorant_Garamond'] text-3xl font-semibold text-[#29231f]">
                  Made For You
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  Because every skin journey is different, and your skincare
                  routine should feel personal.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* QUOTE SECTION */}
        <section className="px-6 py-24 text-center md:px-12">

          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-in"
          >
            <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
              THE LUMÉA PHILOSOPHY
            </p>

            <h2 className="mt-8 font-['Cormorant_Garamond'] text-4xl font-semibold leading-tight text-[#29231f] md:text-6xl">
              "Your skin doesn't need perfection.
              <span className="block italic text-[#8B6F5A]">
                It needs care."
              </span>
            </h2>

          </div>

        </section>


        {/* FINAL CTA */}
        <section className="bg-[#29231f] px-6 py-24 text-center">

          <div
            className="mx-auto max-w-3xl"
            data-aos="fade-up"
          >

            <p className="text-sm font-semibold tracking-[0.3em] text-[#cbbba0]">
              BEGIN YOUR JOURNEY
            </p>

            <h2 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#f8f5f0] md:text-6xl">
              Find skincare made for you.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70">
              Take our personalized skin quiz and discover a routine designed
              around your skin's unique needs.
            </p>

            <Link
              to="/skin-quiz"
              className="mt-9 inline-block rounded-full bg-[#e8dcc5] px-8 py-4 text-sm font-semibold tracking-wider text-[#29231f] transition duration-300 hover:scale-105 hover:bg-white"
            >
              TAKE THE SKIN QUIZ
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;