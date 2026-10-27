// Curated public upstream contributions. See docs/content-refresh-2026-10.md.
export interface Contribution {
  repository: string;
  number: number;
  title: string;
  url: string;
  mergedAt: string;
}

export interface OpenSourceProject {
  slug: string;
  name: string;
  kind: string;
  headline: string;
  summary: string;
  continuation?: { label: string; href: string };
  contributions: Contribution[];
}

export const contributionsVerifiedAt = "2026-10-25";

export const openSourceProjects: OpenSourceProject[] = [
  {
    slug: "llrt",
    name: "AWS LLRT",
    kind: "JavaScript runtime",
    headline: "Fixes for JavaScript APIs and HTTP requests.",
    summary: "We fixed cases where LLRT’s encryption and data-stream APIs behaved differently from the web standards. Other changes keep repeated HTTP headers from being lost and correct how network access rules are matched. We also made the bundled AWS SDK version available to applications, removed unused crypto dependencies, and fixed inconsistent tests.",
    contributions: [
      {
        repository: "awslabs/llrt",
        number: 1837,
        title: "fix(fetch): combine repeated response header values",
        url: "https://github.com/awslabs/llrt/pull/1837",
        mergedAt: "2026-10-25"
      },
      {
        repository: "awslabs/llrt",
        number: 1840,
        title: "test(console): stabilize error-stack formatting fixtures",
        url: "https://github.com/awslabs/llrt/pull/1840",
        mergedAt: "2026-10-24"
      },
      {
        repository: "awslabs/llrt",
        number: 1839,
        title: "fix(fetch): normalize network access policy matching",
        url: "https://github.com/awslabs/llrt/pull/1839",
        mergedAt: "2026-10-24"
      },
      {
        repository: "awslabs/llrt",
        number: 1838,
        title: "fix(crypto): avoid unused backend dependencies",
        url: "https://github.com/awslabs/llrt/pull/1838",
        mergedAt: "2026-10-24"
      },
      {
        repository: "awslabs/llrt",
        number: 1729,
        title: "fix(stream): coerce highWaterMark values",
        url: "https://github.com/awslabs/llrt/pull/1729",
        mergedAt: "2026-08-19"
      },
      {
        repository: "awslabs/llrt",
        number: 1728,
        title: "fix(utils): validate ObjectBytes DataView ranges",
        url: "https://github.com/awslabs/llrt/pull/1728",
        mergedAt: "2026-08-19"
      },
      {
        repository: "awslabs/llrt",
        number: 1723,
        title: "fix(crypto): align sign and verify with WebCrypto",
        url: "https://github.com/awslabs/llrt/pull/1723",
        mergedAt: "2026-08-16"
      },
      {
        repository: "awslabs/llrt",
        number: 1715,
        title: "feat: expose bundled AWS SDK version",
        url: "https://github.com/awslabs/llrt/pull/1715",
        mergedAt: "2026-08-14"
      },
      {
        repository: "awslabs/llrt",
        number: 1717,
        title: "fix(crypto): support string encryption algorithm identifiers",
        url: "https://github.com/awslabs/llrt/pull/1717",
        mergedAt: "2026-08-13"
      },
      {
        repository: "awslabs/llrt",
        number: 1718,
        title: "fix(crypto): validate JWK extractability",
        url: "https://github.com/awslabs/llrt/pull/1718",
        mergedAt: "2026-08-12"
      },
      {
        repository: "awslabs/llrt",
        number: 1716,
        title: "fix(crypto): allow RSA JWK imports without alg",
        url: "https://github.com/awslabs/llrt/pull/1716",
        mergedAt: "2026-08-11"
      },
      {
        repository: "awslabs/llrt",
        number: 1714,
        title: "fix(stream): preserve TransformStream backpressure",
        url: "https://github.com/awslabs/llrt/pull/1714",
        mergedAt: "2026-08-11"
      },
      {
        repository: "awslabs/llrt",
        number: 1713,
        title: "fix(stream): preserve pipe option access order",
        url: "https://github.com/awslabs/llrt/pull/1713",
        mergedAt: "2026-08-11"
      }
    ]
  },
  {
    slug: "rusty-v8",
    name: "rusty_v8",
    kind: "JavaScript engine integration for Rust",
    headline: "Building for ARM64 Linux from an x64 machine.",
    summary: "rusty_v8 lets Rust applications use V8, the JavaScript engine behind Chrome. We added a way to tell the Linux build where to find tools and system files for a different target machine. That helps when building ARM64 software on an x64 computer, especially when those files aren’t in their usual locations. Existing build defaults still work.",
    contributions: [
      {
        repository: "denoland/rusty_v8",
        number: 2058,
        title: "build: support explicit Linux bindgen sysroots",
        url: "https://github.com/denoland/rusty_v8/pull/2058",
        mergedAt: "2026-08-18"
      }
    ]
  },
  {
    slug: "image-hash",
    name: "image-hash",
    kind: "Image hashing library",
    headline: "The library we forked into Image Fingerprint.",
    summary: "We added support for images held in memory, exported TypeScript input types, and fixed a Node.js URL import in image-hash. We later forked it into Image Fingerprint, where we’re continuing work on image comparison for Node.js and browsers.",
    continuation: { label: "See Image Fingerprint", href: "https://github.com/dills122/image-fingerprint" },
    contributions: [
      {
        repository: "danm/image-hash",
        number: 27,
        title: "Input Types Export Patch",
        url: "https://github.com/danm/image-hash/pull/27",
        mergedAt: "2020-08-02"
      },
      {
        repository: "danm/image-hash",
        number: 25,
        title: "Dsteele/buffer support",
        url: "https://github.com/danm/image-hash/pull/25",
        mergedAt: "2020-08-01"
      },
      {
        repository: "danm/image-hash",
        number: 16,
        title: "added URL import",
        url: "https://github.com/danm/image-hash/pull/16",
        mergedAt: "2019-10-29"
      }
    ]
  },
  {
    slug: "taho",
    name: "Taho",
    kind: "Wallet software",
    headline: "A back button, easier clicks, and readable fees.",
    summary: "We added a back button when creating a wallet, made asset buttons easier to click, and allowed long gas-fee text to wrap. In the keyring library, we added address checksums to help detect typing errors.",
    contributions: [
      {
        repository: "tahowallet/extension",
        number: 2627,
        title: "Updated Gas Fee Text to Wrap If Long",
        url: "https://github.com/tahowallet/extension/pull/2627",
        mergedAt: "2022-11-16"
      },
      {
        repository: "tahowallet/extension",
        number: 2622,
        title: "Improved Click-box on Asset Buttons",
        url: "https://github.com/tahowallet/extension/pull/2622",
        mergedAt: "2022-11-16"
      },
      {
        repository: "tahowallet/hd-keyring",
        number: 7,
        title: "Encode Address as Checksum",
        url: "https://github.com/tahowallet/hd-keyring/pull/7",
        mergedAt: "2022-03-13"
      },
      {
        repository: "tahowallet/extension",
        number: 1018,
        title: "UI: Add Back Button To Wallet Creation",
        url: "https://github.com/tahowallet/extension/pull/1018",
        mergedAt: "2022-02-28"
      }
    ]
  },
  {
    slug: "react-spark",
    name: "React Spark",
    kind: "React component library",
    headline: "Updates to dialogs, buttons, and form controls.",
    summary: "We added confirmation controls and loading indicators to dialogs, plus more options for configuring components and layouts. Other changes made date pickers available to import and updated form labels.",
    contributions: [
      {
        repository: "qloan/react-spark",
        number: 89,
        title: "Modal Updates",
        url: "https://github.com/qloan/react-spark/pull/89",
        mergedAt: "2020-12-09"
      },
      {
        repository: "qloan/react-spark",
        number: 86,
        title: "added some optional props to modal and radio buttons",
        url: "https://github.com/qloan/react-spark/pull/86",
        mergedAt: "2020-04-07"
      },
      {
        repository: "qloan/react-spark",
        number: 84,
        title: "exposed spinner bool for buttons in modal",
        url: "https://github.com/qloan/react-spark/pull/84",
        mergedAt: "2020-03-27"
      },
      {
        repository: "qloan/react-spark",
        number: 78,
        title: "Revert \"Revert \"Dsteele/feat/servicing dashboard refactor\"\"",
        url: "https://github.com/qloan/react-spark/pull/78",
        mergedAt: "2020-03-10"
      },
      {
        repository: "qloan/react-spark",
        number: 71,
        title: "Dsteele/feat/servicing dashboard refactor",
        url: "https://github.com/qloan/react-spark/pull/71",
        mergedAt: "2020-02-19"
      },
      {
        repository: "qloan/react-spark",
        number: 37,
        title: "Changed ssn label and show label",
        url: "https://github.com/qloan/react-spark/pull/37",
        mergedAt: "2019-02-27"
      }
    ]
  }
];

export const contributionCount = openSourceProjects.reduce(
  (total, project) => total + project.contributions.length, 0,
);
export const repositoryCount = new Set(
  openSourceProjects.flatMap((project) => project.contributions.map((pr) => pr.repository)),
).size;
