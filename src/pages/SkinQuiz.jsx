import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

import getRecommendedProducts from "../Data/skinRecommendation";
import skinQuizQuestions from "../Data/skinQuizData";

import {
  FaArrowRight,
  FaArrowLeft,
  FaHandSparkles,
} from "react-icons/fa6";

function SkinQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResults, setShowResults] = useState(false);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const [answers, setAnswers] = useState({
    skinType: "",
    concern: "",
    skinCondition: "",
    routine: "",
    goal: "",
    time: "",
  });

  // Current Question
  const current = skinQuizQuestions[currentQuestion];

  // Progress
  const progress =
    ((currentQuestion + 1) / skinQuizQuestions.length) * 100;

  // Select Answer
  const handleSelect = (option) => {
    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [current.id]: option,
    }));
  };

  // Next Question
  const handleNext = () => {
    if (!answers[current.id]) {
      alert("Please select an option before continuing.");
      return;
    }

    if (currentQuestion < skinQuizQuestions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    } else {
      // Get personalized recommendations
      const recommendations = getRecommendedProducts(answers);

      setRecommendedProducts(recommendations);
      setShowResults(true);

      // Scroll to top when results appear
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // Previous Question
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };
  const { addToCart } = useCart();
const handleAddRoutine = () => {
  recommendedProducts.slice(0, 4).forEach((product) => {
    addToCart(product);
  });
};
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f0] pt-24">

        {/* ================= INTRO ================= */}

        {!started ? (
          <section className="flex min-h-[85vh] items-center justify-center px-6">

            <div
              className="max-w-3xl text-center"
              data-aos="fade-up"
            >
              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e8dcc5] text-2xl text-[#29231f]">
                <FaHandSparkles />
              </div>

              <p className="mt-8 text-sm font-semibold tracking-[0.35em] text-[#8B6F5A]">
                YOUR PERSONALIZED SKIN JOURNEY
              </p>

              <h1 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#29231f] md:text-7xl">
                Let's discover what your

                <span className="block italic text-[#8B6F5A]">
                  skin truly needs.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-xl text-lg leading-8 text-gray-600">
                Answer a few simple questions and we'll create a personalized
                LUMÉA skincare routine designed around your skin and goals.
              </p>

              <button
                onClick={() => setStarted(true)}
                className="group mt-10 inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#29231f] px-8 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:scale-105 hover:bg-[#3d3530]"
              >
                START YOUR ANALYSIS

                <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
              </button>

              <p className="mt-6 text-sm text-gray-500">
                Takes less than 2 minutes ✦
              </p>
            </div>

          </section>

        ) : showResults ? (

          /* ================= RESULTS ================= */

          <section className="min-h-[85vh] px-6 py-16">

            <div className="mx-auto max-w-7xl">

              {/* Results Heading */}
              <div className="text-center" data-aos="fade-up">

                <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
                  YOUR PERSONALIZED ROUTINE
                </p>

                <h1 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-7xl">
                  Your skin deserves

                  <span className="block italic text-[#8B6F5A]">
                    this kind of care.
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                  Based on your answers, we've selected these LUMÉA products
                  that best match your skin and goals.
                </p>

              </div>


              {/* Recommended Products */}
              {recommendedProducts.length > 0 ? (

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                  {recommendedProducts.slice(0, 4).map((product, index) => (

                    <div
                      key={product.id}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                      className="group rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                    >

                      {/* Product Image */}
                      <div className="flex h-64 items-center justify-center overflow-hidden rounded-xl bg-[#f3eee8]">

                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-contain p-6 transition duration-500 group-hover:scale-105"
                        />

                      </div>


                      {/* Product Details */}
                      <div className="mt-5">

                        <p className="text-xs font-semibold tracking-widest text-[#8B6F5A]">
                          {product.category.toUpperCase()}
                        </p>

                        <h2 className="mt-2 text-xl font-semibold text-[#29231f]">
                          {product.name}
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-gray-600">
                          Selected based on your personalized skin profile.
                        </p>

                        <p className="mt-5 text-xl font-bold text-[#29231f]">
                          ₹{product.price}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              ) : (

                /* No Results */
                <div className="mt-16 rounded-3xl bg-white p-10 text-center shadow-sm">

                  <h2 className="font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f]">
                    We're refining your routine.
                  </h2>

                  <p className="mx-auto mt-4 max-w-xl text-gray-600">
                    We couldn't find an exact match yet, but our complete
                    collection has something for every skin journey.
                  </p>

                </div>

              )}


              {/* CTA */}
              <div
                className="mt-16 rounded-[2rem] bg-[#29231f] p-10 text-center text-white md:p-14"
                data-aos="fade-up"
              >

                <p className="text-sm font-semibold tracking-[0.3em] text-[#cbbba0]">
                  YOUR COMPLETE ROUTINE
                </p>

                <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-semibold md:text-5xl">
                  Ready to begin your skin journey?
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-white/70">
                  Your personalized LUMÉA skincare routine is ready.
                </p>

                <button
                  onClick={handleAddRoutine}
                  className="mt-8 cursor-pointer rounded-full bg-[#e8dcc5] px-8 py-4 text-sm font-semibold tracking-wide text-[#29231f] transition duration-300 hover:scale-105 hover:bg-white"
                >
                  ADD ROUTINE TO BAG
                </button>

              </div>

            </div>

          </section>

        ) : (

          /* ================= QUIZ ================= */

          <section className="mx-auto flex min-h-[85vh] max-w-4xl items-center px-6 py-16">

            <div className="w-full">

              {/* Progress */}
              <div className="mb-12">

                <div className="mb-4 flex items-center justify-between">

                  <p className="text-sm font-semibold tracking-[0.2em] text-[#8B6F5A]">
                    SKIN ANALYSIS
                  </p>

                  <p className="text-sm text-gray-500">
                    Question {currentQuestion + 1} of{" "}
                    {skinQuizQuestions.length}
                  </p>

                </div>

                <div className="h-2 w-full overflow-hidden rounded-full bg-[#e8dcc5]">

                  <div
                    className="h-full rounded-full bg-[#29231f] transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />

                </div>

              </div>


              {/* Question Card */}
              <div
                key={currentQuestion}
                className="rounded-[2rem] bg-white p-8 shadow-sm md:p-14"
                data-aos="fade-up"
              >

                <p className="text-sm font-semibold tracking-[0.25em] text-[#8B6F5A]">
                  LET'S GET TO KNOW YOU
                </p>

                <h2 className="mt-5 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f] md:text-5xl">
                  {current.question}
                </h2>

                <p className="mt-4 text-lg text-gray-600">
                  {current.subtitle}
                </p>


                {/* Options */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">

                  {current.options.map((option) => (

                    <button
                      key={option}
                      onClick={() => handleSelect(option)}
                      className={`cursor-pointer rounded-xl border p-5 text-left font-medium transition duration-300 ${answers[current.id] === option
                          ? "border-[#29231f] bg-[#29231f] text-white"
                          : "border-[#e8dcc5] bg-[#f8f5f0] text-[#29231f] hover:border-[#8B6F5A] hover:bg-[#e8dcc5]"
                        }`}
                    >
                      {option}
                    </button>

                  ))}

                </div>


                {/* Navigation */}
                <div className="mt-12 flex items-center justify-between gap-5">

                  <button
                    onClick={handleBack}
                    disabled={currentQuestion === 0}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${currentQuestion === 0
                        ? "cursor-not-allowed text-gray-300"
                        : "cursor-pointer text-[#29231f] hover:bg-[#f3eee8]"
                      }`}
                  >
                    <FaArrowLeft />
                    BACK
                  </button>


                  <button
                    onClick={handleNext}
                    className="group inline-flex cursor-pointer items-center gap-3 rounded-full bg-[#29231f] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#3d3530]"
                  >
                    {currentQuestion === skinQuizQuestions.length - 1
                      ? "GET MY ROUTINE"
                      : "CONTINUE"}

                    <FaArrowRight className="transition duration-300 group-hover:translate-x-1" />
                  </button>

                </div>

              </div>

            </div>

          </section>
        )}

      </main>

      <Footer />
    </>
  );
}

export default SkinQuiz;