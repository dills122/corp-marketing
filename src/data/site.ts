export const ecosystem = [
  {
    name: "Lady International",
    slug: "lady-international",
    role: "Parent organization",
    description:
      "The parent organization for Shwimp Studios and its divisions.",
    overview:
      "Lady International brings the studio’s divisions together. Their projects range from everyday apps to publishing and market research.",
  },
  {
    name: "Shwimp Studios",
    slug: "shwimp-studios",
    role: "Products",
    description:
      "Bookmark tools, web applications, and game experiments.",
    overview:
      "Shwimp Studios is where the apps and games live. That includes bookmark cleanup, a browser for the early mobile web, and a digital adaptation of Campaign for North Africa.",
  },
  {
    name: "Shrimpworks",
    slug: "shrimpworks",
    role: "Engineering",
    description:
      "Developer tools, AI coding workflows, libraries, and infrastructure.",
    overview:
      "Shrimpworks houses the developer tools and libraries. Kyn checks for missing file changes; Independent Reviewer is an experiment with AI models. Other projects deal with forms, dependencies, and hosting.",
  },
  {
    name: "Wimpy Productions",
    slug: "wimpy-productions",
    role: "Publishing",
    description:
      "Documentation, blogs, datasets, and project publishing.",
    overview:
      "Wimpy Productions covers the writing and published data, including this website, engineering notes, and football datasets.",
  },
  {
    name: "Noodle Ventures",
    slug: "noodle-ventures",
    role: "Markets",
    description:
      "Market software, trading simulations, and finance-related research.",
    overview:
      "Noodle Ventures is home to Reef. The work here looks at how markets handle orders and trades, with older experiments in financial data kept in the archive.",
  },
];

export const projects = [
  {
    name: "Reef",
    division: "Noodle Ventures",
    kicker: "A stock market you can replay",
    summary:
      "Reef simulates stock orders and trades, so you can replay a run and study what happened. There’s also an invite-only Bot Arena for testing trading bots against the simulator.",
    status: "Prototype",
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
    kicker: "Approve what an AI agent runs",
    summary:
      "The idea behind Capsule is to review an AI agent’s proposed actions, then run approved code in a disposable environment on macOS. Those controls are still being built. Capsule cannot launch the environments yet and does not currently isolate code safely.",
    status: "Early development",
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
    kicker: "Bringing Campaign for North Africa to the screen",
    summary:
      "A digital adaptation of the 1979 board wargame, with the computer handling the rules and paperwork. The rules engine, saved campaigns, and Maproom interface are in development. The first playable version is planned as a six-turn scenario for two people sharing a computer.",
    status: "Early development",
    tone: "waves",
    phase: "current",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/dills122/sandtable" }],
  },
  {
    name: "Independent Reviewer",
    division: "Shrimpworks",
    kicker: "Working directly with models",
    summary:
      "This started as a code-review tool and became an experiment in building harnesses around AI models: providing context, running reviews, and checking the results. A model reads the changes before it sees the author’s explanation. The reports record its findings, the evidence behind them, and the cost of the run. The pre-release code is available on GitHub.",
    status: "Research",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [{ label: "GitHub", href: "https://github.com/dills122/independent-reviewer" }],
  },
  {
    name: "Trove",
    division: "Shwimp Studios",
    kicker: "Sort out your bookmarks",
    summary:
      "Trove finds duplicates in an imported bookmark file and helps you organize what’s left. It works locally and exports a new copy, leaving the original alone. You can also check for broken links.",
    status: "Prototype",
    tone: "trove",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/trove" },
      { label: "Website", href: "https://trove.dsteele.dev/" },
    ],
  },
  {
    name: "Kyn",
    division: "Shrimpworks",
    kicker: "Catch the files you forgot to update",
    summary:
      "Changed the code but forgot its tests or docs? Kyn checks rules you write in YAML to catch missing companion changes, either locally or in automated checks. Installable releases are available. A more usable v3 config schema is planned soon, though there’s no firm date yet.",
    status: "Released",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/kyn" },
      { label: "Website", href: "https://dills122.github.io/kyn/" },
      { label: "WinGet package", href: "https://github.com/microsoft/winget-pkgs/tree/master/manifests/d/DylanSteele/Kyn/0.1.3" },
    ],
  },
  {
    name: "Waves",
    division: "Shwimp Studios",
    kicker: "Browse the early mobile web",
    summary:
      "Waves is a desktop browser project for the WAP and WML sites that early mobile phones used. The web simulator already runs the page-rendering engine. Desktop downloads and full support for the original protocols are still in development.",
    status: "Early development",
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
    name: "Angular Usage Lookup",
    division: "Shrimpworks",
    kicker: "Check where an Angular component is used",
    summary:
      "An agent skill for finding uses of Angular components and APIs in Angular and Nx projects. It helps investigate what a migration could affect and points out gaps in the search results. The pilot release reads the code without changing it.",
    status: "Pilot release",
    tone: "kyn",
    phase: "current",
    links: [
      { label: "GitHub", href: "https://github.com/dills122/angular-usage-lookup" },
      { label: "Release", href: "https://github.com/dills122/angular-usage-lookup/releases/tag/v0.1.0" },
    ],
  },
  {
    name: "ask-formly",
    division: "Shrimpworks",
    kicker: "Give coding agents a Formly reference",
    summary:
      "A small reference service that coding agents can query about the Formly forms library through MCP. Answers come with source citations. So far, it’s a local prototype covering a limited set of library facts; there’s no one-command public install yet.",
    status: "Prototype",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/ask-formly" }],
  },
  {
    name: "Formly Contract",
    division: "Shrimpworks",
    kicker: "Describe a form so tools can work with it",
    summary:
      "Reads selected Angular Formly configurations and describes their fields, rules, states, and how to locate controls. Tests and coding agents can use that information to work with a form. The packages aren’t on npm yet. A production MCP server and automatic browser-test generation are also still to come.",
    status: "Pre-release",
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
    kicker: "Look inside a package without running it",
    summary:
      "An experiment in reading installed packages to see what they contain and which features they expose. The initial work maps package contents and how they’re found. Broader repository analysis is still an idea; there’s no commitment to a release or further development.",
    status: "Exploratory",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/package-spelunker" }],
  },
  {
    name: "Session Chat",
    division: "Shrimpworks",
    kicker: "Trying out temporary, encrypted chats",
    summary:
      "Session Chat tests how people could join a temporary conversation and send encrypted messages. The work so far covers invitations, messaging, and recovering encrypted data. You can read the source, but there isn’t a chat app ready to deploy yet.",
    status: "Research",
    tone: "kyn",
    phase: "current",
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/dills122/session-chat" },
      { label: "Project site", href: "https://dills122.github.io/session-chat/" },
    ],
  },
  {
    name: "TMDb SDK",
    division: "Shrimpworks",
    kicker: "Movie data for Node.js apps",
    summary:
      "A published TypeScript library for The Movie Database, covering movies, people, companies, images, and credits. Responses are typed, and requests retry within a set limit when the service asks clients to slow down.",
    status: "Released",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/tmdb" }],
  },
  {
    name: "AI Central",
    division: "Shrimpworks",
    kicker: "Project instructions for coding agents",
    summary:
      "Shared instructions, skills, and setup tools for AI-assisted development. They cover planning, coding, and review while preserving instructions already in the project.",
    status: "Source available",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/ai-central" }],
  },
  {
    name: "Image Fingerprint",
    division: "Shrimpworks",
    kicker: "Compare images in Node.js or a browser",
    summary:
      "Our fork of image-hash, now a TypeScript library with several ways to fingerprint and compare images. Matching cropped images is still experimental. The browser playground lets you try the comparisons yourself.",
    status: "Source available",
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
    kicker: "NeDB for newer versions of Node.js",
    summary:
      "A maintained fork of the small JavaScript database NeDB. Version 2.x targets modern Node.js and keeps the existing callbacks and data-file format. Version 1.9.2 remains available for older runtimes.",
    status: "Source available",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/nedb" }],
  },
  {
    name: "Engineering Starters",
    division: "Shrimpworks",
    kicker: "Skip some of the project setup",
    summary:
      "Starter projects and container images for Angular, Tailwind, Material, and Rush. Reusable setup for the next project.",
    status: "Source available",
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
    kicker: "Find that repo you starred",
    summary:
      "Forage imports your starred GitHub repositories so you can sort them into categories and find them again. It analyzes the collection locally, keeps imported data in your browser, and lets you review and export the results.",
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
    kicker: "Earlier small-app experiments",
    summary:
      "Older public experiments in tracking golf, receipt rewards, and editing Markdown in a browser.",
    status: "Archived",
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
    kicker: "Collect historical football data",
    summary:
      "Scripts and datasets for collecting English football history from public sources, with tools to organize and browse the results.",
    status: "Source available",
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
    kicker: "Browse historical football statistics",
    summary:
      "A public website for exploring English football league statistics and competition records.",
    status: "Public site",
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
    kicker: "How the studio hosts its web apps",
    summary:
      "Terraform and Caddy configuration for hosting the studio’s web apps on DigitalOcean, with setup examples.",
    status: "Source available",
    tone: "kyn",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/backbone-infa" }],
  },
  {
    name: "Capsule Orchestrator",
    division: "Shrimpworks",
    kicker: "An earlier experiment in scheduled tasks",
    summary:
      "A shelved experiment in scheduling background tasks and controlling what they could execute.",
    status: "Archived",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/capsule-orchestrator" }],
  },
  {
    name: "Corporate Marketing",
    division: "Wimpy Productions",
    kicker: "This website",
    summary:
      "The source for this site, including the project catalog and open-source contribution history.",
    status: "Public site",
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
    kicker: "Notes on building the projects",
    summary:
      "Dylan Steele’s personal site, with software engineering articles and notes on projects such as Reef.",
    status: "Public site",
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
    kicker: "Earlier posts and technical notes",
    summary:
      "An archive of personal posts, technical notes, and earlier experiments in publishing on the web.",
    status: "Archived",
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
    kicker: "Where can you watch Nicolas Cage?",
    summary:
      "An app for finding where to stream, rent, or buy Nicolas Cage films. The interface and movie-data tools are getting an update while production hosting is rebuilt.",
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
    kicker: "An earlier task-management app",
    summary:
      "A prototype for organizing tasks, built with a Next.js interface and a separate NestJS service.",
    status: "Archived",
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
    kicker: "Turn sports-card checklists into browsable data",
    summary:
      "A prototype for extracting information from sports-card checklist PDFs and exploring it in a web app.",
    status: "Archived",
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
    kicker: "Identify Magic cards from a photo",
    summary:
      "Uses text recognition, image matching, and Scryfall data to identify Magic: The Gathering cards and their likely printings. It runs from the command line and can keep track of a local collection.",
    status: "Source available",
    tone: "waves",
    phase: "current",
    links: [{ label: "GitHub", href: "https://github.com/dills122/MTG-Card-Analyzer" }],
  },
  {
    name: "ShamWow",
    division: "Shrimpworks",
    kicker: "An experiment in removing personal information",
    summary:
      "An earlier C# experiment for finding and removing personally identifiable information from documents.",
    status: "Archived",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/ShamWow" }],
  },
  {
    name: "Patent View Tools",
    division: "Shrimpworks",
    kicker: "Explore historical US patent data",
    summary:
      "A TypeScript library and test app for accessing historical patent data through the USPTO Patent View API.",
    status: "Archived",
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
    kicker: "Use WeasyPrint from Node.js",
    summary:
      "Tools for turning HTML and URLs into PDFs with WeasyPrint. They support both CommonJS and ES modules and are checked against multiple WeasyPrint versions. A companion Docker service is also available.",
    status: "Source available",
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
    kicker: "Keep code snippets handy",
    summary:
      "A small Node.js command-line app for saving and managing code snippets.",
    status: "Archived",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/Snips" }],
  },
  {
    name: "Trading Tools",
    division: "Noodle Ventures",
    kicker: "Earlier market-data experiments",
    summary:
      "Older experiments with stocks, portfolios, and currency data that helped shape the studio’s later trading-simulator work.",
    status: "Archived",
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
    kicker: "An experiment in direct messaging between computers",
    summary:
      "A Go experiment for trying peer-to-peer messaging through an interactive command-line interface.",
    status: "Archived",
    tone: "kyn",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/p2p-test" }],
  },
  {
    name: "Utility Libraries",
    division: "Shrimpworks",
    kicker: "Small libraries from earlier projects",
    summary:
      "Libraries for rule evaluation, image hashing, and other shared application code.",
    status: "Archived",
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
    kicker: "A command-line Pokémon experiment",
    summary:
      "An experimental game that turns navigating a computer’s files into a Pokémon adventure.",
    status: "Archived",
    tone: "waves",
    phase: "past",
    links: [{ label: "GitHub", href: "https://github.com/dills122/Pokemon-FS" }],
  },
  {
    name: "Stellar Archives",
    division: "Shwimp Studios",
    kicker: "Browse Star Wars information",
    summary:
      "An Angular app for exploring information from the public Star Wars API.",
    status: "Archived",
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
