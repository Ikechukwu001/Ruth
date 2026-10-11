
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function KnowMe() {
  const pillars = [
    {
      number: '01',
      title: 'Thoughtful care',
      description:
        'Every detail is considered to create a welcoming, comfortable experience.',
    },
    {
      number: '02',
      title: 'Your comfort',
      description:
        'Your preferences, boundaries, and comfort guide every session.',
    },
    {
      number: '03',
      title: 'Time to restore',
      description:
        'A chance to slow down, release tension, and reconnect with yourself.',
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24 text-foreground md:py-32 lg:py-36">

      {/* Atmospheric background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/80 blur-[100px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">

          {/* LEFT — Editorial image composition */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            {/* Main image */}
            <div className="relative h-[400px] overflow-hidden rounded-t-[11rem] rounded-b-2xl border border-border bg-secondary sm:h-[520px] md:rounded-t-[14rem]">
              <Image
                src="/RuthFour.jpeg"
                alt="A peaceful wellness environment at Ruthie Dora Wellness"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority={false}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172D26]/45 via-transparent to-[#172D26]/10" />
            </div>

            {/* Floating secondary image */}
            <div className="absolute -bottom-8 -right-2 h-36 w-36 overflow-hidden rounded-2xl border-4 border-background bg-secondary shadow-2xl sm:-right-8 sm:h-52 sm:w-52 md:-bottom-10 md:h-56 md:w-56">
              <Image
                src="/RuthFive.jpeg"
                alt="Thoughtful details that create a calming wellness experience"
                fill
                sizes="(max-width: 640px) 144px, 224px"
                className="object-cover"
              />
            </div>

            {/* Decorative caption */}
            <div className="absolute bottom-6 left-5 rounded-full border border-[#F7F3EA]/20 bg-[#172D26]/75 px-4 py-2 backdrop-blur-md sm:bottom-8 sm:left-8">
              <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#F7F3EA] sm:text-xs">
                A moment for yourself
              </p>
            </div>

            {/* Decorative accent */}
            <div className="absolute -left-3 top-16 hidden h-20 w-px bg-accent sm:block" />

          </div>

          {/* RIGHT — Brand philosophy */}
          <div className="pt-4 lg:pt-0">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />

              <p className="font-sans text-xs font-bold uppercase tracking-[0.26em] text-accent">
                The philosophy
              </p>
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-2xl font-serif text-4xl font-normal leading-[1.2] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Make space for
              <span className="mt-1 block italic text-accent">
                feeling better.
              </span>
            </h2>

            {/* Intro */}
            <p className="mt-7 max-w-xl font-sans text-base leading-8 text-foreground/80 sm:text-lg">
              At @RuthieDoraWellness, we believe that caring for yourself
              should feel natural, unhurried, and personal. Our approach
              centres on relaxation, thoughtful attention, and the simple
              comfort of taking time out.
            </p>

            <p className="mt-5 max-w-xl font-sans text-sm leading-7 text-muted-foreground sm:text-base">
              Whether you are looking to ease everyday tension or simply
              enjoy a quieter moment, your experience begins with listening
              to your needs and respecting your comfort throughout.
            </p>

            {/* Brand pillars */}
            <div className="mt-9 border-t border-border">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="grid grid-cols-[42px_1fr] gap-4 border-b border-border py-5 sm:grid-cols-[52px_1fr] sm:gap-5"
                >
                  <span className="pt-1 font-sans text-xs tracking-widest text-accent">
                    {pillar.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-xl text-foreground sm:text-2xl">
                      {pillar.title}
                    </h3>

                    <p className="mt-2 max-w-md font-sans text-sm leading-6 text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-7">

              <Link
                href="/services"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-sans text-sm font-bold text-accent-foreground transition-colors duration-300 hover:bg-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Explore our services

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/termsandconditions"
                className="font-sans text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                Our policies
              </Link>

            </div>

          </div>
        </div>

        {/* Closing brand note */}
        <div className="mt-24 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl italic text-foreground/80">
            Rest is part of your wellbeing.
          </p>

          <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            @RuthieDoraWellness
          </p>
        </div>

      </div>
    </section>
  );
}
