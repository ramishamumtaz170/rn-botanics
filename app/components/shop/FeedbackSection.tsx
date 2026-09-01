"use client";

import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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

  // Dropdown states
  const [showFeedback, setShowFeedback] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);

  // Carousel
  const [currentIndex, setCurrentIndex] = useState(0);

  // =========================================
  // LOAD APPROVED REVIEWS
  // =========================================

  useEffect(() => {
    const reviewsQuery = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      reviewsQuery,
      (snapshot) => {
        const loadedReviews: Review[] = snapshot.docs
          .map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Review)
          )
          .filter((review) => review.approved === true);

        setReviews(loadedReviews);
        setCurrentIndex(0);
      },
      (error) => {
        console.error("Failed to load reviews:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // =========================================
  // CAROUSEL CONTROLS
  // =========================================

  const nextReview = () => {
    if (reviews.length === 0) return;

    setCurrentIndex((previous) =>
      previous >= reviews.length - 1 ? 0 : previous + 1
    );
  };

  const previousReview = () => {
    if (reviews.length === 0) return;

    setCurrentIndex((previous) =>
      previous === 0 ? reviews.length - 1 : previous - 1
    );
  };

  // =========================================
  // SUBMIT REVIEW
  // =========================================

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
      setHoverRating(0);

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
    <section className="py-8 sm:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="text-center max-w-2xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold text-[#7C9A7D]">
            Customer Feedback
          </p>

          <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold text-[#2E473B]">
            What Our Customers Say
          </h2>

        </div>

        {/* =========================================
            CUSTOMER REVIEWS DROPDOWN
        ========================================= */}

        <div className="mt-7 max-w-5xl mx-auto">

          <button
            type="button"
            onClick={() => setShowFeedback(!showFeedback)}
            aria-expanded={showFeedback}
            className={`w-full flex items-center justify-between rounded-2xl border-2 px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-300 ${
              showFeedback
                ? "border-[#2E473B] bg-[#F8F5EF]"
                : "border-[#E8E3DA] bg-white hover:border-[#7C9A7D] hover:bg-[#FBFAF8]"
            }`}
          >

            <div>

              <p className="font-semibold text-[#2E473B] text-base sm:text-lg">
                Customer Reviews
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                {reviews.length > 0
                  ? `${reviews.length} ${
                      reviews.length === 1
                        ? "customer review"
                        : "customer reviews"
                    }`
                  : "No reviews yet"}
              </p>

            </div>

            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E473B] text-white transition-transform duration-300 ${
                showFeedback ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown size={20} strokeWidth={2} />
            </div>

          </button>

         {/* =========================================
    REVIEWS CAROUSEL
========================================= */}

<div
  className={`grid transition-all duration-500 ease-in-out ${
    showFeedback
      ? "grid-rows-[1fr] opacity-100 mt-5"
      : "grid-rows-[0fr] opacity-0 mt-0"
  }`}
>
  <div className="overflow-hidden">

    {reviews.length > 0 ? (

      <div className="max-w-2xl mx-auto">

        {/* CAROUSEL VIEWPORT */}
        <div className="overflow-hidden rounded-[24px]">

          {/* SLIDING TRACK */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >

            {reviews.map((item) => (

              <div
                key={item.id}
                className="w-full min-w-full shrink-0"
              >

                {/* REVIEW CARD */}
                <div className="bg-[#F8F5EF] rounded-[24px] p-6 sm:p-8 border border-[#E8E3DA] min-h-[210px]">

                  {/* STARS */}
                  <div className="flex gap-1 text-[#C7A25A] text-lg">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= item.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>

                  {/* REVIEW */}
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7">
                    “{item.review}”
                  </p>

                  {/* CUSTOMER */}
                  <p className="mt-5 font-semibold text-[#2E473B]">
                    — {item.name}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CONTROLS */}
        {reviews.length > 1 && (
          <div className="mt-5 flex items-center justify-center gap-4">

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={previousReview}
              aria-label="Previous review"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#2E473B]
                text-white
                shadow-md
                transition-all
                hover:bg-[#23392F]
                hover:scale-105
              "
            >
              <ChevronLeft size={20} />
            </button>

            {/* NUMBER */}
            <span className="min-w-[60px] text-center text-sm font-semibold text-[#2E473B]">
              {currentIndex + 1} / {reviews.length}
            </span>

            {/* NEXT */}
            <button
              type="button"
              onClick={nextReview}
              aria-label="Next review"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#2E473B]
                text-white
                shadow-md
                transition-all
                hover:bg-[#23392F]
                hover:scale-105
              "
            >
              <ChevronRight size={20} />
            </button>

          </div>
        )}

      </div>

    ) : (

      <div className="rounded-[24px] border border-[#E8E3DA] bg-[#F8F5EF] px-6 py-10 text-center">

        <p className="text-[#2E473B] font-semibold">
          No customer reviews yet.
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Be the first to share your experience with R & N Botanics.
        </p>

      </div>

    )}

  </div>
</div>        </div>

        {/* =========================================
            WRITE REVIEW DROPDOWN
        ========================================= */}

        <div className="mt-5 max-w-5xl mx-auto">

          <button
            type="button"
            onClick={() => setShowWriteReview(!showWriteReview)}
            aria-expanded={showWriteReview}
            className={`w-full flex items-center justify-between rounded-2xl border-2 px-5 py-4 sm:px-6 sm:py-5 text-left transition-all duration-300 ${
              showWriteReview
                ? "border-[#2E473B] bg-[#F8F5EF]"
                : "border-[#E8E3DA] bg-white hover:border-[#7C9A7D] hover:bg-[#FBFAF8]"
            }`}
          >

            <div>

              <p className="font-semibold text-[#2E473B] text-base sm:text-lg">
                Share Your Experience
              </p>

              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                Have you tried our Signature Hair Oil? Leave a review.
              </p>

            </div>

            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E473B] text-white transition-transform duration-300 ${
                showWriteReview ? "rotate-180" : "rotate-0"
              }`}
            >
              <ChevronDown size={20} strokeWidth={2} />
            </div>

          </button>

          {/* =========================================
              WRITE REVIEW CONTENT
          ========================================= */}

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              showWriteReview
                ? "grid-rows-[1fr] opacity-100 mt-5"
                : "grid-rows-[0fr] opacity-0 mt-0"
            }`}
          >

            <div className="overflow-hidden">

              <div className="max-w-2xl mx-auto bg-[#F8F5EF] rounded-[32px] p-6 sm:p-8 lg:p-10 border border-[#E8E3DA]">

                <h3 className="text-2xl sm:text-3xl font-bold text-[#2E473B]">
                  Share Your Experience
                </h3>

                <p className="mt-2 text-gray-500">
                  We would love to hear what you think about your R & N
                  Botanics experience.
                </p>

                {/* NAME */}

                <div className="mt-5">

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

                {/* RATING */}

                <div className="mt-5">

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

                {/* REVIEW */}

                <div className="mt-5">

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

                {/* SUBMIT */}

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

        </div>

      </div>
    </section>
  );
}