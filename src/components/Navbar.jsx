import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping, FaHeart, FaUser } from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { cartItems } = useCart();

  const { wishlistItems } = useWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

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
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-8 py-5 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/20 bg-white/60 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >

      {/* Logo */}

      <Link
        to="/"
        className="text-2xl font-bold tracking-widest"
      >
        LUMÉA
      </Link>


      {/* Navigation Links */}

      <div className="flex items-center gap-8 font-bold">

        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

        <Link to="/skin-quiz">
          Skin Quiz
        </Link>

        <Link to="/about">
          About
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>


      {/* Icons */}

      <div className="flex items-center gap-5">

        {/* Wishlist */}

        <Link
          to="/wishlist"
          className="relative flex items-center justify-center"
        >

          <FaHeart />

          {wishlistCount > 0 && (
            <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6F5A] text-[10px] font-bold text-white">
              {wishlistCount}
            </span>
          )}

        </Link>


        {/* Cart */}

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


        {/* User */}

        <Link to="/login">
          <FaUser />
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;