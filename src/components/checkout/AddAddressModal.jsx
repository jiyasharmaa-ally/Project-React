import {
  FaXmark,
} from "react-icons/fa6";

function AddAddressModal({
  showModal,
  setShowModal,
  newAddress,
  setNewAddress,
  handleSaveAddress,
}) {
  if (!showModal) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewAddress((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5 py-8 backdrop-blur-sm"
      onClick={() => setShowModal(false)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >

        {/* Close */}
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="absolute right-6 top-6 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#f8f5f0] text-[#29231f] transition hover:bg-[#e8dcc5]"
        >
          <FaXmark />
        </button>


        {/* Heading */}
        <div className="pr-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#8B6F5A]">
            NEW ADDRESS
          </p>

          <h2 className="mt-2 font-['Cormorant_Garamond'] text-4xl font-semibold text-[#29231f]">
            Add a delivery address
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Enter your details below to save a new delivery address.
          </p>
        </div>


        {/* Form */}
        <form
          onSubmit={handleSaveAddress}
          className="mt-8 space-y-5"
        >

          {/* Address Type */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#29231f]">
              Address Type
            </label>

            <div className="flex gap-3">

              {["HOME", "WORK", "OTHER"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() =>
                    setNewAddress((previous) => ({
                      ...previous,
                      type,
                    }))
                  }
                  className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    newAddress.type === type
                      ? "border-[#29231f] bg-[#29231f] text-white"
                      : "border-[#e8dcc5] text-[#29231f] hover:bg-[#f8f5f0]"
                  }`}
                >
                  {type}
                </button>
              ))}

            </div>
          </div>


          {/* Name + Phone */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={newAddress.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
              />
            </div>


            <div>
              <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={newAddress.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                required
                className="w-full rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
              />
            </div>

          </div>


          {/* Street Address */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#29231f]">
              Street Address
            </label>

            <textarea
              name="address"
              value={newAddress.address}
              onChange={handleChange}
              placeholder="House / Flat / Building / Street"
              rows="3"
              required
              className="w-full resize-none rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
            />
          </div>


          {/* City + State */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                City
              </label>

              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleChange}
                placeholder="New Delhi"
                required
                className="w-full rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
              />
            </div>


            <div>
              <label className="mb-2 block text-sm font-semibold text-[#29231f]">
                State
              </label>

              <input
                type="text"
                name="state"
                value={newAddress.state}
                onChange={handleChange}
                placeholder="Delhi"
                required
                className="w-full rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
              />
            </div>

          </div>


          {/* Pincode */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#29231f]">
              PIN Code
            </label>

            <input
              type="text"
              name="pincode"
              value={newAddress.pincode}
              onChange={handleChange}
              placeholder="110001"
              maxLength="6"
              required
              className="w-full rounded-xl border border-[#e8dcc5] bg-[#f8f5f0] px-4 py-3 outline-none transition focus:border-[#8B6F5A]"
            />
          </div>


          {/* Buttons */}
          <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="cursor-pointer rounded-full border border-[#29231f] px-7 py-3 text-sm font-semibold text-[#29231f] transition hover:bg-[#f8f5f0]"
            >
              CANCEL
            </button>

            <button
              type="submit"
              className="cursor-pointer rounded-full bg-[#29231f] px-7 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-[#3d3530]"
            >
              SAVE ADDRESS
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default AddAddressModal;