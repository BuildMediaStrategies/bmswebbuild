import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { ChatIcon, KBIcon, BranchIcon, HumanIcon, CRMIcon, GraphIcon } from "@/components/workflow/systemIcons";

export default function SupportSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Chat Intake", desc: "Instant replies 24/7 — reduce ticket volume.", icon: <ChatIcon/> },
    { title: "Knowledge Lookup", desc: "Answer from docs/policies to boost first-contact resolution.", icon: <KBIcon/> },
    { title: "Smart Triage", desc: "Classify intent and urgency for the right queue.", icon: <BranchIcon/> },
    { title: "Human Escalation", desc: "Hand off with full context to cut handle time.", icon: <HumanIcon/> },
    { title: "Ticket/CRM Sync", desc: "Keep records consistent across tools.", icon: <CRMIcon/> },
    { title: "SLA & CSAT", desc: "Track response time and satisfaction for ROI.", icon: <GraphIcon/> },
  ];
  return <WorkflowPage title="Support System" subtitle="Deflect FAQs, route complex issues, and report outcomes." steps={steps} />;
}