# Compact controls and hero layout

## Goal

Keep the reference-inspired compact light capsule, with text tabs and a dark active pill, and position it just outside and above the screenshot card.

Simplify the hero by removing the redundant installation/explore actions and technology metadata row. Preserve a clear route to installation through the header on desktop and mobile.

Extend the compact rounded design to primary buttons, installation tabs, copy controls, and screenshot enlargement controls.

Make slider and installation tab switching instantaneous, without panel entrance animations or animated tab states.

## Non-goals

Change screenshot assets, feature copy, installation commands, or the overall section layout.

## Files that own this behavior

- `src/components/FeatureShowcase.astro`: tab list, panels, captions, and navigation.
- `src/pages/index.astro`: hero content and header installation link.
- `src/components/InstallTabs.astro`: installation method controls and copy behavior.
- `src/styles/global.css`: shared capsules, button states, command boxes, and responsive layout.
- `src/scripts/showcase.ts`: existing keyboard and slide navigation, retained as-is.

## Approach

- [x] Move the capsule outside the slider shell and center it above the card with a small gap.
- [x] Group text-only tabs in one light rounded capsule; remove individual inactive borders and use a dark selected pill.
- [x] Keep all five labels visible on small phones while preserving touch targets and keyboard focus.
- [x] Verify the exterior capsule on desktop/mobile and record review.
- [x] Remove the hero action and metadata rows and give the subtitle-to-slider transition deliberate spacing.
- [x] Keep the header install button visible on phones, simplifying the narrow header navigation.
- [x] Verify the simplified hero and installation access on desktop/mobile and record review.
- [x] Share the capsule and selected-pill styles between slider and installation tabs; round primary, Copy, and Enlarge controls.
- [x] Use smaller button padding, comfortable mobile targets, and softly rounded command boxes that accommodate long commands.
- [x] Verify the revised controls, installation tab keyboard navigation, copy behavior, and responsive layout; record review.
- [x] Remove panel fade/slide animations and shared tab state transitions.
- [x] Verify immediate slider and installation tab switching with motion preferences set to normal.

## Acceptance criteria

- A compact light capsule sits just above the main card with plain inactive labels and a dark active pill, following the supplied reference.
- Home, Agent, Editor, Review, and Resources remain accessible and work with click and keyboard navigation.
- Small screens show all five labels without clipping or horizontal page overflow.
- Previous/next and screenshot enlargement continue working; installation controls remain functional.
- Hero flows directly from its subtitle to the slider, without duplicate actions or the technology metadata row.
- Header installation link remains visible and usable at 320px and desktop widths.
- Primary buttons and installation controls follow the same rounded compact design; long commands remain readable and copy exactly.
- Installation tabs retain visible focus, selected states, keyboard navigation, and at least 44px-high mobile targets.
- Slider and installation panels and selected tab states update immediately without animations or transitions.

## Verification commands

- `npm run check`
- `npm run build`
- `npm run dev` for delegated desktop and mobile UI verification.

## Risks / open questions

- Narrow screens need smaller horizontal padding while retaining at least 44px-high tab targets.
- Preserve the tab list as each button's direct parent so the existing scroll-into-view calculations remain valid.
- Keep long installation commands wrapping within rounded boxes; use a scoped clipboard stub to validate copied text without modifying the host clipboard.

## Validation results

- `npm run check`: passed with no errors, warnings, or hints.
- `npm run build`: passed.
- Source review: no actionable findings; [Devcroft review](devcroft:artifact/art-9gg8v8jm).
- Exterior capsule: isolated headless Chromium passed visual checks at 1440px, 390px, and 320px. The centered capsule sits above and outside the card with a small gap; all five labels fit at 320px without page-level horizontal overflow or focus-ring clipping.
- Resources selection, Home/End navigation, previous/next controls, and screenshot dialog opening/closing passed at all three widths.
- Earlier full control checks passed for all five panels, arrow keys, previous/next, and installation tabs; those behaviors remain unchanged.
- Simplified hero: isolated headless Chromium checks passed at 1440px, 390px, and 320px. Action and metadata rows are absent; the subtitle flows into the capsule and card with clear spacing.
- Header brand and installation link are visible without overlap at all three widths. The installation link reaches `#install`, where Homebrew and Script controls remain visible. Resources selection works and there is no page-level horizontal overflow.
- Shared control design: isolated Chromium checks passed at 1440px, 768px, 390px, and 320px. Header Install, installation capsule, and Copy controls follow the compact rounded style; the long Script command wraps without clipping, overlap, or page overflow.
- Installation tab selection and ArrowLeft/Right/Home/End navigation passed; focus remains visible on narrow screens. Exact installation commands are unchanged. A scoped clipboard stub received the exact Script command and the button displayed `Copied` feedback.
- Header installation navigation, slider selection, and screenshot dialog opening/closing passed after the shared styling change.
- Instant switching: build passed; isolated Chromium verified every slider and installation tab at 1440px and 390px with normal motion preferences. Selected state and visible panel update synchronously, panels have full opacity with no transform or animation, tab transition duration is zero, and tabs/panels have no active Web Animations. Keyboard switching passed.
