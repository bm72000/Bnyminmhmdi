# Project memory

## Product intent & audience

- Persian/Farsi-language personal/professional website.
- Audience: Persian-speaking visitors/patients seeking contact and professional info.

## Brand personality & voice

- Persian-language UI.
- Current brand name displayed: **«دکتر بنیامین»**.
- Minimal presentation: only the name shown prominently; previous copy/intro/footer removed.

## Visual design & UX direction

- Vite + React + JSX + Tailwind CSS stack (per template and `.bolt/prompt`).
- Icons from `lucide-react`; modules imported via `@/` path alias (`@/` → `src/`).
- Name «دکتر بنیامین» rendered very large/bold at top of page.
- Contact cards retained: Instagram, Telegram, phone number with copy button.
- Design intent: production-quality, non-cookie-cutter.

## Decisions, constraints & rationale

- Cleared all prior content (old title «دکتر محمدی برزگر», intro text, footer, avatar) and replaced with large display of «دکتر بنیامین».
- Contact links/cards intentionally left intact across content resets.
- Build verified successfully after change.
- Deployment requires commit + push to re-trigger workflow (live site not auto-updated on edit).
- No extra UI/icon/theme packages beyond template defaults unless explicitly requested.

## Open questions & assumptions

- Doctor's specialty/services, full bio, and contact details not yet provided — placeholders or prior content may remain.
- RTL text direction assumed for Persian; confirm Tailwind/config handles RTL if deeper Persian typography work is needed.
- Exact deployment platform/workflow unspecified; inferred from "commit and push" behavior.
- Whether to re-add intro/footer/bio content later is unresolved.