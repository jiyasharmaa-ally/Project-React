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
    <div className="min-w-0 w-full">

      {/* MAIN IMAGE */}
      <div className="flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl bg-[#f3eee8] md:h-[650px]">

        <img
          src={selectedImage}
          alt={product.name}
          className="h-full w-full object-contain p-10 transition duration-500"
        />

      </div>


      {/* THUMBNAILS */}
      <div className="mt-5 grid w-full grid-cols-4 gap-3 md:flex md:gap-4 md:overflow-x-auto md:pb-2">

        {images.map((image, index) => (

          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`aspect-square w-full min-w-0 cursor-pointer overflow-hidden rounded-xl border-2 transition duration-300 md:h-24 md:w-24 md:shrink-0 ${
              selectedImage === image
                ? "border-[#29231f]"
                : "border-transparent bg-[#f3eee8] hover:border-[#8B6F5A]"
            }`}
          >

            <img
              src={image}
              alt={`${product.name} ${index + 1}`}
              className="h-full w-full object-contain p-2 md:p-3"
            />

          </button>

        ))}

      </div>

    </div>
  );
}

export default ProductGallery;