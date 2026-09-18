import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCartShopping,
  FaHeart,
  FaUser,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const navigate = useNavigate();

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

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/shop?search=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/20 bg-white/60 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* ================= MOBILE NAVBAR ================= */}
      <div className="flex w-full flex-col px-4 py-3 md:hidden">

        {/* TOP ROW */}
        <div className="flex w-full min-w-0 items-center gap-2">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-xl font-bold tracking-widest"
          >
            LUMÉA
          </Link>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex min-w-0 flex-1 items-center"
          >
            <div className="flex min-w-0 w-full items-center rounded-full border border-black/30 bg-white/30 px-3 py-2 backdrop-blur-sm">
              <FaMagnifyingGlass className="mr-2 shrink-0 text-sm" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-black/60"
              />
            </div>
          </form>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="relative flex shrink-0 items-center justify-center p-1"
          >
            <FaHeart className="text-sm" />

            {wishlistCount > 0 && (
              <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B6F5A] text-[8px] font-bold text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex shrink-0 items-center justify-center p-1"
          >
            <FaCartShopping className="text-sm" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#8B6F5A] text-[8px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          <Link
            to="/login"
            className="flex shrink-0 items-center justify-center p-1"
          >
            <FaUser className="text-sm" />
          </Link>
        </div>

        {/* SECOND ROW - NAVIGATION */}
        <div className="mt-3 flex w-full items-center justify-between border-t border-black/10 pt-3 text-[12px] font-bold">

          <Link
            to="/"
            className="whitespace-nowrap"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="whitespace-nowrap"
          >
            Shop
          </Link>

          <Link
            to="/skin-quiz"
            className="whitespace-nowrap"
          >
            Skin Quiz
          </Link>

          <Link
            to="/about"
            className="whitespace-nowrap"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="whitespace-nowrap"
          >
            Contact
          </Link>

        </div>
      </div>


      {/* ================= DESKTOP NAVBAR ================= */}
<div className="hidden w-full items-center justify-between gap-6 px-8 py-5 md:flex">

  {/* Logo */}
  <Link
    to="/"
    className="shrink-0 text-2xl font-bold tracking-widest"
  >
    LUMÉA
  </Link>


  {/* Navigation Links */}
  <div className="flex shrink-0 items-center gap-6 font-bold">

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


  {/* DESKTOP SEARCH */}
  <form
    onSubmit={handleSearch}
    className="flex min-w-0 flex-1 max-w-xs items-center"
  >
    <div className="flex w-full items-center rounded-full border border-black/20 bg-white/30 px-4 py-2 backdrop-blur-sm">

      <FaMagnifyingGlass className="mr-2 shrink-0 text-sm" />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="min-w-0 w-full bg-transparent text-sm outline-none placeholder:text-black/50"
      />

    </div>
  </form>


  {/* Icons */}
  <div className="flex shrink-0 items-center gap-5">

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

</div>
    </nav>
  );
}

export default Navbar;