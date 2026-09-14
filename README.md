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
