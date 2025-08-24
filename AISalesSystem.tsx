import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { PipelineIcon, MailIcon, BranchIcon, CRMIcon, CalendarIcon, GraphIcon } from "@/components/workflow/systemIcons";

export default function AISalesSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Pipeline Trigger", desc: "Start sequences when leads hit key stages.", icon: <PipelineIcon/> },
    { title: "Multi-Channel Follow-up", desc: "Email/SMS nudges to boost replies and shows.", icon: <MailIcon/> },
    { title: "Smart Branching", desc: "Adjust cadence based on replies and opens.", icon: <BranchIcon/> },
    { title: "CRM Sync", desc: "Auto-update stages and tasks.", icon: <CRMIcon/> },
    { title: "Calendar Booking", desc: "One-click scheduling reduces friction.", icon: <CalendarIcon/> },
    { title: "Performance Loop", desc: "Track wins and iterate playbooks.", icon: <GraphIcon/> },
  ];
  return <WorkflowPage title="AI Sales System" subtitle="Never let leads go cold, automatically." steps={steps} />;
}