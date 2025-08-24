import SystemTemplate from './SystemTemplate';

export default function ProjectManagement() {
  return (
    <SystemTemplate
      title="Project Management System"
      tagline="Automate project planning, tracking, and delivery to ensure on-time completion and team productivity."
      painPoints={[
        "Projects consistently running over budget and behind schedule",
        "Poor visibility into project status and team workload",
        "Manual reporting and status updates consuming valuable time",
        "Difficulty coordinating tasks across multiple team members and departments"
      ]}
      steps={[
        {
          title: "Plan",
          desc: "AI analyzes project requirements and creates optimized timelines and resource allocation"
        },
        {
          title: "Track",
          desc: "Automated progress monitoring and real-time status updates across all project elements"
        },
        {
          title: "Deliver",
          desc: "Smart notifications and workflow automation ensure deadlines are met consistently"
        }
      ]}
      features={[
        "AI-powered project timeline and resource optimization",
        "Automated task assignment and workload balancing",
        "Real-time progress tracking and reporting",
        "Smart deadline management and risk alerts",
        "Team collaboration and communication automation",
        "Budget tracking and expense management",
        "Client portal with automated status updates",
        "Performance analytics and project insights"
      ]}
      integrations={[
        "Asana", "Monday.com", "Trello", "Jira", "Slack", 
        "Microsoft Teams", "Google Workspace", "Notion", "ClickUp"
      ]}
      kpis={[
        "95% on-time project delivery rate",
        "40% reduction in project management overhead",
        "+60% improvement in team productivity",
        "30% decrease in project budget overruns",
        "85% improvement in client satisfaction scores"
      ]}
    />
  );
}