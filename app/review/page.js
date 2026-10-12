
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const REVIEWS_COLLECTION = "reviews";

const placeholderReviews = [
  {
    id: "ph-2024-01",
    name: "Chloe M.",
    title: "Quiet, premium experience",
    message:
      "The atmosphere was calm and professional. I left feeling lighter and well-rested.",
    rating: 5,
    created_at: "2024-02-14T10:12:00.000Z",
  },
  {
    id: "ph-2024-02",
    name: "Jordan K.",
    title: "Great for shoulder tension",
    message:
      "Excellent pressure control and very respectful communication. My shoulders felt noticeably better.",
    rating: 5,
    created_at: "2024-03-28T16:40:00.000Z",
  },
  {
    id: "ph-2024-03",
    name: "Priya S.",
    title: "Clean and professional",
    message:
      "Everything felt hygienic and thoughtfully prepared. A genuinely relaxing, clinical-standard setup.",
    rating: 5,
    created_at: "2024-05-03T12:05:00.000Z",
  },
  {
    id: "ph-2024-04",
    name: "Evan R.",
    title: "Smooth booking process",
    message:
      "Quick replies, clear instructions, and a comfortable session from start to finish.",
    rating: 5,
    created_at: "2024-06-18T09:50:00.000Z",
  },
  {
    id: "ph-2024-05",
    name: "Sofia L.",
    title: "Perfect pacing",
    message:
      "The pacing was steady and calming. I felt relaxed without feeling rushed at any point.",
    rating: 5,
    created_at: "2024-07-22T14:11:00.000Z",
  },
  {
    id: "ph-2024-06",
    name: "Marcus T.",
    title: "Deep release without pain",
    message:
      "Targeted work where I needed it most. Strong technique but still comfortable.",
    rating: 5,
    created_at: "2024-08-09T18:25:00.000Z",
  },
  {
    id: "ph-2024-07",
    name: "Amina O.",
    title: "Respectful and discreet",
    message:
      "Very professional, private, and consistent care. I felt safe and comfortable.",
    rating: 5,
    created_at: "2024-09-18T11:30:00.000Z",
  },
  {
    id: "ph-2024-08",
    name: "Nathan B.",
    title: "Helped my lower back",
    message:
      "My lower back was tight for weeks—this session made a big difference.",
    rating: 5,
    created_at: "2024-10-27T13:42:00.000Z",
  },
  {
    id: "ph-2024-09",
    name: "Grace D.",
    title: "A calm reset",
    message:
      "Clean space, steady hands, and a relaxing atmosphere. I slept better afterwards.",
    rating: 4,
    created_at: "2024-11-12T19:05:00.000Z",
  },
  {
    id: "ph-2024-10",
    name: "Leo P.",
    title: "Attention to detail",
    message:
      "Small details made the experience feel premium. Great technique and professionalism.",
    rating: 5,
    created_at: "2024-12-05T08:18:00.000Z",
  },
  {
    id: "ph-2025-01",
    name: "Mia K.",
    title: "Exactly what I needed",
    message:
      "The session was tailored to my needs. I felt refreshed and calm afterwards.",
    rating: 5,
    created_at: "2025-01-22T12:31:00.000Z",
  },
  {
    id: "ph-2025-02",
    name: "Caleb S.",
    title: "Strong technique",
    message:
      "Great pressure and control—effective work on tight areas without discomfort.",
    rating: 5,
    created_at: "2025-02-16T17:10:00.000Z",
  },
  {
    id: "ph-2025-03",
    name: "Hannah V.",
    title: "Relaxing from minute one",
    message:
      "From the start, the environment felt calm and professional. Highly recommend.",
    rating: 5,
    created_at: "2025-03-09T10:05:00.000Z",
  },
  {
    id: "ph-2025-04",
    name: "Owen J.",
    title: "Worth it",
    message:
      "Great session and great communication. I felt balanced and lighter afterwards.",
    rating: 5,
    created_at: "2025-04-11T15:44:00.000Z",
  },
  {
    id: "ph-2025-05",
    name: "Zara N.",
    title: "Comfortable and respectful",
    message:
      "Everything was respectful, discreet, and well explained. I felt comfortable throughout.",
    rating: 5,
    created_at: "2025-06-09T14:11:00.000Z",
  },
  {
    id: "ph-2025-06",
    name: "Dylan C.",
    title: "Great for stress",
    message:
      "I came in stressed and left calm. The pacing and pressure were perfect.",
    rating: 4,
    created_at: "2025-07-26T09:22:00.000Z",
  },
  {
    id: "ph-2025-07",
    name: "Fatima A.",
    title: "Professional service",
    message:
      "Clear boundaries, professional approach, and a genuinely relaxing session.",
    rating: 5,
    created_at: "2025-09-03T18:02:00.000Z",
  },
  {
    id: "ph-2025-08",
    name: "Ryan W.",
    title: "Clean setup",
    message:
      "Very clean, organized, and calm. The experience felt premium and intentional.",
    rating: 5,
    created_at: "2025-10-14T12:50:00.000Z",
  },
  {
    id: "ph-2025-09",
    name: "Ivy Q.",
    title: "Soothing and effective",
    message:
      "A great blend of relaxation and therapeutic work. I booked again the same week.",
    rating: 5,
    created_at: "2025-11-05T09:50:00.000Z",
  },
  {
    id: "ph-2026-01",
    name: "Ava D.",
    title: "A refined wellness reset",
    message:
      "The vibe was calm and premium. I felt refreshed and well cared for.",
    rating: 5,
    created_at: "2026-01-08T11:30:00.000Z",
  },
];

function toISOString(value) {
  if (value?.toDate) return value.toDate().toISOString();

  if (value instanceof Date) return value.toISOString();

  if (typeof value === "string" && !Number.isNaN(Date.parse(value))) {
    return new Date(value).toISOString();
  }

  if (typeof value === "number") {
    return new Date(value).toISOString();
  }

  return new Date(0).toISOString();
}

function normalizeReview(review) {
  return {
    id: review.id,
    name: review.name?.trim() || "Anonymous",
    title: review.title?.trim() || "Client Review",
    message: review.message || "",
    rating: Math.max(1, Math.min(5, Number(review.rating) || 5)),
    created_at: toISOString(
      review.created_at ?? review.createdAt
    ),
    __source: review.__source || "db",
  };
}

function mergeAndSortReviews(dbReviews = []) {
  const map = new Map();

  placeholderReviews.forEach((review) => {
    map.set(
      review.id,
      normalizeReview({ ...review, __source: "placeholder" })
    );
  });

  dbReviews.forEach((review) => {
    map.set(
      review.id,
      normalizeReview({ ...review, __source: "db" })
    );
  });

  return Array.from(map.values()).sort(
    (a, b) =>
      new Date(b.created_at).getTime() -
      new Date(a.created_at).getTime()
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState({ type: "", message: "" });

  const [form, setForm] = useState({
    name: "",
    title: "",
    message: "",
    rating: 5,
  });

  const [filterRating, setFilterRating] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    if (!toast.message) return;

    const timer = setTimeout(
      () => setToast({ type: "", message: "" }),
      3200
    );

    return () => clearTimeout(timer);
  }, [toast]);

const fetchReviews = useCallback(async () => {
  let timeoutId;

  try {
    setLoading(true);

    // Don't rely on createdAt being present in every document.
    // Sort the reviews in the browser after loading them.
    const request = getDocs(collection(db, REVIEWS_COLLECTION));

    const timeout = new Promise((_, reject) => {
      timeoutId = setTimeout(() => {
        reject(
          new Error("Loading reviews timed out. Check your Firebase connection.")
        );
      }, 12000);
    });

    const snapshot = await Promise.race([request, timeout]);

    const firestoreReviews = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
      __source: "db",
    }));

    setReviews(mergeAndSortReviews(firestoreReviews));
  } catch (error) {
    console.error("Error loading Firebase reviews:", error);

    // Keep the page usable if Firestore cannot be reached.
    setReviews(mergeAndSortReviews([]));

    setToast({
      type: "error",
      message:
        error.message?.includes("timed out")
          ? "Firebase took too long to respond. Check your connection and try refreshing."
          : "Could not load live reviews. Showing sample reviews instead.",
    });
  } finally {
    clearTimeout(timeoutId);
    setLoading(false);
  }
}, []);


  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  function resetForm() {
    setForm({
      name: "",
      title: "",
      message: "",
      rating: 5,
    });
  }

  function validateForm() {
    const title = form.title.trim();
    const message = form.message.trim();
    const rating = Number(form.rating);

    if (title.length < 3) {
      return "Please enter a short title (at least 3 characters).";
    }

    if (message.length < 10) {
      return "Please share a bit more detail (at least 10 characters).";
    }

    if (message.length > 2000) {
      return "Your review must be 2000 characters or fewer.";
    }

    if (rating < 1 || rating > 5) {
      return "Rating must be between 1 and 5.";
    }

    return "";
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (submitting) return;

    const validationError = validateForm();

    if (validationError) {
      setToast({ type: "error", message: validationError });
      return;
    }

    setSubmitting(true);

    try {
      const payload = {
        name: form.name.trim() || "Anonymous",
        title: form.title.trim(),
        message: form.message.trim(),
        rating: Number(form.rating),
        createdAt: serverTimestamp(),
      };

      const documentRef = await addDoc(
        collection(db, REVIEWS_COLLECTION),
        payload
      );

      const newReview = {
        id: documentRef.id,
        ...payload,
        created_at: new Date().toISOString(),
        __source: "db",
      };

      setReviews((previous) =>
        mergeAndSortReviews([
          newReview,
          ...previous.filter((review) => review.__source === "db"),
        ])
      );

      resetForm();
      setVisibleCount((count) => Math.max(count, 8));

      setToast({
        type: "success",
        message: "Review submitted. Thank you.",
      });

      // Refresh the list to read the server-generated timestamp.
      await fetchReviews();
    } catch (error) {
      console.error("Error submitting Firebase review:", error);

      setToast({
        type: "error",
        message:
          "Failed to submit your review. Check your Firebase connection and Firestore rules.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  const stats = useMemo(() => {
    if (!reviews.length) return { avg: 0, total: 0 };

    const total = reviews.length;
    const sum = reviews.reduce(
      (accumulator, review) => accumulator + Number(review.rating || 0),
      0
    );

    return {
      avg: sum / total,
      total,
    };
  }, [reviews]);

  const filteredSorted = useMemo(() => {
    let list = [...reviews];

    if (filterRating !== "all") {
      list = list.filter(
        (review) => Number(review.rating) === Number(filterRating)
      );
    }

    if (sortBy === "newest") {
      list.sort(
        (a, b) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      );
    } else if (sortBy === "highest") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "lowest") {
      list.sort((a, b) => a.rating - b.rating);
    }

    return list;
  }, [reviews, filterRating, sortBy]);

  const visible = filteredSorted.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredSorted.length;

  return (
    <section className="relative w-full bg-background py-24 text-foreground md:py-32">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,216,181,0.12),transparent_60%)] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-28 right-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(41,63,53,0.65),transparent_60%)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {toast.message && (
          <div className="fixed left-1/2 top-5 z-50 w-[92%] max-w-md -translate-x-1/2">
            <div
              className={`rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur ${
                toast.type === "error"
                  ? "text-destructive"
                  : "text-foreground"
              }`}
              role="status"
              aria-live="polite"
            >
              <p className="text-sm">
                <span className="font-medium">
                  {toast.type === "error" ? "Note:" : "Done:"}
                </span>{" "}
                {toast.message}
              </p>
            </div>
          </div>
        )}

        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.28em] text-primary">
            Ruthie Dora Wellness
          </p>

          <h1 className="mt-4 font-serif text-4xl font-normal md:text-6xl">
            Client reviews
          </h1>

          <p className="mt-6 max-w-2xl leading-relaxed text-foreground/70">
            Experiences shared by clients who have taken time to relax,
            reset, and restore.
          </p>
        </div>

        {/* Summary and controls */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:items-center">
          <div className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-foreground/60">
              Average displayed rating
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <StarRating rating={Math.round(stats.avg || 5)} />

                <span className="text-sm text-foreground/65">
                  <span className="font-medium text-foreground">
                    {stats.total ? stats.avg.toFixed(1) : "—"}
                  </span>{" "}
                  / 5
                </span>
              </div>

              <span className="text-foreground/40">•</span>

              <span className="text-sm text-foreground/65">
                {stats.total} displayed review
                {stats.total === 1 ? "" : "s"}
              </span>
            </div>

            <p className="mt-3 text-sm text-foreground/65">
              Thoughtful care, professional service, and a focus on comfort.
            </p>

            <p className="mt-2 text-xs leading-5 text-foreground/50">
              This count includes sample entries until you remove them from
              the page.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <select
                value={filterRating}
                onChange={(event) => {
                  setFilterRating(event.target.value);
                  setVisibleCount(8);
                }}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                aria-label="Filter by rating"
              >
                <option value="all">All ratings</option>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 star</option>
              </select>

              <select
                value={sortBy}
                onChange={(event) => {
                  setSortBy(event.target.value);
                  setVisibleCount(8);
                }}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground"
                aria-label="Sort reviews"
              >
                <option value="newest">Newest first</option>
                <option value="highest">Highest rating</option>
                <option value="lowest">Lowest rating</option>
              </select>
            </div>

            <button
              type="button"
              onClick={fetchReviews}
              disabled={loading}
              className="w-full rounded-full border border-border bg-background px-6 py-2.5 text-sm font-medium text-foreground transition hover:bg-card disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              {loading ? "Refreshing…" : "Refresh reviews"}
            </button>
          </div>
        </div>

        {/* Review list */}
        <div className="mt-10 space-y-6">
          {loading && (
            <div className="rounded-3xl border border-border bg-card/40 p-8 text-center">
              <p className="text-foreground/65">Loading reviews…</p>
            </div>
          )}

          {!loading && filteredSorted.length === 0 && (
            <div className="rounded-3xl border border-border bg-card/40 p-8 text-center">
              <p className="text-foreground/65">
                No reviews match this filter yet.
              </p>
            </div>
          )}

          {!loading &&
            visible.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

          {!loading && canLoadMore && (
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + 8)}
                className="w-full rounded-2xl border border-border bg-card/40 px-6 py-4 text-sm font-medium text-foreground transition hover:bg-card"
              >
                Load more reviews
              </button>
            </div>
          )}
        </div>

        {/* Submit review form */}
        <div className="mt-16 max-w-3xl">
          <div className="rounded-3xl border border-border bg-card/60 p-8 backdrop-blur md:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Share your experience
            </p>

            <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl">
              Leave a review
            </h2>

            <p className="mt-3 text-sm text-foreground/65">
              Your feedback helps us improve the experience for every guest.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={form.name}
                  maxLength={100}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <div className="flex items-center gap-3">
                  <label
                    htmlFor="review-rating"
                    className="shrink-0 text-sm text-foreground/65"
                  >
                    Rating
                  </label>

                  <select
                    id="review-rating"
                    value={form.rating}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        rating: Number(event.target.value),
                      })
                    }
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground"
                  >
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating} Star{rating > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <input
                type="text"
                placeholder="Review title"
                value={form.title}
                maxLength={150}
                onChange={(event) =>
                  setForm({ ...form, title: event.target.value })
                }
                required
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
              />

              <div>
                <textarea
                  rows={6}
                  placeholder="Share your experience"
                  value={form.message}
                  maxLength={2000}
                  onChange={(event) =>
                    setForm({ ...form, message: event.target.value })
                  }
                  required
                  className="w-full resize-y rounded-2xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-ring"
                />

                <div className="mt-2 flex items-center justify-between text-xs text-foreground/55">
                  <span>Be respectful and concise.</span>
                  <span>{form.message.length}/2000</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                >
                  {submitting ? "Submitting…" : "Submit review"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background px-8 py-3 text-sm font-medium text-foreground transition hover:bg-card disabled:opacity-50 sm:w-auto"
                >
                  Clear form
                </button>
              </div>

              <p className="text-xs leading-5 text-foreground/50">
                Please do not include private information in your review.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }) {
  const isPlaceholder = review.__source === "placeholder";

  return (
    <article className="rounded-3xl border border-border bg-card/40 p-6 md:p-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <StarRating rating={review.rating} />

          {isPlaceholder && (
            <span className="rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/60">
              Sample
            </span>
          )}
        </div>

        <time
          dateTime={review.created_at}
          className="text-xs uppercase tracking-wider text-foreground/50"
        >
          {new Date(review.created_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>

      <h3 className="mb-3 font-serif text-xl font-normal md:text-2xl">
        {review.title}
      </h3>

      <p className="leading-relaxed text-foreground/70">
        {review.message}
      </p>

      <p className="mt-5 text-sm text-foreground/60">
        — {review.name || "Anonymous"}
      </p>
    </article>
  );
}

function StarRating({ rating }) {
  const value = Math.max(1, Math.min(5, Number(rating) || 5));

  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= value
              ? "text-primary"
              : "text-foreground/25"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
