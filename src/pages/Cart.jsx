import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32">

        {/* HEADER */}
        <section className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
              YOUR SHOPPING BAG
            </p>

            <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
              Your Cart
            </h1>

            <p className="mt-4 text-gray-600">
              {cartItems.length === 0
                ? "Your bag is waiting for something beautiful."
                : `${cartItems.length} ${
                    cartItems.length === 1 ? "product" : "products"
                  } in your bag`}
            </p>

          </div>


          {/* EMPTY CART */}
          {cartItems.length === 0 ? (

            <div className="mx-auto max-w-2xl rounded-[2rem] bg-white px-8 py-20 text-center shadow-sm">

              <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f]">
                Your bag is empty
              </h2>

              <p className="mx-auto mt-4 max-w-md leading-7 text-gray-600">
                Discover skincare essentials thoughtfully created for
                your everyday ritual.
              </p>

              <Link
                to="/shop"
                className="mt-8 inline-block rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:scale-105 hover:bg-[#3d3530]"
              >
                SHOP NOW
              </Link>

            </div>

          ) : (

            <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr]">

              {/* CART ITEMS */}
              <div className="space-y-5">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex flex-col gap-6 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
                  >

                    {/* IMAGE */}
                    <Link
                      to={`/product/${item.id}`}
                      className="flex h-32 w-full items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8] sm:w-32"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-contain p-4"
                      />
                    </Link>


                    {/* PRODUCT DETAILS */}
                    <div className="flex flex-1 flex-col justify-between">

                      <div>

                        <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                          {item.category?.toUpperCase()}
                        </p>

                        <Link to={`/product/${item.id}`}>
                          <h2 className="mt-2 text-xl font-semibold text-[#29231f] hover:text-[#8B6F5A]">
                            {item.name}
                          </h2>
                        </Link>

                        <p className="mt-2 font-semibold text-[#29231f]">
                          ₹{item.price}
                        </p>

                      </div>


                      {/* QUANTITY + REMOVE */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

                        {/* Quantity */}
                        <div className="flex items-center overflow-hidden rounded-full border border-[#e2d8ca]">

                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#29231f] transition hover:bg-[#f3eee8]"
                          >
                            <FaMinus className="text-xs" />
                          </button>

                          <span className="flex h-10 w-10 items-center justify-center font-semibold text-[#29231f]">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQuantity(item.id)}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center text-[#29231f] transition hover:bg-[#f3eee8]"
                          >
                            <FaPlus className="text-xs" />
                          </button>

                        </div>


                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-red-500 transition hover:text-red-700"
                        >
                          <FaTrash />
                          REMOVE
                        </button>

                      </div>

                    </div>


                    {/* TOTAL PRICE */}
                    <div className="text-right">

                      <p className="text-sm text-gray-500">
                        Total
                      </p>

                      <p className="mt-1 text-xl font-bold text-[#29231f]">
                        ₹{item.price * item.quantity}
                      </p>

                    </div>

                  </div>

                ))}

              </div>


              {/* ORDER SUMMARY */}
              <aside className="h-fit rounded-[2rem] bg-white p-8 shadow-sm">

                <p className="text-sm font-semibold tracking-[0.25em] text-[#8B6F5A]">
                  ORDER SUMMARY
                </p>

                <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f]">
                  Your Order
                </h2>


                <div className="mt-8 space-y-5 border-b border-[#e2d8ca] pb-6">

                  <div className="flex justify-between text-gray-600">

                    <span>Subtotal</span>

                    <span>₹{subtotal}</span>

                  </div>

                  <div className="flex justify-between text-gray-600">

                    <span>Shipping</span>

                    <span>Calculated at checkout</span>

                  </div>

                </div>


                {/* TOTAL */}
                <div className="mt-6 flex items-center justify-between">

                  <span className="text-lg font-semibold text-[#29231f]">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#29231f]">
                    ₹{subtotal}
                  </span>

                </div>


                {/* CHECKOUT */}
                <button className="mt-8 w-full cursor-pointer rounded-full bg-[#29231f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-[#3d3530] hover:scale-[1.02]">
                  PROCEED TO CHECKOUT
                </button>


                <Link
                  to="/shop"
                  className="mt-5 block text-center text-sm font-semibold text-[#8B6F5A] transition hover:text-[#29231f]"
                >
                  ← CONTINUE SHOPPING
                </Link>

              </aside>

            </div>

          )}

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Cart;