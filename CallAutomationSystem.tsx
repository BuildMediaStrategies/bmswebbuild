import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { PhoneIcon, TranscriptIcon, BranchIcon, WebhookIcon, CRMIcon, MailIcon } from "@/components/workflow/systemIcons";

export default function CallAutomationSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Inbound/Outbound Call", desc: "Answer and dial automatically — never miss revenue calls.", icon: <PhoneIcon/> },
    { title: "Live Transcription", desc: "Capture every word for searchable context and QA.", icon: <TranscriptIcon/> },
    { title: "Branch by Intent", desc: "Route sales vs. support to the right path instantly.", icon: <BranchIcon/> },
    { title: "Webhook Actions", desc: "Trigger workflows (quotes, tickets, bookings) in real time.", icon: <WebhookIcon/> },
    { title: "CRM Update", desc: "Log outcomes and next steps — keep pipeline accurate.", icon: <CRMIcon/> },
    { title: "Auto Follow-up", desc: "Send SMS/email recap to increase conversions.", icon: <MailIcon/> },
  ];
  return <WorkflowPage title="Call Automation System" subtitle="Lower call handling cost while improving response speed." steps={steps} />;
}