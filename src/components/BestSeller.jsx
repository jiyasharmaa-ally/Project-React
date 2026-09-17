import { Link } from "react-router-dom";
import { useState } from "react";
import products from "../Data/products";
import { FaStar, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function BestSeller() {
  const [addedProductId, setAddedProductId] = useState(null);

  const { addToCart } = useCart();

  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (product) => {
    addToCart(product);

    setAddedProductId(product.id);

    setTimeout(() => {
      setAddedProductId(null);
    }, 3000);
  };

  return (
    <section className="bg-[#f8f5f0] px-8 py-24">

      {/* Heading */}

      <div className="mb-14 text-center" data-aos="fade-up">

        <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
          LUMÉA FAVORITES
        </p>

        <h2 className="font-['Cormorant_Garamond'] text-5xl font-semibold">
          Our Best Sellers
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-600">
          Discover the skincare essentials loved by thousands and made for your glow.
        </p>

      </div>


      {/* SLIDER */}

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={800}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mx-auto max-w-7xl"
      >

        {products.map((product) => (

          <SwiperSlide key={product.id}>

            <div className="group relative rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">


              {/* Wishlist */}

              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute right-5 top-5 z-20 cursor-pointer transition duration-300 hover:scale-110 ${
                  isInWishlist(product.id)
                    ? "text-red-500"
                    : "text-gray-500 hover:text-red-500"
                }`}
              >

                <FaHeart className="text-xl" />

              </button>


              {/* CLICKABLE PRODUCT AREA */}

              <Link
                to={`/product/${product.id}`}
                className="block cursor-pointer"
              >

                {/* Image */}

                <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                  />

                </div>


                {/* Details */}

                <div className="mt-5">

                  <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                    {product.category.toUpperCase()}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#29231f]">
                    {product.name}
                  </h3>


                  {/* Rating */}

                  <div className="mt-3 flex items-center gap-2">

                    <div className="flex text-yellow-500">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <span className="text-sm text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>

                  </div>

                </div>

              </Link>


              {/* Price + Add To Bag */}

              <div className="mt-5 flex items-center justify-between">

                <span className="text-lg font-bold text-[#29231f]">
                  ₹{product.price}
                </span>


                {/* ADD TO BAG */}

                {addedProductId === product.id ? (

                  <Link
                    to="/cart"
                    className="flex items-center gap-2 rounded-full bg-[#8B6F5A] px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-[#6f5747]"
                  >
                    GO TO CART →
                  </Link>

                ) : (

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="cursor-pointer rounded-full bg-[#29231f] px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-[#3d3530]"
                  >
                    ADD TO BAG
                  </button>

                )}

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>


      {/* View All Button */}

      <div className="mt-12 flex justify-center">

        <Link
          to="/shop"
          className="rounded-full border border-[#29231f] px-8 py-3 text-sm font-semibold tracking-wider transition duration-300 hover:bg-[#29231f] hover:text-white"
        >
          VIEW ALL PRODUCTS
        </Link>

      </div>

    </section>
  );
}

export default BestSeller;