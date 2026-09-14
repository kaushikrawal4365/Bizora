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
