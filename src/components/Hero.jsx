import { Link } from "react-router-dom";
import heroImage from "../../public/images/hero.png";

function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden">

            {/* ================= DESKTOP BACKGROUND ================= */}
            <div
                className="absolute inset-0 hidden bg-cover bg-center md:block"
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            />


            {/* ================= MOBILE BACKGROUND ================= */}
            <div
                className="absolute inset-0 scale-[1.02] bg-cover bg-center blur-[1px] md:hidden"
                style={{
                    backgroundImage: "url('/images/hero-mobile.png')",
                }}
            />


            {/* ================= MOBILE OVERLAY ================= */}
            <div className="absolute inset-0 bg-white/10 md:hidden" />


            {/* ================= HERO CONTENT ================= */}
            <div
                className="relative z-10 flex min-h-screen items-center px-6 pt-32 md:px-24 md:pt-16"
            >

                <div className="max-w-2xl">

                    {/* Small heading */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mb-4 text-xs font-semibold tracking-[0.25em] md:mb-5 md:text-sm"
                    >
                        DISCOVER LUMÉA
                    </p>


                    {/* Main heading */}
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="max-w-[300px] font-['Cormorant_Garamond'] text-[44px] font-semibold italic leading-[0.9] md:max-w-2xl md:text-6xl"
                    >
                        SKINCARE MADE
                        <br />
                        FOR YOUR GLOW.
                    </h1>


                    {/* Description */}
                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-5 max-w-[290px] text-sm leading-relaxed text-gray-700 md:mt-7 md:max-w-lg md:text-lg"
                    >
                        Thoughtfully formulated essentials designed to nourish,
                        restore, and reveal your healthiest-looking skin.
                    </p>


                    {/* Buttons */}
                    <div
                        className="mt-7 flex items-center gap-3 md:mt-10 md:gap-5"
                    >

                        {/* Shop */}
                        <Link
                            to="/shop"
                            className="inline-block rounded-full bg-[#29231f] px-5 py-3 text-xs font-semibold text-white transition duration-300 hover:scale-105 md:px-8 md:py-4 md:text-sm"
                        >
                            SHOP COLLECTION
                        </Link>


                        {/* Skin Quiz */}
                        <Link
                            to="/skin-quiz"
                            className="inline-block rounded-full border border-[#29231f] px-5 py-3 text-xs font-semibold transition duration-300 hover:bg-[#29231f] hover:text-white md:px-8 md:py-4 md:text-sm"
                        >
                            TAKE SKIN QUIZ
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;