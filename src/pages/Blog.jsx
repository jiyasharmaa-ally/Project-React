import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Blog() {
    const blogPosts = [
        {
            id: 1,
            category: "SKINCARE 101",
            title: "How to Build a Simple Skincare Routine",
            description:
                "A simple guide to creating a skincare routine that works for your skin without overwhelming it.",
            image: "/images/blog(1).png",
            date: "September 12, 2026",
        },
        {
            id: 2,
            category: "SKINCARE TIPS",
            title: "5 Things Your Skin Needs Every Day",
            description:
                "Discover the essential steps that can help you maintain healthy-looking and balanced skin.",
            image: "/images/blog2.png",
            date: "September 08, 2026",
        },
        {
            id: 3,
            category: "INGREDIENTS",
            title: "Understanding Your Skincare Ingredients",
            description:
                "Learn how to understand common skincare ingredients and choose products with confidence.",
            image: "/images/blog3.png",
            date: "September 03, 2026",
        },
        {
            id: 4,
            category: "SELF CARE",
            title: "Why Your Skincare Routine Is a Form of Self-Care",
            description:
                "Skincare isn't just about products. It's about creating a few mindful moments for yourself.",
            image: "/images/blog4.png",
            date: "August 28, 2026",
        },
        {
            id: 5,
            category: "SKIN TYPES",
            title: "How to Understand Your Skin Type",
            description:
                "Oily, dry, combination or normal? Learn the basics of identifying what your skin needs.",
            image: "/images/blog5.png",
            date: "August 21, 2026",
        },
        {
            id: 6,
            category: "SUN CARE",
            title: "Why Sunscreen Belongs in Every Routine",
            description:
                "Understanding the role of daily sun protection and how to make sunscreen part of your routine.",
            image: "/images/blog6.png",
            date: "August 15, 2026",
        },
    ];

    return (
        <>
        <Navbar />
            {/* HERO */}

            <section className="bg-[#29231f] px-6 pb-24 pt-40 text-white">

                <div className="mx-auto max-w-7xl">

                    <p className="mb-5 text-sm font-semibold tracking-[0.25em] text-[#d8c4ae]">
                        THE LUMÉA JOURNAL
                    </p>

                    <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                        Skin, simplified.
                        <br />
                        Beauty, understood.
                    </h1>

                    <p className="mt-7 max-w-xl text-sm leading-7 text-[#d8cec4] md:text-base">
                        Explore skincare guides, ingredient insights, beauty rituals,
                        and thoughtful tips designed to help you understand your skin.
                    </p>

                </div>

            </section>


            {/* FEATURED ARTICLE */}

            <section className="bg-[#f8f5f0] px-6 py-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-10 flex items-end justify-between">

                        <div>
                            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                                FEATURED
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold text-[#29231f] md:text-4xl">
                                From the journal
                            </h2>
                        </div>

                    </div>


                    <article className="grid overflow-hidden rounded-[2rem] bg-[#e8dcc5] lg:grid-cols-2">

                        <div className="h-[400px] lg:h-[500px]">

                            <img
                                src="/images/blog1.png"
                                alt="Skincare routine"
                                className="h-full w-full object-cover"
                            />

                        </div>


                        <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">

                            <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                                SKINCARE 101
                            </p>

                            <h3 className="mt-5 text-3xl font-semibold leading-tight text-[#29231f] md:text-4xl">
                                The ultimate guide to building your skincare routine
                            </h3>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-[#756b63]">
                                Your skincare routine doesn't have to be complicated.
                                Learn how to create a simple, effective routine based on
                                what your skin actually needs.
                            </p>

                            <div className="mt-8 flex items-center gap-5">

                                <span className="text-xs text-[#756b63]">
                                    September 15, 2026
                                </span>



                            </div>

                        </div>

                    </article>

                </div>

            </section>


            {/* BLOG GRID */}

            <section className="bg-[#f8f5f0] px-6 pb-24">

                <div className="mx-auto max-w-7xl">

                    <div className="mb-12">

                        <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                            EXPLORE
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-[#29231f] md:text-4xl">
                            Latest from LUMÉA
                        </h2>

                    </div>


                    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">

                        {blogPosts.map((post) => (

                            <article
                                key={post.id}
                                className="group"
                            >

                                {/* IMAGE */}

                                <div className="h-[300px] overflow-hidden rounded-[1.5rem]">

                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />

                                </div>


                                {/* CONTENT */}

                                <div className="pt-6">

                                    <div className="flex items-center justify-between">

                                        <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8B6F5A]">
                                            {post.category}
                                        </p>

                                        <span className="text-xs text-[#938980]">
                                            {post.date}
                                        </span>

                                    </div>


                                    <h3 className="mt-4 text-xl font-semibold leading-snug text-[#29231f]">
                                        {post.title}
                                    </h3>


                                    <p className="mt-3 text-sm leading-6 text-[#756b63]">
                                        {post.description}
                                    </p>




                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* NEWSLETTER */}

            <section className="bg-[#e8dcc5] px-6 py-24">

                <div className="mx-auto max-w-3xl text-center">

                    <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
                        STAY IN THE LOOP
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold text-[#29231f] md:text-4xl">
                        A little skincare knowledge,
                        <br />
                        delivered to you.
                    </h2>

                    <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#756b63]">
                        Get skincare tips, ingredient guides, and LUMÉA updates
                        straight to your inbox.
                    </p>


                    <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">

                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 rounded-full border border-[#cfc0b0] bg-white/60 px-5 py-3 text-sm text-[#29231f] outline-none placeholder:text-[#938980] focus:border-[#8B6F5A]"
                        />

                        <button
                            className="cursor-pointer rounded-full bg-[#29231f] px-7 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-[#3d3530]"
                        >
                            SUBSCRIBE
                        </button>

                    </div>

                </div>

            </section>


            <Footer />
        </>
    );
}

export default Blog;