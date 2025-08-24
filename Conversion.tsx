import SystemTemplate from './SystemTemplate';

export default function Conversion() {
  return (
    <SystemTemplate
      title="Conversion System"
      tagline="Turn website visitors into customers with intelligent capture, nurturing, and conversion workflows."
      painPoints={[
        "High website traffic but low conversion rates",
        "Visitors leaving without engaging or providing contact information",
        "No systematic way to nurture leads through the buying journey",
        "Missing opportunities to re-engage interested prospects"
      ]}
      steps={[
        {
          title: "Capture",
          desc: "Smart forms and exit-intent popups capture visitor information at the right moment"
        },
        {
          title: "Nurture",
          desc: "Automated email sequences guide prospects through your sales funnel"
        },
        {
          title: "Convert",
          desc: "Behavioral triggers and personalized offers close deals automatically"
        }
      ]}
      features={[
        "Smart lead capture forms with conditional logic",
        "Exit-intent popups and scroll-based triggers",
        "Behavioral tracking and visitor scoring",
        "Automated email nurture sequences",
        "Dynamic content personalization",
        "A/B testing for landing pages and forms",
        "Abandoned cart recovery workflows",
        "Real-time visitor identification and alerts"
      ]}
      integrations={[
        "WordPress", "Shopify", "Webflow", "Mailchimp", "ConvertKit", 
        "ActiveCampaign", "Stripe", "PayPal", "Google Analytics"
      ]}
      kpis={[
        "+150% increase in lead capture rate",
        "40% improvement in email-to-sale conversion",
        "65% reduction in cart abandonment",
        "+80% increase in customer lifetime value",
        "25% improvement in overall website conversion rate"
      ]}
    />
  );
}