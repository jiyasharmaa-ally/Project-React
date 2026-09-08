import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../Data/products";

import { FaHeart, FaStar, FaShoppingCart} from "react-icons/fa";

function Wishlist() {
  // Showing first 4 products
  const wishlistProducts = products.slice(0, 4);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32 md:px-12">
        
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-7xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
            YOUR FAVORITES
          </p>

          <h1 className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
            My Wishlist
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-gray-600">
            Keep your favorite LUMÉA skincare essentials saved in one place.
          </p>
        </div>

        {/* Products */}
        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {wishlistProducts.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              
              {/* Remove Wishlist */}
              <button
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition duration-300 hover:scale-110"
                title="Remove from wishlist"
              >
                <FaHeart className="text-lg text-red-500" />
              </button>

              {/* Product Image */}
              <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Details */}
              <div className="mt-5">
                
                <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                  {product.category.toUpperCase()}
                </p>

                <h2 className="mt-2 text-lg font-semibold text-[#29231f]">
                  {product.name}
                </h2>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>

                  <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="text-xl font-bold text-[#29231f]">
                    ₹{product.price}
                  </span>

                  <button className="flex items-center gap-2 rounded-full bg-black px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#29231f]">
                    <FaShoppingCart />
                    ADD TO BAG
                  </button>
                </div>

              </div>
            </div>
          ))}

        </section>
      </main>

      <Footer />
    </>
  );
}

export default Wishlist;  