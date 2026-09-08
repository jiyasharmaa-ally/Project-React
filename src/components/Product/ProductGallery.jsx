import { useState } from "react";

function ProductGallery({ product }) {
  const [selectedImage, setSelectedImage] = useState(
    product.images?.[0] || product.image
  );

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div className="flex flex-col gap-5">

      {/* MAIN IMAGE */}
      <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-3xl bg-[#f3eee8] md:h-[650px]">

        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-contain p-10 transition duration-500"
        />

      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-4 overflow-x-auto pb-2">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`flex h-24 w-24 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 transition duration-300 ${
              selectedImage === image
                ? "border-[#29231f]"
                : "border-transparent bg-[#f3eee8] hover:border-[#8B6F5A]"
            }`}
          >

            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="h-full w-full object-contain p-3"
            />

          </button>

        ))}

      </div>

    </div>
  );
}

export default ProductGallery;