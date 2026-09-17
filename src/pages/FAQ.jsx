import { useState } from "react";
import Footer from "../components/Footer";
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know which products are right for my skin?",
      answer:
        "You can take our Skin Quiz to get personalized product recommendations based on your skin type, concerns, and skincare goals.",
    },
    {
      question: "How should I build my skincare routine?",
      answer:
        "A simple routine usually includes a cleanser, moisturizer, and sunscreen. You can gradually add targeted products such as serums depending on your skin concerns.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Skincare results vary from person to person. Consistent use of products suited to your skin type is important, and some products may take several weeks to show visible results.",
    },
    {
      question: "Can I use all LUMÉA products together?",
      answer:
        "Most products can be incorporated into the same routine, but certain active ingredients may work better when used separately. Always introduce new products gradually.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order has been shipped, you can use the tracking information provided with your order confirmation to follow its delivery.",
    },
  ];

 return (
  <>
    <section className="bg-[#f8f5f0] px-6 py-24">

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* IMAGE */}

        <div className="relative h-[550px] overflow-hidden rounded-[2rem]">
          <img
            src="/images/faq.png"
            alt="LUMÉA skincare"
            className="h-full w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 rounded-2xl bg-white/70 px-6 py-4 backdrop-blur-md">
            <p className="text-xs tracking-[0.2em] text-[#8B6F5A]">
              LUMÉA SKINCARE
            </p>

            <p className="mt-1 text-sm text-[#29231f]">
              Simple care. Thoughtfully chosen.
            </p>
          </div>
        </div>

        {/* FAQ CONTENT */}

        <div>

          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#8B6F5A]">
            NEED TO KNOW?
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-[#29231f] md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#756b63]">
            Everything you need to know about LUMÉA, our products,
            skincare routines, and your orders.
          </p>

          {/* ACCORDION */}

          <div className="mt-10 border-t border-[#d8cec4]">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="border-b border-[#d8cec4]"
              >

                <button
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                >

                  <span className="text-sm font-medium text-[#29231f] md:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#cfc3b8] text-lg font-light text-[#29231f] transition duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>

                {/* ANSWER */}

                <div
                  className={`grid transition-all duration-300 ${
                    openIndex === index
                      ? "grid-rows-[1fr] pb-6"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">
                    <p className="pr-12 text-sm leading-7 text-[#756b63]">
                      {faq.answer}
                    </p>
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

    <Footer />
  </>
);
}

export default FAQ;