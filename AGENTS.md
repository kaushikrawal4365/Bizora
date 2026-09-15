# AGENTS.md — Bizora Developer & Agent Instructions

Welcome to **Bizora** (`kaushikrawal4365/Bizora`). This document defines the mandatory operating guidelines, workflow rules, and development procedures for all AI agents and developers working on this codebase.

---

## 1. Project Overview & Context

- **Purpose**: High-converting, interactive business & agency website designed to showcase and sell custom bespoke websites to clients.
- **Production URL**: [https://bizora-psi.vercel.app/](https://bizora-psi.vercel.app/)
- **GitHub Repository**: [https://github.com/kaushikrawal4365/Bizora](https://github.com/kaushikrawal4365/Bizora)
- **Tech Stack**:
  - Next.js (App Router) + TypeScript
  - Styling: Vanilla CSS (`app/globals.css`) with premium dark/glassmorphic aesthetics
  - Animations & Smooth Scroll: GSAP + Lenis
  - Lead Generation: Resend API email delivery (`/api/contact`) + WhatsApp Lead Modal (`+91 7892473384`)

---

## 2. Mandatory Step-by-Step Procedure

All agents **MUST** strictly adhere to the following workflow for every single task or change request:

### Step 1: Review Past Changes & Context
- Before planning or writing any code, always read [README.md](file:///f:/Downloads%20F/BIZORA-V1/README.md) to understand recent modifications, architecture notes, and progress history.

### Step 2: Plan & Obtain User Approval (MANDATORY GATE)
- Create a comprehensive technical implementation plan outlining the exact UI/UX, styling, and structural changes.
- **DO NOT start implementation without explicit user consent.**
- Ask the user for confirmation to start implementation and **wait for their approval before modifying code or running mutating commands**.

### Step 3: Local Implementation & Verification
- Implement the requested changes adhering to high visual excellence and clean code standards.
- Run local verification:
  ```bash
  npm run build
  ```
- Ensure zero build errors, zero TypeScript issues, and verify that layouts, responsiveness, animations, and lead capture forms function seamlessly.

### Step 4: Append Progress to `README.md`
- **DO NOT replace or wipe out existing content in `README.md`.**
- **APPEND** the newly completed changes at the bottom under a new timestamped log heading:
  ```markdown
  ### YYYY-MM-DD HH:MM IST - [Title of Enhancement]
  - Bullet points describing the exact changes, components updated, and verification status.
  ```

### Step 5: Push to GitHub
- Stage all modified files and commit with a clean, descriptive message:
  ```bash
  git add .
  git commit -m "feat/fix: descriptive message"
  git push origin main
  ```

### Step 6: Deploy to Vercel Production
- Deploy the updated, verified build to production using:
  ```bash
  npx vercel --prod --yes
  ```
- Verify the deployment succeeds and report the live production status to the user.

---

## 3. UI/UX & Code Standards

- **Design Aesthetics**: Premium, sleek, high-contrast dark aesthetic with smooth gradients, lime-green accents (`#b3ff4b`), glassmorphic containers, and fluid micro-interactions.
- **Cursor & Interactions**: Maintain high contrast for interactive states (`.cursor-on-dark`, `.cursor-focus`, `.cursor-marquee`).
- **Forms & Leads**: Ensure contact forms and the WhatsApp lead modal continue functioning smoothly with proper validation and error handling.
- **Documentation Integrity**: Keep comments clean and avoid breaking existing features.
