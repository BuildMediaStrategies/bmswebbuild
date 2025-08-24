import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { UsersIcon, WebhookIcon, ScoreIcon, CalendarIcon, CRMIcon, MailIcon } from "@/components/workflow/systemIcons";

export default function RecruitmentSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Candidate Sourcing", desc: "Pull profiles from boards/referrals fast.", icon: <UsersIcon/> },
    { title: "Profile Enrichment", desc: "Auto-collect missing info for fair screening.", icon: <WebhookIcon/> },
    { title: "AI Scoring", desc: "Rank by skills/fit to shortlist faster.", icon: <ScoreIcon/> },
    { title: "Auto Scheduling", desc: "Book interviews without back-and-forth.", icon: <CalendarIcon/> },
    { title: "ATS/CRM Update", desc: "Keep pipeline stages accurate.", icon: <CRMIcon/> },
    { title: "Candidate Comms", desc: "Email/SMS updates to reduce drop-off.", icon: <MailIcon/> },
  ];
  return <WorkflowPage title="Recruitment System" subtitle="Consistent pipelines; better candidates; faster offers." steps={steps} />;
}