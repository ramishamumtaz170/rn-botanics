"use client";

import { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { X } from "lucide-react";
import { db } from "@/lib/firebase";

type Review = {
  id: string;
  name: string;
  rating: number;
  review: string;
  approved: boolean;
};

export default function ReviewPopup() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [closed, setClosed] = useState(false);

  // Load approved reviews from Firebase
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
        console.error("Failed to load review popups:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Show reviews one by one
  useEffect(() => {
    if (reviews.length === 0 || closed) return;

    // Small delay before the first popup
    const showTimer = setTimeout(() => {
      setVisible(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, [reviews.length, closed]);

  // Automatically move to next review
  useEffect(() => {
    if (!visible || reviews.length === 0 || closed) return;

    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((previous) => {
          if (previous >= reviews.length - 1) {
            return 0;
          }

          return previous + 1;
        });

        setVisible(true);
      }, 400);
    }, 2000);

    return () => clearTimeout(timer);
  }, [visible, currentIndex, reviews.length, closed]);

  const handleClose = () => {
    setVisible(false);
    setClosed(true);
  };

  if (
    reviews.length === 0 ||
    closed ||
    !visible
  ) {
    return null;
  }

  const review = reviews[currentIndex];

  if (!review) return null;

  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        z-[100]
        w-[calc(100%-2rem)]
        max-w-sm
        animate-[fadeIn_0.4s_ease-out]
      "
    >
      <div
        className="
          relative
          rounded-2xl
          border
          border-[#E8E3DA]
          bg-white
          p-5
          pr-10
          shadow-[0_10px_40px_rgba(46,71,59,0.15)]
        "
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close review notification"
          className="
            absolute
            right-3
            top-3
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            text-gray-400
            transition
            hover:bg-[#F8F5EF]
            hover:text-[#2E473B]
          "
        >
          <X size={16} />
        </button>

        {/* Small Label */}
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7C9A7D]">
          Customer Feedback
        </p>

        {/* Stars */}
        <div className="mt-2 flex gap-0.5 text-sm text-[#C7A25A]">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>
              {star <= review.rating ? "★" : "☆"}
            </span>
          ))}
        </div>

        {/* Review */}
        <p className="mt-2 text-sm leading-6 text-gray-600 line-clamp-3">
          “{review.review}”
        </p>

        {/* Customer */}
        <p className="mt-3 text-sm font-semibold text-[#2E473B]">
          — {review.name}
        </p>
      </div>
    </div>
  );
}