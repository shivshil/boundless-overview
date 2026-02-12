import { useState } from "react";

const solutions = [
  {
    id: 1,
    name: "Legacy System Bridge Agent",
    subtitle: "Computer Use + MCP = Your Desktop IS the API",
    painPoint: "Profitable $2-20M businesses are trapped in legacy software (ServiceTitan, Knowify, QuickBooks Desktop, custom ERPs) that has no API. Staff spend 2-4 hours daily copying data between screens manually. Every new hire multiplies the problem.",
    whatChanged: "Claude Computer Use (production-ready Jan 2026, Opus 4.5 scoring 66.3% on OSWorld) + Claude Cowork (launched Windows Feb 11, 2026) can now see screens, click buttons, fill forms, and move data between ANY software — even mainframes and Citrix apps. No API required. MCP connectors standardize the handoffs.",
    positioning: "\"We eliminate the copy-paste tax on your team. Our AI agent watches how your best admin moves data between systems, then does it 24/7 at machine speed. No software changes. No new tools to learn. It works with what you already have.\"",
    roi: [
      { metric: "Hours saved per week on manual data entry", target: "15-30 hrs/week recovered", timeline: "Week 3" },
      { metric: "Error rate on cross-system data transfer", target: "Reduce from ~8% to <1%", timeline: "Week 4" },
      { metric: "Headcount redeployment to revenue activities", target: "1-2 FTEs freed up ($50-120K/yr value)", timeline: "Month 2" }
    ],
    techStack: ["Claude Computer Use API (Opus 4.5)", "Docker + gVisor sandboxing", "n8n for orchestration", "PyAutoGUI for desktop control", "MCP connectors per legacy system"],
    implementationTime: "2-4 weeks",
    otherStreams: ["Process documentation (SOPs auto-generated from agent's actions)", "Data normalization layer for future integrations", "Training data capture for eventual API migration", "Audit trail / compliance logging"],
    flags: [
      "Prompt injection risk — malicious content on screen can hijack agent. Requires network allowlisting + human-in-loop for destructive actions",
      "Cost per task: $0.50-$2.00 per 50-step workflow (screenshot tokens). Must be high-value tasks to justify",
      "11.2% attack success rate even with safety mitigations. Not for financial transactions without human approval gate",
      "Requires dedicated VM/Docker container per client — not multi-tenant by default"
    ],
    difficulty: "HARD",
    mrr: "$5,000-8,000/mo",
    color: "#DC2626"
  },
  {
    id: 2,
    name: "Agentic Sales Pipeline Orchestrator",
    subtitle: "Multi-Agent SDR That Prospects → Qualifies → Books → Nurtures",
    painPoint: "Growing $2-20M businesses spend $60-150K/year on SDRs who manually prospect, send templated outreach, qualify responses, and book meetings. 80% of their time is mechanical. Lead response time averages 3+ days. Every hour of delay drops conversion probability.",
    whatChanged: "Multi-agent orchestration frameworks matured in Q4 2025. n8n's AI Agent nodes now support self-correcting workflows. Instantly's built-in AI responder replaces custom outbound flows. VAPI voice agents can cold-call from a list. The autonomous SDR stack is finally reliable enough for production.",
    positioning: "\"Your best salesperson's brain, running 24/7 across every channel. We don't replace your closers — we give them 5x more qualified conversations by automating everything before the handshake.\"",
    roi: [
      { metric: "Lead response time", target: "From 3+ days to <60 seconds", timeline: "Week 2" },
      { metric: "Qualified meetings booked per month", target: "2-3x increase", timeline: "Month 2" },
      { metric: "Cost per qualified meeting", target: "60-70% reduction vs human SDR", timeline: "Month 3" }
    ],
    techStack: ["n8n (self-hosted) for agent orchestration", "Claude API for qualification reasoning", "Instantly for email warmup + outbound", "VAPI for voice outreach", "GHL or HubSpot CRM integration via MCP"],
    implementationTime: "2-3 weeks",
    otherStreams: ["ICP refinement from agent's qualification data", "Objection pattern library (auto-extracted)", "Sales playbook documentation", "CRM hygiene / data cleanup", "Ad spend optimization (feed conversion data back to campaigns)"],
    flags: [
      "Email deliverability requires 2-3 week warmup period — results aren't instant",
      "Voice AI still has uncanny valley issues — some prospects react negatively",
      "Requires clean CRM data to start. Garbage in = garbage out",
      "Compliance: CAN-SPAM, TCPA for voice. Must have proper opt-in infrastructure"
    ],
    difficulty: "MEDIUM",
    mrr: "$3,500-5,000/mo",
    color: "#2563EB"
  },
  {
    id: 3,
    name: "AI Financial Controller",
    subtitle: "Continuous Reconciliation + Cash Flow Forecasting Agent",
    painPoint: "The #1 silent killer of profitable $5-20M businesses: financial blindness between monthly closes. Job costing is 3 weeks stale. Reconciliation happens monthly (and takes 3-5 days). Cash flow surprises cause emergency borrowing. A Vianai case study showed financial reporting compressed from 20 days to 5 minutes using verified AI agents.",
    whatChanged: "Google Workspace Studio (Dec 2025) allows agentic automation inside Sheets without Apps Script. Claude's 200K+ token context window processes entire chart of accounts in one pass. MCP connectors for QuickBooks, Stripe, and banking APIs create real-time financial data pipelines. Companion verification bots ensure accuracy.",
    positioning: "\"Stop flying blind between monthly closes. Our AI controller monitors every transaction daily, flags anomalies before they compound, and gives you a live P&L you can trust — not a report that's 3 weeks old.\"",
    roi: [
      { metric: "Days to close monthly books", target: "From 5-10 days to 1-2 days", timeline: "Month 2" },
      { metric: "Revenue leakage from missed billing / reconciliation errors", target: "Capture 2-5% previously lost ($40-250K/yr on $2-5M)", timeline: "Month 3" },
      { metric: "Hours spent on financial reconciliation", target: "80% reduction (CFO/controller time freed)", timeline: "Month 1" }
    ],
    techStack: ["Claude API with companion verification bot pattern", "QuickBooks API / Xero API via MCP", "Stripe MCP connector", "Plaid for banking data", "Google Sheets or Supabase for live dashboard", "n8n for daily scheduled reconciliation runs"],
    implementationTime: "4-6 weeks",
    otherStreams: ["Tax preparation automation (data already structured)", "Vendor payment optimization", "Revenue forecasting models", "Board / investor reporting automation", "Audit preparation packages"],
    flags: [
      "Financial data accuracy is non-negotiable — requires dual-verification (AI + human review) for first 90 days",
      "Banking API access (Plaid) has per-account costs and KYC requirements",
      "GAAP compliance varies by industry — templates need vertical customization",
      "Client trust barrier is HIGH. Accountants/bookkeepers may resist. Position as augmentation, not replacement"
    ],
    difficulty: "HARD",
    mrr: "$5,000-10,000/mo",
    color: "#059669"
  },
  {
    id: 4,
    name: "Cowork-Powered Operations Autopilot",
    subtitle: "Claude Cowork + MCP Connectors = The AI Admin",
    painPoint: "Every $2-20M business has 1-3 people who ARE the operations. They process orders, update spreadsheets, send invoices, file documents, coordinate vendors. When they're sick or quit, the business stops. 76% of organizations admit their processes aren't ready for AI because they're undocumented and person-dependent.",
    whatChanged: "Claude Cowork launched Dec 2025 (Mac) and Feb 11, 2026 (Windows) — now it can access local files, execute multi-step tasks, and connect to external services via MCP connectors. 100s of connectors available (n8n, AWS, Fellow.ai, etc). Global and folder-specific instructions persist across sessions. This is the first time AI can replicate admin workflows without custom code.",
    positioning: "\"Your operations team's most reliable backup. We map your admin's daily workflows, then deploy a digital coworker that handles the repetitive 80% — filing, formatting, scheduling, data entry — so your humans focus on judgment calls and relationships.\"",
    roi: [
      { metric: "Admin hours automated per week", target: "20-40 hrs/week of repetitive tasks", timeline: "Week 3" },
      { metric: "Process documentation coverage", target: "From ~10% to 90% (auto-generated SOPs)", timeline: "Month 1" },
      { metric: "Operational continuity risk score", target: "Eliminate single-point-of-failure dependencies", timeline: "Month 2" }
    ],
    techStack: ["Claude Cowork (desktop agent)", "MCP connectors (n8n, Google Drive, Slack, email)", "Folder-specific instruction files (.claude configs)", "Claude API for complex reasoning steps", "Scheduled Tasks (coming to mobile per Feb 9 leak)"],
    implementationTime: "2-3 weeks",
    otherStreams: ["Complete operations manual auto-generated", "Vendor relationship management automation", "Inventory / supply chain monitoring", "Employee onboarding workflow automation", "Insurance / compliance filing automation"],
    flags: [
      "Cowork is still 'research preview' — expect breaking changes and reliability issues",
      "File system access creates security surface area — needs scoped folder permissions",
      "Currently requires Pro/Max Claude subscription per user ($20-200/mo). Not API-deployable yet",
      "Person-dependent processes must be extracted BEFORE automation (requires 2-4 shadowing sessions)"
    ],
    difficulty: "MEDIUM",
    mrr: "$3,000-6,000/mo",
    color: "#7C3AED"
  },
  {
    id: 5,
    name: "AI Competitive Intelligence & Market Radar",
    subtitle: "Perplexity Pro + Web Scraping Agents = Always-On Market Watch",
    painPoint: "Fast-growing $2-20M companies make pricing, hiring, and product decisions based on what the founder personally observes about competitors. No systematic monitoring. They discover competitor moves weeks or months late. Pricing is gut-feel, not data-driven. Market opportunities pass before they're noticed.",
    positioning: "\"Know what your competitors did this morning before your second coffee. Our AI monitors competitor pricing changes, new hires, product launches, customer reviews, and social activity — then delivers a weekly intelligence brief with specific action recommendations.\"",
    whatChanged: "Perplexity Pro Search + Comet browser (mid 2025) with verification-first architecture makes reliable web research automated. Browser automation via Playwright MCP enables scraping competitor pricing pages and job boards. Claude's 200K context window synthesizes large competitive datasets into executive briefs.",
    roi: [
      { metric: "Competitor pricing change detection time", target: "From weeks/months to same-day", timeline: "Week 2" },
      { metric: "Revenue impact from pricing optimization", target: "3-8% revenue lift from data-driven pricing adjustments", timeline: "Month 3" },
      { metric: "Hours spent on manual market research", target: "10-15 hrs/week → automated", timeline: "Week 3" }
    ],
    techStack: ["Playwright MCP for web monitoring/scraping", "Perplexity API for verified research", "Claude API for synthesis and recommendations", "n8n for scheduled monitoring runs", "Supabase for competitor data warehouse", "Slack/email for alert delivery"],
    implementationTime: "2-3 weeks",
    otherStreams: ["Pricing strategy consulting (data-backed)", "Market sizing for new verticals", "M&A target identification", "Content strategy based on competitor gaps", "Job market intelligence for hiring strategy"],
    flags: [
      "Web scraping legality varies by jurisdiction and target site's ToS — need legal review",
      "Competitor sites change layouts frequently — scrapers require ongoing maintenance",
      "Signal-to-noise ratio: too many alerts = alert fatigue. Must calibrate thresholds carefully",
      "Some industries have limited public data — effectiveness varies by vertical"
    ],
    difficulty: "MEDIUM",
    mrr: "$2,500-5,000/mo",
    color: "#D97706"
  },
  {
    id: 6,
    name: "Multi-Agent Customer Success Engine",
    subtitle: "Churn Prediction + Proactive Outreach + Automated Expansion",
    painPoint: "At $2-20M, churn is the growth killer. A 5% reduction in churn can increase profitability by 25-95%. Most businesses discover churn AFTER the customer leaves — the cancellation email is the first signal. No systematic monitoring of usage patterns, sentiment decline, or expansion readiness signals.",
    whatChanged: "Multi-agent architectures are now production-ready — Gartner predicts 40% of enterprise apps will include task-specific AI agents by 2026. The key shift: agents that reason in loops can now monitor engagement data continuously, detect decline patterns, trigger interventions, and coordinate across channels without human orchestration.",
    positioning: "\"Stop being surprised by cancellations. Our AI monitors every customer touchpoint — support tickets, usage patterns, payment behavior, communication sentiment — and alerts your team with specific save plays BEFORE the customer decides to leave.\"",
    roi: [
      { metric: "Churn rate reduction", target: "25-40% reduction in monthly churn", timeline: "Month 3" },
      { metric: "Net revenue retention", target: "From <100% to 105-115% (expansion revenue identified)", timeline: "Month 4" },
      { metric: "Customer health score accuracy", target: ">80% prediction of at-risk accounts 30 days early", timeline: "Month 2" }
    ],
    techStack: ["Claude API for sentiment analysis + reasoning", "Supabase for customer health scoring database", "MCP connectors to CRM, support desk, billing", "n8n for multi-agent orchestration", "Twilio/email for automated outreach sequences", "Slack alerts for CS team action items"],
    implementationTime: "4-6 weeks",
    otherStreams: ["Customer segmentation refinement", "Upsell/cross-sell playbook development", "NPS/CSAT automation", "Customer onboarding optimization", "Support knowledge base creation", "QBR (Quarterly Business Review) automation"],
    flags: [
      "Requires 6+ months of historical customer data to train prediction models effectively",
      "False positives in churn prediction can trigger unwanted outreach — calibration period needed",
      "Must integrate with existing CRM and support tools — integration complexity varies wildly",
      "CS team must actually ACT on alerts. Tool without process change = expensive dashboard nobody uses"
    ],
    difficulty: "HARD",
    mrr: "$5,000-8,000/mo",
    color: "#0891B2"
  },
  {
    id: 7,
    name: "Voice-First Field Intelligence System",
    subtitle: "VAPI + Plaud + RAG = Field Teams That Never Forget",
    painPoint: "Construction, trades, healthcare, and field services businesses lose critical information between the field and the office. Technicians call in job details that get transcribed wrong. Site meetings generate action items nobody tracks. Equipment manuals are in binders nobody reads. Estimates take 1-2 full days because every job starts from scratch.",
    whatChanged: "Voice AI hit an inflection point: VAPI handles telephony + STT + LLM + TTS in one API. Plaud and WhisperFlow capture field conversations with hardware devices. RAG pipelines for technical knowledge bases are production-ready. MCP enables real-time equipment/inventory lookups during voice conversations. Voice agents can now handle complex, domain-specific conversations with technical accuracy.",
    positioning: "\"Your best field tech's brain, available to every crew member in every truck. Call in a job update from the site and the AI handles the rest — CRM update, parts order, schedule change, customer notification. No apps. No typing. Just talk.\"",
    roi: [
      { metric: "Estimate preparation time", target: "From 1-2 days to 2-4 hours per estimate", timeline: "Month 2" },
      { metric: "Field-to-office data accuracy", target: "From ~70% to 95%+ (eliminates miscommunication)", timeline: "Month 1" },
      { metric: "First-time fix rate", target: "15-25% improvement (right parts, right info on first visit)", timeline: "Month 3" }
    ],
    techStack: ["VAPI for voice agent platform", "Plaud/WhisperFlow for field audio capture", "Claude API for technical reasoning + extraction", "Supabase vectors for equipment/procedure RAG", "MCP connectors to ServiceTitan/Jobber/Housecall Pro", "Twilio for SMS follow-ups"],
    implementationTime: "3-5 weeks",
    otherStreams: ["Complete equipment knowledge base creation", "Training program for new field techs (AI-assisted)", "Safety compliance documentation", "Customer communication automation (job status updates)", "Warranty and recall tracking"],
    flags: [
      "Audio quality from job sites (noise, wind, echo) degrades transcription accuracy significantly",
      "Domain-specific terminology requires custom vocabulary training — generic models miss trade jargon",
      "Field workers may resist 'being recorded' — change management and privacy policies critical",
      "Vertical-specific: each trade (HVAC, plumbing, electrical, construction) needs separate knowledge bases"
    ],
    difficulty: "HARD",
    mrr: "$4,000-7,000/mo",
    color: "#BE185D"
  },
  {
    id: 8,
    name: "AI-Powered Hiring & Talent Pipeline Agent",
    subtitle: "Autonomous Recruiting Workflow for Teams Without HR",
    painPoint: "The #1 constraint on $2-20M growth is hiring. Founders spend 10-15 hours/week on recruiting: writing job posts, screening resumes, scheduling interviews, following up with candidates. Time-to-hire averages 42 days. Top candidates accept other offers while the founder is too busy with operations to respond. 47% of SMBs cite lack of internal expertise as their top AI barrier — the same problem applies to hiring talent.",
    whatChanged: "Agentic AI can now handle the full recruiting workflow autonomously. Browser automation + MCP enables posting to job boards, screening applicant tracking systems, and scheduling interviews without custom integrations. Claude's reasoning models can evaluate candidates against role-specific criteria with structured scoring. Multi-agent coordination handles the end-to-end pipeline.",
    positioning: "\"Stop losing A-players because you took 5 days to respond. Our AI screens every applicant within hours, schedules top candidates automatically, and gives you a scorecard so you only spend time on final-round conversations with pre-qualified people.\"",
    roi: [
      { metric: "Time-to-first-response to applicants", target: "From 3-5 days to <4 hours", timeline: "Week 2" },
      { metric: "Founder hours spent on recruiting per week", target: "From 10-15 hrs to 2-3 hrs", timeline: "Month 1" },
      { metric: "Time-to-hire", target: "From 42 days average to 20-25 days", timeline: "Month 3" }
    ],
    techStack: ["Claude API for resume analysis + scoring", "n8n for workflow automation", "Calendly API for interview scheduling", "Claude Cowork for ATS interaction (no API needed)", "Email automation for candidate communication", "Supabase for talent pipeline database"],
    implementationTime: "2-3 weeks",
    otherStreams: ["Job description optimization", "Employer brand content generation", "Interview question libraries by role", "Onboarding workflow automation", "Performance review frameworks", "Compensation benchmarking"],
    flags: [
      "AI hiring bias is a legal minefield — EEOC guidance, NYC Local Law 144, Illinois AIPA all apply",
      "Must NEVER use AI as sole decision-maker — human must review all recommendations",
      "Candidates may react negatively to AI-screened processes — transparency about AI use is increasingly required by law",
      "Resume parsing accuracy for non-standard formats (PDFs with graphics, portfolios) is still imperfect"
    ],
    difficulty: "MEDIUM",
    mrr: "$2,500-4,000/mo",
    color: "#4F46E5"
  }
];

const difficultyColor = { EASY: "#059669", MEDIUM: "#D97706", HARD: "#DC2626" };

export default function BoundlessAISolutions() {
  const [selected, setSelected] = useState(0);
  const [expandedSection, setExpandedSection] = useState("all");
  const sol = solutions[selected];

  return (
    <div style={{ 
      fontFamily: "'IBM Plex Sans', 'Segoe UI', sans-serif", 
      background: "#0A0A0F", 
      color: "#E4E4E7", 
      minHeight: "100vh",
      padding: "0"
    }}>
      {/* Header */}
      <div style={{ 
        padding: "28px 32px 20px", 
        borderBottom: "1px solid #1E1E2E",
        background: "linear-gradient(180deg, #111118 0%, #0A0A0F 100%)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
          <div>
            <h1 style={{ 
              fontSize: 22, fontWeight: 700, margin: 0, color: "#FAFAFA",
              letterSpacing: "-0.5px"
            }}>
              BOUNDLESS AI — External Market Opportunities
            </h1>
            <p style={{ fontSize: 13, color: "#71717A", margin: "4px 0 0", fontWeight: 400 }}>
              8 high-leverage solutions for $2-20M businesses • Last 90 days of AI tooling breakthroughs • Feb 2026
            </p>
          </div>
          <div style={{ 
            background: "#18181B", border: "1px solid #27272A", borderRadius: 8,
            padding: "8px 14px", fontSize: 11, color: "#A1A1AA", lineHeight: 1.6
          }}>
            <span style={{ color: "#FAFAFA", fontWeight: 600 }}>New tooling since Nov '25:</span>{" "}
            Claude Cowork • Computer Use (prod) • MCP ecosystem • Google Workspace Studio • Opus 4.5/4.6 • VAPI maturation • n8n AI Agent nodes • Multi-agent orchestration
          </div>
        </div>
      </div>

      {/* Solution Tabs */}
      <div style={{ 
        display: "flex", flexWrap: "wrap", gap: 0, 
        borderBottom: "1px solid #1E1E2E",
        background: "#0D0D14",
        overflowX: "auto"
      }}>
        {solutions.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setSelected(i)}
            style={{
              padding: "14px 16px",
              background: selected === i ? "#18181B" : "transparent",
              border: "none",
              borderBottom: selected === i ? `2px solid ${s.color}` : "2px solid transparent",
              color: selected === i ? "#FAFAFA" : "#71717A",
              cursor: "pointer",
              fontSize: 12,
              fontWeight: selected === i ? 600 : 400,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
              transition: "all 0.15s ease"
            }}
          >
            <span style={{ 
              color: s.color, fontSize: 10, fontWeight: 700, marginRight: 6,
              opacity: selected === i ? 1 : 0.5
            }}>
              {String(s.id).padStart(2, "0")}
            </span>
            {s.name}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ padding: "24px 32px", maxWidth: 1100 }}>
        {/* Title Block */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, margin: 0, color: "#FAFAFA", letterSpacing: "-0.5px" }}>
              {sol.name}
            </h2>
            <span style={{ 
              background: difficultyColor[sol.difficulty] + "20",
              color: difficultyColor[sol.difficulty],
              padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600
            }}>
              {sol.difficulty}
            </span>
            <span style={{ 
              background: sol.color + "20", color: sol.color,
              padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600
            }}>
              {sol.mrr} MRR
            </span>
            <span style={{ 
              background: "#27272A", color: "#A1A1AA",
              padding: "3px 10px", borderRadius: 4, fontSize: 11, fontWeight: 500
            }}>
              {sol.implementationTime} to deploy
            </span>
          </div>
          <p style={{ fontSize: 14, color: sol.color, margin: 0, fontWeight: 500, fontStyle: "italic" }}>
            {sol.subtitle}
          </p>
        </div>

        {/* Pain Point */}
        <Section title="THE PAIN POINT" color={sol.color} expanded={expandedSection} id="pain" onToggle={setExpandedSection}>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#D4D4D8", margin: 0 }}>{sol.painPoint}</p>
        </Section>

        {/* What Changed */}
        <Section title="WHAT CHANGED IN LAST 90 DAYS" color={sol.color} expanded={expandedSection} id="changed" onToggle={setExpandedSection}>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#D4D4D8", margin: 0 }}>{sol.whatChanged}</p>
        </Section>

        {/* Positioning */}
        <Section title="HOW TO POSITION IT" color={sol.color} expanded={expandedSection} id="position" onToggle={setExpandedSection}>
          <div style={{ 
            background: "#18181B", border: `1px solid ${sol.color}30`, borderRadius: 8,
            padding: "16px 20px", borderLeft: `3px solid ${sol.color}`
          }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "#FAFAFA", margin: 0, fontStyle: "italic" }}>
              {sol.positioning}
            </p>
          </div>
        </Section>

        {/* ROI */}
        <Section title="TOP 3 MEASURABLE ROI" color={sol.color} expanded={expandedSection} id="roi" onToggle={setExpandedSection}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {sol.roi.map((r, i) => (
              <div key={i} style={{ 
                display: "grid", gridTemplateColumns: "1fr 1fr 100px", gap: 16,
                background: "#18181B", borderRadius: 8, padding: "14px 18px",
                border: "1px solid #27272A", alignItems: "center"
              }}>
                <div>
                  <div style={{ fontSize: 11, color: "#71717A", fontWeight: 500, marginBottom: 2 }}>METRIC</div>
                  <div style={{ fontSize: 13, color: "#D4D4D8", fontWeight: 500 }}>{r.metric}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#71717A", fontWeight: 500, marginBottom: 2 }}>TARGET</div>
                  <div style={{ fontSize: 13, color: sol.color, fontWeight: 600 }}>{r.target}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "#71717A", fontWeight: 500, marginBottom: 2 }}>BY WHEN</div>
                  <div style={{ fontSize: 13, color: "#FAFAFA", fontWeight: 600 }}>{r.timeline}</div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech Stack */}
        <Section title="TECH STACK" color={sol.color} expanded={expandedSection} id="tech" onToggle={setExpandedSection}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {sol.techStack.map((t, i) => (
              <span key={i} style={{ 
                background: "#18181B", border: "1px solid #27272A", borderRadius: 6,
                padding: "6px 12px", fontSize: 12, color: "#A1A1AA", fontWeight: 500
              }}>
                {t}
              </span>
            ))}
          </div>
        </Section>

        {/* Other Streams */}
        <Section title="OTHER REVENUE STREAMS FROM IMPLEMENTATION" color={sol.color} expanded={expandedSection} id="streams" onToggle={setExpandedSection}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {sol.otherStreams.map((s, i) => (
              <div key={i} style={{ 
                fontSize: 13, color: "#A1A1AA", padding: "8px 12px",
                background: "#18181B", borderRadius: 6, border: "1px solid #1E1E2E"
              }}>
                <span style={{ color: sol.color, marginRight: 8, fontWeight: 700 }}>+</span>{s}
              </div>
            ))}
          </div>
        </Section>

        {/* Flags */}
        <Section title="MAJOR FLAGS" color="#EF4444" expanded={expandedSection} id="flags" onToggle={setExpandedSection}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sol.flags.map((f, i) => (
              <div key={i} style={{ 
                fontSize: 13, lineHeight: 1.6, color: "#FCA5A5", padding: "10px 14px",
                background: "#1C1117", borderRadius: 6, border: "1px solid #3B1120",
                borderLeft: "3px solid #EF4444"
              }}>
                <span style={{ fontWeight: 700, marginRight: 6 }}>⚠</span>{f}
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* Comparison Footer */}
      <div style={{ 
        borderTop: "1px solid #1E1E2E", padding: "20px 32px",
        background: "#0D0D14"
      }}>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: "#71717A", margin: "0 0 12px", letterSpacing: "0.5px" }}>
          QUICK COMPARISON — ALL 8 SOLUTIONS
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr>
                {["Solution", "Difficulty", "MRR", "Deploy Time", "Best For"].map(h => (
                  <th key={h} style={{ 
                    textAlign: "left", padding: "8px 12px", color: "#71717A",
                    borderBottom: "1px solid #27272A", fontWeight: 600, fontSize: 11
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {solutions.map((s, i) => (
                <tr 
                  key={s.id} 
                  onClick={() => setSelected(i)}
                  style={{ 
                    cursor: "pointer", 
                    background: selected === i ? "#18181B" : "transparent",
                    transition: "background 0.1s"
                  }}
                >
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #1E1E2E" }}>
                    <span style={{ color: s.color, fontWeight: 600 }}>{String(s.id).padStart(2, "0")}</span>
                    <span style={{ marginLeft: 8, color: selected === i ? "#FAFAFA" : "#A1A1AA" }}>{s.name}</span>
                  </td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #1E1E2E" }}>
                    <span style={{ color: difficultyColor[s.difficulty], fontWeight: 600 }}>{s.difficulty}</span>
                  </td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #1E1E2E", color: "#D4D4D8" }}>{s.mrr}</td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #1E1E2E", color: "#A1A1AA" }}>{s.implementationTime}</td>
                  <td style={{ padding: "8px 12px", borderBottom: "1px solid #1E1E2E", color: "#71717A", fontSize: 11 }}>
                    {[
                      "Legacy software businesses (trades, manufacturing)",
                      "Any business running paid ads with sales team",
                      "Businesses >$3M with complex revenue streams",
                      "Admin-heavy operations (services, agencies)",
                      "Competitive markets with pricing pressure",
                      "Subscription/recurring revenue businesses",
                      "Field services, construction, healthcare",
                      "Any growing business hiring 5+ roles/year"
                    ][i]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Section({ title, color, children, expanded, id, onToggle }) {
  const isOpen = expanded === "all" || expanded === id;
  return (
    <div style={{ marginBottom: 16 }}>
      <button
        onClick={() => onToggle(isOpen && expanded !== "all" ? "all" : id)}
        style={{
          display: "flex", alignItems: "center", gap: 8, width: "100%",
          background: "none", border: "none", cursor: "pointer", padding: "8px 0",
          fontFamily: "inherit"
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 700, color: color, letterSpacing: "1px" }}>{title}</span>
        <div style={{ flex: 1, height: 1, background: "#27272A" }} />
        <span style={{ fontSize: 12, color: "#52525B" }}>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div style={{ paddingLeft: 0, paddingTop: 4 }}>{children}</div>}
    </div>
  );
}
