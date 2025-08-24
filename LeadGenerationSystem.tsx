import { motion } from "framer-motion";
import { useSEO } from "@/lib/seo";
import MetricsStrip from "@/components/MetricsStrip";
import SuperCTA from "@/components/SuperCTA";
import QuickFAQ from "@/components/QuickFAQ";

// --- Inline SVG Icons (monochrome, stroke-only) ---
const ExecuteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l16 8-16 8V4z" />
  </svg>
);
const SheetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);
const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
  </svg>
);
const LoopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path d="M3 12a9 9 0 0115.9-5.6L21 3v6h-6l2.2-2.2A7 7 0 005 12m0 0a7 7 0 0012.2 4.2L21 21h-6v-6l2.2 2.2A9 9 0 013 12z" />
  </svg>
);
const OpenAIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);
const HttpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <circle cx="12" cy="12" r="9" />
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20a15.3 15.3 0 010-20z" />
  </svg>
);
const IfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path d="M12 6v12M5 12h14" />
  </svg>
);
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8m-8 4h5M21 12c0 5-4 9-9 9-1.5 0-3-.4-4.3-1.1L3 21l1.1-4.7C3.4 15 3 13.5 3 12c0-5 4-9 9-9s9 4 9 9z" />
  </svg>
);
const LightningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h7v8l10-12h-7z" />
  </svg>
);

// --- Timeline Component ---
function WorkflowTimeline({ steps }: { steps: { title: string; desc?: string; icon: JSX.Element; meta?: string }[] }) {
  return (
    <section className="relative mx-auto max-w-5xl px-4 section">
      <div aria-hidden className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[rgba(255,255,255,0.08)]" />
      <ol className="space-y-14">
        {steps.map((s, i) => (
          <li key={i} id={`step-${String(i+1).padStart(2,"0")}`} className="relative scroll-mt-28">
            {/* Center node (unchanged) */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20">
              <div className="grid place-items-center h-12 w-12 rounded-full border border-[rgba(255,255,255,0.16)] bg-black shadow-[0_0_0_6px_rgba(255,255,255,0.03)]">
                {s.icon}
              </div>
            </div>

            {/* Connector: desktop-only, stops at card edge */}
            <div
              aria-hidden
              className={`pointer-events-none absolute top-[32px] z-20 hidden lg:block ${i % 2 === 0 ? "right-[50%]" : "left-[50%]"} h-px bg-[rgba(255,255,255,0.28)]`}
              style={{ width: "calc(8% - 14px)" }}
            />

            {/* Card: keep the SAME offsets so layout doesn't move */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative z-10 ${i % 2 === 0 ? "mr-0 lg:mr-[58%]" : "ml-0 lg:ml-[58%]"}`}
            >
              <div className="relative rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.03)] backdrop-blur-sm p-5">
                {/* Port dot: sits exactly on the card edge, covering the connector end */}
                <span
                  aria-hidden
                  className={`absolute top-[28px] z-30 hidden lg:block h-3 w-3 rounded-full border border-[rgba(255,255,255,0.24)] bg-black ${i % 2 === 0 ? "left-0 -translate-x-1/2" : "right-0 translate-x-1/2"}`}
                />
                <h3 className="text-base md:text-lg font-semibold">
                  {String(i + 1).padStart(2, "0")} · {s.title}
                </h3>
                {s.desc && <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>}
                {s.meta && <p className="mt-3 text-xs text-foreground/50">{s.meta}</p>}
              </div>
            </motion.div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// --- Page Component ---
export default function LeadGenerationSystem() {
  console.log("Render: LeadGenerationSystem");
  useSEO();
  const steps = [
    { title: "Execute Trigger", desc: "Starts the pipeline on your schedule to keep a steady daily lead flow.", icon: <ExecuteIcon/> },
    { title: "Get Rows", desc: "Pulls prospects from Sheets/CRM so no manual export is needed.", meta:"read: sheet", icon: <SheetIcon/> },
    { title: "Filter Leads", desc: "Drops bad/incomplete entries to protect sender reputation and ad spend ROI.", icon: <FilterIcon/> },
    { title: "Loop Over Items", desc: "Processes each record reliably so every qualified contact is touched.", icon: <LoopIcon/> },
    { title: "Format Name", desc: "Normalises casing for personalisation—boosts open and reply rates.", meta:"Message Model", icon: <OpenAIIcon/> },
    { title: "Code Transform", desc: "Maps fields and tags for segmentation so campaigns convert better.", icon: <CodeIcon/> },
    { title: "Find Email", desc: "Verifies deliverable emails to cut bounces and lower cost per conversation.", meta:"POST: anymailfinder", icon: <HttpIcon/> },
    { title: "If Condition", desc: "Routes only validated leads forward—keeps lists clean and compliant.", icon: <IfIcon/> },
    { title: "Generate Icebreaker", desc: "Writes a 1-line opener from context—improves first-reply rate.", meta:"Message Model", icon: <MessageIcon/> },
    { title: "Send to Instantly", desc: "Adds enriched leads into live sequences to create booked calls faster.", meta:"POST: instantly.ai", icon: <LightningIcon/> },
  ];

  return (
    <main className="section">
      <div className="mb-6 rounded-xl border border-foreground/30 bg-[rgba(255,255,255,0.03)] px-4 py-2 text-xs tracking-wide">
        Loaded: <strong>AI Lead Generation System</strong> • steps render below
      </div>
      <div className="mx-auto max-w-5xl px-4">
        <header className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">AI Lead Generation System</h1>
          <p className="mt-3 text-foreground/70 max-w-prose">
            This workflow shows exactly how we enrich, filter, and prepare leads · then push them straight into Instantly for outreach.
          </p>
        </header>
      </div>
      <WorkflowTimeline steps={steps} />
      <MetricsStrip items={[
        { label: "Reply rate lift", value: 32, suffix: "%" },
        { label: "Time saved /wk", value: 14, suffix: "h" },
        { label: "Lower CPA", value: 27, suffix: "%" },
        { label: "Faster shipping", value: 5, suffix: "x" },
      ]} />
      <SuperCTA
        title="Ready to turn this workflow into ROI?"
        bullets={["Increase replies & shows", "Cut manual ops cost", "Ship iterations weekly"]}
        primaryHref="/contact"
        primaryLabel="Book a Demo"
        secondaryHref="/pricing"
        secondaryLabel="Build My System"
      />
      <QuickFAQ />
    </main>
  );
}