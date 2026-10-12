
'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  Heart,
  Feather,
  Flower2,
  Waves,
  Moon,
  Leaf,
  ArrowRight,
  Check,
  Clock,
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Nuru Ritual',
    category: 'Signature experience',
    description:
      'A warm, silky full-body experience designed for deep relaxation and immersive sensation in a private, tranquil setting.',
    image: '/RuthSix.jpeg',
    icon: Sparkles,
    benefits: [
      'Deep physical relaxation',
      'Heightened sensory awareness',
      'Warm oil application',
      'Slow, immersive pacing',
    ],
    duration: '60–90 minutes',
  },
  {
    id: 2,
    title: 'Deep Release',
    category: 'Restorative care',
    description:
      'An intentional massage experience focused on easing everyday tension while maintaining a calm, comfortable pace.',
    image: '/RuthSeven.jpeg',
    icon: Zap,
    benefits: [
      'Focused attention on muscle tension',
      'Support for flexibility and movement',
      'A personalized pressure level',
      'Restorative, unhurried pacing',
    ],
    duration: '60–120 minutes',
  },
  {
    id: 3,
    title: 'Full Body Serenity',
    category: 'Classic experience',
    description:
      'A considered head-to-toe experience created to help you slow down, settle your thoughts, and reconnect with a sense of calm.',
    image: '/RuthEight.jpeg',
    icon: Heart,
    benefits: [
      'Relaxation from head to toe',
      'A quieter moment away from daily stress',
      'A smooth, balanced flow',
      'Personalized session pacing',
    ],
    duration: '90–120 minutes',
  },
  {
    id: 4,
    title: 'Erotic Massage',
    category: 'Private experience',
    description:
      'A private, personalized experience centred on communication, mutual respect, personal boundaries, and comfort.',
    image: '/RuthNine.jpeg',
    icon: Feather,
    benefits: [
      'A discreet atmosphere',
      'Clear communication',
      'Respect for personal boundaries',
      'An agreed and comfortable pace',
    ],
    duration: '60–90 minutes',
  },
  {
    id: 5,
    title: 'Aromatherapy Escape',
    category: 'Sensory relaxation',
    description:
      'A calming experience inspired by gentle aromas and a peaceful atmosphere, designed to make time for rest.',
    image: '/RuthSix.jpeg',
    icon: Flower2,
    benefits: [
      'A soothing sensory atmosphere',
      'A relaxed, unhurried experience',
      'Personal scent preferences',
      'Time to pause and unwind',
    ],
    duration: '60–90 minutes',
  },
  {
    id: 6,
    title: 'Warm Oil Relaxation',
    category: 'Gentle restoration',
    description:
      'A smooth, flowing massage experience using warm oil and thoughtful pacing to encourage physical relaxation.',
    image: '/RuthTen.jpeg',
    icon: Waves,
    benefits: [
      'Warm oil application',
      'Gentle, flowing movements',
      'Adjustable pressure',
      'A comfortable pace',
    ],
    duration: '60–90 minutes',
  },
  {
    id: 7,
    title: 'Sensual Relaxation Massage',
    category: 'Slow-down ritual',
    description:
      "A soothing and intimate massage experience designed to enhance relaxation, elevate mood, and provide a gentle, comforting touch.",
    image: '/RuthEleven.jpeg',
    icon: Moon,
    benefits: [
      'A peaceful atmosphere',
      'Unhurried session pacing',
      'Personalized comfort',
      'A dedicated moment for yourself',
    ],
    duration: '60–90 minutes',
  },
  {
    id: 8,
    title: 'Botanical Balance',
    category: 'Wellness ritual',
    description:
      'A thoughtfully paced wellness experience inspired by simplicity, comfort, and a more grounded approach to relaxation.',
    image: '/RuthTwelve.jpeg',
    icon: Leaf,
    benefits: [
      'A calm, welcoming environment',
      'Personalized session preferences',
      'Thoughtful attention to comfort',
      'Time to relax and reset',
    ],
    duration: '60–90 minutes',
  },
];

const expectations = [
  {
    number: '01',
    title: 'Before your session',
    description:
      'We will confirm your preferred time, chosen session, and comfort preferences before your appointment.',
  },
  {
    number: '02',
    title: 'During your session',
    description:
      'Your comfort and communication matter. You can discuss pressure, preferences, and boundaries throughout.',
  },
  {
    number: '03',
    title: 'After your session',
    description:
      'Give yourself a moment to settle before returning to your day. Take your time and rest as needed.',
  },
  {
    number: '04',
    title: 'Respect comes first',
    description:
      'Clear communication, personal boundaries, and respectful conduct are important before, during, and after every appointment.',
  },
];

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden bg-background text-foreground">

      {/* Editorial hero */}
      <section className="relative border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full border border-accent/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-12 h-72 w-72 rounded-full border border-accent/10"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:px-16 lg:pb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-accent" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-accent sm:text-xs">
                The session collection
              </p>
            </div>

            <h1 className="mt-6 max-w-4xl font-serif text-4xl font-normal leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Find your own
              <span className="block italic text-accent">
                moment of calm.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
              Explore a collection of massage and wellness experiences
              designed around relaxation, personal comfort, and thoughtful
              care. Choose the session that feels right for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/prices"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
              >
                Explore rates
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-6 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-secondary"
              >
                Ask about a session
              </Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 border-t border-border pt-6 sm:grid-cols-3 sm:gap-6">
            {[
              'Thoughtful, personalized care',
              'Your comfort and boundaries',
              'Appointments by arrangement',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="h-4 w-4 shrink-0 text-accent" />
                <span className="font-sans text-xs leading-5 text-muted-foreground sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services introduction */}
      <section className="mx-auto max-w-[1400px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
              Explore the collection
            </p>

            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
              Wellness, with intention.
            </h2>
          </div>

          <p className="max-w-md font-sans text-sm leading-6 text-muted-foreground">
            Every experience has its own character. Browse the details,
            duration, and features to find the right fit.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-8 sm:pb-24 lg:px-16">
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={service.id}
                className="grid grid-cols-1 items-center gap-7 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-20"
              >
                {/* Image */}
                <div className={reverse ? 'md:order-2' : ''}>
                  <div className="group relative isolate">
                    <div
                      aria-hidden="true"
                      className={`absolute -inset-2 rounded-[1.75rem] border border-accent/15 ${
                        reverse
                          ? 'rotate-2'
                          : '-rotate-2'
                      }`}
                    />

                    <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.5rem] border border-border bg-secondary sm:aspect-[5/4.5]">
                      <Image
                        src={service.image}
                        alt={`${service.title} wellness session`}
                        fill
                        sizes="(max-width: 767px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                        <div>
                          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                            Experience {String(service.id).padStart(2, '0')}
                          </p>

                          <p className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                            {service.title}
                          </p>
                        </div>

                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 bg-black/20 text-white backdrop-blur-sm">
                          <ServiceIcon className="h-5 w-5" strokeWidth={1.4} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={reverse ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-accent" />
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      {service.category}
                    </p>
                  </div>

                  <h3 className="mt-4 font-serif text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.65rem]">
                    {service.title}
                  </h3>

                  <p className="mt-5 font-sans text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                    {service.description}
                  </p>

                  <div className="mt-7 border-t border-border pt-5">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Experience details
                    </p>

                    <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-2.5 font-sans text-xs leading-5 text-muted-foreground sm:text-sm"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <Clock className="h-4 w-4 text-accent" />
                    <span className="font-sans text-sm text-muted-foreground">
                      Duration:
                    </span>
                    <span className="font-sans text-sm font-semibold text-foreground">
                      {service.duration}
                    </span>
                  </div>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
                    >
                      Enquire about this session
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href="/prices"
                      className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-5 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-secondary"
                    >
                      View rates
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* What to expect */}
      <section className="border-y border-border bg-secondary/35">
        <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                  Your experience
                </p>
              </div>

              <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl">
                Feel comfortable at every step.
              </h2>

              <p className="mt-5 font-sans text-sm leading-7 text-muted-foreground">
                Knowing what to expect makes it easier to relax. Here is
                how we approach each appointment.
              </p>

              <Link
                href="/termsandconditions"
                className="group mt-7 inline-flex items-center gap-2 font-sans text-sm text-accent transition hover:text-foreground"
              >
                Read our policies
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                {expectations.map((item, index) => (
                  <div
                    key={item.number}
                    className={`border-border py-6 ${
                      index < 2 ? 'border-b' : ''
                    } ${index >= 2 ? 'sm:border-t' : ''}`}
                  >
                    <p className="font-sans text-xs tracking-[0.18em] text-accent">
                      {item.number}
                    </p>

                    <h3 className="mt-3 font-serif text-xl text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-sans text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing call to action */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 text-center sm:px-8 sm:py-24 lg:px-16">
        <Leaf className="mx-auto h-7 w-7 text-accent" strokeWidth={1.3} />

        <p className="mt-5 font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          @RuthieDoraWellness
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl">
          Your time. Your pace.
          <span className="block italic text-accent">
            Your moment to unwind.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-7 text-muted-foreground">
          Have questions about a particular experience? Get in touch to
          discuss your preferences before making a reservation.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/prices"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
          >
            Explore rates
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-secondary"
          >
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}
