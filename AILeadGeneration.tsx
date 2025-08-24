import SystemTemplate from './SystemTemplate';

export default function AILeadGeneration() {
  return (
    <SystemTemplate
      title="AI Lead Generation System"
      tagline="Identify, qualify, and engage prospects automatically while you focus on closing deals."
      painPoints={[
        "Spending hours manually researching prospects with low conversion rates",
        "Missing qualified leads because you can't respond fast enough",
        "Inconsistent outreach messaging that doesn't resonate with prospects",
        "No systematic way to track and nurture leads through the pipeline"
      ]}
      steps={[
        {
          title: "Identify",
          desc: "AI scans multiple data sources to find prospects matching your ideal customer profile"
        },
        {
          title: "Qualify",
          desc: "Automated scoring system ranks leads based on likelihood to convert"
        },
        {
          title: "Engage",
          desc: "Personalized outreach sequences deployed across email, LinkedIn, and phone"
        }
      ]}
      features={[
        "Real-time prospect identification from 50+ data sources",
        "AI-powered lead scoring and qualification",
        "Personalized email and LinkedIn message generation",
        "Automated follow-up sequences based on engagement",
        "CRM integration with lead tracking and analytics",
        "A/B testing for outreach optimization",
        "Compliance management for GDPR and CAN-SPAM",
        "Custom prospect research and enrichment"
      ]}
      integrations={[
        "HubSpot", "Salesforce", "Pipedrive", "LinkedIn Sales Navigator", 
        "Apollo", "ZoomInfo", "Clay", "Instantly", "Lemlist"
      ]}
      kpis={[
        "+200% increase in qualified leads per month",
        "60% reduction in time spent on prospecting",
        "+40% improvement in email open rates",
        "3x faster response time to inbound inquiries",
        "85% accuracy in lead qualification scoring"
      ]}
    />
  );
}