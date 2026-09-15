# BIZORA

Interactive studio website built with Next.js, TypeScript, GSAP and Lenis.

## Run
npm install
npm run dev

Contact form: set RESEND_API_KEY and CONTACT_TO_EMAIL in .env.local.

Before production, replace placeholder legal/social links and the WhatsApp URL.

## Progress log

### 2026-09-14
- Added Always Tap to the selected work showcase alongside Bixpli and M4 Hair Studio.
- Reworked the showcase into three equal responsive cards with grayscale-to-color treatment, hover descriptions, and external project buttons.
- Added the `See all our works` link and reused the project cards on the `/work` archive page.
- Verified the project with `npm run build` and confirmed the local `/` and `/work` routes render.
- GitHub repository: https://github.com/kaushikrawal4365/Bizora
- Vercel production alias currently in use: https://bizora-psi.vercel.app

### 2026-09-14 - Archive expansion
- Added Resume Builder as the fourth project: https://resume-builder-jd.vercel.app/
- Kept the homepage showcase focused on three projects.
- Expanded `/work` into a two-column archive so the fourth project appears in the second row.
- Verified the updated project with a clean `npm run build`.

### 2026-09-14 - Lead capture
- Fixed sidebar and mobile navigation links so `HOME`, the logo, and section links work correctly from `/work` and other routes.
- Added Resend-backed owner notifications to `kaushik.rawalwork@gmail.com` and automatic confirmation replies to submitted lead emails.
- Added a direct email fallback when form delivery fails.
- Added a WhatsApp lead modal that collects basic details and opens a prefilled message to `+91 7892473384`, including the selected package when available.
- Required production environment variables: `RESEND_API_KEY`, `RESEND_FROM_EMAIL` using a verified sender, and `CONTACT_TO_EMAIL=kaushik.rawalwork@gmail.com`.
- Verified with a clean `npm run build`.

### 2026-09-14 - Environment setup
- Local environment variables are loaded from the project-root `.env` file; files inside component folders are not loaded by Next.js.
- Configured `NEXT_PUBLIC_SITE_URL` for metadata and lead emails: https://bizora-psi.vercel.app
- `CONTACT_TO_EMAIL` is the owner inbox. `RESEND_FROM_EMAIL` must be a Resend-approved sender; a personal Gmail address cannot be used as the sender without Resend verification.

### 2026-09-14 - Production verification
- Added automatic hover rotation for the From Idea to Impact service cards on pointer devices, with touch fallback controls preserved.
- Configured the live Vercel URL in metadata and lead notification links.
- Verified the production environment variable names are present across Production, Preview, and Development.
- Playwright smoke-tested the homepage, four-project archive, route-aware navigation, WhatsApp lead modal, and contact API validation.

### 2026-09-14 23:49 IST - High-Impact UI, Cursor & CTA Enhancements
- **Hero Title Layering**: Raised `hero-copy` stacking context (`z-index: 10`) and added right-padding on `.hero-title .line` so the trailing 'S' in `EXPERIENCES` is fully visible and never clipped or covered by floating stage elements.
- **Dynamic & High-Contrast Custom Cursor**:
  - Added marquee hover detection (`.cursor-marquee`): cursor outer follower expands to **84px diameter** with a **4px thick lime green border** (`#b3ff4b`), glowing backdrop filter, and glowing white dot center.
  - Added dark section contrast (`.cursor-on-dark`): automatically switches follower border to high-contrast white `#ffffff` on dark cards/sections (Card 01 "MAKE IT REAL", project cards, CTA card, About section).
  - Expanded interactive focus ring (`.cursor-focus`) for all links, buttons, and cards with translucent lime green glow.
- **"From Idea to Impact" Service Cards**:
  - Increased card minimum height to `440px` and restructured front/back card layouts into flex containers.
  - Standardized padding (`36px 30px 42px`) so that the `I'M INTERESTED ↗` button on Card 01 ("MAKE IT REAL") and all service cards has a generous **42px bottom gap** from the card end.
- **Interactive CTA Orbit & WhatsApp Polish**:
  - Transformed `<div className="cta-orbit">` into an interactive rotating agency orb badge featuring spinning curved SVG text `"BIZORA STUDIO • QUICK START • FAST SHIPPING • "` and a central floating `TALK ↗` button that smooth-scrolls to `#contact`.
  - Upgraded `.whatsapp-trigger` button with glassmorphism styling, crisp white text contrast, WhatsApp icon indicator, and lime hover accent.
- Verified build cleanly with `npm run build` (0 errors, 0 warnings).

### 2026-09-14 23:55 IST - Contact Form CSS Fix
- Restored full `.contact-form` styling rules in `app/globals.css` including field layouts, labels, input focus rings, selects, textareas, and action buttons.
- Enhanced form input aesthetics with rounded corners, clean padding (`16px 18px`), focus glow, and proper grid gaps (`gap: 20px`).
- Verified build with `npm run build`.

### 2026-09-15 22:56 IST - Mobile & Tablet Responsiveness & Navigation Overhaul
- **Line-by-Line Mobile Navigation Menu**:
  - Overhauled `MobileNav.tsx` and `.mobile-overlay-nav`: replaced crowded inline links with a structured vertical list of full-width navigation rows.
  - Each item displays a 2-digit index (`01`, `02`, ...), high-contrast uppercase title (`font-size: clamp(21px, 5.2vw, 30px)`), and trailing arrow indicator `↗`.
  - Added comfortable touch hit targets (`padding: 15px 8px`), bottom dividers (`rgba(255,255,255,0.07)`), and responsive active/hover lime-green (`#b3ff4b`) feedback.
  - Integrated dynamic dark header inversion (`.mobile-nav.is-open`) with crisp white branding, top section counter badge, and bottom quick-action CTA (`START A PROJECT ↗` + WhatsApp / direct email links).
  - Added body scroll locking (`document.body.style.overflow = "hidden"`) during menu expansion to prevent page scrolling behind the overlay.
- **Tablet & Mobile Layout Polish**:
  - **Service Cards ("From Idea to Impact")**: Fixed the restrictive `290px` mobile override by setting `min-height: 420px` (tablets) and `410px` (phones) so card faces have generous padding and the `"I'M INTERESTED ↗"` button never clips.
  - **Work Showcase**: Adapted `.work-rail` to 2 columns on tablets and 1 column on mobile, with always-visible `.project-reveal` cards on touch devices.
  - **Hero Section**: Rescaled `.hero-title` and `.hero-stage` floating graphics/burst badge to avoid screen boundary clipping on tablets and narrow devices.
  - **Industries & Pricing Grids**: Standardized multi-column breakpoints for iPads/tablets (2 columns) and compact mobile devices.
  - **Touch Cursor Suppression**: Hid desktop cursor followers (`.cursor-dot`, `.cursor-follower`) on touch devices and screen widths $\le$ 1024px.
- Verified build cleanly with `npm run build` (0 errors, 16 static routes successfully generated).



