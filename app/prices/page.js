
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Copy,
  Check,
  Send,
  Shield,
  Clock,
  Info,
  Award,
  ArrowRight,
} from "lucide-react";

const TELEGRAM_HANDLE = "@Ruthie_Dora";
const TELEGRAM_URL = "https://t.me/Ruthie_Dora";

const paymentOptions = [
  {
    key: "ethereum",
    title: "Ethereum (ETH)",
    subtitle: "Ethereum payments accepted",
    cta: "Contact for ETH details",
    badge: "Ξ",
  },
  {
    key: "paypal",
    title: "PayPal",
    subtitle: "Quick and secure payment via PayPal",
    cta: "Contact for PayPal details",
    badge: "P",
  },
  {
    key: "bitcoin",
    title: "Bitcoin (BTC)",
    subtitle: "Cryptocurrency payments accepted",
    cta: "Contact for BTC details",
    badge: "₿",
  },
  {
    key: "chime",
    title: "Chime",
    subtitle: "Send payment via Chime",
    cta: "Contact for Chime details",
    badge: "🏦",
  },
  {
    key: "applepay",
    title: "Apple Pay",
    subtitle: "Send payment via Apple Pay",
    cta: "Contact for Apple Pay details",
    badge: "",
  },
];

export default function PricingPage() {
  const [copied, setCopied] = useState(false);

  async function copyTelegram() {
    try {
      await navigator.clipboard.writeText(TELEGRAM_HANDLE);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Page introduction */}
      <section className="relative px-5 pb-12 pt-16 md:px-8 md:pb-16 md:pt-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-secondary/60 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">
            Ruthie Dora Wellness
          </p>

          <h1 className="mt-5 font-serif text-4xl font-normal tracking-tight md:text-6xl">
            Rates &amp; Payment
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-primary" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-foreground/75 md:text-lg">
            Explore the rate card, learn more about the practitioner, and
            choose a convenient way to enquire or arrange payment.
          </p>
        </div>
      </section>

      {/* Original price list image: figures remain unchanged */}
      <section
        aria-labelledby="rate-card-heading"
        className="px-4 pb-16 md:px-8 md:pb-24"
      >
        <div className="mx-auto max-w-5xl">
          <div className="mb-7 text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Service rates
            </p>

            <h2
              id="rate-card-heading"
              className="mt-3 font-serif text-3xl font-normal md:text-4xl"
            >
              Incall &amp; Outcall Price List
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-foreground/65">
              View the original price-list artwork below.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-primary/25 bg-card p-2 shadow-2xl shadow-black/20 md:p-4">
            <Image
              src="/RuthPrice.jpeg"
              alt="Ruthie Dora Wellness price list showing incall and outcall rates and durations"
              width={720}
              height={1600}
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="mx-auto h-auto w-full max-w-3xl rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-foreground/60">
            For other service requests or details, please contact us before
            making a payment.
          </p>
        </div>
      </section>

      {/* Certificate section */}
      <section
        aria-labelledby="credentials-heading"
        className="border-y border-primary/15 bg-card/35 px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
              <Award className="h-6 w-6" aria-hidden="true" />
            </div>

            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Training &amp; credentials
            </p>

            <h2
              id="credentials-heading"
              className="mt-4 font-serif text-3xl font-normal leading-tight md:text-5xl"
            >
              Care grounded in learning and dedication.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/70 md:text-base">
              Explore the certificate artwork provided by Ruthie Dora
              Wellness. It is displayed in its original image format so its
              details and design remain intact.
            </p>

            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-foreground/70">
              <Shield
                className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>
                Contact us with any questions about services, training,
                availability, or booking details.
              </span>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Enquire with us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-primary/30 bg-[#f7f0dc] p-2 shadow-2xl shadow-black/20 md:p-4">
            <Image
              src="/RuthCert.jpeg"
              alt="Ruthie Dora Wellness certificate artwork"
              width={832}
              height={1280}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full rounded-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Payment instructions */}
      <section
        id="payment"
        aria-labelledby="payment-heading"
        className="px-4 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              Booking &amp; payment
            </p>

            <h2
              id="payment-heading"
              className="mt-4 font-serif text-3xl font-normal md:text-5xl"
            >
              Payment &amp; Confirmation
            </h2>

            <div className="mx-auto mt-5 h-px w-24 bg-primary" />

            <p className="mt-5 text-sm leading-7 text-foreground/70 md:text-base">
              After reviewing the rate card, contact us to confirm
              availability and receive the appropriate payment instructions.
              Please verify all details directly before sending payment.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-xs text-foreground/70">
              <Info className="h-4 w-4 text-primary" aria-hidden="true" />
              Reservation is confirmed after payment verification.
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card/75 shadow-xl shadow-black/10">
            <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[1fr_300px] lg:gap-12">
              {/* Telegram contact */}
              <div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <Send className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-foreground/55">
                      Telegram
                    </p>

                    <h3 className="mt-1 font-serif text-2xl font-normal">
                      Message to enquire and confirm
                    </h3>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-foreground/55">
                    Telegram handle
                  </p>

                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="break-all text-lg font-semibold">
                      {TELEGRAM_HANDLE}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={copyTelegram}
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:bg-card"
                      >
                        {copied ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                        {copied ? "Copied" : "Copy"}
                      </button>

                      <a
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                      >
                        <Send className="h-4 w-4" />
                        Open Telegram
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <Step
                    icon={<Clock className="h-5 w-5" />}
                    title="Choose a duration"
                    text="Review the original rate card and decide which duration suits you."
                  />

                  <Step
                    icon={<Shield className="h-5 w-5" />}
                    title="Confirm details"
                    text="Contact us to confirm availability and the correct payment details."
                  />

                  <Step
                    icon={<Check className="h-5 w-5" />}
                    title="Verify payment"
                    text="Keep your confirmation and verify the booking directly."
                  />
                </div>
              </div>

            </div>

            <div className="border-t border-border px-6 py-5 md:px-10">
              <p className="text-sm font-medium">Reservation policy</p>

              <p className="mt-2 text-sm leading-6 text-foreground/65">
                Reservations are confirmed after payment verification. Please
                communicate respectfully and confirm all details before
                paying.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Contact
                </Link>

                <Link
                  href="/termsandconditions"
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-background/60"
                >
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing alternative payment methods */}
      <section
        aria-labelledby="other-payments-heading"
        className="border-t border-primary/15 bg-card/25 px-4 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary">
              More payment options
            </p>

            <h2
              id="other-payments-heading"
              className="mt-4 font-serif text-3xl font-normal md:text-4xl"
            >
              Choose a convenient payment method
            </h2>

            <p className="mt-4 text-sm leading-6 text-foreground/65">
              Select a method to contact us for the correct details. Payment
              addresses and account details are not displayed publicly.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paymentOptions.map((method) => (
              <Link
                key={method.key}
                href={`/contact?payment=${encodeURIComponent(method.title)}`}
                aria-label={`Contact us about ${method.title} payment`}
                className="group rounded-3xl border border-border bg-card/75 p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-black/10"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-2xl text-primary transition group-hover:scale-105">
                  {method.badge}
                </span>

                <h3 className="mt-5 font-serif text-xl">{method.title}</h3>

                <p className="mt-2 text-sm leading-6 text-foreground/65">
                  {method.subtitle}
                </p>

                <p className="mt-4 text-sm font-semibold text-primary">
                  {method.cta}
                </p>
              </Link>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-3xl rounded-2xl border border-border bg-card/60 p-5 text-center text-xs leading-6 text-foreground/60">
            For your safety, confirm payment details directly with Ruthie Dora
            Wellness before completing a transaction.
          </p>
        </div>
      </section>
    </main>
  );
}

function Step({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-border bg-background/35 p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
        {icon}
      </span>

      <h3 className="mt-4 font-serif text-lg">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-foreground/65">{text}</p>
    </div>
  );
}
