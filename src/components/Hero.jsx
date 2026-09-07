import heroImage from "../../public/images/hero.png";

function Hero() {
    return (
        <section
            className="min-h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="min-h-screen flex items-center px-10 md:px-24 pt-16">

                <div className="max-w-2xl">

                    <p
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="mb-5 text-sm font-semibold tracking-[0.25em]"
                    >
                        DISCOVER LUMÉA
                    </p>

                    <h1
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="font-['Cormorant_Garamond'] text-6xl font-semibold italic leading-[0.9]"
                    >
                        SKINCARE MADE
                        <br />
                        FOR YOUR GLOW.
                    </h1>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-7 max-w-lg text-lg leading-relaxed text-gray-700"
                    >
                        Thoughtfully formulated essentials designed to nourish,
                        restore, and reveal your healthiest-looking skin.
                    </p>

                    <div
                        className="mt-10 flex items-center gap-5"
                    >
                        <button className="rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:scale-105 cursor-pointer">
                            SHOP COLLECTION
                        </button>

                        <button className="rounded-full border border-black px-8 py-4 text-sm font-semibold transition duration-300 hover:bg-black hover:text-white cursor-pointer">
                            TAKE SKIN QUIZ
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;