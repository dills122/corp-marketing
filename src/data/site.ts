export const ecosystem = [
  {
    name: "Lady International",
    slug: "lady-international",
    role: "Parent organization",
    description:
      "The umbrella organization for the studio's software, publishing, and market-related work.",
    overview:
      "Lady International is the parent organization for Shwimp Studios and its product, engineering, publishing, and market-related projects.",
  },
  {
    name: "Shwimp Studios",
    slug: "shwimp-studios",
    role: "Products",
    description:
      "Public-facing software, websites, and product experiments.",
    overview:
      "Shwimp Studios is the public-facing product division for web applications, websites, and software intended for people to use directly.",
  },
  {
    name: "Shrimpworks",
    slug: "shrimpworks",
    role: "Engineering",
    description:
      "Developer tools, infrastructure, libraries, and engineering experiments.",
    overview:
      "Shrimpworks covers the developer tools, infrastructure, libraries, and engineering work that support the studio's projects.",
  },
  {
    name: "Wimpy Productions",
    slug: "wimpy-productions",
    role: "Publishing",
    description:
      "Documentation, blogs, datasets, and project publishing.",
    overview:
      "Wimpy Productions groups the studio's documentation, blogs, datasets, release notes, and other published material.",
  },
  {
    name: "Noodle Ventures",
    slug: "noodle-ventures",
    role: "Markets",
    description:
      "Market software, trading simulations, and finance-related research.",
    overview:
      "Noodle Ventures is the home for Reef and the studio's work on market structure, trading simulations, financial data, and related research.",
  },
];

export const projects = [
  {
    name: "Reef",
    division: "Noodle Ventures",
    kicker: "Institutional-grade equity market simulator",
    summary:
      "A simulation-first trading venue and post-trade platform for exploring market structure, order flow, portfolios, and execution—with a bolt-on Bot Arena for building trading agents and competing head-to-head.",
    status: "Active",
    tone: "reef",
    phase: "current",
    featured: true,
    links: [
      { label: "Project site", href: "https://dills122.github.io/reef/" },
      { label: "GitHub", href: "https://github.com/dills122/reef" },
      { label: "Bot Arena", href: "https://reef-arena-admin.shrimpworks.dev/" },
    ],
  },
  {
    name: "Capsule",
    division: "Shrimpworks",
    kicker: "Human-approved execution for AI-proposed code",
    summary:
      "An experimental, local-first platform for bounded JavaScript jobs proposed by AI agents. Capsule fixes the exact code, input, limits, and runtime before one-use human approval, then targets a fresh disposable guest built from governed Deno, rusty_v8, and libkrun forks. It remains a pre-alpha scaffold, not yet a security boundary.",
    status: "Pre-alpha",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [
      { label: "Project site", href: "https://shrimpworks.github.io/capsule-corp/" },
      { label: "GitHub", href: "https://github.com/Shrimpworks/capsule-corp" },
      {
        label: "Security overview",
        href: "https://github.com/Shrimpworks/capsule-corp/blob/main/docs/SECURITY_OVERVIEW.md",
      },
      {
        label: "Runtime governance",
        href: "https://github.com/Shrimpworks/capsule-corp/blob/main/docs/GOVERNED_RUNTIME_RELEASE_CANDIDATE.md",
      },
    ],
  },
  {
    name: "Trove",
    division: "Shwimp Studios",
    kicker: "Personal knowledge and bookmark management",
    summary:
      "A personal knowledge and bookmark manager for organizing saved links, references, and research.",
    status: "Prototype",
    tone: "trove",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/trove" },
      { label: "Website", href: "https://trove.dsteele.dev/" },
    ],
  },
  {
    name: "Kyn",
    division: "Shrimpworks",
    kicker: "Developer workflow tooling",
    summary:
      "A CLI for keeping project rules, conventions, documentation, and relevant code paths together.",
    status: "Tooling",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/kyn" },
      { label: "Website", href: "https://dills122.github.io/kyn/" },
    ],
  },
  {
    name: "Waves",
    division: "Noodle Ventures",
    kicker: "Retro mobile web exploration",
    summary:
      "Part of Wap Labs, a toolkit for WAP development, testing, simulation, engine work, and browsing the early mobile web.",
    status: "Experiment",
    tone: "waves",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/wap-labs" },
      { label: "Website", href: "https://dills122.github.io/wap-labs/" },
    ],
  },
  {
    name: "AI Central",
    division: "Shrimpworks",
    kicker: "AI coding context library",
    summary:
      "A reusable library of steering files, AGENTS templates, skills, scaffold scripts, and setup patterns for AI-assisted development workflows.",
    status: "Tooling",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/ai-central" }],
  },
  {
    name: "Image Fingerprint",
    division: "Shrimpworks",
    kicker: "Cross-runtime perceptual image fingerprints",
    summary:
      "A modern TypeScript fork of image-hash with versioned BlockHash and PDQ fingerprints, Node and browser image adapters, comparison and matching policy tools, and an exact migration path for image-hash v7 values.",
    status: "Library",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/image-fingerprint" }],
  },
  {
    name: "NeDB Fork",
    division: "Shrimpworks",
    kicker: "Curated JavaScript database fork",
    summary:
      "A kept fork of NeDB, the embedded JavaScript database for Node, Electron, nw.js, and browser projects.",
    status: "Fork",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/nedb" }],
  },
  {
    name: "Engineering Starters",
    division: "Shrimpworks",
    kicker: "Reusable project templates",
    summary:
      "Starter kits and base images for spinning up Angular, Tailwind, Material, Rush, and containerized project foundations.",
    status: "Templates",
    tone: "kyn",
    phase: "current",
    links: [
      { label: "Angular starter", href: "https://github.com/dills122/angular-mat-tailwind-starter" },
      { label: "Rush base image", href: "https://github.com/dills122/rushjs-base-img" },
    ],
  },
  {
    name: "Forage",
    division: "Shwimp Studios",
    kicker: "GitHub stars discovery",
    summary:
      "An app for searching, filtering, and rediscovering repositories saved to a GitHub stars collection.",
    status: "Prototype",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/forage" },
      { label: "Website", href: "https://forage-staging.shrimpworks.dev/" },
    ],
  },
  {
    name: "Small App Archive",
    division: "Shwimp Studios",
    kicker: "Older user-facing experiments",
    summary:
      "A collection of smaller public app experiments covering secure chat, golf tracking, receipt rewards, and browser-based Markdown editing.",
    status: "Archive",
    tone: "trove",
    phase: "past",
    links: [
      { label: "Session Chat", href: "https://github.com/dills122/session-chat" },
      { label: "Puttr", href: "https://github.com/dills122/puttr" },
      { label: "Receipt Rack", href: "https://github.com/dills122/receipt-rack" },
      { label: "Marked", href: "https://github.com/dills122/Marked" },
    ],
  },
  {
    name: "Footy Data Kit",
    division: "Wimpy Productions",
    kicker: "Football data tooling",
    summary:
      "Scripts and datasets for pulling, shaping, and browsing English football history from public sources.",
    status: "Data",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/footy-data-kit" },
      { label: "Website", href: "https://footy.dsteele.dev/dashboard" },
    ],
  },
  {
    name: "Footy Stats",
    division: "Shwimp Studios",
    kicker: "Football statistics site",
    summary:
      "A public site for exploring historical English football league statistics and competition records.",
    status: "Data",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/footy-stats" },
      { label: "Website", href: "https://dills122.github.io/footy-stats/" },
    ],
  },
  {
    name: "Backbone Infrastructure",
    division: "Shrimpworks",
    kicker: "Web app infrastructure",
    summary:
      "Terraform, Caddy, DigitalOcean, and service infrastructure patterns for keeping the studio's web projects online.",
    status: "Infrastructure",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/backbone-infa" }],
  },
  {
    name: "Capsule Orchestrator",
    division: "Shrimpworks",
    kicker: "Secure task runner",
    summary:
      "A shelved experiment around SES-oriented cron orchestration and controlled background task execution.",
    status: "Shelved",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/capsule-orchestrator" }],
  },
  {
    name: "Corporate Marketing",
    division: "Wimpy Productions",
    kicker: "Studio marketing site",
    summary:
      "The public website for Shwimp Studios, its divisions, and its project catalogue.",
    status: "Site",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/corp-marketing" },
      { label: "Website", href: "https://shwimp.studio/" },
    ],
  },
  {
    name: "Blog",
    division: "Wimpy Productions",
    kicker: "Personal publishing archive",
    summary:
      "A GitHub Pages blog archive and writing surface for technical notes, personal posts, and older web publishing experiments.",
    status: "Archive",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/Blog" },
      { label: "Website", href: "https://dills122.github.io/Blog/" },
    ],
  },
  {
    name: "Where My Cage At",
    division: "Shwimp Studios",
    kicker: "Nicolas Cage movie tracker",
    summary:
      "A dormant site for choosing a Nicolas Cage movie and finding where it is available to stream.",
    status: "Dormant",
    tone: "waves",
    phase: "past",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/where-my-cage-at" },
      { label: "Website", href: "https://wheremycageat.com/" },
    ],
  },
  {
    name: "Work Nest",
    division: "Shwimp Studios",
    kicker: "Task management app",
    summary:
      "A task management application built with a Next.js frontend and NestJS API.",
    status: "Prototype",
    tone: "trove",
    phase: "past",
    links: [
      { label: "Web repo", href: "https://github.com/dills122/work-nest" },
      { label: "API repo", href: "https://github.com/dills122/work-nest-api" },
    ],
  },
  {
    name: "Cardboard Crack",
    division: "Shwimp Studios",
    kicker: "Sports card checklist parser",
    summary:
      "A web app and parser workbench for turning sports card checklist PDFs into something structured and browsable.",
    status: "Prototype",
    tone: "waves",
    phase: "past",
    links: [
      { label: "App repo", href: "https://github.com/dills122/cardboard-crack" },
      { label: "Parser repo", href: "https://github.com/dills122/checklist-parser" },
    ],
  },
  {
    name: "MTG Card Analyzer",
    division: "Shwimp Studios",
    kicker: "Local-first Magic card identification",
    summary:
      "A Node.js CLI that identifies Magic: The Gathering cards and likely printings from images using OCR, fuzzy name matching, Scryfall data, and perceptual image hashes, with regression tooling and optional local collection tracking.",
    status: "Active",
    tone: "waves",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/MTG-Card-Analyzer" }],
  },
  {
    name: "ShamWow",
    division: "Shrimpworks",
    kicker: "PII document scrubber",
    summary:
      "A C# experiment for scrubbing personally identifiable information from documents using attributes and reflection.",
    status: "Experiment",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/ShamWow" }],
  },
  {
    name: "Patent View Tools",
    division: "Shrimpworks",
    kicker: "USPTO API wrapper",
    summary:
      "A TypeScript API wrapper and test app for exploring historical patent data from the USPTO Patent View API.",
    status: "Tooling",
    tone: "kyn",
    phase: "past",
    links: [
      { label: "API repo", href: "https://github.com/dills122/patent-view-api" },
      { label: "App repo", href: "https://github.com/dills122/patent-view-app" },
    ],
  },
  {
    name: "WeasyPrint Tools",
    division: "Shrimpworks",
    kicker: "HTML-to-PDF services",
    summary:
      "A Node wrapper and Docker endpoint for turning HTML into PDFs with WeasyPrint.",
    status: "Tooling",
    tone: "kyn",
    phase: "current",
    links: [
      { label: "Wrapper repo", href: "https://github.com/dills122/weasyprint-wrapper" },
      { label: "Docker repo", href: "https://github.com/dills122/weasyprint-docker" },
    ],
  },
  {
    name: "Snips",
    division: "Shrimpworks",
    kicker: "Code snippet manager",
    summary:
      "A small Node console app for managing reusable code snippets from the command line.",
    status: "Tooling",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/Snips" }],
  },
  {
    name: "Trading Tools",
    division: "Noodle Ventures",
    kicker: "Market data experiments",
    summary:
      "Earlier stock, portfolio, and currency experiments that helped shape the later trading-simulator direction.",
    status: "Archive",
    tone: "reef",
    phase: "past",
    links: [
      { label: "Trader tools", href: "https://github.com/dills122/trader-tools" },
      { label: "Stock Talk", href: "https://github.com/dills122/Stock-Talk" },
      { label: "Portfolio Manager", href: "https://github.com/dills122/Portfolio-Manager" },
      { label: "Currency rates", href: "https://github.com/dills122/currency-exchange-rates-app" },
    ],
  },
  {
    name: "P2P Test",
    division: "Shrimpworks",
    kicker: "Peer-to-peer messaging experiment",
    summary:
      "A Go experiment for testing peer-to-peer node messaging through an interactive shell.",
    status: "Experiment",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/p2p-test" }],
  },
  {
    name: "Utility Libraries",
    division: "Shrimpworks",
    kicker: "Small reusable libraries",
    summary:
      "Older library experiments covering rule evaluation, image hashing, and other compact pieces of reusable application logic.",
    status: "Archive",
    tone: "kyn",
    phase: "past",
    links: [
      { label: "Aries", href: "https://github.com/dills122/Aries" },
      { label: "Image Hash", href: "https://github.com/dills122/image-hash" },
    ],
  },
  {
    name: "Pokemon FS",
    division: "Shrimpworks",
    kicker: "CLI game experiment",
    summary:
      "A command-line game experiment that treats Pokemon as a file-system adventure.",
    status: "Experiment",
    tone: "waves",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/Pokemon-FS" }],
  },
  {
    name: "Stellar Archives",
    division: "Shwimp Studios",
    kicker: "Star Wars API app",
    summary:
      "An Angular application for browsing the public Star Wars API data set.",
    status: "Experiment",
    tone: "waves",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/stellar-archives" }],
  },
];

export const leaders = [
  {
    name: "Catherine",
    alias: "The Lady / The Noodle",
    title: "Chairwoman, Lady International",
    image: "/Catherine",
    note:
      "Much of Catherine's professional history remains classified, sealed, or otherwise unavailable through conventional channels. Following a series of successful engagements throughout Eastern Europe, she accepted the role of Chairwoman at Lady International, where she provides strategic oversight, executive leadership, and occasional guidance on matters best left undocumented.",
  },
  {
    name: "D. Steele",
    alias: "Founder / Operator",
    title: "Founder, Shwimp Studios",
    image: "/venture-bro-newest",
    note:
      "Responsible for turning the organization's questionable ideas into working software, shaping the technical direction, and keeping the growing collection of projects moving from loose concept to usable thing.",
  },
  {
    name: "Cynthia",
    alias: "Shrimp / Wimpy / Shwimp",
    title: "Director of Product Instinct",
    image: "/Cynthia",
    note:
      "Cynthia's career was defined less by expertise and more by persistence. Although frequently confused about the details, she approached every challenge with confidence, enthusiasm, and a remarkable willingness to improvise. Many of the studio's ideas can be traced back to questions she probably should not have been asking, and her influence continues to be felt throughout the organization today.",
  },
];
