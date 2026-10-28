'use client';

import { createPortal } from 'react-dom';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { LINKS } from '@/data/landingData';

/** Section ids in page order (must match DOM `id` on sections). */
const SCROLL_SECTION_IDS = [
  'hero',
  'features',
  'global-vincitore-nstack-sec',
  'leading-businesses-sec',
  'blog',
  'request-demo-main',
];

const nav = [
  { href: '#hero', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#global-vincitore-nstack-sec', label: 'About' },
  { href: '#leading-businesses-sec', label: 'Testimonial' },
  { href: '#request-demo-main', label: 'Contact Us' },
  { href: '#blog', label: 'Blog' },
  /** Same anchor as Contact; only Contact gets scroll highlight for that section */
  { href: '#request-demo-main', label: 'Download', scrollHighlight: false },
];

function windowScrollTop() {
  return window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;
}

function effectiveScrollTop() {
  return windowScrollTop();
}

function computeActiveHrefFromScroll(headerEl: HTMLElement | null) {
  const h = headerEl?.getBoundingClientRect?.().height ?? 96;
  const marker = h + 16;
  let idx = 0;
  for (let i = 0; i < SCROLL_SECTION_IDS.length; i += 1) {
    const el = document.getElementById(SCROLL_SECTION_IDS[i]);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= marker) idx = i;
  }
  const scrollTop = effectiveScrollTop();
  const doc = document.documentElement;
  const scrollHeight = Math.max(doc.scrollHeight, doc.offsetHeight, document.body?.scrollHeight ?? 0);
  const nearBottom = scrollTop + window.innerHeight >= scrollHeight - 80;
  if (nearBottom) {
    return '#request-demo-main';
  }
  return `#${SCROLL_SECTION_IDS[idx]}`;
}

export function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(80);
  const [activeHref, setActiveHref] = useState('#hero');

  useEffect(() => {
    // Portal to document.body must run after mount (SSR-safe).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional client-only mount for createPortal
    setMounted(true);
    const y = effectiveScrollTop();
    const heroTop = document.getElementById('hero')?.getBoundingClientRect().top ?? 0;
    setScrolled(y >= 30 || heroTop < 12);
  }, []);

  useEffect(() => {
    if (!mounted) return undefined;

    let raf = 0;
    const update = () => {
      raf = 0;
      const y = effectiveScrollTop();
      const heroTop = document.getElementById('hero')?.getBoundingClientRect().top ?? 0;
      const compact = y >= 30 || heroTop < 12;
      setScrolled(compact);
      setActiveHref(computeActiveHrefFromScroll(headerRef.current));
    };
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();

    const scrollOpts: AddEventListenerOptions = { passive: true, capture: true };
    window.addEventListener('scroll', schedule, scrollOpts);
    document.documentElement.addEventListener('scroll', schedule, scrollOpts);
    document.body.addEventListener('scroll', schedule, scrollOpts);
    window.addEventListener('resize', schedule, { passive: true });

    const sectionEls = SCROLL_SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io =
      sectionEls.length > 0
        ? new IntersectionObserver(schedule, {
            root: null,
            threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.35, 0.5, 0.65, 0.8, 1],
          })
        : null;
    sectionEls.forEach((el) => io?.observe(el));

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule, scrollOpts);
      document.documentElement.removeEventListener('scroll', schedule, scrollOpts);
      document.body.removeEventListener('scroll', schedule, scrollOpts);
      window.removeEventListener('resize', schedule);
      io?.disconnect();
    };
  }, [mounted]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;

    const syncHeight = () => {
      setSpacerHeight(Math.round(el.getBoundingClientRect().height));
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open, mounted]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!mounted) return;
    setActiveHref(computeActiveHrefFromScroll(headerRef.current));
  }, [mounted, spacerHeight]);

  const headerEl = (
    <header ref={headerRef} className={`navbar psm-landing-navbar ${scrolled ? 'on-scroll-fixed' : ''}`}>
      <div className="container m-auto">
        <nav className="relative flex flex-row items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <a href={LINKS.home} className="logo">
              <img className="psm-logo-img w-auto" src="/assets/images/logo.svg" alt="The PSM Application Logo" />
            </a>
          </div>
          <div className="ml-auto flex items-center xl:hidden">
            <button
              type="button"
              className="btn-toggle"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            <a
              href={LINKS.signup}
              target="_blank"
              rel="noreferrer"
              title="Free Sign Up"
              className="btn-style2 mobile_btn"
            >
              Free Sign Up
            </a>
          </div>
          <div
            id="mobile-menu"
            className={`main-menu items-center lg:space-x-8 xl:space-x-10 xl:flex ${
              open ? 'psm-nav-menu-open' : 'psm-nav-menu-closed'
            }`}
          >
            <ul className="w-full text-center xl:w-auto">
              {nav.map((item, i) => {
                const highlight = item.scrollHighlight !== false;
                const isActive = highlight && item.href === activeHref;
                return (
                  <li key={`${item.href}-${item.label}-${i}`} className={isActive ? 'active' : ''}>
                    <a href={item.href} title={item.label} className="nav-link" onClick={() => setOpen(false)}>
                      {item.label}
                    </a>
                  </li>
                );
              })}
              <a href={LINKS.login} title="Login" className="btn-style1 mobile_btn xl:hidden">
                Login
              </a>
            </ul>
          </div>
          <div className="ml-3 hidden items-center gap-5 md:flex xl:ml-0">
            <a href={LINKS.login} title="Login" className="btn-style1">
              Login
            </a>
            <a href={LINKS.signup} target="_blank" rel="noreferrer" title="Free Sign Up" className="btn-style2">
              Free Sign Up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );

  return (
    <>
      {mounted && document.body ? createPortal(headerEl, document.body) : null}
      <div className="psm-landing-header-spacer" style={{ height: spacerHeight }} aria-hidden />
    </>
  );
}
