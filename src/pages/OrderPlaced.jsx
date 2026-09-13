import { useEffect } from "react";
import { Link } from "react-router-dom";
import confetti from "canvas-confetti";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderSuccessAnimation from "../components/checkout/OrderSuccessAnimation";

function OrderPlaced() {
  useEffect(() => {
    const duration = 1 * 1000;
    const end = Date.now() + duration;

    const colors = ["#29231f", "#8B6F5A", "#e8dcc5"];

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });

      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    return () => {
      confetti.reset();
    };
  }, []);

  const orderId = "LUM" + Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-[#f8f5f0] px-6 pb-24 pt-32">

        <div className="w-full max-w-2xl text-center">

          {/* Success Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#29231f] text-3xl text-white shadow-lg">
            ✓
          </div>

          {/* Heading */}
          <p className="text-xs font-semibold tracking-[0.3em] text-[#8B6F5A]">
            ORDER CONFIRMED
          </p>

          <h1 className="mt-3 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
            Thank You for Your Order!
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            Your order has been successfully placed. We're preparing your
            skincare essentials with care.
          </p>

          {/* Delivery Animation */}
          <div className="mt-8">
            <OrderSuccessAnimation />
          </div>

          {/* Order Details */}
          <div className="mx-auto mt-2 max-w-md rounded-2xl border border-[#e8dcc5] bg-white p-6 text-left shadow-sm">

            <div className="flex items-center justify-between border-b border-[#e8dcc5] pb-4">
              <span className="text-sm text-gray-500">
                Order ID
              </span>

              <span className="font-semibold text-[#29231f]">
                #{orderId}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4">
              <span className="text-sm text-gray-500">
                Expected Delivery
              </span>

              <span className="font-semibold text-[#29231f]">
                3–5 Business Days
              </span>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/shop"
              className="rounded-full bg-[#29231f] px-8 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#3d3530]"
            >
              CONTINUE SHOPPING →
            </Link>

            <Link
              to="/"
              className="rounded-full border border-[#29231f] px-8 py-3 text-sm font-semibold text-[#29231f] transition duration-300 hover:bg-white"
            >
              BACK TO HOME
            </Link>

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}

export default OrderPlaced;