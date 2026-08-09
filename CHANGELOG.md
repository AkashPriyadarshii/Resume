# Changelog

## [1.2.0] — 2026-08-09

### Changed
- **Honesty pass on all claims.** Removed three unverifiable/dead claims that failed a full audit:
  - "Sustained maintenance since 2021" on tdlib-android (current GitHub account is from 2026 — claim not verifiable from the linked profile)
  - "HMAC SHA-256 magic-link authentication" and "Supabase Row-Level Security" on the portfolio (backend was purged; site is now a static Next.js export)
  - Re-framed tdlib-android to its verifiable reality: CI matrix compiles TDLib for all 4 ABIs, AARs shipped via GitHub Releases (Maven Central publish was never confirmed)
- Skills table now tiers **core** vs **working knowledge** languages instead of a flat 14-language wall
- Summary re-positioned around the real differentiators: AI-augmented engineering, systems tooling (Rust/Zig/Go), India-first products, live deployments
- Projects rewritten as **what it is + verifiable proof** (LOC, tests, CI, live URL) with zero hype adjectives
- Projects updated to current reality: added rustygrep, kharcha, zcat, repomap; dropped dead/weak claims

### Added
- `AUDIT.md` — full analysis of what was audited, what was removed and why, and recommended next steps
- `og-image.png` now actually exists (was referenced in meta tags but returned 404)

## [1.1.0] — 2026-07-10

### Added
- SEO meta tags (Open Graph, Twitter Cards, JSON-LD Person schema)
- `robots.txt` and `sitemap.xml` for search engine indexing
- GitHub repo topics for discoverability
- Print CSS: links now visually distinguishable with underline
- `@page` CSS directive for proper PDF page sizing

### Fixed
- PDF hyperlinks now clickable (Puppeteer `emulateMediaType('screen')`)
- Removed AI-cadence em-dash overuse in body copy

## [1.0.0] — 2026-07-08

### Added
- Initial single-page resume with 5 core projects
- `index.html` — browser-viewable resume with print styles
- `resume.md` — ATS-friendly markdown version
- `resume.pdf` — PDF output
- `README.md` — GitHub landing page
- `.github/workflows/pdf.yml` — Auto-PDF Action (regenerates PDF on push to index.html)
- `.nojekyll` — GitHub Pages compatibility
- `.gitignore` — local-only files excluded from repo

### Changed
- Removed fintech/banking experience
- Removed all inflated metrics (7.2K installs, 92+ releases, etc.)
- Removed lesser projects: sbi-kiosk-id-generator, claude-sync, udyam-csp-helper, angine, angine-v1, awesome-loop-engineering, astack
- Framing: professional self-taught builder, no vibecoder language

### Infrastructure
- GitHub Pages live at https://akashpriyadarshii.github.io/Resume/
- GitHub repo public at github.com/AkashPriyadarshii/Resume
- Auto-PDF commit action configured
