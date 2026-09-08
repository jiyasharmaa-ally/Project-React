import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

function RecommendedProducts({ product, products }) {

  // Find products with similar category, concerns, or skin type
  const recommendedProducts = products
    .filter((item) => item.id !== product.id)
    .map((item) => {

      let score = 0;

      // Same category
      if (item.category === product.category) {
        score += 3;
      }

      // Similar concerns
      if (product.concerns && item.concerns) {
        const commonConcerns = item.concerns.filter((concern) =>
          product.concerns.includes(concern)
        );

        score += commonConcerns.length * 2;
      }

      // Similar skin types
      if (product.skinType && item.skinType) {
        const commonSkinTypes = item.skinType.filter((skin) =>
          product.skinType.includes(skin)
        );

        score += commonSkinTypes.length;
      }

      return {
        ...item,
        score,
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);

  return (
    <section className="mt-24 border-t border-[#e2d8ca] pt-20">

      {/* Heading */}
      <div className="mb-14 text-center">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
          DISCOVER MORE
        </p>

        <h2 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
          You May Also Like
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Carefully selected skincare essentials that complement your
          routine and your skin's needs.
        </p>

      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">

        {recommendedProducts.map((item, index) => (

          <div
            key={item.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Wishlist */}
            <button
              className="absolute right-8 top-8 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition duration-300 hover:scale-110"
            >
              <FaHeart className="text-gray-500 transition hover:text-red-500" />
            </button>


            {/* Product Image + Link */}
            <Link to={`/product/${item.id}`}>

              <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">

                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-110"
                />

              </div>

            </Link>


            {/* Details */}
            <div className="mt-5">

              <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                {item.category.toUpperCase()}
              </p>

              <Link to={`/product/${item.id}`}>

                <h3 className="mt-2 text-lg font-semibold text-[#29231f] transition hover:text-[#8B6F5A]">
                  {item.name}
                </h3>

              </Link>


              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">

                <div className="flex text-[#D69E00]">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <span className="text-sm text-gray-500">
                  {item.rating} ({item.reviews})
                </span>

              </div>


              {/* Price + Button */}
              <div className="mt-5 flex items-center justify-between gap-3">

                <span className="text-lg font-bold text-[#29231f]">
                  ₹{item.price}
                </span>

                <Link
                  to={`/product/${item.id}`}
                  className="rounded-full bg-[#29231f] px-4 py-3 text-xs font-semibold text-white transition duration-300 hover:bg-[#3d3530]"
                >
                  VIEW PRODUCT
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecommendedProducts;