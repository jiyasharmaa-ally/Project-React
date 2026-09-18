import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutAddress from "../components/checkout/CheckoutAddress";
import DeliveryOptions from "../components/checkout/DeliveryOptions";
import PaymentMethod from "../components/checkout/PaymentMethod";
import OrderSummary from "../components/checkout/OrderSummary";
import { useState } from "react";

function Checkout() {
    const [selectedDelivery, setSelectedDelivery] = useState("standard");

    return (
        <>
            <Navbar />

            <main className="min-h-screen w-full overflow-hidden bg-[#f8f5f0] px-4 pb-24 pt-32 sm:px-6">

                <div className="mx-auto w-full max-w-7xl">

                    {/* ================= CHECKOUT HEADER ================= */}
                    <div className="mb-10 md:mb-12">

                        <p className="text-xs font-semibold tracking-[0.25em] text-[#8B6F5A] md:text-sm">
                            SECURE CHECKOUT
                        </p>

                        <h1 className="mt-3 max-w-full break-words font-['Cormorant_Garamond'] text-[42px] font-semibold leading-[0.95] text-[#29231f] sm:text-5xl md:text-6xl">
                            Complete Your Order
                        </h1>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
                            Review your details and complete your purchase.
                        </p>

                    </div>


                    {/* ================= CHECKOUT CONTENT ================= */}
                    <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">

                        {/* ================= LEFT SIDE ================= */}
                        <div className="min-w-0 space-y-8">

                            <CheckoutAddress />

                            <DeliveryOptions
                                selectedDelivery={selectedDelivery}
                                setSelectedDelivery={setSelectedDelivery}
                            />

                            <PaymentMethod />

                        </div>


                        {/* ================= RIGHT SIDE ================= */}
                        <div className="min-w-0">

                            <OrderSummary
                                selectedDelivery={selectedDelivery}
                            />

                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Checkout;