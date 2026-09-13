import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import products from "../Data/products";

function FeaturedProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = products[currentIndex];

  const nextProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f6f4]">

      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE IMAGE */}
        <div className="relative h-[500px] lg:h-screen">
          <img
            src={product.heroImage}
            alt={product.name}
            className="h-full w-full object-cover"
          />

          {/* Previous Button */}
          <button
            onClick={previousProduct}
            className="absolute left-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg transition hover:scale-110 cursor-pointer"
          >
            <FaArrowLeft />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex flex-col items-center justify-center px-8 py-16 text-center">

          {/* Next Button */}
          <button
            onClick={nextProduct}
            className="absolute right-6 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110 cursor-pointer"
          >
            <FaArrowRight />
          </button>

          {/* Badge */}
          <span className="mb-8 bg-[#29231f] px-4 py-2 text-sm font-semibold tracking-wider text-white">
            BEST SELLER
          </span>

          {/* Product Image */}
          <div className="mb-8 flex h-72 w-72 items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Product Name */}
          <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold">
            {product.name}
          </h2>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold">
              ₹{product.price}
            </span>

            {product.oldPrice && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="mt-5 flex items-center gap-2">
            <div className="flex text-[#C9A86A]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span className="text-sm text-gray-500">
              ({product.rating})
            </span>
          </div>

          {/* Description */}
          <p className="mt-6 max-w-md leading-relaxed text-gray-600">
            {product.description}
          </p>

          {/* Button */}
          <Link
            to="/shop"
            className="mt-8 inline-block rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wider text-white transition hover:bg-[#3d3530] cursor-pointer"
          >
            SHOP NOW
          </Link>

          {/* Counter */}
          <p className="mt-8 text-sm tracking-[0.3em] text-gray-400">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(products.length).padStart(2, "0")}
          </p>

        </div>

      </div>
    </section>
  );
}

export default FeaturedProduct;