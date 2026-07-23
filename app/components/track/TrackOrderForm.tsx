"use client";

import { useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

type Order = {
  orderNumber: string;
  customer: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  delivery: string;
  orderStatus: string;
};

export default function TrackOrderForm() {
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    setLoading(true);
    setError("");
    setOrder(null);

    try {
      const q = query(
        collection(db, "orders"),
        where("orderNumber", "==", orderNumber)
      );

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setError("No order found.");
        setLoading(false);
        return;
      }

      const data = snapshot.docs[0].data() as Order;

      if (data.customer.phone !== phone) {
        setError("Phone number doesn't match.");
        setLoading(false);
        return;
      }

      setOrder(data);
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow">

      <div className="space-y-5">

        <input
          type="text"
          placeholder="Order Number"
          value={orderNumber}
          onChange={(e) => setOrderNumber(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border rounded-xl px-4 py-3"
        />

        <button
          onClick={handleTrack}
          className="w-full bg-[#2E473B] text-white py-4 rounded-full font-semibold"
        >
          {loading ? "Searching..." : "Track Order"}
        </button>

      </div>

      {error && (
        <p className="text-red-500 mt-6">
          {error}
        </p>
      )}

      {order && (
        <div className="mt-10 border-t pt-8">

          <h2 className="text-2xl font-bold text-[#2E473B]">
            Order Found
          </h2>

          <div className="mt-6 space-y-3">

            <p>
              <strong>Order:</strong> {order.orderNumber}
            </p>

            <p>
              <strong>Name:</strong> {order.customer.fullName}
            </p>

            <p>
              <strong>Phone:</strong> {order.customer.phone}
            </p>

            <p>
              <strong>Address:</strong> {order.customer.address}
            </p>

            <p>
              <strong>City:</strong> {order.customer.city}
            </p>

            <p>
              <strong>Delivery:</strong> {order.delivery}
            </p>

           <div className="mt-8">

  <h3 className="text-xl font-bold text-[#2E473B] mb-6">
    Order Progress
  </h3>

  {[
    "Pending",
    "Confirmed",
    "Packed",
    "Shipped",
    "Delivered",
  ].map((status, index) => {

    const currentIndex = [
      "Pending",
      "Confirmed",
      "Packed",
      "Shipped",
      "Delivered",
    ].indexOf(order.orderStatus);

    const completed = index <= currentIndex;

    return (
      <div
        key={status}
        className="flex items-center mb-5"
      >

        <div
          className={`w-5 h-5 rounded-full ${
            completed
              ? "bg-green-600"
              : "bg-gray-300"
          }`}
        />

        <div
          className={`ml-4 font-medium ${
            completed
              ? "text-green-700"
              : "text-gray-500"
          }`}
        >
          {status}
        </div>

      </div>
    );

  })}

</div>
            <p>
              <strong>Total:</strong> Rs. {order.total}
            </p>

          </div>

          <div className="mt-8">

            <h3 className="font-bold text-xl mb-4">
              Ordered Items
            </h3>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-3"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  Rs. {item.price * item.quantity}
                </span>
              </div>
            ))}

          </div>

        </div>
      )}

    </div>
  );
}