# Project memory

## Product intent & audience

- Persian/Farsi-language personal/professional website for **دکتر محمدی برزگر** (Dr. Mohammadi Barzegar).
- Audience: Persian-speaking visitors/patients seeking contact and professional info.

## Brand personality & voice

- Persian-language UI; copy is formal yet accessible.
- Name "دکتر محمدی برزگر" is the primary brand string used consistently across header, intro text, and footer.

## Visual design & UX direction

- Vite + React + JSX + Tailwind CSS stack (per template and `.bolt/prompt`).
- Icons from `lucide-react`; modules imported via `@/` path alias (`@/` → `src/`).
- Existing layout includes: site header/title, intro section, footer.
- Contact channels surfaced: Instagram, Telegram, phone number.
- Design intent: production-quality, non-cookie-cutter; preserve existing visual design across content edits.

## Decisions, constraints & rationale

- Title/intro/footer updated to "دکتر محمدی برزگر"; contact links and overall design intentionally left unchanged.
- Build verified successfully after content change.
- Deployment requires commit + push to re-trigger workflow (live site not auto-updated on edit).
- No extra UI/icon/theme packages beyond template defaults unless explicitly requested.

## Open questions & assumptions

- Doctor's specialty/services, full bio, and contact details not yet provided — placeholders or prior content may remain.
- RTL text direction assumed for Persian; confirm Tailwind/config handles RTL if deeper Persian typography work is needed.
- Exact deployment platform/workflow unspecified; inferred from "commit and push" behavior.