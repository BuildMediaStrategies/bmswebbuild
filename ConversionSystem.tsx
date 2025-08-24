import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { BoltNewIcon, BoltCloudIcon, SupabaseIcon, GitHubIcon, DyadIcon } from "@/components/workflow/conversionIcons";
import MetricsStrip from "@/components/MetricsStrip";
import SuperCTA from "@/components/SuperCTA";
import QuickFAQ from "@/components/QuickFAQ";

export default function ConversionSystem() {
  const steps: StepSpec[] = [
    {
      title: "Bolt.new — Rapid Scaffold",
      desc: "Spin up production-grade UI in minutes — cut build time and cost from day one.",
      meta: "Faster time-to-first-render",
      icon: <BoltNewIcon />
    },
    {
      title: "Bolt.cloud — One-Click Deploys",
      desc: "Ship updates instantly with zero downtime — improve iteration speed and release cadence.",
      meta: "Lower ops overhead",
      icon: <BoltCloudIcon />
    },
    {
      title: "Supabase — DB, Auth, APIs",
      desc: "Launch a secure backend without managing servers — reduce infra spend and complexity.",
      meta: "Fewer moving parts",
      icon: <SupabaseIcon />
    },
    {
      title: "GitHub — Versioning & CI",
      desc: "Protect code quality and enable team velocity — fewer bugs, faster reviews, safer releases.",
      meta: "Stable main, quick merges",
      icon: <GitHubIcon />
    },
    {
      title: "Dyad — Conversion Copy",
      desc: "Generate and iterate on copy quickly — higher CVR with on-brand messaging at lower cost.",
      meta: "Better CVR, lower CAC",
      icon: <DyadIcon />
    }
  ];

  return (
    <>
      <WorkflowPage
        title="Conversion System"
        subtitle="From scaffold to deploy — a lean stack that ships fast and converts better."
        steps={steps}
      />
      <MetricsStrip items={[
        { label: "Build time reduction", value: 75, suffix: "%" },
        { label: "Deploy frequency", value: 8, suffix: "x" },
        { label: "CVR improvement", value: 40, suffix: "%" },
        { label: "Lower CAC", value: 35, suffix: "%" },
      ]} />
      <SuperCTA
        title="Ready to ship faster and convert better?"
        bullets={["Cut build time by 75%", "Deploy 8x more frequently", "Boost conversion rates"]}
        primaryHref="/contact"
        primaryLabel="Book a Demo"
        secondaryHref="/pricing"
        secondaryLabel="Build My System"
      />
      <QuickFAQ />
    </>
  );
}