import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [wishlistNotification, setWishlistNotification] = useState(null);

  const toggleWishlist = (product) => {
    setWishlistItems((currentItems) => {
      const exists = currentItems.some(
        (item) => item.id === product.id
      );

      if (exists) {
        setWishlistNotification(
          `${product.name} removed from your wishlist!`
        );

        return currentItems.filter(
          (item) => item.id !== product.id
        );
      }

      setWishlistNotification(
        `${product.name} added to your wishlist!`
      );

      return [...currentItems, product];
    });
  };

  const isInWishlist = (id) => {
    return wishlistItems.some(
      (item) => item.id === id
    );
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((currentItems) => {
      const product = currentItems.find(
        (item) => item.id === id
      );

      if (product) {
        setWishlistNotification(
          `${product.name} removed from your wishlist!`
        );
      }

      return currentItems.filter(
        (item) => item.id !== id
      );
    });
  };

  // Remove notification after 3 seconds
  useEffect(() => {
    if (wishlistNotification) {
      const timer = setTimeout(() => {
        setWishlistNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [wishlistNotification]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}

      {/* WISHLIST TOASTER */}

      {wishlistNotification && (
        <div className="fixed right-6 top-24 z-[100] flex items-center gap-3 rounded-xl bg-[#29231f] px-5 py-4 text-sm font-medium text-white shadow-xl">

          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8B6F5A] text-xs">
            ♥
          </span>

          {wishlistNotification}

        </div>
      )}

    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}