import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32">

        <section className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden flex-col justify-between bg-[#29231f] p-14 text-white lg:flex">

            <div>
              <p className="text-sm font-semibold tracking-[0.3em] text-[#d8cbb9]">
                JOIN LUMÉA
              </p>

              <h1 className="mt-6 font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight">
                Begin your
                <span className="block italic text-[#d8cbb9]">
                  skin journey.
                </span>
              </h1>

              <p className="mt-8 max-w-md text-lg leading-8 text-white/70">
                Create your LUMÉA account to save your favorite products,
                manage your skincare routine and enjoy a more personalized
                experience.
              </p>
            </div>

            <p className="text-sm text-white/50">
              Thoughtful skincare for your everyday ritual.
            </p>

          </div>


          {/* RIGHT SIDE — SIGN UP FORM */}
          <div className="p-8 sm:p-14">

            <p className="text-sm font-semibold tracking-[0.25em] text-[#8B6F5A]">
              CREATE ACCOUNT
            </p>

            <h2 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f]">
              Welcome to LUMÉA
            </h2>

            <p className="mt-4 text-gray-600">
              Create your account and start your personalized skincare journey.
            </p>


            {/* FORM */}
            <form className="mt-10 space-y-5">

              {/* FULL NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-[#e2d8ca] bg-[#f8f5f0] px-5 py-4 text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-[#e2d8ca] bg-[#f8f5f0] px-5 py-4 text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              {/* PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-[#e2d8ca] bg-[#f8f5f0] px-5 py-4 text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              {/* CONFIRM PASSWORD */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-[#e2d8ca] bg-[#f8f5f0] px-5 py-4 text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
                />
              </div>


              {/* TERMS */}
              <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-600">

                <input
                  type="checkbox"
                  className="mt-1 accent-[#29231f]"
                />

                <span>
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-semibold text-[#29231f] underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and Privacy Policy.
                </span>

              </label>


              {/* CREATE ACCOUNT */}
              <button
                type="submit"
                className="w-full cursor-pointer rounded-full bg-[#29231f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-[#3d3530] hover:scale-[1.02]"
              >
                CREATE ACCOUNT
              </button>

            </form>


            {/* LOGIN LINK */}
            <p className="mt-8 text-center text-sm text-gray-600">

              Already have an account?{" "}

              <Link
                to="/login"
                className="font-semibold text-[#29231f] underline transition hover:text-[#8B6F5A]"
              >
                LOG IN
              </Link>

            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Signup;