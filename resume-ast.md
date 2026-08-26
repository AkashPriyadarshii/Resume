# Akash Priyadarshi
Patna, Bihar, India | ydv.akash2006@gmail.com | github.com/AkashPriyadarshii | akashpriyadarshi.vercel.app | linkedin.com/in/akash-priyadarshi-1aa51b37a

---

## Professional Summary

Self-taught developer and AI-augmented engineer based in Patna, India. Builds complete products end-to-end — systems tooling in Rust, Zig, and Go; Android apps in Kotlin and Flutter; web apps in Next.js — shipping with AI as a force multiplier. Published a token-efficient grep for LLM coding agents (rustygrep), built an offline-first UPI expense tracker for India (kharcha), and deployed multiple production sites on Vercel and Cloudflare Pages. Strengths: turning ideas into working, deployed products quickly, and writing developer tooling that survives real use.

## Technical Skills

- **Core Languages:** Rust, Zig, Go, TypeScript, Python, Kotlin, Dart
- **Working Languages:** Java, Swift, Shell, PowerShell, PL/pgSQL, SQL
- **Systems & Architecture:** CLI tooling, Cross-Platform compilation, Token-efficient LLM-agent output, MCP Servers
- **Mobile Engineering:** Kotlin, Jetpack Compose, Coroutines, Flow, Room, TDLib, Android SDK, Gradle, Flutter
- **Frontend & Web:** Next.js, React, TypeScript, HTML5, CSS3, Tailwind CSS, PWA
- **Backend & Databases:** PostgreSQL, Supabase, SQLite (Drift), REST APIs
- **DevOps & Infrastructure:** GitHub Actions, Docker, Vercel, Cloudflare Pages, CI/CD pipelines
- **AI-Augmented Engineering:** Claude Code, Model Context Protocol (MCP), Prompt Engineering, Agent Workflows

## Projects

### rustygrep — Token-Efficient Grep for LLM Coding Agents (Rust)
- **Link:** github.com/AkashPriyadarshii/rustygrep
- Built on ripgrep's core crates with a dedicated `--llm` mode that compresses matched code output to save LLM context-window tokens.
- Implemented a stdio MCP server enabling AI coding agents to execute token-budgeted searches directly.
- Shipped with ~1,350 lines of Rust, 6 test suites, Criterion performance benchmarks, and automated CI.

### kharcha — India-First Offline UPI Expense Tracker (Flutter / Dart)
- **Link:** github.com/AkashPriyadarshii/kharcha
- Developed an Android expense tracker that automatically captures transaction data from Indian UPI notifications (GPay, PhonePe, Paytm) using a deterministic regex parsing engine.
- Implemented offline-first persistence using Drift / SQLite with optional Supabase cloud synchronization across 24 screens and tabs.

### tdlib-android — Precompiled TDLib Distribution for Android (Kotlin)
- **Link:** github.com/AkashPriyadarshii/tdlib-android
- Engineered an automated GitHub Actions matrix pipeline compiling Telegram TDLib native C++ libraries for all 4 Android ABIs (arm64-v8a, armeabi-v7a, x86, x86_64).
- Published prebuilt AAR binaries via GitHub Releases with idiomatic Kotlin Coroutines and Flow wrappers, eliminating local NDK build bottlenecks.

### zcat + repomap — Systems Tooling for AI Coding Agents (Zig & Go)
- **Links:** github.com/AkashPriyadarshii/zcat | github.com/AkashPriyadarshii/repomap
- **zcat (Zig):** Drop-in `cat` replacement in ~510 LOC with JSON output formatting for agent parsing; compiled to a standalone 179KB binary with CI test suite.
- **repomap (Go):** Stdlib-only repository mapper in ~835 LOC that analyzes symbol and reference density to generate token-budgeted repository maps (`--budget`).

### My-Starred-Repos — Auto-Updating Curated Repository Dashboard (Python)
- **Link:** github.com/AkashPriyadarshii/My-Starred-Repos | **Live:** my-starred-repos.vercel.app
- Automated dashboard categorizing 800+ curated developer repositories across AI agents, systems, and LLM tooling.
- Maintained as an offline-capable PWA refreshed daily through automated GitHub Actions workflows.

### Personal Portfolio — Static Systems Portfolio & Engineering Blog (TypeScript)
- **Link:** akashpriyadarshi.vercel.app
- Built a Next.js 16 static-export web portfolio and technical blog featuring MDX posts, automated Open Graph image generation pipeline, and Vercel edge deployment.

### Sitamarhi Tourism Portal (HTML / CSS / JavaScript & Python)
- **Link:** sitamarhi.pages.dev
- Designed and deployed a 5-page responsive cultural tourism portal for Sitamarhi, Bihar featuring PWA support and visitor telemetry via Cloudflare Functions.

## Education

- **Class 12 (CBSE)** — Hellens School | 2026
- **Class 10 (CBSE)** — KV Jawaharnagar | 2024

## Languages

- **English:** Professional Working Proficiency
- **Hindi:** Native Proficiency