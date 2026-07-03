import { Post } from "@/lib/supabase"

export const FALLBACK_POSTS: Post[] = [
  {
    id: "post-1",
    slug: "how-csm-teams-reclaim-8-hours-weekly-with-automated-prep",
    title: "How Customer Success Teams Reclaim 8+ Hours a Week with Automated Meeting Prep",
    excerpt:
      "Discover how top-performing Customer Success Managers (CSMs) eliminate 45 minutes of manual note-digging across Slack, Zendesk, and CRM before every client conversation.",
    cover_image: "/blog/csm-automation.jpg",
    published: true,
    published_at: "2026-07-01T10:00:00Z",
    created_at: "2026-07-01T10:00:00Z",
    updated_at: "2026-07-01T10:00:00Z",
    content: `
### Executive Summary
Customer Success Managers spend an average of **8 to 15 hours every week** manually piecing together customer context before scheduled check-ins and Quarterly Business Reviews (QBRs). By implementing automated pre-call synthesis, modern SaaS teams reduce prep time from **45 minutes down to 5 minutes per meeting**—saving over **$22,880 annually per CSM** in recovered productivity.

---

### The Hidden Cost of Context Switching

In the modern B2B SaaS ecosystem, customer knowledge is dangerously fragmented. Before jumping onto a Zoom call with an enterprise account, a CSM typically performs a stressful 4-step scramble:

1. **Digging through Slack:** Scrolling through endless internal channels (#accounts-acme) to check if engineering mentioned any unresolved P1 bugs.
2. **Auditing Zendesk Tickets:** Opening support queues to see if the customer experienced frustration over the weekend.
3. **Checking Salesforce/HubSpot:** Verifying renewal dates, ARR expansion opportunities, and executive stakeholder changes.
4. **Skimming Past Call Transcripts:** Opening Gong or Zoom AI summaries to recall what was promised 30 days ago.

This manual archaeology takes roughly **45 minutes per call**. If a CSM manages 30 accounts and runs 12 customer calls a week, that equates to **9 full hours lost every week** just doing administrative data retrieval.

---

### Why Traditional Dashboards Fail

Most SaaS leaders try to solve this problem by buying complex, million-dollar customer platforms. Yet, CSM adoption remains dismally low. Why? Because **heavy dashboards require context switching away from workflow tools**.

When a CSM gets a calendar notification 10 minutes before a renewal call, they do not have time to log into a slow CRM, run custom filters, and interpret complex data tables. They need answers instantly.

---

### The NexaWorks Paradigm: Zero-Click 1-Page Executive Briefs

Instead of forcing your team to adapt to another clunky portal, **NexaWorks** flips the model. As a lightweight Chrome extension, NexaWorks works silently in the background:

* **Automatic Calendar Detection:** It detects upcoming customer meetings on Google Calendar or Outlook 5 minutes before kickoff.
* **Multi-Source Synthesis:** It securely connects to Slack, Zendesk, and your CRM via encrypted API bridges.
* **Instant Actionable Brief:** It delivers a crisp, 1-page executive summary highlighting health scores, recent support sentiment, open product requests, and exact talking points.

> *"Before NexaWorks, our team spent Friday afternoons preparing slide decks and gathering account history. Now, our CSMs walk into every call with complete clarity in under 5 minutes."*  
> **— VP of Customer Success, Series C SaaS Platform**

---

### Calculate Your Team's ROI

If your team manages more than 15 B2B accounts, manual prep is directly eroding your Net Revenue Retention (NRR). Reclaiming those 8 hours allows CSMs to focus on proactive strategic outreach, upselling, and relationship building rather than tab-switching archaeology.

**Ready to see it in action?** [Apply for Beta Access](https://calendly.com/nexaworkss/waitlist) today or try our live interactive ROI calculator on the homepage.
    `.trim(),
  },
  {
    id: "post-2",
    slug: "the-2026-guide-to-b2b-meeting-intelligence",
    title: "The 2026 Guide to B2B Meeting Intelligence: Beyond Simple Transcription",
    excerpt:
      "Why transcription bots like Otter and Fireflies are no longer enough for enterprise sales and account teams—and how pre-call intelligence is dominating 2026.",
    cover_image: "/blog/meeting-prep.jpg",
    published: true,
    published_at: "2026-06-28T14:30:00Z",
    created_at: "2026-06-28T14:30:00Z",
    updated_at: "2026-06-28T14:30:00Z",
    content: `
### Executive Summary
Between 2023 and 2025, post-call transcription bots saturated the market. While having searchable transcripts is valuable, **post-call AI does nothing to prevent embarrassing mistakes during the meeting**. In 2026, the competitive edge has shifted from *post-call transcription* to **pre-call synthesis and live account intelligence**.

---

### The Post-Call Transcription Trap

We have all experienced it: four different AI note-takers join a meeting, record the transcript, and send out automated bullet points afterward. But ask any VP of Sales or Customer Success what their biggest pain point is, and they will tell you:

> *"Our problem isn't recording meetings after they happen. Our problem is walking into calls unprepared because we missed a critical internal Slack thread or support ticket."*

Post-call tools are reactive. They document what happened, but they cannot save a renewal call if the Account Executive was unaware of a severe billing bug reported two hours prior.

---

### The Evolution: Pre-Call Synthesis

Pre-call intelligence solves the context gap before the conversation starts. By synthesizing cross-platform data streams:

1. **Sentiment Early Warning:** Identifying negative sentiment spikes in Zendesk before the customer mentions them on the call.
2. **Cross-Department Alignment:** Ensuring Sales knows what Engineering promised in internal Slack channels.
3. **Tailored Agenda Generation:** Suggesting exact conversation openers based on the customer's actual product usage data.

---

### How NexaWorks Leads the 2026 Wave

NexaWorks was designed from day one to operate at the intersection of preparation and execution. Operating directly within your browser, it bridges the gap between messy operational data and high-stakes executive conversations.

* **Privacy-First Architecture:** Your sensitive CRM and Slack tokens never train public LLMs.
* **Instant Browser Overlay:** Access your account brief inside Google Meet, Zoom, or Salesforce with a single keyboard shortcut (\`Cmd + Shift + K\`).

Stop settling for post-call summaries. Upgrade your team to **pre-call intelligence** today.
    `.trim(),
  },
  {
    id: "post-3",
    slug: "preventing-enterprise-churn-with-proactive-signal-detection",
    title: "Preventing Enterprise Churn: How to Detect Account Risks 30 Days Early",
    excerpt:
      "Learn the three subtle signals that predict B2B customer churn before they ever mention cancelling their contract, and how automated workflows alert your team instantly.",
    cover_image: "/blog/churn-prevention.jpg",
    published: true,
    published_at: "2026-06-20T09:15:00Z",
    created_at: "2026-06-20T09:15:00Z",
    updated_at: "2026-06-20T09:15:00Z",
    content: `
### Executive Summary
Enterprise churn rarely happens overnight. In 92% of B2B SaaS cancellations, subtle warning signs appear across communication channels **30 to 60 days before contract non-renewal**. Detecting these micro-signals early can improve Net Revenue Retention (NRR) by up to **14 points**.

---

### The 3 Silent Killers of B2B Accounts

When an account churns, post-mortem reviews almost always uncover red flags that were buried in daily noise:

#### 1. Champion Silence
Your primary stakeholder stops replying to check-in emails within 24 hours, or delegates monthly syncs to a junior team member.
#### 2. Support Velocity Shifts
A sudden spike in tickets related to core workflow integrations—or worse, a complete drop to zero support tickets from a historically active team.
#### 3. Shadow Sentiment in Slack
Shared Connect channels (#client-acme) transition from collaborative emoji reactions to formal, short, and transactional messages.

---

### Automating Signal Detection Without Alert Fatigue

Human CSMs cannot manually monitor 40 different Slack channels and CRM history logs every morning. When companies set up basic keyword alerts, teams experience severe alert fatigue and end up ignoring notifications entirely.

**The Solution:** Intelligent contextual synthesis. By leveraging automated pre-call auditing, NexaWorks surfaces churn indicators precisely when it matters most—right before your scheduled account review.

---

### Take Control of Your Revenue

Don't wait for your customer to send a cancellation notice. Equip your Customer Success organization with proactive account intelligence. Explore [NexaWorks Case Studies](/case-studies) to see how industry leaders protect millions in enterprise ARR.
    `.trim(),
  },
]
