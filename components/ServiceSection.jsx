
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  Heart,
  Feather,
  ArrowRight,
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Nuru Ritual',
      description:
        'A silky full-body session designed for deep relaxation, warmth, and a slow reset.',
      image: '/RuthSix.jpeg',
      icon: Sparkles,
      tag: 'Signature',
      number: '01',
    },
    {
      id: 2,
      title: 'Deep Release',
      description:
        'Focused pressure and pacing to ease tension, soften knots, and restore comfort.',
      image: '/RuthSeven.jpeg',
      icon: Zap,
      tag: 'Restorative',
      number: '02',
    },
    {
      id: 3,
      title: 'Full Body Serenity',
      description:
        'A head-to-toe flow to encourage relaxation and help you fully unwind.',
      image: '/RuthEight.jpeg',
      icon: Heart,
      tag: 'Classic',
      number: '03',
    },
    {
      id: 4,
      title: 'Erotic Massage',
      description:
        'A private experience centred on communication, personal boundaries, and comfort.',
      image: '/RuthNine.jpeg',
      icon: Feather,
      tag: 'Private',
      number: '04',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 text-foreground md:py-32">

      {/* Subtle background atmosphere */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-secondary/80 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* Section introduction */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

          <div className="max-w-3xl">

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />

              <p className="font-sans text-xs font-bold uppercase tracking-[0.26em] text-accent">
                Discover your moment
              </p>
            </div>

            <h2 className="mt-6 font-serif text-4xl font-normal leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Wellness, with
              <span className="block italic text-accent">
                intention.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl font-sans text-base leading-8 text-muted-foreground sm:text-lg">
              Explore thoughtfully presented experiences designed to
              help you slow down, release tension, and reconnect with
              your sense of wellbeing.
            </p>

          </div>

          <Link
            href="/services"
            className="group inline-flex min-h-12 shrink-0 items-center gap-3 self-start rounded-full border border-border px-6 py-3 font-sans text-sm font-semibold text-foreground transition duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:self-auto"
          >
            Explore all services

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>

        {/* Editorial service cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-5">

          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article
                key={service.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-secondary/40 transition duration-500 hover:-translate-y-1 hover:border-accent/40 hover:bg-secondary/70"
              >

                {/* Service photography */}
                <div className="relative h-[300px] overflow-hidden bg-secondary sm:h-[320px] lg:h-[290px]">

                  <Image
                    src={service.image}
                    alt={`${service.title} wellness experience`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#172D26]/90 via-[#172D26]/10 to-[#172D26]/10" />

                  {/* Image details */}
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                    <span className="rounded-full border border-[#F7F3EA]/25 bg-[#172D26]/65 px-3 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7F3EA] backdrop-blur-md">
                      {service.tag}
                    </span>

                    <span className="font-sans text-xs tracking-widest text-[#F7F3EA]/80">
                      {service.number}
                    </span>

                  </div>

                  {/* Icon */}
                  <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#E8D8B5]/40 bg-[#172D26]/65 text-[#E8D8B5] backdrop-blur-md transition duration-300 group-hover:bg-[#E8D8B5] group-hover:text-[#172D26]">
                    <ServiceIcon
                      className="h-5 w-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                </div>

                {/* Card content */}
                <div className="flex flex-1 flex-col p-6">

                  <h3 className="font-serif text-2xl font-normal leading-snug text-foreground">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 font-sans text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t border-border pt-5">

                    <Link
                      href="/services"
                      aria-label={`Explore ${service.title}`}
                      className="group/link inline-flex min-h-8 items-center gap-2 font-sans text-sm font-bold text-accent transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    >
                      Discover experience

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        {/* Reservation feature panel */}
        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-secondary/60 md:mt-24">

          {/* Decorative accent */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border border-accent/10" />
          <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-accent/10" />

          <div className="relative grid grid-cols-1 gap-10 p-7 sm:p-10 md:grid-cols-12 md:items-center md:gap-12 lg:p-14">

            {/* Reservation copy */}
            <div className="md:col-span-7">

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />

                <p className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Your time, your way
                </p>
              </div>

              <h3 className="mt-5 max-w-xl font-serif text-3xl font-normal leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Make time for
                <span className="block italic text-accent">
                  yourself.
                </span>
              </h3>

              <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                Your time to unwind deserves thoughtful attention.
                Explore our rates, find an experience that suits you,
                and get in touch if you have questions before booking.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/prices"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3 font-sans text-sm font-bold text-accent-foreground transition duration-300 hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  View our rates

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 py-3 font-sans text-sm font-semibold text-foreground transition duration-300 hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Get in touch
                </Link>

              </div>

            </div>

            {/* What to expect */}
            <div className="md:col-span-5">

              <div className="rounded-2xl border border-border bg-background/60 p-6 sm:p-7">

                <p className="font-serif text-2xl text-foreground">
                  Your wellbeing matters.
                </p>

                <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
                  Every experience begins with care and consideration.
                </p>

                <ul className="mt-6 space-y-5">

                  {[
                    'A clean, comfortable environment',
                    'Attention to your preferences',
                    'Respect for personal boundaries',
                    'Time to relax without feeling rushed',
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

            </div>

          </div>
        </div>

        {/* Closing brand signature */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-serif text-xl italic text-foreground/80">
            Pause. Breathe. Restore.
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            @RuthieDoraWellness
          </p>

        </div>

      </div>
    </section>
  );
}
