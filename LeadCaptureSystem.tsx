import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { FormIcon, DBIcon, BranchIcon, CRMIcon, CalendarIcon, MailIcon } from "@/components/workflow/systemIcons";

export default function LeadCaptureSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "High-Signal Forms/Chat", desc: "Capture intent cleanly to raise completion rates.", icon: <FormIcon/> },
    { title: "Store & Enrich", desc: "Save to DB and add missing fields.", icon: <DBIcon/> },
    { title: "Quality Branching", desc: "Route qualified leads to sales instantly.", icon: <BranchIcon/> },
    { title: "CRM Handoff", desc: "Create contacts/deals automatically.", icon: <CRMIcon/> },
    { title: "Instant Booking", desc: "Offer calendar slots on submit.", icon: <CalendarIcon/> },
    { title: "Follow-up", desc: "Send confirmations and reminders.", icon: <MailIcon/> },
  ];
  return <WorkflowPage title="Lead Capture System" subtitle="Capture more, qualify better, book faster." steps={steps} />;
}