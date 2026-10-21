// Replace each illustration with a real app capture and set placeholder: false.
// chromeInset hides the title bar baked into the legacy illustrations.
// Set it to 0 for new captures of the app's content area.
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

export type ScreenshotKey = keyof typeof screenshots;
export const featureKeys = Object.keys(screenshots) as ScreenshotKey[];

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
