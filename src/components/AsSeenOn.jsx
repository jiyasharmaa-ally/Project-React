import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


function AsSeenOn() {
  const brands = [
    "ZeeD",
    "InStyle",
    "Bustle",
    "THE KEN",
    "COSMOPOLITAN",
    "VOGUE",
    "ELLE",
    "GLAMOUR",
  ];

  return (
    <section className="overflow-hidden bg-[#f5f4f2] py-14">

      {/* Heading */}
      <h2 className="mb-16 text-center text-3xl font-semibold tracking-[0.25em] text-[#292929]">
        AS SEEN ON
      </h2>

      {/* Continuous Moving Strip */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={2500}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        spaceBetween={60}
        slidesPerView="auto"
        className="as-seen-slider"
      >
        {brands.map((brand, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto"
          >
            <div className="flex items-center justify-center px-10">
              <span className="whitespace-nowrap text-4xl font-bold text-[#292929] cursor-pointer">
                {brand}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default AsSeenOn;