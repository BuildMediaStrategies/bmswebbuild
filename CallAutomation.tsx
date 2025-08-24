import SystemTemplate from './SystemTemplate';

export default function CallAutomation() {
  return (
    <SystemTemplate
      title="Call Automation System"
      tagline="Automate appointment booking, follow-ups, and customer calls to save hours while improving customer experience."
      painPoints={[
        "Spending hours on repetitive phone calls and scheduling",
        "Missing calls and losing potential customers",
        "Inconsistent call quality and messaging across team members",
        "No systematic follow-up process after calls"
      ]}
      steps={[
        {
          title: "Schedule",
          desc: "AI-powered booking system handles appointment scheduling and confirmations"
        },
        {
          title: "Automate",
          desc: "Voice AI handles routine calls, qualifies leads, and gathers information"
        },
        {
          title: "Follow-up",
          desc: "Automated sequences ensure no prospect falls through the cracks"
        }
      ]}
      features={[
        "Intelligent appointment scheduling and calendar management",
        "AI voice assistants for lead qualification calls",
        "Automated call recording and transcription",
        "Smart call routing based on prospect data",
        "Follow-up email and SMS sequences",
        "Call analytics and performance tracking",
        "Integration with existing phone systems",
        "Customizable call scripts and workflows"
      ]}
      integrations={[
        "Calendly", "Acuity", "Twilio", "RingCentral", "Zoom", 
        "GoHighLevel", "Pipedrive", "HubSpot", "Salesforce"
      ]}
      kpis={[
        "Save 20+ hours per week on phone tasks",
        "+90% reduction in missed appointments",
        "50% faster lead qualification process",
        "+35% increase in call-to-meeting conversion",
        "85% improvement in follow-up consistency"
      ]}
    />
  );
}