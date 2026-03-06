"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Market = {
  name: string;
  summary: string;
  detail: string;
  image: string;
  href: string;
};

const markets: Market[] = [
  {
    name: "UAE",
    summary: "Global capital meets strategic urban growth",
    detail:
      "From branded residences to waterfront towers, UAE offers scale, liquidity, and premium city living for globally mobile buyers.",
    image:
      "/images/market-uae.svg",
    href: "#consultation",
  },
  {
    name: "Greece",
    summary: "Mediterranean elegance with long-horizon value",
    detail:
      "Curated coastal and city assets for buyers balancing lifestyle quality, European access, and thoughtful long-term positioning.",
    image:
      "/images/market-greece.svg",
    href: "#consultation",
  },
  {
    name: "Thailand",
    summary: "Resort-grade living with tropical sophistication",
    detail:
      "Modern villas and premium residences selected for second-home comfort, remote ownership confidence, and leisure-led living.",
    image:
      "/images/market-thailand.svg",
    href: "#consultation",
  },
];

const opportunities = [
  {
    title: "Skyline Signature Residence",
    location: "Dubai Marina, UAE",
    tag: "Urban Wealth",
    note: "For buyers prioritizing premium rental demand and modern city prestige.",
  },
  {
    title: "Aegean Hillside Villa",
    location: "Paros, Greece",
    tag: "Lifestyle + Legacy",
    note: "For clients seeking architectural character, sea views, and seasonal flexibility.",
  },
  {
    title: "Private Pool Retreat",
    location: "Phuket, Thailand",
    tag: "Second Home",
    note: "For families and investors balancing personal use with selective hospitality potential.",
  },
];

const insights = [
  {
    title: "How to choose between income yield and lifestyle value",
    category: "Strategy",
  },
  {
    title: "Remote purchase readiness: legal, banking, and execution",
    category: "Guidance",
  },
  {
    title: "UAE, Greece, or Thailand: matching market to buyer profile",
    category: "Market Brief",
  },
];

const navItems = ["Markets", "Approach", "Opportunities", "Insights"];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[color-mix(in_srgb,var(--deep-green)_92%,black)]/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="#" className="flex items-center gap-2" aria-label="Lion & Land home">
            <span className="text-xl font-semibold tracking-[0.2em] text-[var(--gold-soft)]">L&L</span>
            <span className="text-sm uppercase tracking-[0.25em] text-white/90">Lion & Land</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm tracking-wide text-white/70 transition hover:text-[var(--gold-soft)]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#consultation"
              className="rounded-full border border-[var(--gold)] px-5 py-2 text-sm font-medium text-[var(--gold-soft)] transition hover:bg-[var(--gold)] hover:text-[var(--deep-green)]"
            >
              Book Consultation
            </a>
          </div>

          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="text-sm uppercase tracking-[0.2em] text-white">Menu</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm tracking-wider text-white/80"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#consultation"
                className="mt-2 w-fit rounded-full border border-[var(--gold)] px-4 py-2 text-xs uppercase tracking-widest text-[var(--gold-soft)]"
                onClick={() => setMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/hero-uae.svg"
              alt="Luxury skyline at golden hour"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,22,16,0.93)] via-[rgba(9,22,16,0.78)] to-[rgba(9,22,16,0.2)]" />
          </div>

          <div className="mx-auto flex min-h-[86vh] w-full max-w-7xl items-end px-6 pb-16 pt-28 lg:px-10 lg:pb-24">
            <div className="max-w-3xl text-white">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">International Real Estate Advisory</p>
              <h1 className="text-5xl leading-[0.95] font-semibold sm:text-6xl lg:text-7xl">
                Acquire property abroad with precision, clarity, and calm confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/82 sm:text-lg">
                Lion & Land guides serious buyers through strategic market selection, curated opportunities, and end-to-end execution across the UAE, Greece, and Thailand.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="rounded-full bg-[var(--gold)] px-7 py-3 text-sm font-semibold uppercase tracking-widest text-[var(--deep-green)] transition hover:bg-[var(--gold-soft)]"
                >
                  Start with a Private Consultation
                </a>
                <a
                  href="#markets"
                  className="rounded-full border border-white/40 px-7 py-3 text-sm uppercase tracking-widest text-white transition hover:border-[var(--gold-soft)] hover:text-[var(--gold-soft)]"
                >
                  Explore Markets
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Core Markets</p>
              <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">Three markets. Distinct pathways. One strategic partner.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
              We help you choose with intention, not noise—matching each geography to your investment profile, lifestyle priorities, and execution timeline.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {markets.map((market) => (
              <a
                key={market.name}
                href={market.href}
                className="group overflow-hidden rounded-3xl border border-white bg-[var(--card)] shadow-[0_18px_50px_rgba(15,35,23,0.08)] transition hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={market.image}
                    alt={`${market.name} luxury property setting`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <p className="absolute bottom-5 left-5 text-2xl text-white">{market.name}</p>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-lg text-[var(--deep-green)]">{market.summary}</p>
                  <p className="text-sm leading-6 text-[var(--muted)]">{market.detail}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="approach" className="bg-[var(--deep-green)] py-24 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-soft)]">Positioning</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Not just brokerage. Strategic cross-border execution.</h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/78">
                Lion & Land operates as an advisory partner for clients buying across borders. We align ambition with practical execution, coordinating legal, transactional, and operational milestones from first call to completion.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/5 p-8">
              <h3 className="text-3xl">How we work</h3>
              <ol className="mt-6 space-y-5">
                {[
                  "Define your objectives and ideal ownership model",
                  "Select the right market based on your profile",
                  "Receive a curated shortlist with rationale",
                  "Coordinate diligence, negotiation, and acquisition steps",
                  "Complete remotely with structured support and continuity",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--gold)] text-xs font-semibold text-[var(--deep-green)]">
                      {index + 1}
                    </span>
                    <span className="text-sm text-white/85">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="opportunities" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Curated Opportunities</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Selective, aligned, and purpose-built for your brief.</h2>
            </div>
            <a href="#consultation" className="text-sm uppercase tracking-[0.2em] text-[var(--deep-green)] underline underline-offset-4">
              Request Current Pipeline
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => (
              <article key={item.title} className="rounded-2xl border bg-[var(--card)] p-6 transition hover:border-[var(--gold)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{item.tag}</p>
                <h3 className="mt-3 text-3xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.location}</p>
                <p className="mt-5 text-sm leading-6 text-[var(--muted)]">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface)] py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:px-10">
            <article className="rounded-3xl border bg-[var(--card)] p-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Why Lion & Land</p>
              <h2 className="mt-3 text-4xl">Calm authority in complex decisions.</h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                We are intentionally selective. Every engagement is built around a clear mandate, disciplined communication, and a credible execution path that respects the stakes of buying internationally.
              </p>
            </article>

            <article className="rounded-3xl border bg-[var(--deep-green)] p-8 text-white">
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold-soft)]">Trust Architecture</p>
              <h3 className="mt-3 text-4xl">Structured for real proof.</h3>
              <p className="mt-5 text-sm leading-7 text-white/80">
                Client case studies, transaction narratives, and partner endorsements will be published here in a transparent format as the advisory library grows.
              </p>
              <div className="mt-8 rounded-2xl border border-white/20 p-5 text-sm text-white/75">
                Placeholder for verified client outcomes and detailed advisory case notes.
              </div>
            </article>
          </div>
        </section>

        <section id="insights" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Insights</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Intelligence that supports better decisions.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.title} className="group rounded-2xl border bg-white p-6 transition hover:shadow-[0_16px_40px_rgba(15,35,23,0.1)]">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{insight.category}</p>
                <h3 className="mt-3 text-2xl leading-tight">{insight.title}</h3>
                <p className="mt-5 text-sm uppercase tracking-[0.2em] text-[var(--deep-green)]">Coming Soon</p>
              </article>
            ))}
          </div>
        </section>

        <section id="consultation" className="px-6 pb-24 lg:px-10">
          <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-[var(--deep-green)] px-8 py-16 text-center text-white sm:px-14">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">Private Consultation</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Plan your cross-border acquisition with precision.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/80">
              Tell us your target outcome, preferred timeline, and market interests. We will define a tailored acquisition pathway and recommend next steps with full discretion.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:advisory@lionandland.com"
                className="rounded-full bg-[var(--gold)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--deep-green)]"
              >
                Schedule by Email
              </a>
              <a
                href="tel:+971000000000"
                className="rounded-full border border-white/35 px-7 py-3 text-xs uppercase tracking-[0.2em] text-white"
              >
                +971 (0) 00 000 0000
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--gold-soft)]/40 bg-[var(--surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-lg uppercase tracking-[0.2em] text-[var(--deep-green)]">Lion & Land</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
              International real estate advisory for discerning buyers seeking structured execution across the UAE, Greece, and Thailand.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--deep-green)]">
              <li><a href="#markets">Markets</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
              <li><a href="#insights">Insights</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-[var(--deep-green)]">
              <li>advisory@lionandland.com</li>
              <li>Dubai · Athens · Bangkok</li>
              <li>By appointment only</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--gold-soft)]/40 px-6 py-6 text-center text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} Lion & Land. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
