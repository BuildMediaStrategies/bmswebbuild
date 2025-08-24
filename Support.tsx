import SystemTemplate from './SystemTemplate';

export default function Support() {
  return (
    <SystemTemplate
      title="Support System"
      tagline="Provide 24/7 customer support with AI-powered chatbots, ticket routing, and knowledge management."
      painPoints={[
        "Customers waiting hours or days for support responses",
        "Support team overwhelmed with repetitive questions",
        "Inconsistent support quality across different team members",
        "No way to provide support outside business hours"
      ]}
      steps={[
        {
          title: "Detect",
          desc: "AI identifies customer issues and intent from multiple communication channels"
        },
        {
          title: "Resolve",
          desc: "Automated responses handle common questions while complex issues route to humans"
        },
        {
          title: "Learn",
          desc: "System continuously improves responses based on customer feedback and outcomes"
        }
      ]}
      features={[
        "24/7 AI chatbot for instant customer support",
        "Intelligent ticket routing and prioritization",
        "Automated knowledge base creation and updates",
        "Multi-channel support (email, chat, social media)",
        "Customer sentiment analysis and escalation",
        "Support team performance analytics",
        "Integration with existing help desk systems",
        "Automated follow-up and satisfaction surveys"
      ]}
      integrations={[
        "Zendesk", "Freshdesk", "Intercom", "Help Scout", "Slack", 
        "Microsoft Teams", "Shopify", "WooCommerce", "Stripe"
      ]}
      kpis={[
        "90% reduction in first response time",
        "70% of tickets resolved automatically",
        "+40% improvement in customer satisfaction scores",
        "60% reduction in support team workload",
        "24/7 availability with 99.9% uptime"
      ]}
    />
  );
}