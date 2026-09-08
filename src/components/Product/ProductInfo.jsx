import { FaStar } from "react-icons/fa";
import { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import PincodeChecker from "./PincodeChecker";
import { useCart } from "../../context/CartContext";

function ProductInfo({ product }) {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    return (
        <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm font-semibold tracking-[0.25em] text-[#8B6F5A]">
                {product.category.toUpperCase()}
            </p>

            {/* Product Name */}
            <h1 className="mt-4 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#29231f] md:text-6xl">
                {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-3">

                <div className="flex gap-1 text-[#D69E00]">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                </div>

                <span className="text-sm text-gray-500">
                    {product.rating} ({product.reviews} reviews)
                </span>

            </div>

            {/* Price */}
            <p className="mt-8 text-3xl font-semibold text-[#29231f]">
                ₹{product.price}
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-full bg-[#e8dcc5]" />

            {/* Description */}
            <p className="text-lg leading-8 text-gray-600">
                {product.description ||
                    "A thoughtfully formulated skincare essential designed to support healthy, radiant-looking skin."}
            </p>

            {/* Skin Type */}
            {product.skinType && (
                <div className="mt-8">

                    <p className="mb-3 text-sm font-semibold tracking-wider text-[#29231f]">
                        IDEAL FOR
                    </p>

                    <div className="flex flex-wrap gap-2">

                        {product.skinType.map((type) => (
                            <span
                                key={type}
                                className="rounded-full bg-[#e8dcc5] px-4 py-2 text-sm text-[#29231f]"
                            >
                                {type} Skin
                            </span>
                        ))}

                    </div>

                </div>
            )}
            <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
            />
            <PincodeChecker />
            {/* Add To Bag */}
            <button onClick={() => addToCart(product)}
                className="mt-10 w-full rounded-full bg-[#29231f] py-5 text-sm font-semibold tracking-[0.15em] text-white transition duration-300 hover:bg-[#3d3530] hover:scale-[1.02]">
                ADD TO BAG
            </button>

        </div>
    );
}

export default ProductInfo;