
import Link from 'next/link';
import { ArrowRight, Leaf, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  const exploreLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Sessions' },
    { href: '/prices', label: 'Rates & Booking' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/review', label: 'Guest Reviews' },
    { href: '/contact', label: 'Contact' },
    { href: '/termsandconditions', label: 'Policies & Terms' },
  ];

  return (
    <footer className="border-t border-border bg-background">

      {/* Booking callout */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full border border-accent/10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full border border-accent/10"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-accent" />
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                  Your time to unwind
                </p>
              </div>

              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Make room for
                <span className="block italic text-accent">
                  a little more peace.
                </span>
              </h2>

              <p className="mt-4 max-w-xl font-sans text-sm leading-7 text-muted-foreground sm:text-base">
                Discover a more considered approach to relaxation, personal
                comfort, and wellbeing. Your next moment of calm starts here.
              </p>

              <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                By appointment · Respectful care · Your comfort matters
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[220px]">
              <Link
                href="/prices"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-accent px-7 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
              >
                Explore rates & booking
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-7 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-background"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main footer */}
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand and philosophy */}
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              aria-label="Ruthie Dora Wellness home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-secondary text-accent transition group-hover:border-accent">
                <Leaf className="h-5 w-5" strokeWidth={1.4} />
              </span>

              <span>
                <span className="block font-serif text-xl tracking-tight text-foreground sm:text-2xl">
                  Ruthie Dora
                </span>
                <span className="mt-1 block font-sans text-[10px] uppercase tracking-[0.25em] text-accent">
                  Wellness & Massage
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md font-sans text-sm leading-7 text-muted-foreground">
              A welcoming wellness experience centred on relaxation,
              thoughtful care, and personal comfort. Every session should
              begin with clear communication and respect for individual
              boundaries.
            </p>

            <p className="mt-5 font-serif text-lg italic text-foreground/90">
              Pause. Breathe. Restore.
            </p>

            <p className="mt-2 font-sans text-xs tracking-wide text-muted-foreground">
              @RuthieDoraWellness
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Thoughtful care', 'Personal comfort', 'Respectful service'].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3 py-2 font-sans text-[11px] text-muted-foreground"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Explore links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 font-sans text-sm text-muted-foreground transition hover:text-foreground"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="lg:col-span-4">
            <h3 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Get in touch
            </h3>

            <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-muted-foreground">
              Have a question or need help choosing a session? Reach out
              directly or send a message through our contact page.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:+13032577383"
                className="group flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-4 transition hover:border-accent/40 hover:bg-secondary/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Phone className="h-4 w-4" strokeWidth={1.6} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Phone
                  </span>
                  <span className="mt-1 block break-words font-sans text-sm text-foreground transition group-hover:text-accent">
                    +1 (303) 257-7383
                  </span>
                </span>
              </a>

              <a
                href="mailto:ruthiedora008@gmail.com"
                className="group flex items-start gap-4 rounded-2xl border border-border bg-secondary/30 p-4 transition hover:border-accent/40 hover:bg-secondary/60"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-accent">
                  <Mail className="h-4 w-4" strokeWidth={1.6} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-sans text-sm text-foreground transition group-hover:text-accent">
                    ruthiedora008@gmail.com
                  </span>
                </span>
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-accent transition hover:text-foreground"
            >
              Send an enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:mt-16 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-xs leading-5 text-muted-foreground">
            © {currentYear} @RuthieDoraWellness. All rights reserved.
          </p>

          <Link
            href="/termsandconditions"
            className="font-sans text-xs text-muted-foreground transition hover:text-accent"
          >
            Policies & Terms
          </Link>

          <p className="font-serif text-sm italic text-muted-foreground">
            A gentler way to make time for yourself.
          </p>
        </div>
      </div>
    </footer>
  );
}
