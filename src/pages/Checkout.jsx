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

            <main className="min-h-screen bg-[#f8f5f0] px-6 pb-24 pt-32">

                <div className="mx-auto max-w-7xl">

                    {/* CHECKOUT HEADER */}
                    <div className="mb-12">
                        <p className="text-sm font-semibold tracking-[0.25em] text-[#8B6F5A]">
                            SECURE CHECKOUT
                        </p>

                        <h1 className="mt-3 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#29231f] md:text-6xl">
                            Complete Your Order
                        </h1>

                        <p className="mt-3 text-gray-600">
                            Review your details and complete your purchase.
                        </p>
                    </div>


                    {/* CHECKOUT CONTENT */}
                    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">

                        {/* LEFT SIDE */}
                        <div className="space-y-8">

                            <CheckoutAddress />

                            

                            <DeliveryOptions
                                selectedDelivery={selectedDelivery}
                                setSelectedDelivery={setSelectedDelivery}
                            />

                            <PaymentMethod />

                        </div>


                        {/* RIGHT SIDE */}

                        <div>
                            <OrderSummary selectedDelivery={selectedDelivery} />
                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </>
    );
}

export default Checkout;