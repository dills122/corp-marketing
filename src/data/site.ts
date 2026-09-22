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
      "Bookmark tools, web applications, and game experiments.",
    overview:
      "Shwimp Studios builds software for people to use directly, from cleaning up bookmarks and rediscovering saved repositories to exploring the early mobile web and developing campaign simulations.",
  },
  {
    name: "Shrimpworks",
    slug: "shrimpworks",
    role: "Engineering",
    description:
      "Developer tools, AI coding workflows, libraries, and infrastructure.",
    overview:
      "Shrimpworks builds tools for reviewing code, checking project conventions, describing application behavior, and understanding dependencies, alongside experimental runtimes and reusable libraries.",
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
    kicker: "Equity market simulation and trading-agent research",
    summary:
      "A simulation-first trading venue for studying order flow, matching, and post-trade workflows with deterministic replay. Its optional Bot Arena supports trading-agent submission and qualification through an invite-only hosted environment.",
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
      "An experimental macOS platform designed to pair exact JavaScript job plans with one-use human approval and disposable execution. Work now focuses on the approval broker, execution supervisor, and governed runtime. It remains a pre-alpha scaffold that does not yet launch guest runtimes or provide a security boundary.",
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
        label: "Work status",
        href: "https://github.com/Shrimpworks/capsule-corp/blob/main/docs/STATUS_LANGUAGE.md",
      },
    ],
  },
  {
    name: "Sandtable",
    division: "Shwimp Studios",
    kicker: "A digital Campaign for North Africa",
    summary:
      "An in-development adaptation of the 1979 board wargame, with a digital umpire intended to handle rules, hidden information, and record-keeping. The pre-alpha engine supports deterministic simulation and replay; playable campaigns and the player interface are still ahead.",
    status: "Pre-alpha",
    tone: "waves",
    phase: "current",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/dills122/sandtable" }],
  },
  {
    name: "Independent Reviewer",
    division: "Shrimpworks",
    kicker: "Independent model review of Git changes",
    summary:
      "A local CLI that captures a fixed changeset, gets a blind assessment through OpenRouter, and challenges findings before considering the author's explanation. Produces structured reports with explicit evidence gaps and cost limits. Available from source as a pre-release.",
    status: "Pre-release",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/dills122/independent-reviewer" }],
  },
  {
    name: "Trove",
    division: "Shwimp Studios",
    kicker: "Local-first bookmark cleanup",
    summary:
      "Import a browser bookmark export, find duplicates, assess link quality, and organize the collection before exporting it. Cleanup happens locally without changing the source file, with optional link-health checks.",
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
    kicker: "Related-file checks for code review and CI",
    summary:
      "A stateless CLI that checks whether related files change together: a component and its story, an API handler and its tests, or a module and its documentation. Readable YAML policies produce consistent local and CI results, with installable releases.",
    status: "Released",
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
    division: "Shwimp Studios",
    kicker: "The WAP Labs browser and early mobile web stack",
    summary:
      "The desktop browser in WAP Labs, backed by a Rust WML engine, native WAP transport, and an interoperability lab. Try the engine in the web simulator today; packaged desktop releases and protocol conformance remain in development.",
    status: "Pre-alpha",
    tone: "waves",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/wap-labs" },
      { label: "Project site", href: "https://dills122.github.io/wap-labs/" },
      { label: "Try the simulator", href: "https://dills122.github.io/wap-labs/simulator/" },
    ],
  },
  {
    name: "Formly Contract",
    division: "Shrimpworks",
    kicker: "Agent-readable contracts for Angular forms",
    summary:
      "An early experiment in turning Angular Formly configurations into structured descriptions of fields, constraints, states, and locator evidence for tests and coding agents. Feasibility and scope are still being evaluated; continued development and a public release are not committed.",
    status: "Early experiment · Future uncertain",
    tone: "kyn",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/formly-contract" },
      { label: "Documentation", href: "https://dills122.github.io/formly-contract/" },
    ],
  },
  {
    name: "Package Spelunker",
    division: "Shrimpworks",
    kicker: "Evidence-backed package and repository analysis",
    summary:
      "An early experiment in understanding installed packages and their public APIs without executing package code. Initial work covers package snapshots, resolution, and API modeling. Broader repository analysis and agent tooling are exploratory ideas; continued development and a public release are not committed.",
    status: "Early experiment · Future uncertain",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/package-spelunker" }],
  },
  {
    name: "Session Chat",
    division: "Shrimpworks",
    kicker: "Disposable encrypted conversation protocols",
    summary:
      "A Rust research project for temporary, end-to-end encrypted conversations, combining invitation-based admission, MLS messaging, and encrypted-storage recovery tests. The source-only alpha is a headless protocol laboratory, with a deployable chat application still ahead.",
    status: "Research alpha",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/session-chat" }],
  },
  {
    name: "TMDb SDK",
    division: "Shrimpworks",
    kicker: "Typed movie-data access for Node.js",
    summary:
      "A published TypeScript SDK for The Movie Database, covering movie, person, company, image, and credit lookups. Includes a typed low-level client, consistent response keys, and bounded rate-limit retries.",
    status: "Library",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/tmdb" }],
  },
  {
    name: "AI Central",
    division: "Shrimpworks",
    kicker: "AI coding context library",
    summary:
      "Reusable project guidance, curated skill bundles, and installers for AI-assisted development. It brings repository conventions, planning, implementation, review, and specialist workflows into new or existing projects without overwriting project-owned guidance.",
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
      "A TypeScript library for versioned BlockHash and PDQ image fingerprints in Node and browsers, with matching tools, an experimental crop-aware matcher, and compatibility for historical image-hash values. Includes a browser playground.",
    status: "Library",
    tone: "kyn",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/image-fingerprint" },
      { label: "Browser playground", href: "https://dills122.github.io/image-fingerprint/" },
    ],
  },
  {
    name: "NeDB Fork",
    division: "Shrimpworks",
    kicker: "Curated JavaScript database fork",
    summary:
      "A maintained fork of the embedded JavaScript database. The 2.x line targets modern Node.js while preserving its CommonJS callback API and on-disk data format, with the 1.9.2 compatibility release retained for older runtimes.",
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
      "Rediscover useful projects in your GitHub stars. Import starred repositories, analyze and categorize them locally, then review and export the results. Imported repository data stays in browser storage.",
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
      "A collection of smaller public app experiments covering golf tracking, receipt rewards, and browser-based Markdown editing.",
    status: "Archive",
    tone: "trove",
    phase: "past",
    links: [
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
    name: "Dylan Steele — Technical Writing",
    division: "Wimpy Productions",
    kicker: "Engineering notes and project deep dives",
    summary:
      "The current personal site and technical writing home for Dylan Steele, with articles on software engineering and the studio's projects, including Reef's architecture and development.",
    status: "Site",
    tone: "trove",
    phase: "current",
    links: [
      { label: "Website", href: "https://dsteele.dev/" },
      { label: "GitHub", href: "https://github.com/dills122/dev-landing" },
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
    phase: "past",
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
      "A Nicolas Cage film discovery app for finding streaming, rental, and purchase options. The Angular frontend and movie-data pipeline are being refreshed while production hosting is rebuilt.",
    status: "Rebuilding",
    tone: "waves",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/where-my-cage-at" },
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
      "A maintained Node.js wrapper for turning HTML, URLs, buffers, and streams into PDFs with WeasyPrint, with CommonJS and ESM builds and compatibility checks against multiple WeasyPrint releases. Includes a companion Docker service.",
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
