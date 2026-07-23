"use client";

import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


import {
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { db, auth } from "@/lib/firebase";

import { useRouter } from "next/navigation";
type Order = {
  id: string;
  orderNumber: string;
  customer: {
    fullName: string;
    phone: string;
    email?: string;
    address?: string;
    city?: string;
  };

  items: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }[];

  subtotal: number;
  shipping: number;
  total: number;

  paymentMethod: string;
  delivery: string;
  orderStatus: string;
  createdAt?: any;
};


export default function AdminPage() {
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
const [search, setSearch] = useState("");
const [statusFilter, setStatusFilter] = useState("All");
  const totalOrders = orders.length;
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);


  
const totalRevenue = orders.reduce(
  (sum, order) => sum + order.total,
  0
);

const pendingOrders = orders.filter(
  (order) => order.orderStatus === "Pending"
).length;

const deliveredOrders = orders.filter(
  (order) => order.orderStatus === "Delivered"
).length;

const filteredOrders = orders.filter((order) => {
  const value = search.toLowerCase();

  const orderNumber = order.orderNumber?.toLowerCase() || "";
  const customerName = order.customer?.fullName?.toLowerCase() || "";
  const phone = order.customer?.phone || "";

  const matchesSearch =
    orderNumber.includes(value) ||
    customerName.includes(value) ||
    phone.includes(value);

  const matchesStatus =
    statusFilter === "All" ||
    order.orderStatus === statusFilter;

  return matchesSearch && matchesStatus;
});

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace("/admin/login");
    } else {
      fetchOrders();
    }
  });

  return () => unsubscribe();
}, []);


  async function fetchOrders() {
    try {
      const q = query(
        collection(db, "orders"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Order[];

      setOrders(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

const updateOrderStatus = async (
  id: string,
  status: string
) => {
  try {
    await updateDoc(doc(db, "orders", id), {
      orderStatus: status,
    });

    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? { ...order, orderStatus: status }
          : order
      )
    );
  } catch (error) {
    console.error(error);
    alert("Failed to update status.");
  }
};

const deleteOrder = async (id: string) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this order?"
  );

  if (!confirmed) return;

  try {
    await deleteDoc(doc(db, "orders", id));

    setOrders((prev) =>
      prev.filter((order) => order.id !== id)
    );

    alert("Order deleted successfully.");
  } catch (error) {
    console.error(error);
    alert("Failed to delete order.");
  }
};

const handleLogout = async () => {
  await signOut(auth);
  router.push("/admin/login");
};

  return (
    <main className="min-h-screen bg-[#F8F5EF] p-10">

      <div className="flex justify-between items-center mb-10">

  <h1 className="text-4xl font-bold text-[#2E473B]">
    Admin Dashboard
  </h1>

  <button
    onClick={handleLogout}
    className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium"
  >
    Logout
  </button>

</div>


<div className="grid md:grid-cols-4 gap-6 mb-10">

  <div className="bg-white rounded-3xl p-6 shadow">
    <p className="text-gray-500">Total Orders</p>
    <h2 className="text-3xl font-bold text-[#2E473B] mt-2">
      {totalOrders}
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow">
    <p className="text-gray-500">Revenue</p>
    <h2 className="text-3xl font-bold text-[#2E473B] mt-2">
      Rs. {totalRevenue.toLocaleString()}
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow">
    <p className="text-gray-500">Pending</p>
    <h2 className="text-3xl font-bold text-yellow-600 mt-2">
      {pendingOrders}
    </h2>
  </div>

  <div className="bg-white rounded-3xl p-6 shadow">
    <p className="text-gray-500">Delivered</p>
    <h2 className="text-3xl font-bold text-green-600 mt-2">
      {deliveredOrders}
    </h2>
  </div>

</div>


<div className="flex flex-col md:flex-row gap-4 mb-6">

  <input
    type="text"
    placeholder="Search by Order No, Customer or Phone..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2E473B]"
  />

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="px-4 py-3 border border-gray-300 rounded-xl"
  >
    <option value="All">All</option>
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Packed">Packed</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>
  </select>

</div>
      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl shadow">

          <table className="w-full">

           <thead className="bg-[#2E473B] text-white">
  <tr>
    <th className="p-4 text-left">Order</th>
    <th className="p-4 text-left">Customer</th>
    <th className="p-4 text-left">Phone</th>
    <th className="p-4 text-left">Total</th>
    <th className="p-4 text-left">Delivery</th>
    <th className="p-4 text-left">Status</th>
    <th className="p-4 text-left">Action</th>
  </tr>
</thead>
            
<tbody>

  {filteredOrders.map((order) => (

    <tr
      key={order.id}
      className="border-b border-gray-200"
    >                  <td className="p-4">
                    {order.orderNumber}
                  </td>

                  <td className="p-4">
                    {order.customer.fullName}
                  </td>

                  <td className="p-4">
                    {order.customer.phone}
                  </td>

                  <td className="p-4">
                    Rs. {order.total}
                  </td>

                  <td className="p-4">
                    {order.delivery}
                  </td>

                  <td className="p-4">
  <select
    value={order.orderStatus}
    onChange={(e) =>
      updateOrderStatus(order.id, e.target.value)
    }
    className="border rounded-lg px-3 py-2 bg-white"
  >
    <option value="Pending">Pending</option>
    <option value="Confirmed">Confirmed</option>
    <option value="Packed">Packed</option>
    <option value="Shipped">Shipped</option>
    <option value="Delivered">Delivered</option>
    <option value="Cancelled">Cancelled</option>
  </select>
</td>
<td className="p-4">
  <div className="flex flex-wrap gap-2">
    <button
      onClick={() => setSelectedOrder(order)}
      className="bg-[#2E473B] text-white px-4 py-2 rounded-lg hover:bg-[#23392F]"
    >
      View
    </button>

    <button
      onClick={() => deleteOrder(order.id)}
      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
    >
      Delete
    </button>


<button
  onClick={() => {
    const phone = selectedOrder
      ? selectedOrder.customer.phone
      : order.customer.phone;

    const cleanPhone = phone.replace(/\D/g, "");

    const message = `Assalam-o-Alaikum ${order.customer.fullName},

Thank you for ordering from R & N Botanics 🌿

Your Order No: ${order.orderNumber}

has been received successfully.

We'll dispatch it soon.

Thank you ❤️`;

    window.open(
      `https://wa.me/92${cleanPhone.slice(-10)}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }}
  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
>
  WhatsApp
</button>

  </div>
</td>                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}


{selectedOrder && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-[#2E473B]">
          Order Details
        </h2>

        <button
          onClick={() => setSelectedOrder(null)}
          className="text-gray-500 hover:text-black text-2xl"
        >
          ✕
        </button>

      </div>

      <div className="space-y-3">

        <p>
          <strong>Order No:</strong> {selectedOrder.orderNumber || "N/A"}
        </p>

        <p>
          <strong>Status:</strong> {selectedOrder.orderStatus}
        </p>

        <p>
          <strong>Payment:</strong> {selectedOrder.paymentMethod}
        </p>

        <p>
          <strong>Delivery:</strong> {selectedOrder.delivery}
        </p>

      </div>

      <hr className="my-6" />

      <h3 className="text-xl font-bold mb-3">
        Customer
      </h3>

      <div className="space-y-2">

        <p>{selectedOrder.customer.fullName}</p>

        <p>{selectedOrder.customer.phone}</p>

        <p>{selectedOrder.customer.email}</p>

        <p>{selectedOrder.customer.address}</p>

        <p>{selectedOrder.customer.city}</p>

      </div>

      <hr className="my-6" />

      <h3 className="text-xl font-bold mb-3">
        Ordered Items
      </h3>

      <div className="space-y-4">

        {selectedOrder.items.map((item) => (

          <div
            key={item.id}
            className="flex justify-between border-b pb-3"
          >

            <div>

              <p className="font-semibold">
                {item.name}
              </p>

              <p className="text-gray-500">
                Qty: {item.quantity}
              </p>

            </div>

            <p>
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>

          </div>

        ))}

      </div>

      <hr className="my-6" />

      <div className="space-y-2">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>Rs. {selectedOrder.subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Rs. {selectedOrder.shipping}</span>
        </div>

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>
            Rs. {selectedOrder.total}
          </span>
        </div>

      </div>

    </div>

  </div>
)}

    </main>
  );
}