import WorkflowPage, { StepSpec } from "@/components/workflow/WorkflowPage";
import { useSEO } from "@/lib/seo";
import { CalendarIcon, ChatIcon, SocialIcon, GraphIcon, WebhookIcon, MailIcon } from "@/components/workflow/systemIcons";

export default function SocialMediaSystem() {
  useSEO();
  const steps: StepSpec[] = [
    { title: "Content Calendar", desc: "Plan cadence to stay consistent.", icon: <CalendarIcon/> },
    { title: "AI Drafts", desc: "Generate on-brand posts and assets.", icon: <ChatIcon/> },
    { title: "Schedule & Publish", desc: "Automated posting across platforms.", icon: <SocialIcon/> },
    { title: "Inbox Processing", desc: "Auto-replies and tag routing.", icon: <WebhookIcon/> },
    { title: "Campaign Recaps", desc: "Email weekly results to stakeholders.", icon: <MailIcon/> },
    { title: "Performance Analytics", desc: "Track reach and improve creatives.", icon: <GraphIcon/> },
  ];
  return <WorkflowPage title="Social Media Automation System" subtitle="Turn social into a reliable engine, not a chore." steps={steps} />;
}