export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  logoUrl: string;
  industry: string;
  highlightMetric: string;
  metricLabel: string;
  constraint: string;
  solution: string;
  results: string[];
  testimonial: string;
  authorName: string;
  authorRole: string;
  impact: string;
  summary: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'magic-ai',
    slug: 'magic-ai',
    title: 'Magic AI',
    logoUrl: '/logos/placeholder.png',
    industry: 'Developer Tools & AI Infrastructure',
    highlightMetric: '7.5 hrs / wk',
    metricLabel: 'Saved per CSM on technical prep',
    summary: 'How Magic AI’s Customer Success team automated pre-call research across GitHub, Zendesk, and Slack Connect—saving 7.5 hours weekly per CSM and lifting enterprise expansion revenue by 24%.',
    constraint: "With developer clients reporting highly technical feedback across multiple Slack channels and Zendesk support tickets, Magic AI’s CSMs were spending over 90 minutes before every enterprise account review manually piecing together code issues, ticket statuses, and usage logs.",
    solution: "NexaWorks connected directly to their Slack channels and support stack via OAuth. Exactly 5 minutes before every technical account sync, CSMs receive an executive brief synthesizing open feature requests, recent bug resolutions, and adoption sentiment.",
    results: [
      "Time Reclaimed: Saved 7.5 hours per CSM weekly on pre-call data digging across GitHub and Zendesk.",
      "First-Call Resolution: Achieved a 94% first-call resolution rate during quarterly technical check-ins.",
      "Expansion Lift: Surfacing product adoption signals prior to calls lifted annual contract expansion by 24%."
    ],
    testimonial: "In developer tools, walking into a customer call without knowing their open bugs is a fatal mistake. NexaWorks gives our CSMs complete X-ray vision across Slack and Zendesk 5 minutes before every meeting.",
    authorName: "Alex Rivera",
    authorRole: "Head of Customer Success @ Magic AI",
    impact: "Empowers technical account teams to focus 100% on proactive architecture guidance rather than reactive ticket forensic investigations."
  },
  {
    id: 'sutra-hr',
    slug: 'sutra-hr',
    title: 'Sutra HR',
    logoUrl: '/logos/placeholder.png',
    industry: 'HR Tech & Talent Advisory',
    highlightMetric: '98% Faster',
    metricLabel: 'QBR data compilation speed',
    summary: 'How Sutra HR eliminated account blind spots across 40+ active client pipelines, reducing QBR prep time from 4 hours to just 5 minutes while achieving zero customer churn over 2 quarters.',
    constraint: "Sutra HR's account managers handled rapid communication across dozens of client Slack channels and email threads regarding hiring mandates. When preparing for Quarterly Business Reviews (QBRs), account leads wasted 4+ hours digging through email archives and CRM notes to summarize candidate placement histories and feedback.",
    solution: "NexaWorks deployed across their Google Workspace and HubSpot CRM. The extension automatically generates structured client health summaries and highlights unresolved hiring feedback prior to every weekly check-in.",
    results: [
      "Instant Preparation: Replaced 4 hours of manual CRM note compilation with a 5-minute automated briefing.",
      "Zero Preventable Churn: Achieved 100% retention across mid-market corporate clients by flagging early dissatisfaction signals.",
      "Complete Compliance: 100% of account managers enter client check-ins with verified historical placement context."
    ],
    testimonial: "Before NexaWorks, compiling our quarterly client reviews felt like doing forensic accounting. Now our account managers walk into every client meeting with a crisp 1-page executive summary prepared automatically.",
    authorName: "Priya Sharma",
    authorRole: "VP of Client Relations @ Sutra HR",
    impact: "Transforms client relationship management into a streamlined, high-speed workflow that scales effortlessly with client volume."
  },
  {
    id: 'epi-scholar',
    slug: 'epi-scholar',
    title: 'EPi Scholar & Epicred',
    logoUrl: '/logos/placeholder.png',
    industry: 'Higher EdTech & Credentialing',
    highlightMetric: '80% Faster',
    metricLabel: 'Institutional inquiry resolution',
    summary: 'How EPi Scholar & Epicred streamlined onboarding and support syncs for institutional partners, cutting escalation response times by 80% and increasing renewal rates to 96%.',
    constraint: "Serving university administrators and academic deans required flawless tracking of implementation milestones and support tickets. During high-volume semester onboarding, CSMs struggled to keep up with scattered support inquiries across email and helpdesk platforms, leading to delayed responses during critical renewal windows.",
    solution: "By silently aggregating institutional support history and implementation timelines into automated pre-meeting briefs, NexaWorks empowered account managers to address university concerns proactively before they escalated.",
    results: [
      "Rapid Resolution: Cut administrator escalation turnaround times by 80% across 50+ institutional partners.",
      "Institutional Loyalty: Increased annual institutional software renewal rates to 96%.",
      "Proactive Bandwidth: Reclaimed 15+ hours per month per CSM to run strategic campus adoption workshops."
    ],
    testimonial: "University stakeholders expect seamless continuity. NexaWorks ensures that even if a CSM takes over a new university account, they have the entire institutional history condensed into a 1-page brief in seconds.",
    authorName: "Marcus Vance",
    authorRole: "Director of Partner Success @ EPi Scholar",
    impact: "Provides institutional software providers the reliability and historical memory needed to retain high-value academic contracts indefinitely."
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug);
}
