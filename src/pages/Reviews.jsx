import Footer from "../components/Footer";
import { useState } from "react";
import WriteReviewModal from "../components/WriteReviewModal";

function Reviews() {
    const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
    const reviews = [
        {
            name: "Ananya",
            rating: 5,
            product: "Glow Renewal Serum",
            review:
                "I have been using this serum consistently and really enjoy how lightweight it feels. My skin looks more fresh and hydrated.",
            date: "September 14, 2026",
        },
        {
            name: "Meera",
            rating: 5,
            product: "Hydra Barrier Moisturizer",
            review:
                "The texture is beautiful and doesn't feel heavy on my skin. It has become a regular part of my nighttime routine.",
            date: "September 11, 2026",
        },
        {
            name: "Riya",
            rating: 4,
            product: "Gentle Daily Cleanser",
            review:
                "Very gentle cleanser. It leaves my skin feeling clean without that tight, dry feeling afterward.",
            date: "September 08, 2026",
        },
        {
            name: "Kavya",
            rating: 5,
            product: "Daily Shield Sunscreen",
            review:
                "I love how easily this sunscreen blends into my skin. It doesn't feel sticky and works really well under makeup.",
            date: "September 05, 2026",
        },
        {
            name: "Ishita",
            rating: 5,
            product: "Glow Renewal Serum",
            review:
                "The serum has a really nice texture and fits perfectly into my morning routine. My skin feels much more hydrated.",
            date: "September 02, 2026",
        },
        {
            name: "Sana",
            rating: 4,
            product: "Ultra Glow Strobe Cream",
            review:
                "This gives my skin such a pretty glow. I use a small amount before going out and it gives a lovely finish.",
            date: "August 30, 2026",
        },
        {
            name: "Nisha",
            rating: 5,
            product: "Lip Balm",
            review:
                "Super comfortable on the lips and not overly sticky. I've been keeping it in my bag every day.",
            date: "August 27, 2026",
        },
        {
            name: "Aarohi",
            rating: 5,
            product: "Foam Cleanser",
            review:
                "A little product goes a long way. My skin feels fresh after cleansing without feeling stripped.",
            date: "August 24, 2026",
        },
        {
            name: "Diya",
            rating: 4,
            product: "Radiance Gel Cream",
            review:
                "Really nice lightweight moisturizer. Perfect for days when I don't want something heavy on my face.",
            date: "August 21, 2026",
        },
        {
            name: "Pihu",
            rating: 5,
            product: "Daily Shield Sunscreen",
            review:
                "This has become one of my everyday essentials. Easy to apply and comfortable throughout the day.",
            date: "August 18, 2026",
        },
        {
            name: "Tanya",
            rating: 5,
            product: "Glow Renewal Serum",
            review:
                "I really like the consistency of this serum. It absorbs nicely and leaves my skin feeling soft.",
            date: "August 15, 2026",
        },
        {
            name: "Shreya",
            rating: 4,
            product: "Glycolic Acid Toner",
            review:
                "I've been introducing this slowly into my routine and really like how smooth my skin feels afterward.",
            date: "August 12, 2026",
        },
    ];

    return (
        <>
            {/* HERO */}

            <section className="bg-[#29231f] px-6 pb-24 pt-40 text-white">
                <div className="mx-auto max-w-7xl text-center">

                    <p className="text-xs font-semibold tracking-[0.25em] text-[#d8c4ae]">
                        THE LUMÉA COMMUNITY
                    </p>

                    <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                        Loved by people
                        <br />
                        who love their skin.
                    </h1>

                    <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#d8cec4] md:text-base">
                        Discover what our community has to say about their
                        LUMÉA skincare experience.
                    </p>

                </div>
            </section>


            {/* RATING SUMMARY */}

            <section className="bg-[#f8f5f0] px-6 py-16">

                <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-[#ddd2c7] bg-white/50 p-8 md:grid-cols-3 md:p-12">

                    <div className="text-center">

                        <p className="text-5xl font-semibold text-[#29231f]">
                            4.8
                        </p>

                        <div className="mt-3 text-lg tracking-[0.2em] text-[#8B6F5A]">
                            ★★★★★
                        </div>

                        <p className="mt-2 text-xs text-[#756b63]">
                            Average customer rating
                        </p>

                    </div>


                    <div className="flex flex-col justify-center border-[#ddd2c7] md:border-x">

                        <div className="flex items-center gap-3 px-5 py-1">
                            <span className="w-8 text-xs">5 ★</span>

                            <div className="h-2 flex-1 rounded-full bg-[#ddd2c7]">
                                <div className="h-full w-[82%] rounded-full bg-[#8B6F5A]" />
                            </div>

                            <span className="text-xs text-[#756b63]">82%</span>
                        </div>

                        <div className="flex items-center gap-3 px-5 py-1">
                            <span className="w-8 text-xs">4 ★</span>

                            <div className="h-2 flex-1 rounded-full bg-[#ddd2c7]">
                                <div className="h-full w-[12%] rounded-full bg-[#8B6F5A]" />
                            </div>

                            <span className="text-xs text-[#756b63]">12%</span>
                        </div>

                        <div className="flex items-center gap-3 px-5 py-1">
                            <span className="w-8 text-xs">3 ★</span>

                            <div className="h-2 flex-1 rounded-full bg-[#ddd2c7]">
                                <div className="h-full w-[4%] rounded-full bg-[#8B6F5A]" />
                            </div>

                            <span className="text-xs text-[#756b63]">4%</span>
                        </div>

                        <div className="flex items-center gap-3 px-5 py-1">
                            <span className="w-8 text-xs">2 ★</span>

                            <div className="h-2 flex-1 rounded-full bg-[#ddd2c7]">
                                <div className="h-full w-[1%] rounded-full bg-[#8B6F5A]" />
                            </div>

                            <span className="text-xs text-[#756b63]">1%</span>
                        </div>

                        <div className="flex items-center gap-3 px-5 py-1">
                            <span className="w-8 text-xs">1 ★</span>

                            <div className="h-2 flex-1 rounded-full bg-[#ddd2c7]">
                                <div className="h-full w-[1%] rounded-full bg-[#8B6F5A]" />
                            </div>

                            <span className="text-xs text-[#756b63]">1%</span>
                        </div>

                    </div>


                    <div className="flex items-center justify-center">

                        <div className="text-center">

                            <p className="text-3xl font-semibold text-[#29231f]">
                                1,000+
                            </p>

                            <p className="mt-2 text-sm text-[#756b63]">
                                verified reviews
                            </p>

                            <p className="mt-1 text-xs text-[#938980]">
                                from the LUMÉA community
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* REVIEWS */}

            <section className="bg-[#f8f5f0] px-6 pb-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12 flex items-end justify-between">

                        <div>

                            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                                CUSTOMER STORIES
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold text-[#29231f] md:text-4xl">
                                What our customers say
                            </h2>

                        </div>

                        <p className="hidden text-sm text-[#756b63] md:block">
                            12 reviews
                        </p>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {reviews.map((review, index) => (

                            <article
                                key={index}
                                className="rounded-[1.5rem] border border-[#ddd2c7] bg-white/50 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* RATING */}

                                <div className="flex items-center justify-between">

                                    <div className="text-sm tracking-[0.15em] text-[#8B6F5A]">
                                        {"★".repeat(review.rating)}
                                        <span className="text-[#d8cec4]">
                                            {"★".repeat(5 - review.rating)}
                                        </span>
                                    </div>

                                    <span className="text-xs text-[#938980]">
                                        {review.date}
                                    </span>

                                </div>


                                {/* REVIEW */}

                                <p className="mt-6 text-sm leading-7 text-[#514943]">
                                    "{review.review}"
                                </p>


                                {/* CUSTOMER */}

                                <div className="mt-7 border-t border-[#e2d9d0] pt-5">

                                    <p className="text-sm font-semibold text-[#29231f]">
                                        {review.name}
                                    </p>

                                    <p className="mt-1 text-xs text-[#8B6F5A]">
                                        Purchased: {review.product}
                                    </p>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="bg-[#e8dcc5] px-6 py-20 text-center">

                <div className="mx-auto max-w-2xl">

                    <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                        YOUR EXPERIENCE MATTERS
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold text-[#29231f] md:text-4xl">
                        Tried LUMÉA?
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-[#756b63]">
                        We'd love to hear about your experience and share your
                        skincare journey with our community.
                    </p>

                    <button
                        onClick={() => setIsReviewModalOpen(true)}
                        className="mt-8 cursor-pointer rounded-full bg-[#29231f] px-8 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-[#3d3530]"
                    >
                        WRITE A REVIEW
                    </button>

                </div>

            </section>


            <WriteReviewModal
                isOpen={isReviewModalOpen}
                setIsOpen={setIsReviewModalOpen}
            />

            <Footer />
        </>
    );
}

export default Reviews;