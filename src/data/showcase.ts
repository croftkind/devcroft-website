export interface Screenshot {
  src: string;
  tab: string;
  icon: string;
  title: string;
  description: string;
  alt: string;
  placeholder: boolean;
  width: number;
  height: number;
  chromeInset: number;
  // Real captures already include their own window chrome, so the frame
  // renders the image as-is instead of adding a synthetic title bar.
  nativeChrome?: boolean;
}

export interface Slide extends Screenshot {
  key: string;
}

// Landing-page slider. Order here is the tab order. Each WebP is cropped to
// the app window and resized to 2400px wide; the source PNGs sit beside them.
export const slides: Slide[] = [
  {
    key: "home",
    src: "/media/slider/1_home.webp",
    tab: "Home",
    icon: "grid",
    title: "A little clarity before the first commit.",
    description:
      "Bring recent projects, pull requests, todos, and reading into one place. Use Spaces to give work and personal projects room of their own.",
    alt: "Devcroft Home showing recent agent activity, recent projects, and an inbox with pull requests, todos, and reading.",
    placeholder: false,
    nativeChrome: true,
    width: 2400,
    height: 1505,
    chromeInset: 0,
  },
  {
    key: "agent",
    src: "/media/slider/2_agent.webp",
    tab: "Agent",
    icon: "terminal",
    title: "Your agent. Your context. Right where you left them.",
    description:
      "Pick your harness, resume a conversation, and keep building. Your sessions stay with the project as you move through the workspace.",
    alt: "Devcroft Agent tab showing a Codex conversation, recent sessions in the sidebar, and the devcroft repository on main.",
    placeholder: false,
    nativeChrome: true,
    width: 2400,
    height: 1505,
    chromeInset: 0,
  },
  {
    key: "editor",
    src: "/media/slider/3_editor.webp",
    tab: "Editor",
    icon: "code",
    title: "An editor that fits the moment.",
    description:
      "Make a quick change in the built-in editor, or open the checkout in Neovim, Zed, or VS Code. The file tree and your agent session stay within reach.",
    alt: "Devcroft Editor tab showing the devcroft file tree and native.rs open in the built-in editor.",
    placeholder: false,
    nativeChrome: true,
    width: 2400,
    height: 1505,
    chromeInset: 0,
  },
  {
    key: "review",
    src: "/media/slider/4_review.webp",
    tab: "Review",
    icon: "review",
    title: "From “looks good” to a closer look.",
    description:
      "Read the diff, comment on a line, and let your agent pick up the feedback. The conversation stays connected to the change.",
    alt: "Devcroft Review tab showing changed files and a syntax-highlighted diff against origin/main.",
    placeholder: false,
    nativeChrome: true,
    width: 2400,
    height: 1505,
    chromeInset: 0,
  },
  {
    key: "resources",
    src: "/media/slider/5_resources.webp",
    tab: "Resources",
    icon: "book",
    title: "Keep the thinking behind the code.",
    description:
      "Plans, notes, reviews, and visual tutorials live beside their repository. Return to the context—and the session—that started it all.",
    alt: "Devcroft Resources tab showing a repository resource list, a rendered persistence plan, and an on-this-page outline.",
    placeholder: false,
    nativeChrome: true,
    width: 2400,
    height: 1505,
    chromeInset: 0,
  },
];

// Illustrations used by the detailed stories and overview cards below the
// hero. Replace each with a real app capture and set placeholder: false.
// chromeInset hides the title bar baked into the legacy illustrations; set it
// to 0 for new captures of the app's content area.
export const screenshots = {
  agent: {
    src: "/media/agent-placeholder.webp",
    tab: "Agent sessions",
    icon: "terminal",
    title: "Your agent. Your context. Right where you left them.",
    description:
      "Pick your harness, resume a conversation, and keep building. Your sessions stay with the project as you move through the workspace.",
    alt: "Illustrative Devcroft workspace with recent agent sessions beside an active coding conversation.",
    placeholder: true,
    width: 2108,
    height: 904,
    chromeInset: 3.85,
  },
  review: {
    src: "/media/review-placeholder.webp",
    tab: "Code review",
    icon: "review",
    title: "From “looks good” to a closer look.",
    description:
      "Read the diff, comment on a line, and let your agent pick up the feedback. The conversation stays connected to the change.",
    alt: "Illustrative code review showing a syntax-highlighted diff and a saved line comment.",
    placeholder: true,
    width: 2108,
    height: 904,
    chromeInset: 3.85,
  },
  resources: {
    src: "/media/resources-placeholder.webp",
    tab: "Project knowledge",
    icon: "book",
    title: "Keep the thinking behind the code.",
    description:
      "Plans, notes, reviews, and visual tutorials live beside their repository. Return to the context—and the session—that started it all.",
    alt: "Illustrative repository resources with an implementation plan open beside a list of project documents.",
    placeholder: true,
    width: 2108,
    height: 904,
    chromeInset: 3.85,
  },
  dashboard: {
    src: "/media/dashboard-placeholder.webp",
    tab: "Project overview",
    icon: "grid",
    title: "A little clarity before the first commit.",
    description:
      "Bring recent projects, pull requests, todos, and reading into one place. Use Spaces to give work and personal projects room of their own.",
    alt: "Illustrative project overview with recent repositories and a project todo list.",
    placeholder: true,
    width: 1112,
    height: 522,
    chromeInset: 0,
  },
  relationships: {
    src: "/media/relationships-placeholder.webp",
    tab: "Repository map",
    icon: "branch",
    title: "See the project beyond a single repository.",
    description:
      "Connect providers and consumers on a repository canvas. Give your agents a map of how the pieces fit together.",
    alt: "Illustrative repository map connecting shared-api to backend and dashboard repositories.",
    placeholder: true,
    width: 1112,
    height: 522,
    chromeInset: 0,
  },
};

// Numbered callouts in the detailed feature stories, relative to the full image.
export const featureDetails = {
  agent: {
    title: "Your agent, in context",
    annotations: [
      { label: "Pick up a previous session", x: 12, y: 36 },
      { label: "Keep your tools in reach", x: 48, y: 14 },
    ],
  },
  review: {
    title: "Feedback that stays with the code",
    annotations: [
      { label: "See exactly what changed", x: 75, y: 38 },
      { label: "Leave feedback for your agent", x: 50, y: 63 },
    ],
  },
  resources: {
    title: "The context behind the change",
    annotations: [
      { label: "Keep plans beside the project", x: 12, y: 35 },
      { label: "Return to the original session", x: 62, y: 87 },
    ],
  },
};
