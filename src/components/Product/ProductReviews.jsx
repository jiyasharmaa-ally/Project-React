import { FaStar, FaCheckCircle } from "react-icons/fa";

function ProductReviews({ product }) {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Absolutely love this product! It feels amazing on my skin and I noticed a visible difference after नियमित use.",
      verified: true,
    },
    {
      id: 2,
      name: "Ananya Verma",
      rating: 5,
      date: "1 month ago",
      review:
        "The texture is beautiful and lightweight. It fits perfectly into my skincare routine.",
      verified: true,
    },
    {
      id: 3,
      name: "Riya Kapoor",
      rating: 4,
      date: "1 month ago",
      review:
        "Really good product. My skin feels softer and healthier after using it consistently.",
      verified: true,
    },
  ];

  const averageRating = product.rating || 4.8;
  const totalReviews = product.reviews || reviews.length;

  return (
    <section className="mt-24 border-t border-[#e2d8ca] pt-20">

      {/* Heading */}
      <div className="text-center">

        <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
          CUSTOMER LOVE
        </p>

        <h2 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
          Loved By Your Skin.
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-600">
          Real experiences from people who made LUMÉA a part of
          their everyday skincare ritual.
        </p>

      </div>


      {/* Rating Summary */}
      <div className="mt-14 grid overflow-hidden rounded-[2rem] bg-white shadow-sm lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left Rating */}
        <div className="flex flex-col items-center justify-center bg-[#f3eee8] p-10 text-center">

          <p className="font-['Cormorant_Garamond'] text-7xl font-semibold text-[#29231f]">
            {averageRating}
          </p>

          <div className="mt-4 flex text-[#D69E00]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Based on {totalReviews} customer reviews
          </p>

        </div>


        {/* Rating Breakdown */}
        <div className="space-y-5 p-10">

          {[5, 4, 3, 2, 1].map((star, index) => {

            const percentages = [82, 12, 4, 1, 1];

            return (
              <div
                key={star}
                className="flex items-center gap-4"
              >

                <span className="w-12 text-sm font-medium text-[#29231f]">
                  {star} Star
                </span>

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#eee7dc]">

                  <div
                    className="h-full rounded-full bg-[#29231f]"
                    style={{
                      width: `${percentages[index]}%`,
                    }}
                  />

                </div>

                <span className="w-10 text-right text-sm text-gray-500">
                  {percentages[index]}%
                </span>

              </div>
            );
          })}

        </div>

      </div>


      {/* Reviews */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {reviews.map((review, index) => (
          <div
            key={review.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-lg"
          >

            {/* Top */}
            <div className="flex items-start justify-between gap-4">

              <div>

                <h3 className="font-semibold text-[#29231f]">
                  {review.name}
                </h3>

                {review.verified && (
                  <p className="mt-1 flex items-center gap-2 text-xs font-medium text-[#8B6F5A]">
                    <FaCheckCircle />
                    VERIFIED PURCHASE
                  </p>
                )}

              </div>

              <span className="text-xs text-gray-400">
                {review.date}
              </span>

            </div>


            {/* Stars */}
            <div className="mt-5 flex text-[#D69E00]">

              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < review.rating
                      ? ""
                      : "text-gray-200"
                  }
                />
              ))}

            </div>


            {/* Review */}
            <p className="mt-5 leading-7 text-gray-600">
              "{review.review}"
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ProductReviews;