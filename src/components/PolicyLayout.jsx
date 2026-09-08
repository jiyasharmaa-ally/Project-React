import Navbar from "./Navbar";
import Footer from "./Footer";

function PolicyLayout({ title, subtitle, children }) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32">

        {/* Header */}
        <section className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold tracking-[0.3em] text-[#8B6F5A]">
            LUMÉA POLICIES
          </p>

          <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              {subtitle}
            </p>
          )}

        </section>

        {/* Content */}
        <section className="mx-auto mt-16 max-w-4xl rounded-[2rem] bg-white p-8 shadow-sm md:p-14">
          {children}
        </section>

      </main>

      <Footer />
    </>
  );
}

export default PolicyLayout;