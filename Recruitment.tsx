import SystemTemplate from './SystemTemplate';

export default function Recruitment() {
  return (
    <SystemTemplate
      title="Recruitment System"
      tagline="Find, screen, and hire top talent faster with AI-powered candidate sourcing and automated interview processes."
      painPoints={[
        "Spending weeks sorting through hundreds of unqualified resumes",
        "Missing great candidates because they're buried in application volume",
        "Inconsistent interview processes leading to poor hiring decisions",
        "Long time-to-hire causing you to lose top candidates to competitors"
      ]}
      steps={[
        {
          title: "Source",
          desc: "AI searches multiple platforms to find candidates matching your exact requirements"
        },
        {
          title: "Screen",
          desc: "Automated screening interviews and skills assessments filter top candidates"
        },
        {
          title: "Match",
          desc: "Smart matching algorithm ranks candidates based on fit and likelihood to accept"
        }
      ]}
      features={[
        "AI-powered candidate sourcing from 20+ job boards",
        "Automated resume screening and ranking",
        "Video interview scheduling and management",
        "Skills-based assessment automation",
        "Candidate communication and nurturing sequences",
        "Interview feedback collection and analysis",
        "Offer management and negotiation tracking",
        "Onboarding workflow automation"
      ]}
      integrations={[
        "LinkedIn Recruiter", "Indeed", "Glassdoor", "AngelList", "BambooHR", 
        "Workday", "ATS systems", "Calendly", "Zoom"
      ]}
      kpis={[
        "75% reduction in time-to-hire",
        "5x increase in qualified candidate pipeline",
        "90% improvement in interview scheduling efficiency",
        "+50% increase in offer acceptance rates",
        "80% reduction in recruiter administrative tasks"
      ]}
    />
  );
}