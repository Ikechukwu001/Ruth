'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const images = useMemo(
    () => ['/RuthOne.jpeg', '/RuthTwo.jpeg', '/RuthThree.jpeg'],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 5600);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-[90svh] w-full overflow-hidden bg-[#172D26] text-[#F7F3EA]">

      {/* Background image carousel */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              index === currentImageIndex
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            <Image
              src={src}
              alt="Ruthie Dora Wellness massage and relaxation experience"
              fill
              priority={index === 0}
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Forest-green overlays for readable, atmospheric contrast */}
      <div className="absolute inset-0 bg-[#172D26]/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#172D26]/95 via-[#172D26]/75 to-[#172D26]/20" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#172D26]/90 via-transparent to-[#172D26]/30" />

      {/* Subtle champagne glow */}
      <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-[#E8D8B5]/10 blur-[100px]" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-[1400px] items-center px-6 py-24 sm:px-10 lg:px-16">

        <div className="max-w-3xl">

          {/* Brand label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-[#E8D8B5]" />

            <p className="font-['Nunito_Sans'] text-xs font-semibold uppercase tracking-[0.28em] text-[#E8D8B5] sm:text-sm">
              @RuthieDoraWellness
            </p>
          </div>

          {/* Main headline */}
          <h1 className="font-['Lora'] text-4xl font-normal leading-[1.2] tracking-[-0.035em] text-[#F7F3EA] sm:text-5xl md:text-6xl lg:text-7xl">
            Come back to
            <span className="mt-1 block italic text-[#E8D8B5]">
              yourself.
            </span>
          </h1>

          {/* Supporting copy */}
          <p className="mt-7 max-w-xl font-['Nunito_Sans'] text-base leading-8 text-[#F7F3EA]/85 sm:text-lg">
            Slow down, release the tension, and make room for a little more
            peace. Discover a thoughtful wellness experience created to help
            your body relax and your mind feel renewed.
          </p>

          {/* Brand values */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-['Nunito_Sans'] text-xs tracking-wide text-[#F7F3EA]/75 sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8D8B5]" />
              Personalised care
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-[#E8D8B5]/50 sm:block" />

            <span>Peaceful surroundings</span>

            <span className="hidden h-1 w-1 rounded-full bg-[#E8D8B5]/50 sm:block" />

            <span>Time for yourself</span>
          </div>

          {/* Call-to-action buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Link
              href="/prices"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#E8D8B5] px-8 py-4 font-['Nunito_Sans'] text-sm font-bold text-[#172D26] transition duration-300 hover:bg-[#F7F3EA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D8B5]"
            >
              Book Your Session

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#F7F3EA]/40 bg-[#172D26]/20 px-8 py-4 font-['Nunito_Sans'] text-sm font-semibold text-[#F7F3EA] backdrop-blur-sm transition duration-300 hover:border-[#E8D8B5] hover:bg-[#293F35]/80 hover:text-[#E8D8B5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D8B5]"
            >
              Explore Treatments
            </Link>

          </div>

          {/* Carousel indicators */}
          <div
            className="mt-14 flex items-center gap-3"
            aria-label="Hero image navigation"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Show hero image ${index + 1}`}
                aria-current={
                  index === currentImageIndex ? 'true' : undefined
                }
                className={`h-1 rounded-full transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8D8B5] ${
                  index === currentImageIndex
                    ? 'w-12 bg-[#E8D8B5]'
                    : 'w-6 bg-[#F7F3EA]/45 hover:bg-[#F7F3EA]/80'
                }`}
              />
            ))}

            <span className="ml-2 font-['Nunito_Sans'] text-xs tracking-[0.2em] text-[#F7F3EA]/70">
              0{currentImageIndex + 1} / 0{images.length}
            </span>
          </div>

        </div>
      </div>

      {/* Bottom scroll cue */}
      <div className="pointer-events-none absolute bottom-7 right-6 z-10 hidden flex-col items-center gap-3 sm:flex lg:right-12">
        <span className="font-['Nunito_Sans'] text-[10px] uppercase tracking-[0.3em] text-[#E8D8B5]/80 [writing-mode:vertical-rl]">
          Discover wellness
        </span>

        <span className="h-12 w-px bg-gradient-to-b from-[#E8D8B5]/80 to-transparent" />
      </div>

    </section>
  );
}