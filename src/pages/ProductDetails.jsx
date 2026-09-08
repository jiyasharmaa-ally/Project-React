import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductGallery from "../components/Product/ProductGallery";
import ProductInfo from "../components/Product/ProductInfo";
import ProductTabs from "../components/Product/ProductTabs";
import ProductReviews from "../components/Product/ProductReviews";
import RecommendedProducts from "../components/Product/RecommendedProducts";
import Footer from "../components/Footer";
import shopProducts from "../Data/shopData";

function ProductDetails() {
    const { id } = useParams();

    const product = shopProducts.find(
        (item) => item.id === Number(id)
    );

    // Product not found
    if (!product) {
        return (
            <>
                <Navbar />

                <main className="min-h-screen bg-[#f8f5f0] pt-32">
                    <h1 className="text-center text-3xl font-semibold text-[#29231f]">
                        Product not found
                    </h1>
                </main>

                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32">

                {/* PRODUCT SECTION */}
                <section className="mx-auto max-w-7xl">

                    {/* TOP SECTION */}
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* LEFT SIDE — PRODUCT GALLERY */}
                        <ProductGallery product={product} />

                        {/* RIGHT SIDE — PRODUCT INFO */}
                        <ProductInfo product={product} />

                    </div>

                    {/* PRODUCT DETAILS TABS */}
                    <ProductTabs product={product} />

                    {/* PRODUCT REVIEWS */}
                    <ProductReviews product={product} />

                    <RecommendedProducts
                        product={product}
                        products={shopProducts}
                    />

                </section>

            </main>

            <Footer />
        </>
    );
}

export default ProductDetails;