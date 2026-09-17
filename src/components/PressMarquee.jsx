function PressMarquee() {
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

      <h2 className="mb-14 text-center text-3xl font-semibold tracking-[0.25em] text-[#292929]">
        AS SEEN ON
      </h2>


      {/* Marquee */}

      <div className="press-marquee">

        <div className="press-track">

          {/* First set */}

          <div className="press-group">
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="press-brand"
              >
                {brand}
              </div>
            ))}
          </div>


          {/* Duplicate set */}

          <div className="press-group" aria-hidden="true">
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="press-brand"
              >
                {brand}
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default PressMarquee;