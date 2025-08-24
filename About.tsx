import { motion } from "framer-motion";
import { useSEO } from "@/lib/seo";
import TeamCard from "@/components/about/TeamCard";
import ValueCard from "@/components/about/ValueCard";
import TimelineItem from "@/components/about/TimelineItem";
import TrustedMarquee from "@/components/TrustedMarquee";
import MetricsStrip from "@/components/MetricsStrip";
import SuperCTA from "@/components/SuperCTA";

export default function About() {
  useSEO();

  // JSON-LD Organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BuildMediaStrategies",
    "url": typeof window !== "undefined" ? window.location.origin : "",
    "sameAs": [],
    "contactPoint": [{ "@type": "ContactPoint", "contactType": "sales", "email": "buildmediastrategies@outlook.com", "telephone":"07915 738448" }]
  };

  const values = [
    { title: "Systems over services", desc: "We ship machines that produce outcomes, not hours." },
    { title: "Monochrome simplicity", desc: "Clarity beats noise. Speed beats clutter." },
    { title: "Measurable ROI", desc: "If it doesn't increase revenue or save hours, it's not done." },
    { title: "No lock-in", desc: "Your stack, your data. We integrate, not trap." }
  ];

  return (
    <main className="section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4">
        <motion.h1 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="text-3xl md:text-5xl font-bold leading-tight">
          The systems company for SMEs.
        </motion.h1>
        <motion.p initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
          className="mt-3 max-w-prose text-foreground/70">
          We build, connect, and automate your revenue-critical workflows—then keep improving them.
        </motion.p>
      </section>

      {/* Stats / proof */}
      <MetricsStrip items={[
        { label:"Avg reply/show lift", value:32, suffix:"%" },
        { label:"Time saved /wk", value:14, suffix:"h" },
        { label:"Lower handling cost", value:27, suffix:"%" },
        { label:"Faster shipping", value:5, suffix:"x" },
      ]}/>

      {/* Trusted logos */}
      <TrustedMarquee />

      {/* Values */}
      <section className="section mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">What we believe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map(v => <ValueCard key={v.title} {...v} />)}
        </div>
      </section>

      {/* How we work */}
      <section className="section mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">How we work</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">01 — Diagnose</h3>
            <p className="mt-2 text-sm text-foreground/70">Baseline metrics, map friction, pick the system with the fastest payback.</p>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">02 — Build</h3>
            <p className="mt-2 text-sm text-foreground/70">Connect your tools, ship V1 fast, and put it under load.</p>
          </div>
          <div className="rounded-xl border border-[rgba(255,255,255,0.12)] p-5 pressable hover-glow">
            <h3 className="font-semibold">03 — Compound</h3>
            <p className="mt-2 text-sm text-foreground/70">Iterate monthly: more conversion, less manual work, clearer reporting.</p>
          </div>
        </div>
      </section>

      {/* Team (add real headshots later) */}
      <section className="section mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TeamCard
            name="BMS Team"
            role="Systems & Automation"
            bio="We blend product thinking with automation engineering to build compounding systems—focused on revenue, not vanity."
          />
          <TeamCard
            name="Delivery"
            role="Implementation & QA"
            bio="Tight feedback loops, fast shipping, and reliability checks so your systems keep earning."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="section mx-auto max-w-3xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Milestones</h2>
        <div className="space-y-6 border-l border-[rgba(255,255,255,0.12)] pl-6">
          <TimelineItem year="2024" title="BMS founded" desc="Set out to build ROI-first systems for SMEs." />
          <TimelineItem year="2025" title="Systems suite launched" desc="Lead Gen, Conversion, Call Automation, Support, and more." />
        </div>
      </section>

      {/* CTA */}
      <SuperCTA
        title="Let's build your first compounding system."
        bullets={["Ship in weeks, not months","Report ROI monthly","No lock-in, your stack"]}
        primaryHref="/book"
        primaryLabel="Book a Call"
        secondaryHref="/book"
        secondaryLabel="Talk to Us"
      />
    </main>
  );
}