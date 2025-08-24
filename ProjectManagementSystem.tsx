import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { ChecklistIcon, CalendarIcon, BellIcon, CRMIcon, DashboardIcon, BranchIcon } from "@/components/workflow/systemIcons";

export default function ProjectManagementSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Milestones & Owners", desc: "Define stages to prevent scope drift.", icon: <ChecklistIcon/> },
    { title: "Timeline Setup", desc: "Auto reminders keep tasks moving.", icon: <CalendarIcon/> },
    { title: "Smart Alerts", desc: "Escalate risks before deadlines slip.", icon: <BellIcon/> },
    { title: "Docs & Handoffs", desc: "Keep clients and teams aligned.", icon: <CRMIcon/> },
    { title: "Branch by Status", desc: "Adjust notifications by progress.", icon: <BranchIcon/> },
    { title: "Progress Dashboard", desc: "Live reporting for stakeholders.", icon: <DashboardIcon/> },
  ];
  return <WorkflowPage title="Project Management System" subtitle="Less chasing, more delivering." steps={steps} />;
}