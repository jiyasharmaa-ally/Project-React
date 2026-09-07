import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-5 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/20 bg-white/60 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-widest">
        LUMÉA
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 font-bold">

        <div data-aos="fade-down" data-aos-delay="100">
          <Link to="/">Home</Link>
        </div>

        <div data-aos="fade-down" data-aos-delay="200">
          <Link to="/shop">Shop</Link>
        </div>

        <div data-aos="fade-down" data-aos-delay="300">
          <Link to="/skin-quiz">Skin Quiz</Link>
        </div>

        <div data-aos="fade-down" data-aos-delay="400">
          <Link to="/about">About</Link>
        </div>

        <div data-aos="fade-down" data-aos-delay="500">
          <Link to="/contact">Contact</Link>
        </div>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <Link to="/wishlist">
          <FaHeart />
        </Link>

        <Link to="/cart">
          <FaCartShopping />
        </Link>

        <Link to="/login">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;  