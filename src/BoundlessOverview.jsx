import { useState } from "react";

// ─── Utility Components ────────────────────────────────────────────
function AITag({ children }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-800/30">
      ⚡ {children || "AI"}
    </span>
  );
}

function UnverifiedTag() {
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-yellow-950/50 text-yellow-400 border border-yellow-800/30">
      ⚠️ Unverified
    </span>
  );
}

function PriorityBadge({ level }) {
  const colors = {
    P1: "bg-red-950/50 text-red-400 border-red-800/30",
    P2: "bg-orange-950/50 text-orange-400 border-orange-800/30",
    P3: "bg-blue-950/50 text-blue-400 border-blue-800/30",
    P4: "bg-gray-800/50 text-gray-400 border-gray-700/30",
    critical: "bg-red-950/50 text-red-400 border-red-800/30",
    high: "bg-orange-950/50 text-orange-400 border-orange-800/30",
    medium: "bg-blue-950/50 text-blue-400 border-blue-800/30",
    low: "bg-gray-800/50 text-gray-400 border-gray-700/30",
  };
  return (
    <span className={`inline-flex items-center text-xs px-2 py-0.5 rounded-full border ${colors[level] || colors.medium}`}>
      {level}
    </span>
  );
}

function Expandable({ title, accent, badge, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-lg border overflow-hidden" style={{ borderColor: `${accent || "#374151"}40`, background: `${accent || "#111827"}08` }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/[0.02] transition-colors">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-white">{title}</span>
          {badge}
        </div>
        <span className="text-gray-500 text-xs ml-2">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="px-4 pb-4 text-xs text-gray-400 leading-relaxed border-t" style={{ borderColor: `${accent || "#374151"}20` }}>{children}</div>}
    </div>
  );
}

// ─── SECTION 1: BUSINESS MODEL ──────────────────────────────────────
function BusinessModel() {
  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-sm leading-relaxed">
        Ryan operates <strong className="text-white">two businesses in parallel</strong> — a proven cash engine funding an ambitious growth bet. The strategic relationship between them is the core competitive advantage.
      </p>

      {/* Two Entity Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-xl border border-emerald-800/30 bg-emerald-950/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">💰</span>
            <h3 className="text-sm font-bold text-emerald-400">ASSISTANT LAUNCH</h3>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-900/30 text-emerald-300">Cash Engine</span>
          </div>
          <p className="text-xs text-gray-300 mb-3">Fully managed executive assistant service. Pairs AI-trained, dedicated EAs with fast-growth startup founders ($3–50M revenue). Filipino talent, top 1% of applicants, custom onboarding with 4-Week Accelerator Guarantee.</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="text-emerald-400">Proven & growing</span></div>
            <div className="flex justify-between"><span className="text-gray-500">ARR</span><span className="text-white">~$2.5M+ (target $6.1M EOY)</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Avg MRR/client</span><span className="text-white">$2,750</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Customers</span><span className="text-white">~100</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Win rate</span><span className="text-white">~85%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Churn</span><span className="text-white">~7.5%</span></div>
            <div className="flex justify-between"><span className="text-gray-500">CAC (7-day)</span><span className="text-white">$507</span></div>
          </div>
        </div>

        <div className="rounded-xl border border-blue-800/30 bg-blue-950/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg">🚀</span>
            <h3 className="text-sm font-bold text-blue-400">BOUNDLESS AI</h3>
            <span className="text-xs px-2 py-0.5 rounded bg-blue-900/30 text-blue-300">Growth Bet</span>
          </div>
          <p className="text-xs text-gray-300 mb-3">Repeatable AI implementation service for SMBs ($2–20M). Modular, packageable solutions deployed by trained "AI Architects." Positioned as "the Design Pickle of AI" — subscription-based, productized service.</p>
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="text-yellow-400">Pre-revenue, launching Feb 2026</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Target ARR (EOY)</span><span className="text-white">$4.1M</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Tier 1 price</span><span className="text-white">$3,750/mo (2 projects)</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Tier 2 price</span><span className="text-white">~$11K/mo (dedicated + coaching)</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Mastermind members</span><span className="text-white">~30 (15 paying)</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Mastermind price</span><span className="text-white">$6–10K / 6 months</span></div>
            <div className="flex justify-between"><span className="text-gray-500">North Star</span><span className="text-white">$25M ARR → $100M+ exit</span></div>
          </div>
        </div>
      </div>

      {/* Relationship */}
      <div className="rounded-lg border border-gray-700/40 bg-gray-900/30 p-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">How They Feed Each Other</h4>
        <div className="space-y-2 text-xs text-gray-400">
          <p><strong className="text-white">Data advantage:</strong> ~100 Assistant Launch customers = playground for testing AI solutions before selling them. Deep knowledge of SMB challenges, systems, people, and processes.</p>
          <p><strong className="text-white">Talent pipeline:</strong> Same LATAM recruiting infrastructure (Maga, ambassador program, hackathons) sources both EAs and AI Architects. One pipeline, two products.</p>
          <p><strong className="text-white">Customer conversion:</strong> Assistant Launch clients discover AI needs → Boundless upsell. Coaching program members see demos → graduate to implementation.</p>
          <p><strong className="text-white">Ad engine replication:</strong> Assistant Launch's Meta ad funnel (proven $507 CAC) gets replicated for Boundless AI acquisition.</p>
        </div>
      </div>

      {/* What's Proven vs What's a Bet */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg border border-emerald-800/20 bg-emerald-950/5 p-4">
          <h4 className="text-sm font-semibold text-emerald-400 mb-2">✅ What's Proven</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li>• EA service model works at $2.5M+ ARR, growing</li>
            <li>• Meta ad funnel delivers at $507 CAC with ~85% win rate</li>
            <li>• Coaching/mastermind model validated (9 months, 30 members)</li>
            <li>• Proposal Builder AI in production (99% accuracy, 15 min)</li>
            <li>• AI Lead Magnet proven with EA business (6-month track record)</li>
            <li>• Copywriting Agent in production (trained on closed-deal language)</li>
            <li>• Dan Martell ecosystem connection and validation</li>
          </ul>
        </div>
        <div className="rounded-lg border border-yellow-800/20 bg-yellow-950/5 p-4">
          <h4 className="text-sm font-semibold text-yellow-400 mb-2">⚠️ What's a Bet</h4>
          <ul className="space-y-1.5 text-xs text-gray-400">
            <li>• Boundless AI can acquire 10 new clients/month at same CAC</li>
            <li>• AI Architects can be trained and deployed repeatably</li>
            <li>• $3,750/mo price point generates sufficient LTV</li>
            <li>• Modular solutions work across different SMB verticals</li>
            <li>• Tech stack (undecided) can support modular deployment</li>
            <li>• 20% affiliate fee model sustains 40% profitability</li>
            <li>• Market timing: 3-year window to PE exit before disruption</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION 2: REVENUE STREAMS ─────────────────────────────────────
function RevenueStreams() {
  const streams = [
    {
      name: "Assistant Launch — EA Service",
      icon: "👤",
      color: "#10b981",
      revenue: "~$2.5M+ ARR → $6.1M target",
      tag: "future opportunity",
      desc: "Core EA service. Dedicated, AI-trained executive assistants for founders. Part-time and full-time plans. Avg $2,750/mo MRR per client.",
      details: ["~100 active customers", "Top 1% of 1,000 applicants", "Filipino talent, some LATAM", "4-Week Accelerator Guarantee", "No lock-in contracts", "Managed by Robin (COO)"],
      ai: "AI augments EAs (already AI-trained). Future hybrid model: AI handles 85% of routine tasks, EA provides judgment. Churn detection AI could reduce 7.5% → <5%."
    },
    {
      name: "Boundless AI — Implementation Service",
      icon: "🤖",
      color: "#3b82f6",
      revenue: "Pre-revenue → $4.1M ARR target EOY",
      tag: "primary target",
      desc: "Modular AI solutions deployed into SMB client businesses by trained AI Architects. Two tiers: $3,750/mo (2 projects) and ~$11K/mo (dedicated + coaching).",
      details: ["Target: SMBs doing $2–20M revenue", "AI Architects sourced from LATAM (Maga's pipeline)", "Solutions are repeatable, not custom builds", "Each deployment = documented IP for acquisition", "20% affiliate fee partnerships planned"],
      ai: "THIS IS THE AI BUSINESS. Every solution built here is an AI product. Sales qualification, coaching agents, lead magnets, etc."
    },
    {
      name: "Boundless AI — Coaching / Mastermind",
      icon: "🎓",
      color: "#8b5cf6",
      revenue: "$6–10K / 6 months per member",
      tag: "future opportunity",
      desc: "Weekly sessions + biweekly office hours. Founders learn AI implementation, see live demos, get community accountability. 30 members, ~15 paying.",
      details: ["Running for ~9 months", "Members are $3–50M founders", "Pure profit — branding + community", "Feeds implementation pipeline: see demo → buy service", "Ryan willing to drop if needed, but it's working"],
      ai: "Coaching content powered by AI demos. Members see what's possible → graduate to implementation. AI training curriculum becomes product."
    },
    {
      name: "AI Lead Magnet",
      icon: "🧲",
      color: "#f59e0b",
      revenue: "Cost-of-acquisition break-even",
      tag: "primary target",
      desc: "Self-serve AI tools offered at/near cost to drive leads. Already proven with EA business (6-month track record). Will replicate for Boundless AI.",
      details: ["EA business: time-savings calculator", "Boundless: AI assessment / audit tool", "Designed to be self-depreciating offer at CAC", "Feeds both coaching and implementation funnels"],
      ai: "The lead magnet IS an AI product. Builds trust, demonstrates capability, captures data."
    },
    {
      name: "Affiliate / Partnership Revenue",
      icon: "🤝",
      color: "#06b6d4",
      revenue: "20% monthly affiliate fee",
      tag: "future opportunity",
      desc: "Partners (Dan Martell ecosystem, other founder communities) refer clients. Model stays 40% profitable even with 20% affiliate payout.",
      details: ["Dan Martell's team as strategic silent partner", "Chandler Bolt model: partnerships > direct sales", "Need Head of Partnerships hire", "Ambassador program proven on EA side (TikTok influencers)"],
      ai: "Affiliate tracking and attribution. Automated onboarding for partner-referred clients."
    },
    {
      name: "Content Engine",
      icon: "📱",
      color: "#ec4899",
      revenue: "Funnel (indirect)",
      tag: "low priority",
      desc: "Ryan's Instagram content shifting toward AI + systems. Podcast appearances. In-person events in San Diego. Builds brand and trust.",
      details: ["Instagram: @ryanbrazzell (4.5K followers, shifting to AI content)", "Podcast guest appearances (Inspired Leadership, CRUSH Method, FYOG)", "Bio: 'The Tim Ferriss of AI'", "In-person events planned for San Diego"],
      ai: "Content repurposing AI. But not a priority — focus on shipping products first."
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm leading-relaxed">
        Six revenue streams across two entities. The flywheel: <strong className="text-white">Content → Lead Magnet → Coaching → Implementation → Documented IP → PE Exit</strong>.
      </p>
      {streams.map((s, i) => (
        <Expandable key={i} title={<><span className="mr-2">{s.icon}</span>{s.name}</>} accent={s.color} badge={
          <span className={`text-xs px-2 py-0.5 rounded-full border ${s.tag === "primary target" ? "bg-emerald-950/50 text-emerald-400 border-emerald-800/30" : s.tag === "future opportunity" ? "bg-blue-950/50 text-blue-400 border-blue-800/30" : "bg-gray-800/50 text-gray-500 border-gray-700/30"}`}>{s.tag}</span>
        }>
          <p className="mb-2 text-gray-300"><strong>Revenue:</strong> {s.revenue}</p>
          <p className="mb-3">{s.desc}</p>
          <ul className="space-y-1 mb-3">{s.details.map((d, j) => <li key={j} className="flex items-start gap-1.5"><span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.color }} />{d}</li>)}</ul>
          <div className="p-2 rounded bg-emerald-950/20 border border-emerald-900/20">
            <AITag>AI Relevance</AITag>
            <p className="mt-1">{s.ai}</p>
          </div>
        </Expandable>
      ))}
    </div>
  );
}

// ─── SECTION 3: CLIENT JOURNEY ──────────────────────────────────────
function ClientJourney() {
  const stages = [
    { stage: "AWARENESS", color: "#ec4899", icon: "📱", channels: "Instagram AI content, podcast appearances, Dan Martell ecosystem, word-of-mouth, in-person SD events", what: "SMB founder ($2–20M) encounters Ryan's content or gets a referral. Sees AI possibilities they didn't know existed.", volume: "Thousands (growing)", ai: null },
    { stage: "LEAD MAGNET", color: "#f59e0b", icon: "🧲", channels: "AI assessment tool, time-savings calculator, self-serve diagnostic", what: "Founder interacts with a free AI tool that demonstrates value. Tool captures business data and qualifies interest. Self-depreciating offer at CAC.", volume: "Unknown — needs confirmation", ai: "🔥 THE LEAD MAGNET IS THE AI PRODUCT. This is where Boundless demonstrates capability before the first call." },
    { stage: "QUALIFICATION", color: "#06b6d4", icon: "🔍", channels: "60+ inbound leads/day → Dylan qualifies → books calls", what: "Dylan (full-time SDR) reviews inbound leads, validates fit ($2–20M, right industry, AI-ready). ~10% of leads book calls. Ryan takes 30 sales calls/week.", volume: "60 leads/day, ~6 book calls", ai: "🔥 BOTTLENECK #1. Sales Qualification Agent targets ≥95% accuracy against historical outcomes. Frees Dylan to focus on higher-value work." },
    { stage: "SALES CALL", color: "#3b82f6", icon: "📞", channels: "Discovery → demo → proposal", what: "Ryan runs the call. Shows relevant AI demos from coaching/internal builds. Proposal Builder AI generates proposal (99% accuracy, 15 min). ~85% win rate on Assistant Launch; Boundless TBD.", volume: "~30 calls/week (Ryan capacity bottleneck)", ai: "🔥 Sales Coaching Agent sends real-time suggested responses via text during lead conversations. Copywriting Agent trained on closed-deal language for follow-ups." },
    { stage: "ONBOARDING", color: "#8b5cf6", icon: "🤝", channels: "AI Architect assigned, solutions deployed from menu", what: "Client matched with an AI Architect. Specific solutions from the menu deployed into their business. Coaching program enrollment (free for high-ticket).", volume: "Target: 10/month (Phase 2)", ai: "SOP/System Prompt Builder extracts client's role knowledge. Standardized deployment process from shared tech stack." },
    { stage: "DELIVERY", color: "#10b981", icon: "⚙️", channels: "Ongoing implementation, iteration, measurement", what: "AI Architect works inside the client business. Solutions iterated based on data. KPIs tracked via Precision platform. Regular coaching sessions.", volume: "2 projects/month at $3,750 tier", ai: "Every delivery IS AI. Measurable before/after on every solution deployed = documented IP for exit." },
    { stage: "EXPANSION", color: "#f43f5e", icon: "📈", channels: "Upsell to higher tier, additional solutions, referral/affiliate", what: "Client sees results → adds more solutions → moves to $11K tier → refers other founders. Coaching program drives ongoing engagement and new AI plans.", volume: "Target: <5% monthly churn", ai: "CEO Knowledge Engine stores founder's brain. iMessage automation for check-ins. Churn detection from engagement signals." },
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm leading-relaxed">
        Full funnel from awareness to expansion. <strong className="text-white">Two critical bottlenecks</strong> marked: lead qualification (60/day, manual) and Ryan's sales capacity (30 calls/week).
      </p>
      {stages.map((s, i) => (
        <div key={i} className="rounded-lg border p-3" style={{ borderColor: `${s.color}30` }}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm">{s.icon}</span>
            <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${s.color}20`, color: s.color }}>{s.stage}</span>
            {s.volume && <span className="text-xs text-gray-500 ml-auto">Vol: {s.volume}</span>}
          </div>
          <p className="text-xs text-gray-500 mb-1"><strong className="text-gray-400">Channels:</strong> {s.channels}</p>
          <p className="text-xs text-gray-300 mb-2">{s.what}</p>
          {s.ai && <div className="p-2 rounded bg-emerald-950/20 border border-emerald-900/20"><p className="text-xs text-gray-400">{s.ai}</p></div>}
        </div>
      ))}
    </div>
  );
}

// ─── SECTION 4: DAILY OPERATIONS ────────────────────────────────────
function DailyOps() {
  const ops = {
    "DAILY (Ryan)": [
      { task: "Sales calls with qualified leads", ai: false, pain: "30 calls/week = capacity ceiling" },
      { task: "Lead review and qualification decisions", ai: true, pain: "60 inbound/day, 10% book" },
      { task: "iMessage/text follow-ups with prospects", ai: true, pain: "Manual, inconsistent timing" },
      { task: "Coaching program content creation", ai: false, pain: "Ryan's knowledge = product" },
      { task: "Instagram content (shifting to AI focus)", ai: false, pain: "Brand building — human" },
    ],
    "DAILY (Dylan — SDR)": [
      { task: "Review and qualify all inbound leads", ai: true, pain: "Full-time role, pure qualification" },
      { task: "Book qualified calls on Ryan's calendar", ai: true, pain: "Coordination overhead" },
      { task: "Follow up on stale leads", ai: true, pain: "Manual text/email chase" },
      { task: "Track qualification metrics in Close CRM", ai: false, pain: "KPI: booked, qualified, attended" },
    ],
    "WEEKLY": [
      { task: "Coaching program weekly sessions", ai: false, pain: "Human community value" },
      { task: "Office hours (biweekly) — live AI demos", ai: false, pain: "Validates solutions in real-time" },
      { task: "Ad dashboard review and budget adjustments", ai: true, pain: "MCP-connected to Meta API" },
      { task: "Matt coaching session (biweekly)", ai: false, pain: "Strategic guidance — data-driven" },
      { task: "Shiv / Thursday AI strategy session", ai: false, pain: "Build session — ship something" },
    ],
    "MONTHLY": [
      { task: "Review Precision data platform metrics", ai: true, pain: "Full operational data — Robin manages" },
      { task: "Maga talent pipeline review", ai: false, pain: "Recruiting metrics, training progress" },
      { task: "Client retention / NPS tracking", ai: true, pain: "Churn signals need early detection" },
      { task: "Financial model updates", ai: false, pain: "ARR tracking, EBITDA monitoring" },
      { task: "Affiliate / partnership development", ai: false, pain: "Not yet systematized" },
    ],
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-sm leading-relaxed">
        What the team actually does. Tasks tagged <AITag /> are automation candidates. <strong className="text-white">Biggest pain points</strong> are highlighted.
      </p>
      {Object.entries(ops).map(([period, tasks]) => (
        <div key={period}>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-gray-800 text-gray-400">{period}</span>
          </div>
          <div className="space-y-2">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center gap-2 bg-black/30 rounded-lg p-2.5 border border-gray-800/50">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-200">{t.task}</p>
                  <p className="text-xs text-gray-600">{t.pain}</p>
                </div>
                {t.ai ? <AITag>Automate</AITag> : <span className="text-xs px-2 py-0.5 rounded-full bg-gray-800 text-gray-500 flex-shrink-0">Human</span>}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-red-800/30 bg-red-950/15 p-4">
        <h4 className="text-sm font-semibold text-red-400 mb-2">🔥 Biggest Time Sinks</h4>
        <div className="space-y-2 text-xs text-gray-300">
          <p><strong className="text-white">1. Ryan's 30 calls/week:</strong> CEO is the bottleneck. Every call Ryan takes is a call he can't spend on strategy. Sales Qualification Agent = the unlock.</p>
          <p><strong className="text-white">2. Dylan's full-time qualification grind:</strong> 60 leads/day, manual review. AI agent could handle 90%+ of initial screening.</p>
          <p><strong className="text-white">3. Follow-up timing:</strong> $1K/day in ad spend means every slow follow-up is lost revenue. 30 days of unhealthy Blueyo phone status = unknown losses.</p>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION 5: TEAM & ROLES ────────────────────────────────────────
function TeamRoles() {
  const team = [
    { name: "Ryan Brazzell", role: "CEO / Founder", color: "#3b82f6", focus: "Vision, sales, product, relationships. Does 30 sales calls/week.", notes: "BS Marketing from UT Chattanooga. Systems engineer background. Scaled 7 & 8 figure companies. 'The Tim Ferriss of AI.' Works with coach Matt (Dan Martell's right hand, Precision data platform). Member of Dan Martell's SaaS Academy / High Speed Ventures ecosystem.", aiRelevance: "Decision maker. Sets priorities. His time is the constraint — every AI tool should give him hours back." },
    { name: "Robin", role: "COO", color: "#10b981", focus: "Runs operations. Owns Precision data platform inputs. Manages day-to-day of Assistant Launch.", notes: "Every metric has Robin's name attached. Getting onboarded to Precision 2.0.", aiRelevance: "Key data source. Needs admin access granted for Shiv to Precision platform." },
    { name: "Dylan", role: "SDR / Sales Qualifier", color: "#f59e0b", focus: "Full-time lead qualification. KPI: booked, qualified, attended calls.", notes: "Brought on 2 weeks ago (as of onboarding). Big wave surfer. Strong communicator. Values-aligned. Being trained as sales leader. Could lead sales team.", aiRelevance: "Primary user of Sales Qualification Agent. If Dylan trusts it, it ships. Testing partner for all sales tools." },
    { name: "Maga", role: "Head of Talent / People (LATAM)", color: "#ec4899", focus: "Building recruitment pipeline. Zero-to-one on AI Architect team.", notes: "Starting week after onboarding. Found through Christian. Will go to universities in Colombia. Hackathon strategy ($10K prize). Instagram ads for hiring (pioneering). Ambassador program.", aiRelevance: "Feeds the delivery engine. Maga's pipeline speed determines client onboarding capacity." },
    { name: "Matt", role: "Executive Coach (External)", color: "#8b5cf6", focus: "Biweekly coaching. Data-driven decision making. Built Precision platform.", notes: "Dan Martell's right hand at High Speed Ventures. World-class operator. Data obsessive. Helps Ryan focus ('that's not your constraint right now'). Also does marketing for Dan.", aiRelevance: "Influences priority setting. Not a direct AI user but his data framework shapes what we measure." },
    { name: "Adele", role: "Admin / Operations", color: "#64748b", focus: "Accounts team. Onboarding admin. Day-to-day operations support.", notes: "adele@assistantlaunch.com — point of contact for onboarding paperwork.", aiRelevance: "Low direct relevance. Process recipient, not AI user." },

    { name: "Shiv (You)", role: "Fractional Chief Innovator / AI Strategist", color: "#a855f7", focus: "One day/week (Thursdays). Build solutions menu. Design ecosystem. Ship measurable AI tools.", notes: "Strategic intersection: build what powers Boundless while leveraging Assistant Launch data/processes.", aiRelevance: "You ARE the AI strategy. Everything in this doc is your playbook." },
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm leading-relaxed">
        The team — who does what, and how they relate to AI work. <strong className="text-white">Key working partners</strong>: Dylan (testing), Robin (data), Maga (talent).
      </p>
      {team.map((t, i) => (
        <div key={i} className="rounded-lg border p-3" style={{ borderColor: `${t.color}25`, background: `${t.color}05` }}>
          <div className="flex items-start justify-between mb-1.5">
            <div>
              <span className="font-semibold text-sm text-white">{t.name}</span>
              <span className="text-xs ml-2 px-1.5 py-0.5 rounded" style={{ background: `${t.color}15`, color: t.color }}>{t.role}</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mb-1"><strong className="text-gray-300">Focus:</strong> {t.focus}</p>
          <p className="text-xs text-gray-500 mb-1.5">{t.notes}</p>
          <div className="flex items-start gap-1"><AITag>{t.aiRelevance}</AITag></div>
        </div>
      ))}
    </div>
  );
}

// ─── SECTION 6: AI OPPORTUNITY MAP ──────────────────────────────────
function AIOpportunityMap() {
  const opps = [
    {
      p: "P1", name: "Sales Qualification Agent", target: "Dylan (SDR)", impact: "Reduces full-time qualifier workload. Ryan takes fewer bad calls. Dylan evolves to sales leader.", difficulty: "Medium", timeline: "Weeks 1-4", color: "#ef4444",
      kpi: "≥95% agreement rate vs historical outcomes (closed, ghosted, converted)",
      spec: "Analyze all recorded sales calls. Extract qualification/disqualification signals, objection patterns, close triggers. Run against 90 days of historical lead data. Parallel test: agent + Dylan score same leads, compare.",
      risk: "False positives waste Ryan's time on bad calls. False negatives lose revenue. Must achieve 95% BEFORE going live. Needs sufficient historical data volume.",
      unlocks: "Dylan freed to lead sales team. Ryan takes only pre-qualified calls. Agent becomes Boundless product #1 for clients."
    },
    {
      p: "P2", name: "Sales Coaching Agent", target: "Ryan's sales reps + future client salespeople", impact: "Real-time suggested responses during live lead conversations", difficulty: "Medium", timeline: "Weeks 3-6", color: "#f59e0b",
      kpi: "Response quality (rep adoption rate), close rate improvement, response time reduction",
      spec: "When a prospect replies via text/iMessage, agent sends the salesperson suggested responses + next steps. Built on analyzed call data. Already prototyped ('safety not guaranteed' system — notifies on every conversation).",
      risk: "Bad suggestions damage prospect relationships. Over-reliance reduces rep skill development. Latency = useless if suggestions arrive after rep already replied.",
      unlocks: "Scales sales team without proportional training cost. Becomes Boundless product for client sales teams."
    },
    {
      p: "P3", name: "AI Lead Magnet Builder", target: "Inbound prospects", impact: "Already proven with EA business (6mo). Replicate for Boundless.", difficulty: "Low", timeline: "Weeks 2-4", color: "#3b82f6",
      kpi: "Lead capture rate, cost per lead (target: break-even at CAC)",
      spec: "Self-serve diagnostic tool. Prospect enters business info → gets AI-generated assessment of automation opportunities. Captures data for qualification. Similar to EA time-savings calculator.",
      risk: "Low risk — proven model. Main risk is scope creep making it too complex.",
      unlocks: "Automated top-of-funnel. Feeds qualification agent. Demonstrates Boundless capability before first call."
    },
    {
      p: "P4", name: "Proposal Builder AI", target: "Ryan / sales team", impact: "99% accuracy, 15 min turnaround. Already in production.", difficulty: "Low (done)", timeline: "In production", color: "#10b981",
      kpi: "Accuracy rate, time to generate, client feedback",
      spec: "Generates custom proposals based on call notes and client profile. Trained on successful closed-deal proposals.",
      risk: "Minimal — already working. Monitor for drift as new client profiles enter.",
      unlocks: "Faster sales cycle. More calls → more proposals → more revenue."
    },
    {
      p: "P5", name: "Copywriting Agent", target: "Sales team / marketing", impact: "Trained on actual customer language from closed deals", difficulty: "Low (done)", timeline: "In production", color: "#10b981",
      kpi: "Email open/reply rates, A/B test vs human-written copy",
      spec: "Generates follow-up emails, outreach, and marketing copy using language patterns from successful sales conversations.",
      risk: "Minimal — already working. Watch for voice drift over time.",
      unlocks: "Consistent messaging at scale. New reps sound like top performers immediately."
    },
    {
      p: "P6", name: "SOP / System Prompt Builder", target: "Client businesses + internal", impact: "Extracts role knowledge, powers agents", difficulty: "Low", timeline: "Weeks 4-8", color: "#8b5cf6",
      kpi: "Time to generate SOP, accuracy vs manual SOP, adoption rate",
      spec: "Takes a role description or recorded workflow → generates detailed SOP + system prompt for an AI agent to handle that role. Foundational tool — powers all other agents.",
      risk: "SOPs need validation by role owner. Auto-generated prompts may miss edge cases.",
      unlocks: "Rapid solution deployment for any client role. Core IP for the platform."
    },
    {
      p: "P7", name: "CEO Knowledge Engine", target: "Ryan / client founders", impact: "Stores founder's brain, decision-making patterns", difficulty: "High", timeline: "Months 3+", color: "#64748b",
      kpi: "Decision accuracy, time saved on recurring questions, team self-service rate",
      spec: "Ingests all of a founder's communications, decisions, frameworks. Team members can query it instead of interrupting the CEO.",
      risk: "High complexity. Privacy concerns. May not capture tacit knowledge well. Risk of teams deferring too much to AI.",
      unlocks: "CEO time multiplier. Could be premium Boundless product for $30M+ clients."
    },
    {
      p: "P8", name: "iMessage / Communication Automation", target: "Client engagement", impact: "Automated check-ins, follow-ups, engagement sequences", difficulty: "Medium", timeline: "Months 2-3", color: "#64748b",
      kpi: "Response rates, engagement frequency, churn correlation",
      spec: "Currently in beta. Using Blueyo for phone/SMS. Close CRM integration needed. Challenges with phone number health monitoring.",
      risk: "Phone number flagging / spam risk. Blueyo integration limitations. Platform dependency. 'Project Blue taking 48 hours for a new number = red flag.'",
      unlocks: "Systematic client engagement reduces churn. Frees up manual follow-up time."
    },
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm leading-relaxed">
        Prioritized AI opportunities. Each includes target user, impact, KPI, risk, and what it unlocks. <strong className="text-white">P1–P3 are Phase 1 priorities</strong> (Weeks 1-8).
      </p>

      {/* Jasper's 5-Mistake Checklist — included as spec reference */}
      <div className="rounded-lg border border-gray-700/30 bg-gray-900/20 p-3">
        <h4 className="text-xs font-semibold text-gray-400 mb-1">📋 ICE Framework Reference</h4>
        <p className="text-xs text-gray-500">Ryan uses Impact / Confidence / Ease scoring. All opportunities need ICE scores before committing resources. This is a priority action item for Week 1-2.</p>
      </div>

      {opps.map((o, i) => (
        <Expandable key={i} title={<><span className="text-xs font-mono mr-2" style={{ color: o.color }}>{o.p}</span>{o.name}</>} accent={o.color} badge={
          <div className="flex gap-1.5">
            <PriorityBadge level={o.p} />
            <span className="text-xs text-gray-500">{o.timeline}</span>
          </div>
        }>
          <div className="space-y-2">
            <p><strong className="text-gray-300">Target:</strong> {o.target}</p>
            <p><strong className="text-gray-300">Impact:</strong> {o.impact}</p>
            <p><strong className="text-gray-300">Difficulty:</strong> {o.difficulty}</p>
            <p><strong className="text-gray-300">KPI:</strong> <span className="text-emerald-400">{o.kpi}</span></p>
            <div className="p-2 rounded bg-gray-800/50 border border-gray-700/30">
              <p className="text-xs text-gray-400"><strong className="text-gray-300">Spec:</strong> {o.spec}</p>
            </div>
            <div className="p-2 rounded bg-red-950/20 border border-red-900/20">
              <p className="text-xs text-red-400"><strong>⚠️ Risk:</strong> {o.risk}</p>
            </div>
            <p className="text-emerald-400"><strong>Unlocks:</strong> {o.unlocks}</p>
          </div>
        </Expandable>
      ))}
    </div>
  );
}

// ─── SECTION 7: KEY NUMBERS + SOURCE CONFIDENCE ─────────────────────
function KeyNumbers() {
  const metrics = [
    { category: "Assistant Launch", items: [
      { label: "Current ARR", value: "~$2.5M+", source: "Ryan (direct)", confidence: "✅" },
      { label: "EOY ARR Target", value: "$6.1M", source: "Ryan (direct)", confidence: "✅" },
      { label: "Active Customers", value: "~100", source: "Ryan (direct)", confidence: "✅" },
      { label: "Avg MRR / Client", value: "$2,750", source: "Ryan (direct)", confidence: "✅" },
      { label: "New Customers / Month", value: "20 (met Jan)", source: "Ryan (direct)", confidence: "✅" },
      { label: "Win Rate", value: "~85%", source: "Ryan (direct)", confidence: "✅" },
      { label: "Churn", value: "~7.5%", source: "Ryan (direct)", confidence: "✅" },
      { label: "CAC (7-day)", value: "$507", source: "Ryan (direct)", confidence: "✅" },
      { label: "EA Applicant Selection", value: "Top 1% of 1,000", source: "Website", confidence: "🌐" },
      { label: "Founders Served (lifetime)", value: "650+", source: "Podcast (Inspired Leadership)", confidence: "🌐" },
    ]},
    { category: "Boundless AI", items: [
      { label: "Current Revenue", value: "$0 (pre-launch)", source: "Ryan (direct)", confidence: "✅" },
      { label: "EOY ARR Target", value: "$4.1M", source: "Ryan (direct)", confidence: "✅" },
      { label: "Combined EOY ARR Target", value: "$10.3M", source: "Ryan (direct)", confidence: "✅" },
      { label: "3-Year North Star", value: "$25M ARR", source: "Ryan (direct)", confidence: "✅" },
      { label: "Exit Target", value: "$100M+", source: "Ryan (direct)", confidence: "✅" },
      { label: "Tier 1 Price", value: "$3,750/mo", source: "Ryan (direct)", confidence: "✅" },
      { label: "Tier 2 Price", value: "~$11K/mo", source: "Ryan (direct)", confidence: "✅" },
      { label: "Mastermind Members", value: "~30 (15 paying)", source: "Ryan (direct)", confidence: "✅" },
      { label: "Mastermind Price", value: "$6–10K / 6 months", source: "Ryan (direct)", confidence: "✅" },
      { label: "Affiliate Fee", value: "20% monthly", source: "Ryan (direct)", confidence: "✅" },
      { label: "Profitability w/ Affiliate", value: "40%", source: "Ryan (direct)", confidence: "✅" },
      { label: "Inbound Leads / Day", value: "~60", source: "Ryan (direct)", confidence: "✅" },
      { label: "Lead-to-Call Rate", value: "~10%", source: "Ryan (direct)", confidence: "✅" },
    ]},
    { category: "Phase Targets", items: [
      { label: "Phase 1 Beta Clients", value: "5", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 Active Clients", value: "20+", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 Monthly New", value: "10/month", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 Client Churn Target", value: "<5% monthly", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 CAC Target", value: "<$500", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 NPS Target", value: ">70", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 AI Architects", value: "5+", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 Solutions on Menu", value: "8–10", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 EBITDA Margin", value: "≥30%", source: "Execution plan", confidence: "✅" },
      { label: "Phase 2 Coaching Members", value: "40+", source: "Execution plan", confidence: "✅" },
    ]},
    { category: "PE / Exit Math", items: [
      { label: "Target EBITDA Margin (Exit)", value: "40–50%", source: "PE session", confidence: "✅" },
      { label: "EV/EBITDA Multiple Range", value: "10–15x", source: "PE session", confidence: "✅" },
      { label: "EV/Revenue Multiple Range", value: "1.5–2.5x", source: "PE session", confidence: "✅" },
      { label: "EBITDA at $25M / 45%", value: "$11.25M", source: "Calculated", confidence: "✅" },
      { label: "EV at 10x EBITDA", value: "$112.5M", source: "Calculated", confidence: "✅" },
      { label: "EV at 12x EBITDA", value: "$135M", source: "Calculated", confidence: "✅" },
      { label: "Revenue Floor (2x)", value: "$50M", source: "Calculated", confidence: "✅" },
      { label: "Category", value: "Tech-enabled BPO", source: "PE session", confidence: "✅" },
      { label: "Churn Target (Exit)", value: "<5% annually", source: "PE session", confidence: "✅" },
      { label: "Customer Concentration", value: "No single >5% rev", source: "PE session", confidence: "✅" },
    ]},
    { category: "Unverified / Needs Confirmation", items: [
      { label: "Ad spend per day", value: "~$1,000?", source: "Inferred from transcript", confidence: "⚠️" },
      { label: "CAC (lifetime / 90-day)", value: "Unknown — asked in session", source: "Unconfirmed", confidence: "⚠️" },
      { label: "Boundless CAC", value: "Unknown — assumes same funnel", source: "Unconfirmed", confidence: "⚠️" },
      { label: "LTV per client (either business)", value: "Unknown", source: "Not discussed", confidence: "⚠️" },
      { label: "AI Architect cost / salary", value: "Unknown", source: "Not discussed", confidence: "⚠️" },
      { label: "Robin's bandwidth for data access", value: "Unknown", source: "Need to request", confidence: "⚠️" },
      { label: "Precision platform access (Shiv)", value: "Requested, not confirmed", source: "Transcript", confidence: "⚠️" },
      { label: "Close CRM API capabilities", value: "Unknown — Robin's domain", source: "Need to audit", confidence: "⚠️" },
      { label: "Blueyo reliability / status", value: "Concerning — 48hr delays", source: "Robin's call", confidence: "⚠️" },
      { label: "Instagram follower count", value: "4,534", source: "Instagram", confidence: "🌐" },
    ]},
  ];

  return (
    <div className="space-y-6">
      <p className="text-gray-400 text-sm leading-relaxed">
        All quantified metrics in one place. Every fact tagged with source and confidence level. <strong className="text-yellow-400">⚠️ items are your priority questions for the next session.</strong>
      </p>
      {metrics.map((cat, ci) => (
        <div key={ci}>
          <h3 className="text-sm font-bold text-gray-300 mb-2">{cat.category}</h3>
          <div className="rounded-lg border border-gray-800/50 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="text-left px-3 py-2 text-gray-500 font-medium">Metric</th>
                  <th className="text-left px-3 py-2 text-gray-500 font-medium">Value</th>
                  <th className="text-left px-3 py-2 text-gray-500 font-medium">Source</th>
                  <th className="text-center px-3 py-2 text-gray-500 font-medium">Conf.</th>
                </tr>
              </thead>
              <tbody>
                {cat.items.map((item, ii) => (
                  <tr key={ii} className="border-t border-gray-800/30 hover:bg-white/[0.02]">
                    <td className="px-3 py-1.5 text-gray-400">{item.label}</td>
                    <td className="px-3 py-1.5 text-white font-medium">{item.value}</td>
                    <td className="px-3 py-1.5 text-gray-500">{item.source}</td>
                    <td className="px-3 py-1.5 text-center">{item.confidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <div className="rounded-lg border border-gray-700/40 bg-gray-900/30 p-4">
        <h4 className="text-sm font-semibold text-gray-300 mb-2">Confidence Legend</h4>
        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
          <span>✅ = Confirmed (direct from client)</span>
          <span>🌐 = Web-sourced (public data)</span>
          <span>🎙️ = Podcast / public statement</span>
          <span>⚠️ = Unverified (needs confirmation)</span>
        </div>
      </div>

      <div className="rounded-xl border border-yellow-800/30 bg-yellow-950/10 p-4">
        <h4 className="text-sm font-semibold text-yellow-400 mb-2">📋 Web Research Cross-Reference</h4>
        <div className="space-y-2 text-xs text-gray-400">
          <p><strong className="text-white">assistantlaunch.com confirmed:</strong> Fully managed EA service, 4-Week Accelerator, Filipino talent, top 1% hiring, AI-trained EAs, no lock-in. Matches Ryan's description precisely.</p>
          <p><strong className="text-white">LinkedIn confirmed:</strong> ~650+ founders served (lifetime), company active with regular posts. Ryan listed as Founder.</p>
          <p><strong className="text-white">Podcast appearances confirmed:</strong> Ryan featured on Inspired Leadership, CRUSH Method, For Your Own Good — all referencing both Assistant Launch and Boundless AI Mastermind.</p>
          <p><strong className="text-white">Instagram confirmed:</strong> @ryanbrazzell — 4,534 followers, bio: 'The Tim Ferriss of AI', DM 'EA' for Assistant Launch, DM 'AI' for Boundless.</p>
          <p><strong className="text-white">Crunchbase confirmed:</strong> Ryan Brazzell listed as Founder of Assistant Launch. UT Chattanooga. Momentum Global Ventures in history.</p>
          <p><strong className="text-white">No public pricing found</strong> for Assistant Launch. Ryan stated $2,750 avg MRR — industry comps suggest this aligns with premium managed EA services ($2,000–$7,500/mo range).</p>
          <p><strong className="text-white">No discrepancies found</strong> between Ryan's private statements and public positioning. Consistent narrative across all sources.</p>
        </div>
      </div>
    </div>
  );
}

// ─── SECTION 8: DISCOVERY QUESTIONS ─────────────────────────────────
function SolutionsIdeation() {
  const [subTab, setSubTab] = useState("overview");
  const [filterDept, setFilterDept] = useState("all");
  const [filterBuild, setFilterBuild] = useState("all");
  const [expandedSol, setExpandedSol] = useState({});
  const toggleSol = (id) => setExpandedSol(p => ({ ...p, [id]: !p[id] }));

  const depts = [
    { id: "sales", label: "Sales", icon: "📞", color: "#ef4444" },
    { id: "marketing", label: "Marketing", icon: "📣", color: "#f59e0b" },
    { id: "ops", label: "Operations", icon: "⚙️", color: "#3b82f6" },
    { id: "cs", label: "Customer Success", icon: "🤝", color: "#10b981" },
    { id: "hr", label: "HR & Hiring", icon: "👥", color: "#8b5cf6" },
    { id: "finance", label: "Finance & Admin", icon: "💰", color: "#ec4899" },
    { id: "ceo", label: "CEO / Founder", icon: "🧠", color: "#f97316" },
  ];

  const buildLabels = { low: "1-2 wks", medium: "2-4 wks", high: "4-6 wks" };
  const buildColors = { low: "text-emerald-400 bg-emerald-950/50 border-emerald-800/30", medium: "text-yellow-400 bg-yellow-950/50 border-yellow-800/30", high: "text-red-400 bg-red-950/50 border-red-800/30" };

  const solutions = [
    { id: "s1", dept: "sales", build: "medium", name: "Lead Qualification Agent", line: "Scores every inbound lead against proven close signals before a human touches it.", pain: "SMBs get 20-100+ leads/day. One SDR manually reviews them all. 90% don't convert. That's 4-6 hrs/day sorting noise.", how: "Pull 90 days of CRM data with outcomes. Train a prompt on the signals that actually predicted conversion. Run parallel with humans, iterate to ≥95% agreement, then flip the switch.", delivers: "Qualification prompt + CRM integration + scoring dashboard. Processes leads within 2 min of form submission.", metric: "Hours saved/week. Close rate improvement (2-3x on qualified leads). Revenue per rep.", repeatable: "Every SMB with inbound leads has this. Process identical: export data → find signals → build prompt → test → deploy.", proof: "Ryan built this for himself. 60 leads/day, Dylan qualifying, ~10% book calls. THIS is the case study.", tier: "Tier 1 project (1 of 2). 2-3 week build." },
    { id: "s2", dept: "sales", build: "medium", name: "Sales Coaching Agent", line: "Real-time suggested responses during live text/chat sales conversations.", pain: "SMB sales teams are 1-3 people. Founder is the best closer but can't sit next to every rep. New reps take 4-8 weeks to ramp.", how: "Train on founder's actual playbook — objections, close patterns, disqualification signals. Agent reads conversation context, suggests next response. Human reviews before sending.", delivers: "Claude project on sales playbook + screenshot-to-suggestion flow + conversation tracking.", metric: "Rep ramp time reduction. Suggestion use rate. Close rate before vs after.", repeatable: "Every SMB doing sell-by-chat has the same problem: founder knowledge trapped in their head.", proof: "Ryan has a 63-page playbook and closes hundreds of thousands with a Claude project doing exactly this.", tier: "Tier 1 project. 2-4 week build." },
    { id: "s3", dept: "sales", build: "low", name: "Proposal / Quote Builder", line: "Generates customized proposals in 15 min instead of 2 hours.", pain: "$5M service businesses send 20-40 proposals/month. Each takes 1-2 hrs to customize. That's 40-80 hrs/month of senior time on document assembly.", how: "Feed every past winning proposal + deal context. New lead data from CRM → agent drafts full proposal with pricing, scope, personalized language from prospect's website.", delivers: "Proposal template system + CRM pull + auto-generation. Output: branded PDF ready for review.", metric: "Time per proposal (15 min vs 2 hrs). Proposal-to-close rate. Monthly capacity increase.", repeatable: "Agencies, consultancies, service businesses — all write proposals. Template varies, process identical.", proof: "Already in production for Assistant Launch. 99% accuracy, 15 min turnaround. Proven.", tier: "Tier 1 project. 1-2 week build." },
    { id: "s4", dept: "sales", build: "low", name: "CRM Hygiene & Pipeline Intel", line: "Auto-enriches lead data, flags stale deals, surfaces pipeline risks.", pain: "SMB CRMs are a mess. 40-60% missing fields. Deals sit in 'negotiation' for 90 days untouched. No real-time pipeline view.", how: "Nightly CRM audit: enrich missing data from web, flag stale deals, identify leads matching past churn profiles, generate morning briefing.", delivers: "Nightly audit script + enrichment pipeline + daily Slack/email briefing with action items.", metric: "CRM completeness (%). Stale deal recovery. Pipeline forecast accuracy.", repeatable: "Every SMB with a CRM has dirty data. Audit logic nearly identical across platforms.", proof: "Close CRM has decent APIs. Runs across any client using Close, HubSpot, or Pipedrive.", tier: "Tier 1 add-on. 1-2 week build." },
    { id: "m1", dept: "marketing", build: "low", name: "AI Lead Magnet Builder", line: "Interactive diagnostic that captures leads by showing prospects their own gaps.", pain: "SMBs spend $1K-$10K/day on ads to generic landing pages. 2-5% conversion. They pay to send people to a page that gives nothing.", how: "Build interactive assessment (8-12 targeted questions). AI analyzes responses → personalized report showing where they leave money. Captures email + company data. Warm lead → sales.", delivers: "Custom assessment web app + AI analysis + CRM integration + automated follow-up.", metric: "Conversion rate (15-25% vs 2-5% generic). CAC reduction. Lead quality score.", repeatable: "Framework is identical — only questions and analysis change per industry. It's a GitHub URL and someone to implement.", proof: "Ryan has run this for Assistant Launch for 6 months. Proven track record.", tier: "Tier 1 project. 1-2 week build. Can be a lead-in offer." },
    { id: "m2", dept: "marketing", build: "low", name: "Copywriting Agent (Trained on Wins)", line: "Writes ads, emails, landing pages using language patterns from actual won deals.", pain: "SMBs write copy based on what sounds good. Never analyze what language actually closes. Marketing and sales speak different languages.", how: "Feed every email thread, proposal, chat log from closed deals. Extract phrases that got responses, objection-handling that worked. Agent mirrors proven patterns.", delivers: "Trained copywriting agent + style guide from wins + template library for ads, emails, landing pages.", metric: "Ad CTR improvement. Email response rate. Landing page conversion. A/B win rate.", repeatable: "Every business has closed deals with data. Extraction process identical. Language patterns are gold nobody mines.", proof: "Already in production for Ryan. Trained on actual customer language from closed deals.", tier: "Tier 1 project. 1-2 week build." },
    { id: "m3", dept: "marketing", build: "medium", name: "Content Repurposing Engine", line: "Turns one long-form piece into 15-20 platform-specific pieces.", pain: "Founder records a podcast or blog post. That's the only place it lives. They know they should repurpose but nobody has time.", how: "Input: one long-form piece. Output: platform-specific versions with correct tone, length, hooks, CTAs per channel. Scheduled via Buffer/Later.", delivers: "Content pipeline from single input → multi-platform output. Templates per platform. Scheduling integration.", metric: "Content output/month (10x multiplier). Engagement per repurposed piece. Time saved.", repeatable: "Every SMB founder creating content has this. Repurposing logic is formulaic once you nail tone per platform.", proof: "Ryan posts on Instagram (4.5K followers), does podcasts. All single-use right now.", tier: "Tier 1 project. 1-2 week build." },
    { id: "m4", dept: "marketing", build: "medium", name: "Ad Performance Analyst", line: "AI reads ad dashboards daily and recommends budget shifts before money is wasted.", pain: "SMBs spending $30K-$300K/yr on ads check dashboards 1-2x/week. By the time they spot a dying creative, they've blown $2-5K.", how: "Connect to ad platforms via API. Daily analysis: fatiguing creatives, saturating audiences, above/below target CPA. Morning briefing + recommended actions.", delivers: "Ad platform API integration + daily analysis + Slack/email briefing with actionable recommendations.", metric: "Wasted ad spend reduction (%). ROAS improvement. Dashboard review time saved.", repeatable: "Every SMB running paid ads has the same blind spots. Analysis logic same — only thresholds change.", proof: "Ryan already has an MCP server connecting to Meta API. Spending ~$1K/day on ads.", tier: "Tier 1 project. 2-3 week build." },
    { id: "o1", dept: "ops", build: "medium", name: "SOP & Process Doc Generator", line: "Records how the expert does it, turns it into a trainable SOP any new hire can follow.", pain: "Founder does critical tasks from memory. Nothing documented. When they leave, the process leaves. New hires take months to learn.", how: "Structured Q&A interview with SME: step by step walk-through, decision points, edge cases. Generates complete SOP with decision trees and screenshots.", delivers: "Interactive SOP builder + Loom integration + decision tree generator + searchable knowledge base.", metric: "SOPs documented/month. New hire ramp time reduction. Error rate on documented vs undocumented.", repeatable: "Every SMB has tribal knowledge in 2-3 people's heads. Interview-to-documentation process identical.", proof: "Ryan identified this: 'SOP/System Prompt Builder — extracts role knowledge, powers agents.' Foundation for everything.", tier: "Tier 1 project. 2-3 week build." },
    { id: "o2", dept: "ops", build: "low", name: "Email Triage & Response Drafting", line: "Auto-categorizes inbound email, drafts routine responses, flags what needs the founder.", pain: "SMB founders spend 1-2 hrs/day on email. 60-70% routine. They check every one because afraid of missing something.", how: "Classify inbound by type. Draft responses for routine using approved templates. Flag urgent. Founder batch-reviews drafts — 15 min instead of 90.", delivers: "Classification engine + template library + daily digest with drafts ready for one-click send.", metric: "Founder email time (15 min vs 90 min). Response time on important emails. Emails without founder (%)", repeatable: "Every founder drowns in email. Categorization patterns surprisingly consistent. Templates easy from past sent.", proof: "Not built yet but fits 'CEO gets time back' thesis perfectly.", tier: "Tier 1 project. 1-2 week build." },
    { id: "o3", dept: "ops", build: "medium", name: "Meeting Intelligence & Action Tracker", line: "Records meetings, extracts commitments, follows up when deadlines are missed.", pain: "SMB teams have 10-20 meetings/week. Action items said out loud, forgotten by Friday. Same issues re-discussed 3 weeks later.", how: "Process recordings via Zoom/Google Meet. Extract: decisions, action items with owners, deadlines, unresolved questions. Push to PM tool. Follow-up reminders.", delivers: "Transcription + AI extraction + PM integration (Asana, Monday, ClickUp) + automated follow-ups.", metric: "Action items completed on time (%). Follow-up time saved. Re-discussed items reduced.", repeatable: "Universal. Every SMB with remote/hybrid teams. Extraction logic consistent — commitments have a linguistic fingerprint.", proof: "Fits 'accountability + productivity' theme from Ryan's coaching.", tier: "Tier 1 project. 2-3 week build." },
    { id: "o4", dept: "ops", build: "high", name: "Data Pipeline Normalizer", line: "Pulls data from 5-10 tools into one dashboard. Founder sees the business in one screen.", pain: "$5M SMB uses 8-15 SaaS tools. Revenue in Stripe, leads in HubSpot, projects in Monday, expenses in QBO. No single source of truth.", how: "Map tool stack. Build API connections. Normalize into single schema. Dashboard with 5-7 metrics that matter. Automated reports + anomaly detection.", delivers: "Custom dashboard from all tools + report generation + anomaly alerts.", metric: "Report assembly time (eliminated). Decision speed. Anomalies caught early.", repeatable: "Tools vary but pattern doesn't: connect, normalize, visualize. Top 20 SaaS tools cover 80% of stacks.", proof: "Ryan's Precision platform is exactly this. The concept is proven — productizing for Boundless clients is the play.", tier: "Tier 2 project (complexity). 3-4 week build." },
    { id: "cs1", dept: "cs", build: "medium", name: "Churn Prediction & Early Warning", line: "Flags at-risk customers before they cancel based on behavioral signals.", pain: "SMBs find out a customer is unhappy when they cancel. Signals were there — reduced usage, slower payments — but nobody was watching.", how: "Define churn signals per business. Monitor daily, score each account. Trigger playbooks: at-risk → outreach, high-risk → founder call, churned → win-back.", delivers: "Churn scoring model + automated alerts + playbook triggers + monthly retention report.", metric: "Churn rate reduction (20-30%). Save rate on flagged accounts. Revenue retained/quarter.", repeatable: "Churn signals follow patterns consistent within business types. Model structure reusable.", proof: "Ryan built 'Client Success AI to detect churn using data signals.' 7.5% churn → <5% target.", tier: "Tier 1 project. 2-3 week build." },
    { id: "cs2", dept: "cs", build: "low", name: "Customer Onboarding Automation", line: "Standardized flow that gets new customers to value faster without manual handholding.", pain: "SMBs lose 10-20% of new customers in first 30 days. Onboarding is manual, inconsistent, dependent on whoever's available.", how: "Map ideal journey (day 1, 3, 7, 14, 30). Automate: welcome sequence, setup checklist, milestone celebrations, stuck-point detection + nudge.", delivers: "Automated sequence + milestone tracking + stuck detection + escalation rules.", metric: "Time to first value. 30-day retention. Customer effort score. Onboarding tickets (reduction).", repeatable: "Every subscription business has this. Journey structure formulaic — only milestones change.", proof: "Assistant Launch has a 4-Week Accelerator for EA onboarding. Framework translates directly.", tier: "Tier 1 project. 1-2 week build." },
    { id: "cs3", dept: "cs", build: "medium", name: "NPS & Feedback Loop Automation", line: "Collects, categorizes, and routes customer feedback without someone reading every response.", pain: "SMBs collect feedback sporadically. When they do, it sits in a spreadsheet. Founder hears problems through anecdotes, not data.", how: "Automated collection at key touchpoints. AI categorizes by theme. Monthly report: '3 things customers care most about, ranked by frequency and severity.'", delivers: "Survey system + AI categorization + monthly insight report + trend dashboard.", metric: "NPS tracking. Response rate. Time from feedback to action.", repeatable: "Every business needs feedback. Categorization and prioritization logic is universal.", proof: "Phase 2 KPI is NPS >70. Need a system to actually measure it.", tier: "Tier 1 add-on. 1-2 week build." },
    { id: "h1", dept: "hr", build: "medium", name: "Recruitment Screening Agent", line: "Reads every application, scores against hiring rubric, surfaces top 10% for human review.", pain: "$10M SMB posts a job, gets 200-500 apps. Hiring manager (wearing 3 hats) spends 15-20 hrs reading resumes.", how: "Define ideal candidate with hiring manager (actual success signals, not just JD). Screen every app. Score + rank. Top 10% forwarded with reasoning.", delivers: "Screening prompt + ATS integration + scored candidate list + rejection drafts.", metric: "Screening time/hire. Quality of hire (90-day retention). Time to fill.", repeatable: "Every hiring SMB faces this. Screening methodology consistent — only role signals change.", proof: "Maga building AI Architect pipeline via Instagram + hackathons. Screening problem already live.", tier: "Tier 1 project. 2-3 week build." },
    { id: "h2", dept: "hr", build: "low", name: "Employee Onboarding & Training Bot", line: "New hire asks the bot any company/role/process question and gets instant answers.", pain: "New hires ask the same 50 questions. Answers scattered across Slack, Docs, and founder's memory. 5-10 hrs/month re-explaining.", how: "Crawl existing docs, Slack, SOPs. Build knowledge base. Deploy conversational bot. Routes unknowns to right person, logs gaps.", delivers: "Knowledge base + conversational bot (Slack/web) + gap tracking + auto knowledge growth.", metric: "Questions routed to humans (reduction). Time to productivity. Coverage (% questions answered).", repeatable: "Every growing SMB. 80% of turnover from 'bad hires' — often actually bad onboarding.", proof: "The 'machine to build a machine.' Train architects faster, deploy faster.", tier: "Tier 1 project. 1-2 week build." },
    { id: "f1", dept: "finance", build: "medium", name: "Invoice Processing & AP Automation", line: "Reads invoices, matches to POs, flags discrepancies, routes for approval.", pain: "$5-20M business processes 50-200 invoices/month. Someone manually enters each one. 15-25 hrs/month of pure admin.", how: "Read incoming invoices. Extract vendor, amount, line items. Match against POs. Flag discrepancies. Route clean ones for one-click approval.", delivers: "Invoice intake + extraction + PO matching + approval routing + accounting push (QBO, Xero).", metric: "Processing time (reduction). Discrepancies caught. Late fees avoided. Hours saved.", repeatable: "Every business gets invoices. Extraction and matching logic universal.", proof: "Not yet built but fits operations efficiency play every SMB needs.", tier: "Tier 1 project. 2-3 week build." },
    { id: "f2", dept: "finance", build: "low", name: "Weekly Business Pulse Report", line: "Every Monday 7am, founder gets a 1-page report: last week + this week's focus.", pain: "Founders spend Monday asking 3-5 people 'how did last week go?' and piecing together partial info for gut-feel decisions.", how: "Pull from 3-5 key systems (CRM, accounting, PM, support). Generate 1-page brief: revenue vs target, new leads, deals, tickets, cash, deadlines, flags.", delivers: "Multi-system pull + templated report + anomaly flags + delivered Monday 7am.", metric: "Monday reporting time saved. Decisions made faster. Issues caught earlier.", repeatable: "Every founder wants this. Template 80% same across businesses — only data sources change.", proof: "Ties to Ryan's Thursday check-in metrics. Same concept, different client.", tier: "Tier 1 add-on. 1 week build. Easy win." },
    { id: "c1", dept: "ceo", build: "high", name: "CEO Knowledge Engine", line: "Captures founder's decision logic so the team gets 'what would the CEO do?' without asking.", pain: "Founder makes 50-100 micro-decisions/day nobody else can. Team waits, escalates, or guesses wrong. Founder is bottleneck.", how: "Structured extraction: record how founder decides across domains (pricing, hiring, escalations). Queryable system with confidence scoring. Low confidence → human.", delivers: "Extraction interviews + decision logic docs + queryable AI assistant + escalation rules.", metric: "Founder interruptions/week. Decision speed. AI recommendation accuracy.", repeatable: "Every founder-dependent business. Methodology consistent but requires time and trust.", proof: "Ryan identified this: 'CEO AI where it stores the founder's brain.' High value, high complexity.", tier: "Tier 2. 4-6 week build. Premium offering." },
    { id: "c2", dept: "ceo", build: "medium", name: "Competitive Intelligence Monitor", line: "Watches competitors daily. Alerts founder when something changes.", pain: "Founders check competitors' sites once a quarter. Find out about pricing changes from customers, not monitoring. Always reacting.", how: "Define competitive set (5-10 companies). Monitor: website changes, pricing, job postings, social, reviews, press. Weekly digest + analysis.", delivers: "Monitoring pipeline + weekly digest + change history + strategic analysis.", metric: "Changes caught early. Strategic decisions informed. Positioning adjustments triggered.", repeatable: "Every business has competitors to watch. Infrastructure built once, reused.", proof: "Ryan noted Automate Lab's open calendar. One data point — systematic monitor catches everything.", tier: "Tier 1 project. 2-3 week build." },
    { id: "c3", dept: "ceo", build: "low", name: "Communication Drafting Assistant", line: "AI trained on founder's voice drafts emails, Slack, and updates in their exact tone.", pain: "Founders spend 30-60 min/day writing comms. Generic AI sounds generic. They rewrite everything.", how: "Collect 100+ examples of founder writing. Extract patterns. Founder gives bullet points → agent drafts in their voice. Learns from revisions.", delivers: "Voice profile + drafting agent + context input + revision learning.", metric: "Drafting time reduction. Revisions needed (decrease). Communications delegated.", repeatable: "Every founder has a voice. Training process identical. Takes 2 hrs of founder time upfront.", proof: "Ryan active on Instagram, podcasts, sells by chat. His voice IS the brand. Replicating it = scaling him.", tier: "Tier 1 add-on. 1 week build." },
  ];

  const iceData = [
    { name: "Lead Qualification Agent", dept: "sales", i: 9, c: 9, e: 7 },
    { name: "AI Lead Magnet Builder", dept: "marketing", i: 8, c: 9, e: 9 },
    { name: "Proposal / Quote Builder", dept: "sales", i: 7, c: 10, e: 9 },
    { name: "Copywriting Agent", dept: "marketing", i: 7, c: 9, e: 9 },
    { name: "Sales Coaching Agent", dept: "sales", i: 8, c: 8, e: 7 },
    { name: "Weekly Business Pulse Report", dept: "finance", i: 7, c: 8, e: 9 },
    { name: "Email Triage & Response Drafting", dept: "ops", i: 7, c: 8, e: 8 },
    { name: "Customer Onboarding Automation", dept: "cs", i: 8, c: 8, e: 7 },
    { name: "SOP & Process Doc Generator", dept: "ops", i: 8, c: 7, e: 7 },
    { name: "Communication Drafting Assistant", dept: "ceo", i: 6, c: 9, e: 9 },
    { name: "Churn Prediction System", dept: "cs", i: 9, c: 7, e: 6 },
    { name: "CRM Hygiene & Pipeline Intel", dept: "sales", i: 7, c: 8, e: 7 },
    { name: "Content Repurposing Engine", dept: "marketing", i: 6, c: 7, e: 8 },
    { name: "Ad Performance Analyst", dept: "marketing", i: 7, c: 7, e: 6 },
    { name: "Recruitment Screening Agent", dept: "hr", i: 7, c: 7, e: 6 },
    { name: "NPS & Feedback Automation", dept: "cs", i: 6, c: 8, e: 7 },
    { name: "Meeting Intelligence Tracker", dept: "ops", i: 6, c: 6, e: 6 },
    { name: "Employee Onboarding Bot", dept: "hr", i: 6, c: 7, e: 7 },
    { name: "Invoice Processing & AP", dept: "finance", i: 6, c: 7, e: 5 },
    { name: "Competitive Intel Monitor", dept: "ceo", i: 5, c: 6, e: 6 },
    { name: "Data Pipeline Normalizer", dept: "ops", i: 8, c: 6, e: 4 },
    { name: "CEO Knowledge Engine", dept: "ceo", i: 9, c: 5, e: 4 },
  ].map(s => ({ ...s, score: s.i * s.c * s.e })).sort((a, b) => b.score - a.score);

  const menus = [
    { name: "I Need More Sales", color: "#ef4444", desc: "Entry for $2-5M founder-led-sales businesses.", items: [
      { name: "Lead Qualification Agent", why: "Immediate time savings. Stop sorting leads.", entry: true },
      { name: "AI Lead Magnet Builder", why: "Better lead quality upstream. Less garbage.", entry: false },
      { name: "Sales Coaching Agent", why: "Natural upsell — now improve the conversations.", entry: false },
      { name: "Copywriting Agent", why: "Better copy → better ads → better leads → flywheel.", entry: false },
      { name: "Proposal Builder", why: "Speed up back of funnel. Quote faster, close faster.", entry: false },
    ]},
    { name: "I'm Drowning in Operations", color: "#3b82f6", desc: "Entry for $5-15M businesses with growing teams.", items: [
      { name: "SOP & Process Documentation", why: "Must happen first. Can't automate what isn't documented.", entry: true },
      { name: "Email Triage & Response", why: "Founder gets 1-2 hrs/day back immediately.", entry: false },
      { name: "Meeting Intelligence", why: "Team accountability improves. Less re-discussion.", entry: false },
      { name: "Weekly Pulse Report", why: "See the whole business in one screen.", entry: false },
      { name: "CEO Knowledge Engine", why: "The big unlock. Team stops waiting on founder.", entry: false },
    ]},
    { name: "I'm Losing Customers", color: "#10b981", desc: "Entry for subscription/service businesses at $5-20M.", items: [
      { name: "Churn Prediction System", why: "See who's leaving before they leave.", entry: true },
      { name: "Onboarding Automation", why: "Fix the front door. Most churn = first 30 days.", entry: false },
      { name: "NPS & Feedback Automation", why: "Measure satisfaction systematically, not anecdotally.", entry: false },
      { name: "CRM Hygiene", why: "Clean data powers everything.", entry: false },
      { name: "Communication Drafting", why: "Touch more at-risk accounts without burning time.", entry: false },
    ]},
  ];

  const filteredSolutions = solutions.filter(s => {
    if (filterDept !== "all" && s.dept !== filterDept) return false;
    if (filterBuild !== "all" && s.build !== filterBuild) return false;
    return true;
  });

  const grouped = {};
  filteredSolutions.forEach(s => { if (!grouped[s.dept]) grouped[s.dept] = []; grouped[s.dept].push(s); });

  const subTabs = [
    { id: "overview", label: "Thesis" },
    { id: "solutions", label: `Solutions (${solutions.length})` },
    { id: "menus", label: "Menu Builder" },
    { id: "ice", label: "ICE Scores" },
  ];

  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm leading-relaxed">
        <strong className="text-white">{solutions.length} deployable AI solutions</strong> mapped across 7 SMB departments. Every solution passes the test: deployable by a trained AI Architect using documented procedures, measurable impact, and buildable in under 4 weeks.
      </p>

      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-1.5">
        {subTabs.map(t => (
          <button key={t.id} onClick={() => setSubTab(t.id)} className={`text-xs px-3 py-1.5 rounded-full transition-all font-medium ${subTab === t.id ? "bg-emerald-600 text-white" : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"}`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── THESIS ── */}
      {subTab === "overview" && (
        <div className="space-y-4">
          <Expandable title="The 'Design Pickle of AI' Thesis" accent="#22c55e" defaultOpen={true}>
            <p className="mb-2">Design Pickle built $100M+ on a simple insight: businesses need design every week but not a full-time designer. Subscription, dedicated person, unlimited requests within boundaries.</p>
            <p className="mb-2">Boundless AI = same model for AI implementation. SMBs at $2-20M know they need AI but can't afford a $200K custom build and don't have skills to DIY. They need a trained AI Architect deploying proven solutions from a menu.</p>
            <p className="text-emerald-400 font-medium">Key constraint: every solution must be deployable by a trained architect using documented procedures. If it requires custom engineering every time, it doesn't belong on the menu.</p>
          </Expandable>

          <Expandable title="What Ryan Doesn't Want" accent="#ef4444" defaultOpen={true}>
            <div className="space-y-2">
              {["Custom one-off builds that can't be replicated", "Complex multi-platform stacks — ONE foundation", "Agents acting without guardrails (Dan Martell's AI messaged things it shouldn't)", "Solutions requiring senior engineers to deploy — LATAM architects handle 80%+", "Over-scoped platforms — modules that plug in, not Salesforce replacements"].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-red-400 text-xs mt-0.5">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Expandable>

          <Expandable title="6 Filters Every Solution Must Pass" accent="#3b82f6" defaultOpen={true}>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                { icon: "🔁", label: "Repeatable", desc: "Deployable with a playbook, not improvisation" },
                { icon: "📊", label: "Measurable", desc: "Before/after number or it doesn't justify the price" },
                { icon: "🧩", label: "Modular", desc: "Standalone AND composable. No forced ordering." },
                { icon: "⏱️", label: "<4 Week Build", desc: "Value before second billing cycle or client loses faith" },
                { icon: "📚", label: "Trainable", desc: "Curriculum-ready. No tribal knowledge dependency." },
                { icon: "💡", label: "High Perceived Value", desc: "Client gets it immediately. No explanation needed." },
              ].map((f, i) => (
                <div key={i} className="bg-gray-900/50 rounded-lg p-3 border border-gray-800/30">
                  <span className="text-base">{f.icon}</span>
                  <span className="text-white font-medium text-xs ml-1">{f.label}</span>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Expandable>

          <Expandable title="Coverage by Department" accent="#8b5cf6" defaultOpen={true}>
            <div className="space-y-2 mt-2">
              {depts.map(d => {
                const count = solutions.filter(s => s.dept === d.id).length;
                const max = Math.max(...depts.map(dep => solutions.filter(s => s.dept === dep.id).length));
                return (
                  <div key={d.id} className="flex items-center gap-3">
                    <span className="text-sm w-5">{d.icon}</span>
                    <span className="text-gray-300 w-28 text-xs">{d.label}</span>
                    <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${(count / max) * 100}%`, background: d.color }} />
                    </div>
                    <span className="text-gray-600 text-xs w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>
          </Expandable>
        </div>
      )}

      {/* ── SOLUTIONS LIST ── */}
      {subTab === "solutions" && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {[{ id: "all", label: "All Depts" }, ...depts].map(d => (
              <button key={d.id} onClick={() => setFilterDept(d.id)} className={`text-xs px-2.5 py-1 rounded-full ${filterDept === d.id ? "bg-gray-200 text-gray-900 font-semibold" : "bg-gray-800/50 text-gray-500 hover:bg-gray-700/50"}`}>
                {d.icon || "🔍"} {d.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[{ id: "all", label: "All Builds" }, { id: "low", label: "1-2 wks" }, { id: "medium", label: "2-4 wks" }, { id: "high", label: "4-6 wks" }].map(b => (
              <button key={b.id} onClick={() => setFilterBuild(b.id)} className={`text-xs px-2.5 py-1 rounded-full ${filterBuild === b.id ? "bg-gray-200 text-gray-900 font-semibold" : "bg-gray-800/50 text-gray-500 hover:bg-gray-700/50"}`}>
                {b.label}
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-600">{filteredSolutions.length} solutions shown</p>

          {Object.entries(grouped).map(([deptId, sols]) => {
            const dept = depts.find(d => d.id === deptId);
            return (
              <div key={deptId}>
                <div className="flex items-center gap-2 mb-2">
                  <span>{dept?.icon}</span>
                  <span className="text-sm font-semibold text-white">{dept?.label}</span>
                  <span className="text-xs text-gray-600">{sols.length}</span>
                </div>
                <div className="space-y-2">
                  {sols.map(s => (
                    <div key={s.id} className="rounded-lg border border-gray-800/50 overflow-hidden" style={{ borderLeftColor: dept?.color, borderLeftWidth: 3 }}>
                      <button onClick={() => toggleSol(s.id)} className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/[0.02]">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-semibold text-white">{s.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${buildColors[s.build]}`}>{buildLabels[s.build]}</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">{s.line}</p>
                        </div>
                        <span className="text-gray-600 text-xs ml-2">{expandedSol[s.id] ? "▲" : "▼"}</span>
                      </button>
                      {expandedSol[s.id] && (
                        <div className="px-4 pb-4 border-t border-gray-800/30 space-y-3 pt-3">
                          {[
                            { label: "THE PAIN", text: s.pain, color: "text-red-400" },
                            { label: "HOW IT WORKS", text: s.how, color: "text-blue-400" },
                            { label: "WHAT WE DELIVER", text: s.delivers, color: "text-emerald-400" },
                            { label: "SUCCESS METRIC", text: s.metric, color: "text-yellow-400" },
                            { label: "WHY REPEATABLE", text: s.repeatable, color: "text-purple-400" },
                            { label: "RYAN PROOF", text: s.proof, color: "text-orange-400" },
                            { label: "TIER FIT", text: s.tier, color: "text-cyan-400" },
                          ].map((sec, i) => (
                            <div key={i}>
                              <span className={`text-xs font-bold ${sec.color} tracking-wider`}>{sec.label}</span>
                              <p className="text-xs text-gray-400 leading-relaxed mt-0.5">{sec.text}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── MENU BUILDER ── */}
      {subTab === "menus" && (
        <div className="space-y-4">
          <p className="text-xs text-gray-500">3 starter menus based on client entry point. First pain determines first purchase — menu designed so every first solution leads to a second.</p>
          {menus.map((menu, mi) => (
            <Expandable key={mi} title={menu.name} accent={menu.color} defaultOpen={mi === 0} badge={<span className="text-xs text-gray-600">{menu.desc}</span>}>
              <div className="space-y-2 mt-2">
                {menu.items.map((item, i) => (
                  <div key={i} className={`flex items-start gap-3 p-2 rounded-lg ${item.entry ? "bg-white/[0.03] border border-gray-700/30" : ""}`}>
                    <span className={`text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 ${item.entry ? "text-gray-950" : "bg-gray-800 text-gray-500"}`} style={item.entry ? { background: menu.color } : {}}>
                      {i + 1}
                    </span>
                    <div>
                      <span className="text-xs text-white font-semibold">{item.name}</span>
                      {item.entry && <span className="text-xs ml-2" style={{ color: menu.color }}>← entry point</span>}
                      <p className="text-xs text-gray-500 mt-0.5">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Expandable>
          ))}
        </div>
      )}

      {/* ── ICE SCORES ── */}
      {subTab === "ice" && (
        <div className="space-y-4">
          <p className="text-xs text-gray-500">Impact × Confidence × Ease. Top 5 = Phase 1 menu. Scores are hypotheses — Ryan adjusts from customer knowledge.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-800">
                  {["#", "Solution", "Dept", "I", "C", "E", "ICE"].map(h => (
                    <th key={h} className="text-left px-2 py-2 text-gray-600 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {iceData.map((s, idx) => {
                  const dept = depts.find(d => d.id === s.dept);
                  const colorFor = (v) => v >= 8 ? "text-emerald-400" : v >= 6 ? "text-yellow-400" : "text-gray-600";
                  return (
                    <tr key={idx} className={`border-b border-gray-800/30 ${idx < 5 ? "bg-emerald-950/10" : ""}`}>
                      <td className={`px-2 py-2 font-bold ${idx < 5 ? "text-emerald-400" : "text-gray-600"}`}>{idx + 1}</td>
                      <td className="px-2 py-2 text-white font-medium">
                        {s.name}
                        {idx < 5 && <span className="text-emerald-500 ml-1 text-xs font-normal">P1</span>}
                      </td>
                      <td className="px-2 py-2" style={{ color: dept?.color }}>{dept?.icon}</td>
                      <td className={`px-2 py-2 font-semibold ${colorFor(s.i)}`}>{s.i}</td>
                      <td className={`px-2 py-2 font-semibold ${colorFor(s.c)}`}>{s.c}</td>
                      <td className={`px-2 py-2 font-semibold ${colorFor(s.e)}`}>{s.e}</td>
                      <td className={`px-2 py-2 font-bold text-sm ${s.score >= 500 ? "text-emerald-400" : s.score >= 300 ? "text-yellow-400" : "text-gray-500"}`}>{s.score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── NAVIGATION & MAIN ──────────────────────────────────────────────
const sections = [
  { label: "Business Model", icon: "🏗️" },
  { label: "Revenue", icon: "💰" },
  { label: "Client Journey", icon: "🔄" },
  { label: "Daily Ops", icon: "⚙️" },
  { label: "Team", icon: "👥" },
  { label: "AI Opportunities", icon: "🤖" },
  { label: "Key Numbers", icon: "📊" },
  { label: "Solutions", icon: "💡" },
];

export default function BoundlessOverview() {
  const [activeSection, setActiveSection] = useState(0);

  const renderSection = () => {
    switch (activeSection) {
      case 0: return <BusinessModel />;
      case 1: return <RevenueStreams />;
      case 2: return <ClientJourney />;
      case 3: return <DailyOps />;
      case 4: return <TeamRoles />;
      case 5: return <AIOpportunityMap />;
      case 6: return <KeyNumbers />;
      case 7: return <SolutionsIdeation />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-gray-600">BUSINESS INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Boundless AI + Assistant Launch
            <span className="text-blue-400 ml-2 text-lg font-normal">Complete Overview</span>
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Ryan Brazzell — San Diego / Remote — $25M ARR → $100M+ Exit
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-1.5 mb-6 sticky top-0 bg-gray-950/95 backdrop-blur-sm py-2 z-10">
          {sections.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveSection(i)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all font-medium ${
                activeSection === i
                  ? "bg-white text-gray-950 shadow-lg shadow-white/10"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-gray-300"
              }`}
            >
              <span className="mr-1">{s.icon}</span> {s.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {renderSection()}

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-gray-800/30 text-center">
          <p className="text-xs text-gray-600">Compiled from Boundless AI + Assistant Launch — Shiv Shukla, Fractional Chief Innovator</p>
          <p className="text-xs text-gray-700 mt-1">Last updated: February 2026 • Sources: Onboarding transcripts, execution plan, web research, Limitless extracts</p>
        </div>
      </div>
    </div>
  );
}
