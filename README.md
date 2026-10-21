# Devcroft website

The Astro product website for [Devcroft](https://github.com/hossainemruz/devcroft), at **https://devcroft.hossainemruz.dev**.

## Local development

Use Node.js 22.12+ (an even-numbered supported release).

```sh
npm ci
npm run dev
```

```sh
npm run check
npm run build
npm run preview
```

## Cloudflare

This is a static Astro build; no server adapter or secrets are required.

**Cloudflare Pages:** connect this repository, select Astro, use `npm run build` as the build command and `dist` as the output directory. Set the build environment to Node.js 22.12+ or 24. Add `devcroft.hossainemruz.dev` under Custom domains and follow Cloudflare's DNS instructions.

**Cloudflare Workers:** `wrangler.jsonc` configures static assets from `dist` and proper 404 handling. After building, run `npx wrangler deploy` when ready to publish, then attach the same custom domain in Cloudflare. Deployment has deliberately not been performed by this implementation.

The canonical domain is configured in `astro.config.mjs`, page metadata, and `public/robots.txt`.

## Content and assets

- `src/pages/index.astro`: product copy, alternating feature stories, FAQs, download links, metadata.
- `src/data/showcase.ts`: feature order, tab labels, descriptions, screenshot paths, dimensions, and placeholder flags.
- `src/components/FeatureShowcase.astro`: five-tab hero feature explorer with manual previous/next controls.
- `src/components/AnnotatedScreenshot.astro`: detailed feature screenshots with numbered callouts and enlargement dialogs.
- `src/components/ScreenshotFrame.astro`: Mac-style application frames and accessible enlargement dialogs. Each use has a unique instance ID.
- `src/scripts/showcase.ts`: accessible tab and arrow navigation, screenshot enlargement, and download feedback. Slides never advance automatically.
- `src/styles/global.css`: responsive design and reduced-motion handling.
- `public/media`: temporary WebP images captured from the previous website illustrations. **These are not real screenshots of Devcroft**; the page labels them as placeholders.
- `public/images`: original Devcroft/agent icons and the website sharing card.
- `public/fonts`: self-hosted Google Sans Flex and its OFL license, from Devcroft.

### Replace download placeholders

The macOS and Linux buttons currently point to `#download-status` and explain that release downloads are coming soon. When binaries are available, replace their `href` values with release asset URLs, remove their `data-download` attributes, and update the status copy. No binary architecture or minimum OS version is claimed until releases are confirmed.

### Replace the screenshot placeholders

1. Add app content captures to `public/media/` (without native window title bars).
2. In `src/data/showcase.ts`, update each feature’s `src`, descriptive `alt`, `width`, and `height`, then set `placeholder: false` and `chromeInset: 0`.
3. The frame supplies a consistent Mac-style title bar. `chromeInset` currently hides the title bar baked into the three legacy workspace illustrations; it is a percentage of the image width.
4. Update the detailed story labels and callout coordinates in `featureDetails`; coordinates are percentages of the full, uncropped image.
5. Adjust the feature’s tab, title, and description in the same data file. Order follows the data entries. Keep screenshots near the existing wide aspect ratios; the hero uses a fixed stage to avoid layout jumps.

Click a tab or use the previous/next buttons to change features. Focused tabs support Left/Right, Home, and End. All screenshots open in a native dialog; Escape, the close button, or the backdrop dismisses it and returns focus. Reduced-motion preferences disable transitions. Without JavaScript, the initial feature and all page content remain available, with a note explaining the interactive controls.

Capture the same clean demo project throughout. Keep app colors intact and avoid personal paths, account information, or private project content. The existing WebP images remain explicitly labeled as illustrative previews until replaced with real captures.

### Product sources

Copy is grounded in the desktop repository's README, `docs/resources.md`, and `docs/review-comments.md`, with the existing Rust/GPUI code and bundled brand assets inspected. The feature-led structure takes inspiration from [OmniWM](https://omniwm.app/) while using Devcroft's own identity and content.
