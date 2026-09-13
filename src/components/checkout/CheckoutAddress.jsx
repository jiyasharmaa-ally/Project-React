import { useState } from "react";
import { FaLocationDot, FaPlus } from "react-icons/fa6";
import AddAddressModal from "./AddAddressModal";

function CheckoutAddress() {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      type: "HOME",
      name: "Jiya",
      address: "123 Main Street, New Delhi, Delhi",
      pincode: "110001",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      type: "WORK",
      name: "Jiya",
      address: "456 Business Avenue, New Delhi, Delhi",
      pincode: "110002",
      phone: "+91 98765 43210",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    type: "HOME",
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const handleSaveAddress = (event) => {
    event.preventDefault();

    const createdAddress = {
      id: Date.now(),
      type: newAddress.type,
      name: newAddress.name,
      address: `${newAddress.address}, ${newAddress.city}, ${newAddress.state}`,
      pincode: newAddress.pincode,
      phone: newAddress.phone,
    };

    setAddresses((previous) => [
      ...previous,
      createdAddress,
    ]);

    // Automatically select the newly added address
    setSelectedAddress(createdAddress.id);

    // Close modal
    setShowModal(false);

    // Clear form
    setNewAddress({
      type: "HOME",
      name: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
  };

  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

      {/* Heading */}
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8dcc5] text-[#29231f]">
          <FaLocationDot />
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
            DELIVERY DETAILS
          </p>

          <h2 className="text-2xl font-semibold text-[#29231f]">
            Select Delivery Address
          </h2>
        </div>

      </div>


      {/* Addresses */}
      <div className="mt-8 space-y-4">

        {addresses.map((address) => (

          <button
            key={address.id}
            type="button"
            onClick={() => setSelectedAddress(address.id)}
            className={`w-full cursor-pointer rounded-xl border-2 p-5 text-left transition duration-300 ${
              selectedAddress === address.id
                ? "border-[#29231f] bg-[#f8f5f0]"
                : "border-[#e8dcc5] bg-white hover:border-[#8B6F5A]"
            }`}
          >

            <div className="flex items-start gap-4">

              {/* Radio Button */}
              <div
                className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                  selectedAddress === address.id
                    ? "border-[#29231f]"
                    : "border-gray-300"
                }`}
              >
                {selectedAddress === address.id && (
                  <div className="h-2.5 w-2.5 rounded-full bg-[#29231f]" />
                )}
              </div>


              {/* Address Details */}
              <div>

                <div className="flex items-center gap-3">

                  <h3 className="font-semibold text-[#29231f]">
                    {address.name}
                  </h3>

                  <span className="rounded-full bg-[#e8dcc5] px-3 py-1 text-[10px] font-bold tracking-wider text-[#29231f]">
                    {address.type}
                  </span>

                </div>

                <p className="mt-3 leading-7 text-gray-600">
                  {address.address}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  PIN: {address.pincode}
                </p>

                <p className="mt-2 text-sm font-medium text-[#29231f]">
                  {address.phone}
                </p>

              </div>

            </div>

          </button>

        ))}

      </div>


      {/* Add New Address */}
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="mt-6 flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#8B6F5A] transition hover:text-[#29231f]"
      >
        <FaPlus />
        ADD NEW ADDRESS
      </button>


      {/* Add Address Modal */}
      <AddAddressModal
        showModal={showModal}
        setShowModal={setShowModal}
        newAddress={newAddress}
        setNewAddress={setNewAddress}
        handleSaveAddress={handleSaveAddress}
      />

    </section>
  );
}

export default CheckoutAddress;