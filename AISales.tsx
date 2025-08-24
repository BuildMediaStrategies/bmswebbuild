import SystemTemplate from './SystemTemplate';

export default function AISales() {
  return (
    <SystemTemplate
      title="AI Sales System"
      tagline="Automate your entire sales process from lead qualification to deal closing with intelligent AI assistants."
      painPoints={[
        "Sales team spending too much time on administrative tasks instead of selling",
        "Inconsistent follow-up leading to lost deals",
        "Difficulty tracking and managing complex sales pipelines",
        "No systematic way to nurture long-term prospects"
      ]}
      steps={[
        {
          title: "Qualify",
          desc: "AI analyzes prospect data and behavior to score and prioritize leads"
        },
        {
          title: "Engage",
          desc: "Automated outreach sequences maintain consistent communication with prospects"
        },
        {
          title: "Close",
          desc: "Smart deal tracking and automated follow-ups move prospects through your pipeline"
        }
      ]}
      features={[
        "AI-powered lead scoring and qualification",
        "Automated sales sequence management",
        "Intelligent deal forecasting and pipeline analysis",
        "Personalized proposal and quote generation",
        "Meeting scheduling and preparation automation",
        "Sales performance tracking and coaching insights",
        "CRM data enrichment and cleanup",
        "Automated contract and document management"
      ]}
      integrations={[
        "Salesforce", "HubSpot", "Pipedrive", "Close", "Outreach", 
        "SalesLoft", "DocuSign", "PandaDoc", "Calendly"
      ]}
      kpis={[
        "+45% increase in sales team productivity",
        "30% improvement in deal close rates",
        "60% reduction in sales cycle length",
        "+80% improvement in follow-up consistency",
        "25% increase in average deal size"
      ]}
    />
  );
}