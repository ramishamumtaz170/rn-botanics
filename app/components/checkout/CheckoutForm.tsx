"use client";

import { useCheckout } from "@/app/context/CheckoutContext";
   export default function CheckoutForm() {
  const {
    checkoutData,
    setCheckoutData,
    delivery,
    setDelivery,
  } = useCheckout();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setCheckoutData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

     return (
    <section className="space-y-2">

      {/* Customer Information */}

      <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[#2E473B]">
          Customer Information
        </h2>

        <p className="mt-2 text-gray-500">
          Please enter your personal details.
        </p>

        <div className="mt-4 space-y-4">

          <div>
            <label className="block mb-2 font-medium text-[#2E473B]">
              Full Name *
            </label>

            <input
  type="text"
  name="fullName"
  value={checkoutData.fullName}
  onChange={handleChange}
  placeholder="Enter your name here"
  className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#2E473B]">
              Email Address
            </label>

           <input
  type="email"
  name="email"
  value={checkoutData.email}
  onChange={handleChange}
  placeholder="example@email.com"
  className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
/>
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#2E473B]">
              Phone Number *
            </label>

           <input
  type="tel"
  name="phone"
  value={checkoutData.phone}
  onChange={handleChange}
  placeholder="03XXXXXXXXX"
className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"

/>
          </div>

        </div>

      </div>

      {/* Shipping Address */}

    <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[#2E473B]">
          Shipping Address
        </h2>

        <p className="mt-2 text-gray-500">
          Where should we deliver your order?
        </p>

        <div className="mt-4 space-y-2">

          <div>
            <label className="block mb-2 font-medium text-[#2E473B]">
              Street Address *
            </label>

            <input
  type="text"
  name="address"
  value={checkoutData.address}
  onChange={handleChange}
  placeholder="House No, Street, Area"
className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"

/>
          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-medium text-[#2E473B]">
                City *
              </label>

              <input
  type="text"
  name="city"
  value={checkoutData.city}
  onChange={handleChange}
  placeholder="Enter city"
  className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
/>
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2E473B]">
                Province *
              </label>

             <select
  name="province"
  value={checkoutData.province}
  onChange={(e) =>
    setCheckoutData((prev) => ({
      ...prev,
      province: e.target.value,
    }))
  }
 className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
>
  <option>Punjab</option>
  <option>Sindh</option>
  <option>KPK</option>
  <option>Balochistan</option>
  <option>Gilgit Baltistan</option>
  <option>AJK</option>
</select>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium text-[#2E473B]">
                Postal Code
              </label>

             <input
  type="text"
  name="postalCode"
  value={checkoutData.postalCode}
  onChange={handleChange}
  placeholder="Enter Postal Code here"
className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 text-[16px] outline-none transition-all duration-300 focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"

/>
            </div>

            <div>
              <label className="block mb-2 font-medium text-[#2E473B]">
                Country
              </label>

              <input
                type="text"
                value="Pakistan"
                disabled
             className="w-full h-10 sm:h-12 rounded-2xl border border-[#E8E3DA] px-5 bg-[#F8F5EF] text-gray-500"
              />
            </div>

          </div>

        </div>

      </div>

{/* Delivery Method */}

<div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">

  <h2 className="text-3xl font-bold text-[#2E473B]">
    Delivery Method
  </h2>

  <div className="mt-6">

    <label className="flex items-center justify-between border-2 border-[#2E473B] bg-[#F8F5EF] rounded-2xl p-5 cursor-pointer">

      <div className="flex items-center gap-4">

        <input
          type="radio"
          name="shipping"
          checked={delivery === "standard"}
          onChange={() => setDelivery("standard")}
          className="appearance-auto accent-[#2E473B]"
        />

        <div>
          <p className="font-semibold text-[#2E473B]">
            Free Standard Delivery
          </p>

          <p className="text-gray-500 text-sm mt-1">
            Delivery in 4–6 business days
          </p>

          <p className="text-[#7C9A7D] text-sm font-medium mt-1">
            Available all over Pakistan
          </p>
        </div>

      </div>

      <span className="font-bold text-[#2E473B]">
        FREE
      </span>

    </label>

  </div>

</div>
      {/* Payment */}

      <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[#2E473B]">
          Payment Method
        </h2>

        <div className="mt-6 space-y-2">

          <label className="flex items-center gap-4 border border-[#E8E3DA] rounded-2xl p-5 cursor-pointer">

            <input
              type="radio"
              name="payment"
              defaultChecked
            />

            <span className="font-semibold text-[#2E473B]">
              Cash on Delivery
            </span>

          </label>

          {/* <label className="flex items-center gap-4 border border-[#E8E3DA] rounded-2xl p-5 opacity-50">

            <input
              type="radio"
              disabled
            />

            <span>
              JazzCash (Coming Soon)
            </span>

          </label>

          <label className="flex items-center gap-4 border border-[#E8E3DA] rounded-2xl p-5 opacity-50">

            <input
              type="radio"
              disabled
            />

            <span>
              EasyPaisa (Coming Soon)
            </span>

          </label> */}

        </div>

      </div>

      {/* Order Notes */}

      <div className="bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-sm">

        <h2 className="text-3xl font-bold text-[#2E473B]">
          Order Notes
        </h2>

        <textarea
  rows={5}
  name="notes"
  value={checkoutData.notes}
  onChange={handleChange}
  placeholder="Special delivery instructions (Optional)"
  className="mt-4 w-full rounded-2xl border border-[#E8E3DA] px-5 py-4 resize-none outline-none focus:border-[#2E473B]"
/>
      </div>

      {/* Terms */}

      <div className="bg-white rounded-[40px] p-8 shadow-sm">

        <label className="flex items-start gap-2 cursor-pointer">

          <input
  type="checkbox"
  checked={checkoutData.termsAccepted}
  onChange={(e) =>
    setCheckoutData((prev) => ({
      ...prev,
      termsAccepted: e.target.checked,
    }))
  }
  className="mt-1"
/>
          <span className="text-gray-600 leading-7">
            I agree to the
            <span className="font-semibold text-[#2E473B]">
              {" "}Terms & Conditions{" "}
            </span>
            and understand that my order will be confirmed before dispatch.
          </span>

        </label>

      </div>

    </section>
  );
}