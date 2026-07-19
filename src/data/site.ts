export const ecosystem = [
  {
    name: "Lady International",
    slug: "lady-international",
    role: "Holding company",
    description:
      "The parent structure for a small universe of studios, projects, names, and long-running bets.",
    overview:
      "Lady International is the parent organization for the studio family: a holding company for software projects, experiments, writing, and ventures that need a name before they are fully sensible.",
  },
  {
    name: "Shwimp Studios",
    slug: "shwimp-studios",
    role: "Products",
    description:
      "User-facing software, live sites, polished oddities, and projects that have met the internet.",
    overview:
      "Shwimp Studios is the public product arm for running and formerly running projects: web apps, sites, and software with a user-facing surface.",
  },
  {
    name: "Shrimpworks",
    slug: "shrimpworks",
    role: "Engineering",
    description:
      "CLI tools, engineering experiments, infrastructure, and the practical machinery behind the studio.",
    overview:
      "Shrimpworks is the development studio for CLI tools, pre-release systems, internal infrastructure, and engineering experiments that support the rest of the organization.",
  },
  {
    name: "Wimpy Productions",
    slug: "wimpy-productions",
    role: "Media",
    description:
      "Docs, blogs, datasets, release notes, and written context for what is being built.",
    overview:
      "Wimpy Productions is the publishing shelf for docs, blogs, datasets, release notes, project documentation, and the narrative context around what the studio is building.",
  },
  {
    name: "Noodle Ventures",
    slug: "noodle-ventures",
    role: "Incubation",
    description:
      "Finance, trading, markets, and venture experiments with a business-shaped edge.",
    overview:
      "Noodle Ventures is the venture bench for finance, trading, stocks, markets, and business-shaped experiments that might become products, simulations, or small companies.",
  },
];

export const projects = [
  {
    name: "Reef",
    division: "Noodle Ventures",
    kicker: "Institutional trading simulator",
    summary:
      "A market playground for exploring order flow, portfolios, dashboards, and the small systems that make financial software feel real.",
    status: "Research",
    tone: "reef",
    phase: "current",
    featured: true,
    availability: "Private / closed source",
  },
  {
    name: "Trove",
    division: "Shwimp Studios",
    kicker: "Personal knowledge and bookmark management",
    summary:
      "A calmer way to keep saved links, references, and internet rabbit holes organized without turning them into another chore.",
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
      "A CLI for keeping related project rules, conventions, docs, and code paths close enough that teams can actually use them.",
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
      "Part of Wap Labs, the broader toolkit for WAP tooling, testing, simulation, engine work, and a browser for exploring the forgotten mobile web.",
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
      "A small app for rummaging through starred repositories and rediscovering the useful things hiding inside an old GitHub account.",
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
      "A shelf for smaller public app experiments: secure chat, golf tracking, receipt rewards, and a browser-based Markdown editor.",
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
      "A public data deep dive into historical English football league stats and long-running competition records.",
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
      "The public Shwimp Studios and Lady International marketing site, used to organize the ecosystem and its project catalog.",
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
      "A currently dormant site for picking the Nicolas Cage movie of the night and finding where to stream it.",
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
      "A Next.js task management app paired with a NestJS API, useful as a full-stack product experiment.",
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
    kicker: "Trading card image analysis",
    summary:
      "An experimental Magic: The Gathering card image analyzer using OCR and image-processing ideas.",
    status: "Experiment",
    tone: "waves",
    phase: "past",
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
      "An Angular experiment for browsing a galaxy far away's archive through the public SWAPI data set.",
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
