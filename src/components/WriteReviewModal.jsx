import { useState } from "react";

function WriteReviewModal({ isOpen, setIsOpen }) {
  const [rating, setRating] = useState(0);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-[2rem] bg-[#f8f5f0] p-8 shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >

        {/* HEADER */}

        <div className="flex items-start justify-between">

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
              LUMÉA COMMUNITY
            </p>

            <h2 className="mt-2 text-3xl font-semibold text-[#29231f]">
              Write a Review
            </h2>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#e8dcc5] text-lg text-[#29231f] transition hover:bg-[#d8c8b5]"
          >
            ×
          </button>

        </div>


        {/* FORM */}

        <form className="mt-8">

          {/* NAME */}

          <div>
            <label className="mb-2 block text-sm font-medium text-[#29231f]">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
            />
          </div>


          {/* PRODUCT */}

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-[#29231f]">
              Product
            </label>

            <select
              className="w-full rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm text-[#756b63] outline-none transition focus:border-[#8B6F5A]"
            >
              <option value="">Select a product</option>
              <option>Gentle Daily Cleanser</option>
              <option>Glow Renewal Serum</option>
              <option>Hydra Barrier Moisturizer</option>
              <option>Daily Shield Sunscreen</option>
              <option>Ultra Glow Strobe Cream</option>
              <option>Lip Balm</option>
            </select>
          </div>


          {/* RATING */}

          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-[#29231f]">
              Your Rating
            </label>

            <div className="flex gap-2">

              {[1, 2, 3, 4, 5].map((star) => (

                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`cursor-pointer text-2xl transition ${
                    star <= rating
                      ? "text-[#8B6F5A]"
                      : "text-[#d8cec4]"
                  }`}
                >
                  ★
                </button>

              ))}

            </div>

          </div>


          {/* REVIEW */}

          <div className="mt-5">

            <label className="mb-2 block text-sm font-medium text-[#29231f]">
              Your Review
            </label>

            <textarea
              rows="4"
              placeholder="Tell us about your experience..."
              className="w-full resize-none rounded-xl border border-[#d8cec4] bg-white/70 px-4 py-3 text-sm text-[#29231f] outline-none transition focus:border-[#8B6F5A]"
            />

          </div>


          {/* SUBMIT */}

          <button
            type="submit"
            className="mt-7 w-full cursor-pointer rounded-full bg-[#29231f] px-6 py-4 text-sm font-semibold tracking-wider text-white transition duration-300 hover:bg-[#3d3530]"
          >
            SUBMIT REVIEW
          </button>

        </form>

      </div>
    </div>
  );
}

export default WriteReviewModal;