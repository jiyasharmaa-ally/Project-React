import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import shopProducts from "../Data/shopData";
import { FaHeart, FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { addToCart } = useCart();

  const categories = [
    "All",
    "Cleanser",
    "Serum",
    "Moisturizer",
    "Sunscreen",
    "Glow Cream",
    "Lip Care",
    "Toner",
    "+9"
  ];
  const filteredProducts =
    selectedCategory === "All"
      ? shopProducts
      : shopProducts.filter(
        (product) => product.category === selectedCategory
      );

  return (
    <>
      <Navbar />

      <main className="bg-[#f8f5f0] pt-28">

        {/* SHOP HEADER */}
        <section className="px-6 py-20 text-center">

          <p
            className="mb-4 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]"
            data-aos="fade-down"
          >
            LUMÉA COLLECTION
          </p>

          <h1
            className="font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-7xl"
            data-aos="fade-up"
          >
            Discover Your Perfect Ritual
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Explore thoughtfully formulated skincare designed to nourish,
            restore and reveal your healthiest-looking skin.
          </p>

        </section>


        {/* CATEGORY FILTER */}
        <section className="px-6 pb-12">

          <div
            className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {categories.map((category) => (

              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${selectedCategory === category
                  ? "bg-[#29231f] text-white"
                  : "border border-[#d8cbb9] bg-transparent text-[#29231f] hover:bg-[#e8dcc5]"
                  }`}
              >
                {category}
              </button>

            ))}
          </div>

        </section>


        {/* PRODUCT COUNT */}
        <div className="mx-auto mb-8 max-w-7xl px-6">
          <p className="text-sm text-gray-500">
            Showing {filteredProducts.length} products
          </p>
        </div>


        {/* PRODUCT GRID */}
        <section className="mx-auto max-w-7xl px-6 pb-24">

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredProducts.map((product, index) => (

              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Wishlist */}
                <button className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110">
                  <FaHeart className="text-gray-500 transition hover:text-red-500" />
                </button>


                {/* Product Image */}
                <Link to={`/product/${product.id}`}>
                  <div className="flex h-72 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                    />

                  </div>
                </Link>


                {/* PRODUCT DETAILS */}
                <div className="mt-5">

                  <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                    {product.category.toUpperCase()}
                  </p>

                  <Link to={`/product/${product.id}`}>
                    <h2 className="mt-2 cursor-pointer text-xl font-semibold text-[#29231f] transition duration-300 hover:text-[#8B6F5A]">
                      {product.name}
                    </h2>
                  </Link>


                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">

                    <div className="flex text-[#D69E00]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>

                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>

                  </div>


                  {/* PRICE + BUTTON */}
                  <div className="mt-5 flex items-center justify-between gap-3">

                    <span className="text-xl font-bold text-[#29231f]">
                      ₹{product.price}
                    </span>

                    <button
                      onClick={() => addToCart(product)}
                      className="cursor-pointer rounded-full bg-[#29231f] px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#3d3530]"
                    >
                      ADD TO BAG
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Shop;