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
    flow: ["AWS Account", "Scanner (9 rules)", "BullMQ + Redis", "MongoDB (AES-256)", "Live Dashboard"],
    snippet: {
      file: "backend/src/config/bullmq.js",
      code: `export const scanQueue = new Queue('scan-queue', {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,                                    // retry failed jobs up to 3 times
    backoff: { type: 'exponential', delay: 5000 },  // 5s -> 10s -> 20s
    removeOnComplete: 10,
    removeOnFail: 20,                               // keep last 20 for debugging
  },
})

// Back off gradually: 500ms -> 1s -> 1.5s ... capped at 30s.
// Without this, ioredis reconnects 100s of times/sec and floods logs.
retryStrategy: (times) => Math.min(times * 500, 30_000)`,
    },
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
    flow: ["Target URL", "Framework Detector", "HTTP or Puppeteer", "Cheerio Parser", "MongoDB + Webhooks"],
    snippet: {
      file: "backend/src/utils/crawlerDetector.js",
      code: `const FRAMEWORK_PATTERNS = {
  react: [/<div[^>]*id=["']root["']/i, /__REACT_/, /_next\\/static/],
  vue: [/<div[^>]*id=["']app["']/i, /Vue\\./, /__NUXT__/],
  angular: [/ng-app/i, /ng-version/i],
  nextjs: [/__NEXT_DATA__/, /_next\\/static/],
}

function detectFramework(html) {
  for (const [framework, patterns] of Object.entries(FRAMEWORK_PATTERNS)) {
    for (const pattern of patterns) {
      if (pattern.test(html)) return framework   // regex hit -> needs Puppeteer
    }
  }
  // no pattern matched -> plain HTML, a lightweight fetch is enough
  return null
}`,
    },
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
    flow: ["Natural Language Query", "Gemini 2.5 Flash", "SQL Validator", "PostgreSQL", "Auto Chart"],
    snippet: {
      file: "controllers/chatController.js",
      code: `let sqlQuery = await askGeminiSQL(sqlPrompt)
let attempt = 0

while (attempt < maxAttempts) {
  try {
    const result = await pool.query(sqlQuery)   // actually run it, not just parse it
    if (result.rows) break
  } catch (sqlError) {
    attempt++
    if (attempt < maxAttempts) {
      // hand the DB's own error back to Gemini and ask it to fix its SQL
      sqlQuery = await validateAndImproveSQL(sqlQuery, schemaInfo, sqlError.message)
    } else {
      return res.status(400).json({
        error: \`SQL execution failed after \${maxAttempts} attempts\`,
        sql: sqlQuery,
      })
    }
  }
}`,
    },
  },
]
