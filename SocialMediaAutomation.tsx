import SystemTemplate from './SystemTemplate';

export default function SocialMediaAutomation() {
  return (
    <SystemTemplate
      title="Social Media Automation System"
      tagline="Maintain consistent social media presence with AI-generated content, automated posting, and engagement management."
      painPoints={[
        "Struggling to maintain consistent posting across multiple social platforms",
        "Spending hours creating content that doesn't drive meaningful engagement",
        "Missing opportunities to engage with followers and potential customers",
        "No systematic way to measure social media ROI and performance"
      ]}
      steps={[
        {
          title: "Create",
          desc: "AI generates engaging content tailored to your brand voice and audience preferences"
        },
        {
          title: "Schedule",
          desc: "Automated posting system optimizes timing and frequency across all platforms"
        },
        {
          title: "Engage",
          desc: "Smart monitoring and response system manages comments, messages, and mentions"
        }
      ]}
      features={[
        "AI-powered content creation and curation",
        "Multi-platform scheduling and posting automation",
        "Automated engagement and community management",
        "Hashtag research and optimization",
        "Social media analytics and performance tracking",
        "Influencer outreach and collaboration management",
        "Crisis monitoring and brand reputation management",
        "Social commerce integration and automation"
      ]}
      integrations={[
        "Facebook", "Instagram", "Twitter", "LinkedIn", "TikTok", 
        "YouTube", "Pinterest", "Buffer", "Hootsuite"
      ]}
      kpis={[
        "300% increase in consistent posting frequency",
        "+150% improvement in engagement rates",
        "80% reduction in content creation time",
        "+200% growth in social media followers",
        "90% faster response time to customer inquiries"
      ]}
    />
  );
}