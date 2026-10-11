
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  ArrowRight,
} from 'lucide-react';

const reviews = [
  { name: 'Amanda R.', text: 'Absolutely amazing session. I felt relaxed and refreshed immediately.' },
  { name: 'James K.', text: 'Very professional and calming experience. Highly recommend.' },
  { name: 'Sophia M.', text: 'The best session I’ve had in years.' },
  { name: 'Daniel T.', text: 'Clean environment, great technique, and very respectful.' },
  { name: 'Lauren P.', text: 'Helped relieve my back tension after just one visit.' },
  { name: 'Michael B.', text: 'Comfortable, discreet, and worth every minute.' },
  { name: 'Rachel S.', text: 'Felt at ease from start to finish.' },
  { name: 'Chris W.', text: 'Attentive, skilled, and genuinely professional.' },
  { name: 'Emily D.', text: 'A perfect balance of calm and deeper pressure.' },
  { name: 'Joshua L.', text: 'Exceeded my expectations. Booking again soon.' },
  { name: 'Nicole A.', text: 'Warm atmosphere and great communication.' },
  { name: 'Brian H.', text: 'Helped me unwind after a stressful week.' },
  { name: 'Vanessa O.', text: 'Excellent service and clear boundaries.' },
  { name: 'Kevin N.', text: 'One of the best private experiences I’ve had.' },
  { name: 'Melissa J.', text: 'Very intuitive and respectful throughout.' },
  { name: 'Andrew C.', text: 'Felt like a reset for my body and mood.' },
  { name: 'Tina E.', text: 'Gentle, calming, and extremely professional.' },
  { name: 'Robert F.', text: 'Great pressure and attention to detail.' },
  { name: 'Hannah V.', text: 'Relaxing from the first minute.' },
  { name: 'Eric Z.', text: 'I left feeling lighter and more at ease.' },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);

  const current = reviews[index];

  const prev = () => {
    setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % reviews.length);
  };

  useEffect(() => {
    if (pause) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [pause]);

  // Display a manageable window of navigation indicators.
  const visibleDots = 8;
  const pageStart = Math.floor(index / visibleDots) * visibleDots;
  const dotItems = reviews.slice(pageStart, pageStart + visibleDots);

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 text-foreground md:py-32">

      {/* Ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-secondary/80 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Section heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />

              <p className="font-sans text-xs font-bold uppercase tracking-[0.26em] text-accent">
                Words of appreciation
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              A little more
              <span className="block italic text-accent">
                peace of mind.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl font-sans text-base leading-8 text-muted-foreground sm:text-lg">
              Discover the experiences shared by our guests, from moments
              of relaxation to the comfort of thoughtful, attentive care.
            </p>

          </div>

          {/* Decorative brand signature */}
          <div className="hidden items-center gap-3 pb-2 md:flex">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-accent">
              <Star className="h-4 w-4" strokeWidth={1.5} />
            </div>

            <div>
              <p className="font-serif text-lg text-foreground">
                Ruthie Dora Wellness
              </p>
              <p className="font-sans text-xs tracking-wide text-muted-foreground">
                Your time to restore
              </p>
            </div>
          </div>

        </div>

        {/* Main content */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">

          {/* Featured testimonial */}
          <div
            className="relative flex min-h-[410px] flex-col overflow-hidden rounded-3xl border border-border bg-secondary/60 p-6 sm:p-9 md:p-11 lg:col-span-8 lg:p-12"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
            onFocus={() => setPause(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPause(false);
              }
            }}
          >

            {/* Decorative quote mark */}
            <Quote
              className="absolute right-7 top-7 h-20 w-20 text-accent/10 sm:right-10 sm:top-10 sm:h-28 sm:w-28"
              strokeWidth={1}
              aria-hidden="true"
            />

            {/* Review label and controls */}
            <div className="relative flex items-center justify-between gap-4">

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />

                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-xs">
                  Guest testimonial
                </span>
              </div>

              <div className="flex items-center gap-2">

                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

              </div>

            </div>

            {/* Featured quote */}
            <div
              key={index}
              className="relative mt-12 flex flex-1 flex-col justify-center animate-in fade-in duration-500 sm:mt-16"
              aria-live="polite"
              aria-atomic="true"
            >

              <p className="max-w-3xl font-serif text-2xl font-normal leading-relaxed text-foreground sm:text-3xl md:text-4xl lg:text-[2.6rem]">
                “{current.text}”
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-between gap-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-background font-serif text-lg italic text-accent">
                    {current.name.charAt(0)}
                  </div>

                  <div>
                    <p className="font-sans text-sm font-bold text-foreground">
                      {current.name}
                    </p>

                    <p className="mt-1 font-sans text-xs text-muted-foreground">
                      Guest feedback
                    </p>
                  </div>

                </div>

                <div
                  className="flex items-center gap-1 text-accent"
                  aria-label="Decorative stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  ))}
                </div>

              </div>

            </div>

            {/* Carousel progress */}
            <div className="relative mt-10 border-t border-border pt-6">

              <div className="flex items-center justify-between gap-4">

                <div className="flex items-center gap-2">
                  {dotItems.map((_, i) => {
                    const absoluteIndex = pageStart + i;
                    const active = absoluteIndex === index;

                    return (
                      <button
                        key={absoluteIndex}
                        type="button"
                        onClick={() => setIndex(absoluteIndex)}
                        aria-label={`Go to review ${absoluteIndex + 1}`}
                        aria-current={active ? 'true' : undefined}
                        className={`h-1 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                          active
                            ? 'w-10 bg-accent'
                            : 'w-5 bg-foreground/20 hover:bg-foreground/50'
                        }`}
                      />
                    );
                  })}
                </div>

                <span className="shrink-0 font-sans text-xs tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
                </span>

              </div>

            </div>

          </div>

          {/* Supporting information */}
          <div className="flex flex-col gap-6 lg:col-span-4">

            {/* Guest priorities */}
            <div className="flex-1 rounded-3xl border border-border bg-secondary/35 p-7 sm:p-8">

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-accent" />

                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
                  Our approach
                </p>
              </div>

              <h3 className="mt-5 font-serif text-2xl leading-snug text-foreground sm:text-3xl">
                The little things matter.
              </h3>

              <p className="mt-3 font-sans text-sm leading-7 text-muted-foreground">
                A welcoming atmosphere and considerate service help
                make time for yourself feel that much more meaningful.
              </p>

              <ul className="mt-7 space-y-5">

                {[
                  'A clean and comfortable environment',
                  'Care tailored to your preferences',
                  'Respect for personal boundaries',
                  'Thoughtful attention throughout',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 font-sans text-sm leading-6 text-foreground/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                    {item}
                  </li>
                ))}

              </ul>

            </div>

            {/* Reservation panel */}
            <div className="rounded-3xl border border-border bg-background p-7 sm:p-8">

              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.23em] text-accent">
                Your next moment
              </p>

              <h3 className="mt-4 font-serif text-2xl leading-snug text-foreground">
                Ready to slow down?
              </h3>

              <p className="mt-3 font-sans text-sm leading-7 text-muted-foreground">
                Explore our services and rates to find an experience
                that feels right for you.
              </p>

              <Link
                href="/prices"
                className="group mt-6 inline-flex min-h-11 items-center gap-3 rounded-full bg-accent px-5 py-3 font-sans text-sm font-bold text-accent-foreground transition-colors hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Explore our rates

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

            </div>

          </div>

        </div>

        {/* Closing signature */}
        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-serif text-xl italic text-foreground/80">
            Every moment of care begins with you.
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            @RuthieDoraWellness
          </p>

        </div>

      </div>
    </section>
  );
}
