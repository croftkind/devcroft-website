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

- `src/pages/index.astro`: product copy, alternating feature stories, FAQs, install section, metadata.
- `src/data/showcase.ts`: hero slide order, tab labels, captions, and the illustrative screenshots used by the detailed stories and overview cards.
- `src/components/FeatureShowcase.astro`: five-tab hero feature explorer with manual previous/next controls.
- `src/components/InstallTabs.astro`: Homebrew and install-script tabs with copy-to-clipboard controls.
- `src/components/AnnotatedScreenshot.astro`: detailed feature screenshots with numbered callouts and enlargement dialogs.
- `src/components/ScreenshotFrame.astro`: application frames (native chrome for real captures, synthetic Mac-style chrome for illustrations) and accessible enlargement dialogs. Each use has a unique ID.
- `src/scripts/showcase.ts`: accessible tab and arrow navigation plus screenshot enlargement. Slides never advance automatically.
- `src/styles/global.css`: responsive design and reduced-motion handling.
- `public/media/slider`: real Devcroft captures for the hero explorer, cropped to the app window and resized to 2400px wide. The source PNG captures sit beside the WebP versions.
- `public/media`: temporary WebP illustrations used by the detailed stories and overview cards. **These are not real screenshots of Devcroft**; the page labels them as placeholders.
- `public/images`: original Devcroft/agent icons and the website sharing card.
- `public/fonts`: self-hosted Google Sans Flex and its OFL license, from Devcroft.

### Update installation commands

The install section offers two methods: a Homebrew cask for macOS and the release install script for macOS and Linux. The commands live in the `methods` array in `src/components/InstallTabs.astro`. Update them there if the tap, asset name, or supported platforms change, and keep the platform note in `src/pages/index.astro` in sync. Windows is not supported yet; do not add a Windows tab or platform claim until it is.

### Update the screenshots

1. Hero slides live in the `slides` array in `src/data/showcase.ts`. Add a capture to `public/media/slider/` with the same 3024×1896 window size, then add a slide with a `key`, short `tab` label, `src`, descriptive `alt`, `width`, `height`, title, and description. Order follows the array.
2. Keep the PNG captures beside the WebP files and regenerate the 2400px-wide WebP when a capture changes. Real captures include their own window chrome, so they set `nativeChrome: true` and the frame renders them as-is.
3. The detailed stories and overview cards still use the illustrations in `public/media` through the `screenshots` object. To replace one, update its `src`, `alt`, `width`, and `height`, then set `placeholder: false` and `chromeInset: 0`.
4. `chromeInset` hides the title bar baked into the three legacy workspace illustrations; it is a percentage of the image width. If you keep the synthetic title bar, adjust that value instead.
5. Update the detailed story labels and callout coordinates in `featureDetails`; coordinates are percentages of the full image.

Click a tab or use the previous/next buttons to change features. Focused tabs support Left/Right, Home, and End. All screenshots open in a native dialog; Escape, the close button, or the backdrop dismisses it and returns focus. Reduced-motion preferences disable transitions. Without JavaScript, the initial feature and all page content remain available, with a note explaining the interactive controls; the install section shows both commands.

Capture the same clean demo project throughout. Keep app colors intact and avoid personal paths, account information, or private project content. The illustrations in `public/media` remain explicitly labeled as illustrative previews until replaced with real captures.

### Product sources

Copy is grounded in the desktop repository's README, `docs/resources.md`, and `docs/review-comments.md`, with the existing Rust/GPUI code and bundled brand assets inspected. The feature-led structure takes inspiration from [OmniWM](https://omniwm.app/) while using Devcroft's own identity and content.
