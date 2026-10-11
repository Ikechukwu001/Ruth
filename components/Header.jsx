
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Leaf, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((open) => !open);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Sessions' },
    { href: '/prices', label: 'Rates' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/review', label: 'Reviews' },
    { href: '/contact', label: 'Contact' },
    { href: '/termsandconditions', label: 'Policies' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const desktopLinks = navLinks.slice(0, 6);

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* Slim brand note */}
      <div className="hidden border-b border-border/70 bg-secondary/80 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 lg:px-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            A considered approach to rest and wellbeing
          </p>

          <p className="font-sans text-[10px] tracking-[0.12em] text-muted-foreground">
            By appointment · Your time, your pace
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-border/80 bg-background/90 backdrop-blur-2xl">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-16">
          <div className="flex h-[76px] items-center justify-between gap-4 sm:h-[86px]">

            {/* Brand */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Ruthie Dora Wellness home"
              className="group flex min-w-0 items-center gap-3"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-secondary/70 text-accent transition duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-background sm:h-12 sm:w-12">
                <Leaf className="h-5 w-5" strokeWidth={1.4} />
              </span>

              <span className="flex min-w-0 flex-col">
                <span className="font-serif text-lg font-medium leading-tight tracking-tight text-foreground sm:text-xl">
                  Ruthie Dora
                </span>

                <span className="mt-1 font-sans text-[9px] uppercase tracking-[0.25em] text-accent sm:text-[10px] sm:tracking-[0.3em]">
                  Wellness & Massage
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-5 xl:gap-7 lg:flex"
            >
              {desktopLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={`group relative whitespace-nowrap py-2 font-sans text-[13px] transition-colors duration-200 ${
                      active
                        ? 'font-semibold text-accent'
                        : 'text-foreground/75 hover:text-foreground'
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}

              <Link
                href="/prices"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-sans text-xs font-bold text-accent-foreground transition-colors duration-300 hover:bg-foreground"
              >
                Book a session

                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </nav>

            {/* Mobile menu control */}
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex min-h-11 items-center gap-3 rounded-full border border-border bg-secondary/50 px-4 text-foreground transition hover:border-accent/60 hover:bg-secondary lg:hidden"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {isMenuOpen ? 'Close' : 'Menu'}
              </span>

              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <span className="flex w-4 flex-col gap-[5px]" aria-hidden="true">
                  <span className="h-px w-4 bg-foreground" />
                  <span className="h-px w-3 bg-accent" />
                </span>
              )}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 bottom-0 top-[76px] z-50 overflow-y-auto bg-background lg:hidden sm:top-[86px]"
        >
          <div className="mx-auto flex min-h-full max-w-xl flex-col px-5 pb-10 pt-7 sm:px-8">

            {/* Intro */}
            <div className="mb-7 border-b border-border pb-6">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
                Welcome to your pause
              </p>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground">
                Make room for
                <span className="block italic text-accent">feeling better.</span>
              </h2>

              <p className="mt-3 max-w-sm font-sans text-sm leading-6 text-muted-foreground">
                Explore our sessions, discover your options, and take a
                little time for yourself.
              </p>
            </div>

            {/* Navigation links */}
            <nav aria-label="Mobile navigation" className="grid grid-cols-2 gap-3">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={active ? 'page' : undefined}
                    className={`flex min-h-[58px] items-center justify-between gap-2 rounded-2xl border px-4 py-3 font-sans text-sm transition-colors ${
                      active
                        ? 'border-accent/50 bg-secondary text-accent'
                        : 'border-border bg-secondary/30 text-foreground hover:border-accent/40 hover:bg-secondary/70'
                    }`}
                  >
                    <span>{link.label}</span>

                    <span className="text-[10px] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Primary actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/prices"
                onClick={closeMenu}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 font-sans text-sm font-bold text-accent-foreground transition hover:bg-foreground"
              >
                Explore rates & book

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border px-5 py-3 font-sans text-sm text-foreground transition hover:border-accent/50 hover:bg-secondary"
              >
                Get in touch
              </Link>
            </div>

            {/* Brand footer */}
            <div className="mt-auto flex items-center justify-between gap-4 pt-10">
              <div>
                <p className="font-serif text-lg italic text-foreground">
                  Pause. Breathe. Restore.
                </p>

                <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  @RuthieDoraWellness
                </p>
              </div>

              <Leaf className="h-6 w-6 shrink-0 text-accent/70" strokeWidth={1.2} />
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
