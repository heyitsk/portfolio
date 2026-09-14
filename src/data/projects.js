export const projects = [
  {
    id: "gagandrishti",
    name: "GaganDrishti",
    year: "2026",
    tagline: "AWS Cloud Security Automation Platform",
    description:
      "A cloud security scanner that audits AWS accounts for real misconfigurations — exposed storage, open ports, over-permissive IAM policies, and encryption gaps — and turns them into actionable, severity-ranked findings.",
    impact: [
      { stat: "9", label: "detection rules across S3, EC2, IAM, RDS" },
      { stat: "4-tier", label: "severity model, CRITICAL → LOW" },
      { stat: "5", label: "concurrent scan jobs w/ auto-retry" },
      { stat: "AES-256", label: "encrypted IAM credential vaulting" },
    ],
    details: [
      "Architected detection rules across 4 AWS services, classifying findings into a 4-tier severity model covering exposed storage, open ports, over-permissive IAM policies, and encryption gaps.",
      "Built an asynchronous scan orchestration engine with Node.js, BullMQ, and Redis — 5 concurrent scan jobs, automatic retry (3 attempts, exponential backoff) for AWS rate-limit resilience.",
      "Engineered a React/Vite dashboard with real-time WebSocket (Socket.io) job tracking across a 4-phase scan lifecycle, plus targeted and full-environment scan modes with per-finding remediation guidance.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Redis", "BullMQ", "AWS SDK", "Socket.io", "React", "Vite"],
    links: [{ label: "GitHub", url: "https://github.com/heyitsk/GaganDrishti" }],
    status: "Source available",
  },
  {
    id: "autocrawler",
    name: "AutoCrawler",
    year: "2026",
    tagline: "Web Automation & Crawling System",
    description:
      "A full-stack web scraping and automation platform with a hybrid crawler that auto-detects JS frameworks and switches between lightweight HTTP requests and headless-browser rendering to crawl any site efficiently.",
    impact: [
      { stat: "4", label: "frameworks auto-detected: React, Vue, Angular, Next.js" },
      { stat: "5 levels", label: "of recursive crawling depth" },
      { stat: "500-5000ms", label: "configurable rate limiting" },
      { stat: "100/page", label: "paginated REST API results" },
    ],
    details: [
      "Built a hybrid crawler that auto-detects JS frameworks to choose between lightweight HTTP requests and headless-browser (Puppeteer) rendering.",
      "Developed a scalable backend with configurable rate limiting, recursive crawling up to 5 levels deep, and retry logic with exponential backoff for webhook delivery reliability.",
      "Implemented real-time crawl monitoring via WebSockets, indexed MongoDB storage, paginated REST APIs, n8n webhook integrations, and automated recurring crawl workflows.",
    ],
    tech: ["Node.js", "React", "MongoDB", "Socket.IO", "Cheerio", "Puppeteer", "n8n"],
    links: [{ label: "GitHub", url: "https://github.com/heyitsk/autoCrawler" }],
    status: "Source available",
  },
  {
    id: "insightiq",
    name: "InsightIQ",
    year: "2025",
    tagline: "AI-Powered Natural Language Analytics",
    description:
      "A full-stack analytics platform that converts plain-English questions into safe, schema-aware SQL using Gemini 2.5 Flash, then auto-recommends the right chart to visualize the answer.",
    impact: [
      { stat: "LIMIT 100", label: "default safeguard against runaway queries" },
      { stat: "20 msgs", label: "of retained conversational context" },
      { stat: "6", label: "chart types, auto-selected by data shape" },
      { stat: "Multi-tenant", label: "database session management" },
    ],
    details: [
      "Developed a full-stack AI analytics platform converting natural language to SQL via the Gemini 2.5 Flash API, with automated query correction and schema-aware validation.",
      "Built a Node.js backend with per-session conversational context (up to 20 messages, last 5 queries used for follow-up context) and a rule-based chart-recommendation engine selecting from 6 chart types based on row count and column data types.",
      "Engineered a responsive React + TypeScript frontend with dynamic Recharts visualizations for real-time, AI-driven insights.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Gemini AI", "Recharts"],
    links: [
      { label: "Frontend", url: "https://github.com/heyitsk/insight_frontend" },
      { label: "Backend", url: "https://github.com/heyitsk/insight_backend" },
    ],
    status: "Source available",
  },
]
