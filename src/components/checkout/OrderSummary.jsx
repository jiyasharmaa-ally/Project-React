import { Link, useNavigate } from "react-router-dom";
import { FaBagShopping, FaArrowRight } from "react-icons/fa6";
import { useCart } from "../../context/CartContext";

function OrderSummary({ selectedDelivery }) {
  const { cartItems } = useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Delivery charge
  const deliveryCharge =
    selectedDelivery === "express" ? 99 : 0;

  // Total
  const total = subtotal + deliveryCharge;

  // Total number of items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const navigate = useNavigate();

  return (
    <aside className="lg:sticky lg:top-28">

      <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

        {/* Heading */}
        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
            <FaBagShopping />
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
              YOUR ORDER
            </p>

            <h2 className="text-2xl font-semibold text-[#29231f]">
              Order Summary
            </h2>
          </div>

        </div>


        {/* CART ITEMS */}
        {cartItems.length === 0 ? (

          <div className="py-10 text-center">

            <p className="text-gray-500">
              Your cart is empty.
            </p>

            <Link
              to="/shop"
              className="mt-5 inline-block text-sm font-semibold text-[#8B6F5A] hover:text-[#29231f]"
            >
              CONTINUE SHOPPING →
            </Link>

          </div>

        ) : (

          <>
            {/* Products */}
            <div className="mt-8 max-h-[320px] space-y-5 overflow-y-auto pr-2">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex gap-4"
                >

                  {/* Product Image */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />

                  </div>


                  {/* Product Details */}
                  <div className="min-w-0 flex-1">

                    <p className="text-xs font-semibold tracking-wider text-[#8B6F5A]">
                      {item.category?.toUpperCase()}
                    </p>

                    <h3 className="mt-1 truncate font-semibold text-[#29231f]">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>

                  </div>


                  {/* Price */}
                  <p className="shrink-0 font-semibold text-[#29231f]">
                    ₹{item.price * item.quantity}
                  </p>

                </div>

              ))}

            </div>


            {/* Divider */}
            <div className="my-7 border-t border-[#e8dcc5]" />


            {/* PRICE DETAILS */}
            <div className="space-y-4">

              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  Subtotal ({totalItems} items)
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>


              <div className="flex justify-between text-sm text-gray-600">
                <span>
                  Delivery
                </span>

                <span
                  className={
                    deliveryCharge === 0
                      ? "font-semibold text-green-600"
                      : ""
                  }
                >
                  {deliveryCharge === 0
                    ? "FREE"
                    : `₹${deliveryCharge}`}
                </span>
              </div>


              {/* Free delivery message */}
              {deliveryCharge === 0 && (
                <p className="text-xs text-green-600">
                  🎉 You've unlocked free delivery!
                </p>
              )}

            </div>


            {/* Total */}
            <div className="mt-7 border-t border-[#e8dcc5] pt-6">

              <div className="flex items-center justify-between">

                <span className="text-lg font-semibold text-[#29231f]">
                  Total
                </span>

                <span className="text-2xl font-bold text-[#29231f]">
                  ₹{total}
                </span>

              </div>

            </div>


            {/* PLACE ORDER */}
            <button
              onClick={() => navigate("/order-placed")}
              className="mt-8 w-full cursor-pointer rounded-full bg-[#29231f] px-6 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:scale-[1.02] hover:bg-[#3d3530]"
            >
              PLACE ORDER →
            </button>


            {/* Security Text */}
            <p className="mt-5 text-center text-xs leading-5 text-gray-500">
              🔒 Secure checkout · Your information is protected
            </p>

          </>

        )}

      </div>

    </aside>
  );
}

export default OrderSummary;