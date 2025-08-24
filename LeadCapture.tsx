import SystemTemplate from './SystemTemplate';

export default function LeadCapture() {
  return (
    <SystemTemplate
      title="Lead Capture System"
      tagline="Capture every website visitor with intelligent forms, popups, and conversion optimization tools."
      painPoints={[
        "High website traffic but very few visitors converting to leads",
        "Generic contact forms that don't capture qualified prospect information",
        "No way to identify and re-engage anonymous website visitors",
        "Missing opportunities to capture leads at optimal moments"
      ]}
      steps={[
        {
          title: "Identify",
          desc: "Advanced tracking identifies visitor behavior patterns and intent signals"
        },
        {
          title: "Capture",
          desc: "Smart forms and popups appear at the perfect moment to maximize conversions"
        },
        {
          title: "Qualify",
          desc: "Automated lead scoring and routing ensures sales team focuses on best prospects"
        }
      ]}
      features={[
        "Behavioral trigger-based popup and form display",
        "Smart form fields that adapt based on visitor data",
        "Exit-intent technology to capture leaving visitors",
        "A/B testing for forms, popups, and landing pages",
        "Real-time visitor identification and tracking",
        "Lead scoring and automatic qualification",
        "CRM integration with instant lead routing",
        "Conversion analytics and optimization insights"
      ]}
      integrations={[
        "WordPress", "Shopify", "Webflow", "Unbounce", "Leadpages", 
        "HubSpot", "Mailchimp", "ConvertKit", "Google Analytics"
      ]}
      kpis={[
        "+400% increase in lead capture rate",
        "85% improvement in lead quality scores",
        "60% reduction in cost per lead",
        "+250% increase in email subscriber growth",
        "45% improvement in sales-qualified lead conversion"
      ]}
    />
  );
}