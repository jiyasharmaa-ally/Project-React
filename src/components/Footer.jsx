import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#29231f] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-8 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="text-xl font-bold tracking-wide transition hover:text-[#e8dcc5]"
          >
            LUMÉA
          </Link>

          <p className="mt-8 max-w-md text-lg leading-9 text-white/90">
            Thoughtfully formulated skincare designed to nourish, restore,
            and reveal your healthiest-looking skin.
          </p>
        </div>


        {/* Help */}
        <div>
          <h3 className="mb-8 text-xl font-semibold uppercase">
            Help
          </h3>

          <div className="flex flex-col gap-5 text-lg text-white/90">

            <Link to="/blog" className="transition hover:text-[#e8dcc5]">
              LUMÉA Blog
            </Link>

            <Link to="/retailer" className="transition hover:text-[#e8dcc5]">
              Become A Retailer
            </Link>

            <Link to="/faq" className="transition hover:text-[#e8dcc5]">
              FAQs
            </Link>

            <Link to="/contact" className="transition hover:text-[#e8dcc5]">
              Contact Us
            </Link>

            <Link to="/track-order" className="transition hover:text-[#e8dcc5]">
              Track My Order
            </Link>

          </div>
        </div>


        {/* Policy */}
        <div>
          <h3 className="mb-8 text-xl font-semibold uppercase">
            Policy
          </h3>

          <div className="flex flex-col gap-5 text-lg text-white/90">

            <Link to="/shipping-policy" className="transition hover:text-[#e8dcc5]">
              Shipping Policy
            </Link>

            <Link to="/refund-policy" className="transition hover:text-[#e8dcc5]">
              Refund Policy
            </Link>

            <Link to="/privacy-policy" className="transition hover:text-[#e8dcc5]">
              Privacy Policy
            </Link>

            <Link to="/terms" className="transition hover:text-[#e8dcc5]">
              Terms of Service
            </Link>

          </div>
        </div>


        {/* Newsletter */}
        <div>
          <h3 className="mb-8 text-xl font-semibold uppercase">
            Be The First To Know
          </h3>

          <p className="mb-8 text-lg leading-9 text-white/90">
            Stay up to date with our newest releases, exclusive offers,
            and skincare tips straight to your inbox.
          </p>

          <form className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-white/30 bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/60 focus:border-white"
            />

            <button
              type="submit"
              className="w-fit rounded-lg bg-[#e8dcc5] px-10 py-4 font-semibold tracking-[0.2em] text-[#5f4c30] transition duration-300 hover:bg-white"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>

      </div>


      {/* Bottom Section */}
      <div className="border-t border-white/20">

        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-8 py-8 md:flex-row">

          {/* Social Links */}
          <div className="flex items-center gap-7">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/70 transition hover:text-white hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/70 transition hover:text-white hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/70 transition hover:text-white hover:scale-110"
            >
              <FaPinterestP />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/70 transition hover:text-white hover:scale-110"
            >
              <FaYoutube />
            </a>

          </div>


          {/* Copyright */}
          <p className="text-center text-sm tracking-wide text-white/70">
            © {new Date().getFullYear()} LUMÉA. ALL RIGHTS RESERVED.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;