
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Leaf, X } from 'lucide-react';

const STORAGE_KEY = 'lounge_disclaimer_hidden_v1';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(true);

  useEffect(() => {
    try {
      const hidden = localStorage.getItem(STORAGE_KEY);
      if (!hidden) setIsOpen(true);
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, dontShowAgain]);

  const close = () => {
    if (dontShowAgain) {
      try {
        localStorage.setItem(STORAGE_KEY, '1');
      } catch {
        // The modal can still close when storage is unavailable.
      }
    }

    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md"
        onClick={close}
        aria-label="Close welcome notice"
        tabIndex={-1}
      />

      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,216,181,0.10),transparent_68%)] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -bottom-20 -right-20 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(41,63,53,0.45),transparent_70%)] sm:h-[440px] sm:w-[440px]" />
      </div>

      {/* Modal card */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="disclaimer-title"
        aria-describedby="disclaimer-description"
        className="relative my-auto w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-accent/20 bg-card text-card-foreground shadow-2xl"
      >
        {/* Champagne accent */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="p-6 sm:p-9 lg:p-10">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-secondary text-accent">
                <Leaf className="h-5 w-5" strokeWidth={1.4} />
              </span>

              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  @RuthieDoraWellness
                </p>
                <p className="mt-1 font-sans text-xs text-muted-foreground">
                  A moment before you begin
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={close}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition hover:border-accent/50 hover:bg-secondary hover:text-foreground"
              aria-label="Close welcome notice"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Title and introduction */}
          <div className="mt-7">
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Welcome
            </p>

            <h2
              id="disclaimer-title"
              className="mt-3 font-serif text-3xl font-normal leading-tight tracking-tight text-foreground sm:text-4xl"
            >
              A little care
              <span className="block italic text-accent">
                begins with respect.
              </span>
            </h2>

            <p
              id="disclaimer-description"
              className="mt-4 font-sans text-sm leading-7 text-muted-foreground sm:text-base"
            >
              We want your experience to feel calm, comfortable, and
              respectful from your first enquiry through the end of your
              session. Please take a moment to review our expectations.
            </p>
          </div>

          {/* Guidelines */}
          <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5 sm:p-6">
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.16em] text-accent">
              Our shared understanding
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: 'Communicate respectfully',
                  detail:
                    'Please keep messages courteous and appropriate.',
                },
                {
                  title: 'Respect consent and boundaries',
                  detail:
                    'Comfort, personal boundaries, and mutual respect matter throughout every session.',
                },
                {
                  title: 'Speak up about concerns',
                  detail:
                    'Share any questions or concerns calmly so they can be addressed professionally.',
                },
                {
                  title: 'Know what to expect',
                  detail:
                    'Review our guest reviews and policies before making a reservation.',
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3" strokeWidth={2} />
                  </span>

                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 font-sans text-xs leading-6 text-muted-foreground sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Remember preference */}
          <label className="mt-5 flex cursor-pointer items-center gap-3 font-sans text-sm text-muted-foreground">
            <input
              type="checkbox"
              checked={dontShowAgain}
              onChange={(event) => setDontShowAgain(event.target.checked)}
              className="h-4 w-4 shrink-0 cursor-pointer accent-[#E8D8B5]"
            />
            Don’t show this again
          </label>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={close}
              className="group inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
            >
              Continue
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <Link
              href="/review"
              onClick={close}
              className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-border px-5 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-secondary"
            >
              Read guest reviews
            </Link>
          </div>

          <p className="mt-5 text-center font-sans text-[11px] leading-5 text-muted-foreground">
            By continuing, you acknowledge our respectful communication
            expectations. Please review our{' '}
            <Link
              href="/termsandconditions"
              onClick={close}
              className="text-accent underline decoration-accent/40 underline-offset-4 transition hover:text-foreground"
            >
              policies and terms
            </Link>
            .
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-border" />
            <span className="font-serif text-xs italic text-muted-foreground">
              Pause. Breathe. Restore.
            </span>
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </section>
    </div>
  );
}
