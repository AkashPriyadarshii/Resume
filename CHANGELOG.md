# Changelog

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
