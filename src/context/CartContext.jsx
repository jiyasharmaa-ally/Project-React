import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // NOTIFICATION STATE
  const [notification, setNotification] = useState(null);


  // ADD TO CART
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingProduct = currentItems.find(
        (item) => item.id === product.id
      );

      // Product already exists → increase quantity
      if (existingProduct) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // New product → add with quantity 1
      return [...currentItems, { ...product, quantity: 1 }];
    });

    // SHOW NOTIFICATION
    setNotification(`${product.name} added to your bag!`);
  };


  // AUTO HIDE NOTIFICATION
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);


  // INCREASE QUANTITY
  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  // REMOVE PRODUCT
  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };


  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}

      {/* CART NOTIFICATION */}
      {notification && (
        <div className="fixed right-6 top-24 z-[100] flex items-center gap-3 rounded-xl bg-[#29231f] px-5 py-4 text-sm font-medium text-white shadow-xl">

          {/* Check Icon */}
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8B6F5A] text-xs">
            ✓
          </span>

          {notification}

        </div>
      )}
    </CartContext.Provider>
  );
}


// CUSTOM HOOK
export function useCart() {
  return useContext(CartContext);
}