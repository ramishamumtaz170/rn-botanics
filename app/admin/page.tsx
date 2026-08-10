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

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  productId?: string;
  approved: boolean;
  createdAt?: any;
};

export default function AdminPage() {
  const router = useRouter();

  // =========================
  // ORDERS
  // =========================

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  // =========================
  // REVIEWS
  // =========================

  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  // =========================
  // DASHBOARD STATS
  // =========================

  const totalOrders = orders.length;

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

  const pendingReviews = reviews.filter(
    (review) => review.approved === false
  ).length;

  // =========================
  // FILTER ORDERS
  // =========================

  const filteredOrders = orders.filter((order) => {
    const value = search.toLowerCase();

    const orderNumber =
      order.orderNumber?.toLowerCase() || "";

    const customerName =
      order.customer?.fullName?.toLowerCase() || "";

    const phone =
      order.customer?.phone || "";

    const matchesSearch =
      orderNumber.includes(value) ||
      customerName.includes(value) ||
      phone.includes(value);

    const matchesStatus =
      statusFilter === "All" ||
      order.orderStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // AUTHENTICATION
  // =========================

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          router.replace("/admin/login");
        } else {
          fetchOrders();
          fetchReviews();
        }
      }
    );

    return () => unsubscribe();
  }, []);

  // =========================
  // FETCH ORDERS
  // =========================

  async function fetchOrders() {
    try {
      const q = query(
        collection(db, "orders"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((orderDoc) => ({
        id: orderDoc.id,
        ...orderDoc.data(),
      })) as Order[];

      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  }

  // =========================
  // FETCH REVIEWS
  // =========================

  async function fetchReviews() {
    try {
      const q = query(
        collection(db, "reviews"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((reviewDoc) => ({
        id: reviewDoc.id,
        ...reviewDoc.data(),
      })) as Review[];

      setReviews(data);
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setReviewsLoading(false);
    }
  }

  // =========================
  // UPDATE ORDER STATUS
  // =========================

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
            ? {
                ...order,
                orderStatus: status,
              }
            : order
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to update status.");
    }
  };

  // =========================
  // DELETE ORDER
  // =========================

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

  // =========================
  // APPROVE REVIEW
  // =========================

  const approveReview = async (id: string) => {
    try {
      await updateDoc(doc(db, "reviews", id), {
        approved: true,
      });

      setReviews((prev) =>
        prev.map((review) =>
          review.id === id
            ? {
                ...review,
                approved: true,
              }
            : review
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to approve review.");
    }
  };

  // =========================
  // REJECT REVIEW
  // =========================

  const rejectReview = async (id: string) => {
    try {
      await updateDoc(doc(db, "reviews", id), {
        approved: false,
      });

      setReviews((prev) =>
        prev.map((review) =>
          review.id === id
            ? {
                ...review,
                approved: false,
              }
            : review
        )
      );
    } catch (error) {
      console.error(error);
      alert("Failed to reject review.");
    }
  };

  // =========================
  // DELETE REVIEW
  // =========================

  const deleteReview = async (id: string) => {
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this review?"
    );

    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "reviews", id));

      setReviews((prev) =>
        prev.filter((review) => review.id !== id)
      );

      alert("Review deleted successfully.");
    } catch (error) {
      console.error(error);
      alert("Failed to delete review.");
    }
  };

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/admin/login");
  };

  // =========================
  // UI
  // =========================

  return (
    <main className="min-h-screen bg-[#F8F5EF] p-6 md:p-10">

      {/* =========================
          HEADER
      ========================= */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#2E473B]">
            Admin Dashboard
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your orders and customer feedback.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-medium"
        >
          Logout
        </button>

      </div>

      {/* =========================
          DASHBOARD STATS
      ========================= */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-10">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">
            Total Orders
          </p>

          <h2 className="text-3xl font-bold text-[#2E473B] mt-2">
            {totalOrders}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">
            Revenue
          </p>

          <h2 className="text-3xl font-bold text-[#2E473B] mt-2">
            Rs. {totalRevenue.toLocaleString()}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">
            Pending
          </p>

          <h2 className="text-3xl font-bold text-yellow-600 mt-2">
            {pendingOrders}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">
            Delivered
          </p>

          <h2 className="text-3xl font-bold text-green-600 mt-2">
            {deliveredOrders}
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-500">
            Pending Reviews
          </p>

          <h2 className="text-3xl font-bold text-[#C7A25A] mt-2">
            {pendingReviews}
          </h2>
        </div>

      </div>

      {/* =========================
          ORDERS SECTION
      ========================= */}

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-2xl font-bold text-[#2E473B]">
          Orders
        </h2>

      </div>

      {/* Search + Filter */}

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <input
          type="text"
          placeholder="Search by Order No, Customer or Phone..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#2E473B]"
        />

        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
          className="px-4 py-3 border border-gray-300 rounded-xl bg-white"
        >
          <option value="All">
            All
          </option>

          <option value="Pending">
            Pending
          </option>

          <option value="Confirmed">
            Confirmed
          </option>

          <option value="Packed">
            Packed
          </option>

          <option value="Shipped">
            Shipped
          </option>

          <option value="Delivered">
            Delivered
          </option>

          <option value="Cancelled">
            Cancelled
          </option>

        </select>

      </div>

      {/* Orders Table */}

      {loading ? (
        <p>Loading orders...</p>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <p className="text-gray-500">
            No orders found.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-3xl shadow-sm">

          <table className="w-full">

            <thead className="bg-[#2E473B] text-white">

              <tr>
                <th className="p-4 text-left">
                  Order
                </th>

                <th className="p-4 text-left">
                  Customer
                </th>

                <th className="p-4 text-left">
                  Phone
                </th>

                <th className="p-4 text-left">
                  Total
                </th>

                <th className="p-4 text-left">
                  Delivery
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4 text-left">
                  Action
                </th>
              </tr>

            </thead>

            <tbody>

              {filteredOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-gray-200"
                >

                  <td className="p-4">
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
                        updateOrderStatus(
                          order.id,
                          e.target.value
                        )
                      }
                      className="border rounded-lg px-3 py-2 bg-white"
                    >

                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Packed">
                        Packed
                      </option>

                      <option value="Shipped">
                        Shipped
                      </option>

                      <option value="Delivered">
                        Delivered
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>

                    </select>

                  </td>

                  <td className="p-4">

                    <div className="flex flex-wrap gap-2">

                      <button
                        onClick={() =>
                          setSelectedOrder(order)
                        }
                        className="bg-[#2E473B] text-white px-4 py-2 rounded-lg hover:bg-[#23392F]"
                      >
                        View
                      </button>

                      <button
                        onClick={() =>
                          deleteOrder(order.id)
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          const phone =
                            order.customer.phone;

                          const cleanPhone =
                            phone.replace(/\D/g, "");

                          const message = `Assalam-o-Alaikum ${order.customer.fullName},

Thank you for ordering from R & N Botanics 🌿

Your Order No: ${order.orderNumber}

has been received successfully.

We'll dispatch it soon.

Thank you ❤️`;

                          window.open(
                            `https://wa.me/92${cleanPhone.slice(
                              -10
                            )}?text=${encodeURIComponent(
                              message
                            )}`,
                            "_blank"
                          );
                        }}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        WhatsApp
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>
      )}

      {/* =========================
          CUSTOMER REVIEWS
      ========================= */}

      <section className="mt-16">

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">

          <div>
            <h2 className="text-2xl font-bold text-[#2E473B]">
              Customer Reviews
            </h2>

            <p className="mt-1 text-gray-500">
              Approve reviews before they appear on your website.
            </p>
          </div>

          <div className="bg-white px-5 py-3 rounded-2xl shadow-sm">

            <span className="text-gray-500">
              Pending:
            </span>{" "}

            <span className="font-bold text-[#C7A25A]">
              {pendingReviews}
            </span>

          </div>

        </div>

        {reviewsLoading ? (

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-gray-500">
              Loading reviews...
            </p>
          </div>

        ) : reviews.length === 0 ? (

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <p className="text-gray-500">
              No customer reviews yet.
            </p>
          </div>

        ) : (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {reviews.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 shadow-sm border border-[#E8E3DA]"
              >

                {/* Status */}

                <div className="flex items-center justify-between">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.approved
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.approved
                      ? "Approved"
                      : "Pending / Rejected"}
                  </span>

                  <span className="text-xs text-gray-400">
                    {item.rating}/5
                  </span>

                </div>

                {/* Stars */}

                <div className="mt-4 flex gap-1 text-lg text-[#C7A25A]">

                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <span key={star}>
                        {star <= item.rating
                          ? "★"
                          : "☆"}
                      </span>
                    )
                  )}

                </div>

                {/* Customer */}

                <h3 className="mt-4 font-bold text-[#2E473B]">
                  {item.name}
                </h3>

                {/* Review */}

                <p className="mt-3 text-gray-600 leading-7">
                  "{item.review}"
                </p>

                {/* Product */}

                {item.productId && (
                  <p className="mt-3 text-xs text-gray-400">
                    Product: {item.productId}
                  </p>
                )}

                {/* Actions */}

                <div className="mt-6 flex flex-wrap gap-2">

                  {!item.approved && (
                    <button
                      onClick={() =>
                        approveReview(item.id)
                      }
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Approve
                    </button>
                  )}

                  {item.approved && (
                    <button
                      onClick={() =>
                        rejectReview(item.id)
                      }
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      Hide
                    </button>
                  )}

                  <button
                    onClick={() =>
                      deleteReview(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </section>

      {/* =========================
          ORDER DETAILS MODAL
      ========================= */}

      {selectedOrder && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-3xl max-h-[90vh] overflow-y-auto">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-3xl font-bold text-[#2E473B]">
                Order Details
              </h2>

              <button
                onClick={() =>
                  setSelectedOrder(null)
                }
                className="text-gray-500 hover:text-black text-2xl"
              >
                ✕
              </button>

            </div>

            <div className="space-y-3">

              <p>
                <strong>Order No:</strong>{" "}
                {selectedOrder.orderNumber || "N/A"}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {selectedOrder.orderStatus}
              </p>

              <p>
                <strong>Payment:</strong>{" "}
                {selectedOrder.paymentMethod}
              </p>

              <p>
                <strong>Delivery:</strong>{" "}
                {selectedOrder.delivery}
              </p>

            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-bold mb-3">
              Customer
            </h3>

            <div className="space-y-2">

              <p>
                {selectedOrder.customer.fullName}
              </p>

              <p>
                {selectedOrder.customer.phone}
              </p>

              <p>
                {selectedOrder.customer.email}
              </p>

              <p>
                {selectedOrder.customer.address}
              </p>

              <p>
                {selectedOrder.customer.city}
              </p>

            </div>

            <hr className="my-6" />

            <h3 className="text-xl font-bold mb-3">
              Ordered Items
            </h3>

            <div className="space-y-4">

              {selectedOrder.items.map(
                (item, index) => (

                  <div
                    key={`${item.id}-${index}`}
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
                      Rs.{" "}
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString()}
                    </p>

                  </div>

                )
              )}

            </div>

            <hr className="my-6" />

            <div className="space-y-2">

              <div className="flex justify-between">
                <span>
                  Subtotal
                </span>

                <span>
                  Rs.{" "}
                  {selectedOrder.subtotal}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Shipping
                </span>

                <span>
                  Rs.{" "}
                  {selectedOrder.shipping}
                </span>
              </div>

              <div className="flex justify-between text-xl font-bold">

                <span>
                  Total
                </span>

                <span>
                  Rs.{" "}
                  {selectedOrder.total}
                </span>

              </div>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}