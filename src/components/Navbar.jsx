import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-8 py-5 transition-all duration-500 ${scrolled
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
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/skin-quiz">Skin Quiz</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-5">
        <Link to="/wishlist">
          <FaHeart />
        </Link>

        <Link
          to="/cart"
          className="relative flex items-center justify-center"
        >
          <FaCartShopping />

          {cartCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6F5A] text-[10px] font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>

        <Link to="/login">
          <FaUser />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;