"use client";

import { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  approved: boolean;
};

export default function FeedbackSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  // Load approved reviews
  useEffect(() => {
    const reviewsQuery = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      reviewsQuery,
      (snapshot) => {
        const loadedReviews: Review[] = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          } as Review))
          .filter((review) => review.approved === true);

        setReviews(loadedReviews);
      },
      (error) => {
        console.error("Failed to load reviews:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    if (!review.trim()) {
      alert("Please write your review.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "reviews"), {
        name: name.trim(),
        rating,
        review: review.trim(),
        productId: "signature-hair-oil",
        approved: false,
        createdAt: serverTimestamp(),
      });

      setName("");
      setReview("");
      setRating(0);

      alert(
        "Thank you for your feedback! Your review will appear after approval."
      );
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Unable to submit your review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-8 sm:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-[#7C9A7D]">
            Customer Feedback
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2E473B]">
            What Our Customers Say
          </h2>

         
        </div>

        {/* Reviews */}
        {reviews.length > 0 && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {reviews.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F5EF] rounded-[28px] p-6 sm:p-7"
              >

                {/* Stars */}
                <div className="flex gap-1 text-[#C7A25A] text-lg">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= item.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                {/* Review */}
                <p className="mt-4 text-gray-600 leading-7">
                  “{item.review}”
                </p>

                {/* Customer */}
                <p className="mt-5 font-semibold text-[#2E473B]">
                  — {item.name}
                </p>

              </div>
            ))}

          </div>
        )}

        {/* Write Review */}
        <div className="mt-6 max-w-2xl mx-auto">

          <div className="bg-[#F8F5EF] rounded-[32px] p-6 sm:p-8 lg:p-10">

            <h3 className="text-2xl sm:text-3xl font-bold text-[#2E473B]">
              Share Your Experience
            </h3>

            <p className="mt-2 text-gray-500">
              We would love to hear what you think about your R & N Botanics
              experience.
            </p>

            {/* Name */}
            <div className="mt-4">

              <label className="block mb-2 font-medium text-[#2E473B]">
                Your Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full h-12 rounded-2xl border border-[#E8E3DA] bg-white px-5 text-gray-700 outline-none focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
              />

            </div>

            {/* Rating */}
            <div className="mt-4">

              <label className="block mb-2 font-medium text-[#2E473B]">
                Your Rating
              </label>

              <div className="flex gap-2">

                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="text-3xl transition-transform hover:scale-110"
                    aria-label={`Rate ${star} star${
                      star > 1 ? "s" : ""
                    }`}
                  >
                    <span
                      className={
                        star <= (hoverRating || rating)
                          ? "text-[#C7A25A]"
                          : "text-[#D8D4CC]"
                      }
                    >
                      ★
                    </span>
                  </button>
                ))}

              </div>

            </div>

            {/* Review */}
            <div className="mt-4">

              <label className="block mb-2 font-medium text-[#2E473B]">
                Your Review
              </label>

              <textarea
                rows={5}
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Share your experience with us..."
                className="w-full rounded-2xl border border-[#E8E3DA] bg-white px-5 py-4 text-gray-700 resize-none outline-none focus:border-[#2E473B] focus:ring-2 focus:ring-[#2E473B]/10"
              />

            </div>

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className={`mt-6 w-full py-4 rounded-full font-semibold transition-all ${
                submitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-[#2E473B] text-white hover:bg-[#23392F]"
              }`}
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>

            <p className="mt-4 text-xs text-gray-500 text-center">
              Reviews are checked before appearing publicly.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}