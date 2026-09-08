import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#f8f5f0] px-6 pb-12 pt-32">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2">

          {/* LEFT SIDE - BRAND */}
          <div className="relative hidden min-h-[650px] overflow-hidden lg:block">

            <img
              src="/images/hero.png"
              alt="LUMÉA skincare"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Text */}
            <div className="absolute inset-x-0 bottom-0 p-12 text-white">

              <p className="mb-4 text-sm font-semibold tracking-[0.35em]">
                LUMÉA SKINCARE
              </p>

              <h1 className="font-['Cormorant_Garamond'] text-6xl font-semibold leading-tight">
                Your ritual.
                <br />
                Your glow.
              </h1>

              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">
                Thoughtfully formulated skincare designed to help you feel
                confident in your own skin.
              </p>

            </div>
          </div>


          {/* RIGHT SIDE - LOGIN FORM */}
          <div className="flex min-h-[650px] items-center justify-center px-8 py-14 sm:px-16">

            <div className="w-full max-w-md">

              {/* Heading */}
              <div className="mb-10">

                <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
                  WELCOME BACK
                </p>

                <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f]">
                  Sign in to LUMÉA
                </h2>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Enter your details to continue your skincare journey.
                </p>

              </div>


              {/* FORM */}
              <form className="space-y-6">

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#d8cbb9] bg-[#faf8f5] px-5 py-4 outline-none transition focus:border-[#8B6F5A] focus:ring-2 focus:ring-[#8B6F5A]/20"
                  />
                </div>


                {/* Password */}
                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label className="text-sm font-semibold text-[#29231f]">
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm text-[#8B6F5A] transition hover:text-black"
                    >
                      Forgot password?
                    </Link>

                  </div>


                  <div className="relative">

                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-[#d8cbb9] bg-[#faf8f5] px-5 py-4 pr-14 outline-none transition focus:border-[#8B6F5A] focus:ring-2 focus:ring-[#8B6F5A]/20"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-black"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>

                  </div>

                </div>


                {/* Remember */}
                <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">

                  <input
                    type="checkbox"
                    className="h-4 w-4 accent-[#8B6F5A]"
                  />

                  Remember me

                </label>


                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-black py-4 text-sm font-semibold tracking-wider text-white transition duration-300 hover:bg-[#8B6F5A] hover:shadow-lg"
                >
                  SIGN IN
                </button>

              </form>


              {/* Divider */}
              <div className="my-8 flex items-center gap-4">

                <div className="h-px flex-1 bg-[#e5ddd3]"></div>

                <span className="text-xs tracking-widest text-gray-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-[#e5ddd3]"></div>

              </div>


              {/* Signup */}
              <p className="text-center text-sm text-gray-600">

                New to LUMÉA?{" "}

                <Link
                  to="/signup"
                  className="font-semibold text-[#8B6F5A] transition hover:text-black"
                >
                  Create an account
                </Link>

              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Login;