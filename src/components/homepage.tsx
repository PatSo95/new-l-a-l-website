"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Market = {
  name: string;
  tagline: string;
  summary: string;
  image: string;
  strategy: string[];
};

const markets: Market[] = [
  {
    name: "UAE",
    tagline: "Capital Velocity",
    summary:
      "A high-liquidity ecosystem for buyers prioritizing branded residences, global connectivity, and city-scale momentum.",
    image: "/images/market-uae.svg",
    strategy: ["Urban wealth corridors", "Branded residences", "International mobility"],
  },
  {
    name: "Greece",
    tagline: "Mediterranean Legacy",
    summary:
      "A refined European pathway balancing architectural character, coastal life, and long-view ownership strategy.",
    image: "/images/market-greece.svg",
    strategy: ["Lifestyle-led value", "Coastal positioning", "Cross-border planning"],
  },
  {
    name: "Thailand",
    tagline: "Resort-Grade Living",
    summary:
      "A tropical premium market for buyers seeking second-home elegance, flexible usage, and remote ownership confidence.",
    image: "/images/market-thailand.svg",
    strategy: ["Villa ecosystems", "Long-stay comfort", "Leisure + investment blend"],
  },
];

const processSteps = [
  {
    title: "Mandate Discovery",
    text: "Clarify your buying objective, ownership preferences, and timeline to define a precise acquisition mandate.",
  },
  {
    title: "Strategic Market Match",
    text: "Compare UAE, Greece, and Thailand through your lens—not generic trends—then prioritize the right pathway.",
  },
  {
    title: "Curated Opportunity Set",
    text: "Receive a selective shortlist with concise investment and lifestyle rationale for each option.",
  },
  {
    title: "Execution & Diligence",
    text: "Coordinate legal, commercial, and transaction milestones with structured communication and clear sequencing.",
  },
  {
    title: "Remote Completion Support",
    text: "Advance confidently across borders with disciplined guidance through closing and early ownership continuity.",
  },
];

const opportunities = [
  {
    title: "Marina Crest Collection",
    location: "Dubai Marina · UAE",
    image: "/images/opportunity-uae.svg",
    profile: "Urban Income + Prestige",
    note: "For buyers seeking prime waterfront positioning, modern product, and strong tenant liquidity.",
  },
  {
    title: "Cycladic Horizon Estate",
    location: "Paros · Greece",
    image: "/images/opportunity-greece.svg",
    profile: "Family Retreat + Legacy",
    note: "For clients prioritizing sea-view architecture, seasonal usage, and timeless European quality.",
  },
  {
    title: "Lagoon Private Villa",
    location: "Phuket · Thailand",
    image: "/images/opportunity-thailand.svg",
    profile: "Second Home + Flex Use",
    note: "For owners balancing personal stays, curated hospitality potential, and tropical design-led living.",
  },
];

const trustPillars = [
  {
    title: "Selective Engagement",
    text: "We keep mandates focused to preserve quality, attention, and strategic depth per client.",
  },
  {
    title: "Cross-Border Clarity",
    text: "Every recommendation is filtered through execution feasibility, legal context, and ownership practicality.",
  },
  {
    title: "Discretion by Design",
    text: "Communication, coordination, and client process are managed with privacy and composure.",
  },
  {
    title: "Structured Continuity",
    text: "Support extends beyond selection to help clients settle into confident ownership transitions.",
  },
];

const insights = [
  {
    category: "Market Intelligence",
    title: "How serious buyers evaluate UAE, Greece, and Thailand beyond headlines",
    image: "/images/insight-market.svg",
  },
  {
    category: "Execution",
    title: "A practical remote-buy framework for cross-border property decisions",
    image: "/images/insight-execution.svg",
  },
  {
    category: "Advisory Perspective",
    title: "When lifestyle value should lead and when income profile should dominate",
    image: "/images/insight-lifestyle.svg",
  },
];

const navItems = [
  { label: "Markets", id: "markets" },
  { label: "Approach", id: "approach" },
  { label: "Opportunities", id: "opportunities" },
  { label: "Insights", id: "insights" },
];

const marketPills = ["UAE", "Greece", "Thailand", "Advisory-Led", "Cross-Border Execution"];

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3">
      <span className="h-px w-8 bg-[var(--gold)]/80" />
      <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--muted)]">{text}</p>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[color-mix(in_srgb,var(--deep-green)_92%,black)]/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="#" className="group flex items-center gap-3" aria-label="Lion & Land home">
            <div className="rounded-full border border-[var(--gold)]/60 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-[var(--gold-soft)] transition group-hover:border-[var(--gold)]">
              L&L
            </div>
            <span className="text-sm uppercase tracking-[0.25em] text-white/90">Lion & Land</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs uppercase tracking-[0.18em] text-white/70 transition hover:text-[var(--gold-soft)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#consultation"
            className="hidden rounded-full border border-[var(--gold)] bg-[var(--gold)]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold-soft)] transition hover:bg-[var(--gold)] hover:text-[var(--deep-green)] md:block"
          >
            Book Consultation
          </a>

          <button
            type="button"
            className="rounded-full border border-white/25 px-4 py-2 md:hidden"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white">Menu</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 pb-5 pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-white/85"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#consultation"
                className="mt-2 w-fit rounded-full bg-[var(--gold)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--deep-green)]"
                onClick={() => setMenuOpen(false)}
              >
                Start Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-20">
            <Image src="/images/hero-uae.svg" alt="Lion & Land hero backdrop" fill priority className="object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(8,19,14,0.96)_20%,rgba(8,19,14,0.74)_56%,rgba(8,19,14,0.3)_100%)]" />
          <div className="absolute -bottom-30 right-0 -z-10 h-[340px] w-[340px] rounded-full bg-[var(--gold)]/20 blur-3xl" />

          <div className="mx-auto grid min-h-[92vh] w-full max-w-7xl items-end gap-12 px-6 pb-16 pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-20">
            <div className="text-white">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[var(--gold-soft)]">Premium International Real Estate Advisory</p>
              <h1 className="max-w-4xl text-5xl leading-[0.92] font-semibold sm:text-6xl lg:text-7xl">
                Strategic property acquisition across borders, shaped around your goals.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/83 sm:text-lg">
                Lion & Land helps discerning buyers navigate market selection, curated opportunities, and end-to-end execution across the UAE, Greece, and Thailand.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#consultation"
                  className="rounded-full bg-[var(--gold)] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--deep-green)] transition hover:bg-[var(--gold-soft)]"
                >
                  Begin Private Consultation
                </a>
                <a
                  href="#markets"
                  className="rounded-full border border-white/35 px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-[var(--gold-soft)] hover:text-[var(--gold-soft)]"
                >
                  Discover Core Markets
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-2">
                {marketPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/78"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-[rgba(11,29,20,0.62)] p-7 text-white shadow-2xl backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">Advisory Focus</p>
              <h2 className="mt-3 text-3xl">Beyond brokerage.</h2>
              <p className="mt-4 text-sm leading-6 text-white/80">
                We align each recommendation to your intended outcome—capital efficiency, lifestyle alignment, or residency-linked planning where relevant.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Tailored buyer strategy",
                  "Curated opportunity access",
                  "Legal and diligence coordination",
                  "Remote-ready completion support",
                ].map((line) => (
                  <div key={line} className="flex items-center gap-3 text-sm text-white/85">
                    <span className="inline-flex size-2 rounded-full bg-[var(--gold)]" />
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="relative mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel text="Core Markets" />
          <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="text-4xl leading-tight sm:text-5xl">Distinct market personalities, curated through one advisory lens.</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              Each market is presented through strategic fit, ownership practicality, and your preferred pace of execution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {markets.map((market) => (
              <article
                key={market.name}
                className="group overflow-hidden rounded-[1.7rem] border border-[var(--gold-soft)]/40 bg-[var(--card)] shadow-[0_18px_40px_rgba(9,22,16,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(9,22,16,0.12)]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={market.image} alt={`${market.name} premium market mood`} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-[var(--gold)]/88 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--deep-green)]">
                    {market.tagline}
                  </div>
                  <p className="absolute bottom-5 left-5 text-3xl text-white">{market.name}</p>
                </div>
                <div className="space-y-5 p-6">
                  <p className="text-sm leading-7 text-[var(--muted)]">{market.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {market.strategy.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--gold-soft)]/50 bg-[var(--surface)] px-3 py-1 text-[10px] uppercase tracking-[0.17em] text-[var(--deep-green)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <a href="#consultation" className="inline-block text-xs uppercase tracking-[0.2em] text-[var(--deep-green)] underline underline-offset-4">
                    Discuss this market
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="approach" className="bg-[var(--deep-green)] py-24 text-white">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.2fr] lg:px-10">
            <div>
              <SectionLabel text="Positioning" />
              <h2 className="text-4xl sm:text-5xl">Not just an agent. A strategic execution partner.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80">
                Lion & Land is built for clients making consequential international decisions. We combine market intelligence with operational rigor so every step from selection to completion is deliberate and defensible.
              </p>
              <div className="mt-8 rounded-2xl border border-white/25 bg-white/6 p-5 text-sm text-white/78">
                Advisory architecture designed for serious buyers: decisive, clear, and calm under complexity.
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/20 bg-white/6 p-8">
              <div className="absolute bottom-7 left-7 top-7 w-px bg-gradient-to-b from-[var(--gold-soft)] via-white/45 to-transparent" />
              <div className="space-y-7 pl-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <span className="absolute -left-[2.15rem] top-1 inline-flex size-6 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--deep-green)] text-[10px] font-semibold text-[var(--gold-soft)]">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/78">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="opportunities" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel text="Curated Opportunities" />
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl sm:text-5xl">Selective opportunities aligned to investor and lifestyle intent.</h2>
            <a href="#consultation" className="text-xs uppercase tracking-[0.22em] text-[var(--deep-green)] underline underline-offset-4">
              Request Current Opportunity Book
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-[var(--gold-soft)]/45 bg-white shadow-[0_14px_32px_rgba(13,28,21,0.08)] transition hover:-translate-y-1">
                <div className="relative h-52">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <p className="absolute bottom-4 left-4 rounded-full bg-[var(--gold)]/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--deep-green)]">
                    {item.profile}
                  </p>
                </div>
                <div className="space-y-3 p-6">
                  <h3 className="text-3xl leading-tight">{item.title}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">{item.location}</p>
                  <p className="text-sm leading-6 text-[var(--muted)]">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[var(--surface)] py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-10">
            <article className="rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--card)] p-8">
              <SectionLabel text="Trust Architecture" />
              <h2 className="text-4xl">Confidence built through structure, not hype.</h2>
              <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                We publish outcomes through case-based narratives as our advisory library expands. Until then, our process framework communicates how rigor is applied in every engagement.
              </p>
              <div className="mt-6 rounded-2xl border border-[var(--gold-soft)]/40 bg-[var(--surface)] p-4 text-xs uppercase tracking-[0.16em] text-[var(--deep-green)]">
                Placeholder area reserved for verified client case studies and partner references.
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPillars.map((pillar) => (
                <article key={pillar.title} className="rounded-2xl border border-[var(--gold-soft)]/45 bg-white p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Pillar</p>
                  <h3 className="mt-2 text-2xl">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{pillar.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-10">
          <SectionLabel text="Editorial Insights" />
          <div className="mb-10 grid gap-4 md:grid-cols-[1fr_0.75fr] md:items-end">
            <h2 className="text-4xl sm:text-5xl">Intelligence for clearer international property decisions.</h2>
            <p className="text-sm leading-7 text-[var(--muted)]">
              A focused stream of market notes and advisory guidance designed for globally mobile buyers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <article key={insight.title} className="group overflow-hidden rounded-3xl border border-[var(--gold-soft)]/40 bg-white transition hover:shadow-[0_20px_40px_rgba(8,20,15,0.1)]">
                <div className="relative h-44 overflow-hidden">
                  <Image src={insight.image} alt={insight.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{insight.category}</p>
                  <h3 className="mt-3 text-2xl leading-tight">{insight.title}</h3>
                  <p className="mt-5 text-xs uppercase tracking-[0.2em] text-[var(--deep-green)]">Coming Soon</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="consultation" className="px-6 pb-24 lg:px-10">
          <div className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.2rem] border border-[var(--gold)]/40 bg-[var(--deep-green)] px-8 py-16 text-white shadow-2xl sm:px-14">
            <div className="absolute -right-14 -top-14 size-56 rounded-full bg-[var(--gold)]/28 blur-2xl" />
            <div className="absolute -bottom-24 left-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">Private Consultation</p>
              <h2 className="mt-3 max-w-3xl text-4xl sm:text-5xl">Build your cross-border property strategy with Lion & Land.</h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/82">
                Share your goals and preferred markets. We will return with a tailored advisory pathway and clear next actions designed around your profile.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
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
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--gold-soft)]/40 bg-[var(--deep-green)] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="text-lg uppercase tracking-[0.23em] text-[var(--gold-soft)]">Lion & Land</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/74">
              Premium international real estate advisory for discerning buyers pursuing strategic opportunities across the UAE, Greece, and Thailand.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)]">Explore</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><a href="#markets">Markets</a></li>
              <li><a href="#approach">Approach</a></li>
              <li><a href="#opportunities">Opportunities</a></li>
              <li><a href="#insights">Insights</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)]">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>advisory@lionandland.com</li>
              <li>Dubai · Athens · Bangkok</li>
              <li>Consultations by appointment</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 px-6 py-6 text-center text-xs text-white/65">
          © {new Date().getFullYear()} Lion & Land. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
