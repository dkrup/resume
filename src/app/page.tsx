import Image from "next/image";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";

const NAV_ITEMS = [
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Core Expertise" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#youtube", label: "YouTube" },
  { href: "#contact", label: "Contact" }
];

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="#top" className="flex items-center gap-2" aria-label="Scroll to top">
            <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-500 shadow-[0_14px_40px_rgba(6,182,212,0.75)]" />
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                DENIS KRUPCHENKO
              </span>
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.3em] text-slate-500">
                Automation QA
              </span>
            </div>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="container-page">
        <BackgroundMusic />
        <section aria-labelledby="hero-heading" className="section-shell">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] md:items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/70 px-3 py-1 text-[0.8rem] font-medium uppercase tracking-[0.24em] text-cyan-200 shadow-[0_16px_50px_rgba(6,182,212,0.65)]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Available for Senior / Staff Automation QA roles
              </div>

              <div className="space-y-3">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
                  Senior Automation QA Engineer
                </p>
                <h1
                  id="hero-heading"
                  className="bg-clip-text text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl sm:leading-tight lg:text-[2.9rem]"
                >
                  Denis Krupchenko
                </h1>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Playwright Architect &bull; AI‑Driven QA &bull; CI/CD Automation
                </p>
              </div>

              <p className="max-w-2xl text-base leading-8 text-slate-100">
                I design scalable Playwright-based test architectures and AI-driven QA systems.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/cv/CV-AQA-KrupchenkoDenis.pdf"
                  className="primary-button"
                  download
                  aria-label="Download CV of Denis Krupchenko as PDF"
                >
                  Download CV
                </Link>
                <Link
                  href="https://github.com/dkrup"
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  href="https://www.linkedin.com/in/denniskrupchenko/"
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://www.youtube.com/@qa-engineer/playlists"
                  className="secondary-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-inner space-y-6">
                <p className="section-label">Profile Snapshot</p>
                <div className="mx-auto w-full max-w-[230px] overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/70">
                  <Image
                    src="/images/profile.png"
                    alt="Portrait of Denis Krupchenko"
                    width={453}
                    height={478}
                    priority
                    className="h-auto w-full object-cover"
                  />
                </div>
                <ul className="grid gap-3 text-base leading-7 text-slate-100 sm:grid-cols-1">
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>10+ years in automation and manual testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>Playwright architecture for UI + API systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>AI-assisted QA workflows and prompt engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>CI/CD quality gates and team mentoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className="section-shell space-y-6">
          <div className="card">
            <div className="card-inner space-y-2">
              <p className="section-label">Work Experience</p>
              <h2 id="experience-heading" className="section-title">
                Professional Journey
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Senior roles across product and enterprise teams, focused on automation architecture and delivery.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="portfolio-card">
              <p className="portfolio-meta">Oct 2025 - Present</p>
              <h3 className="text-base font-semibold text-slate-50">
                Senior Automation QA Engineer — HotCode
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Built Playwright framework from scratch</li>
                <li>• Designed CI/CD automation pipelines</li>
                <li>• Integrated UI + API testing</li>
              </ul>
              <p className="portfolio-stack">Stack: Playwright · TypeScript · CI/CD</p>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Feb 2024 - Jul 2025</p>
              <h3 className="text-base font-semibold text-slate-50">
                Senior Automation QA Engineer — MindK (TLN)
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Improved framework quality and structure</li>
                <li>• Expanded UI + API automation coverage</li>
                <li>• Mentored client-side QA engineers</li>
              </ul>
              <p className="portfolio-stack">Stack: Playwright · Codecept.io · API testing</p>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Jun 2022 - Jan 2024</p>
              <h3 className="text-base font-semibold text-slate-50">
                Automation QA Engineer — ICL (Agmatix)
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Enhanced UI automation coverage</li>
                <li>• Developed API framework and tests</li>
                <li>• Contributed to visual and performance checks</li>
              </ul>
              <p className="portfolio-stack">Stack: JavaScript/TypeScript · UI/API · Performance</p>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Dec 2020 - Jun 2022</p>
              <h3 className="text-base font-semibold text-slate-50">
                Automation QA Engineer — SoftServe
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Delivered regression and E2E coverage</li>
                <li>• Built frameworks for retail and healthcare apps</li>
                <li>• Supported release quality at scale</li>
              </ul>
              <p className="portfolio-stack">Stack: Protractor · Cypress · Jasmine · Mocha</p>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Jun 2019 - Dec 2020</p>
              <h3 className="text-base font-semibold text-slate-50">Automation QA Engineer — Cloudbeds</h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Built API and E2E automation suites</li>
                <li>• Improved coverage for core hospitality workflows</li>
              </ul>
              <p className="portfolio-stack">Stack: Cucumber · Gherkin · Puppeteer · Jest</p>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Sep 2015 - Jun 2019</p>
              <h3 className="text-base font-semibold text-slate-50">
                Manual/Automation QA Engineer — uCoz (uKit)
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Delivered functional and regression testing</li>
                <li>• Built E2E automation architecture</li>
                <li>• Maintained test documentation and process quality</li>
              </ul>
              <p className="portfolio-stack">Stack: NightwatchJS · CodeceptJS · WebdriverIO · Selenium</p>
            </article>
          </div>
        </section>

        <section id="expertise" aria-labelledby="expertise-heading" className="section-shell space-y-6">
          <div className="card">
            <div className="card-inner space-y-2">
              <p className="section-label">Core Expertise</p>
              <h2 id="expertise-heading" className="section-title">
                What I Do Best
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Core capabilities in architecture, automation, and quality enablement.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="portfolio-card">
              <h3 className="text-base font-semibold text-slate-50">
                Playwright &amp; Modern Test Architectures
              </h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• UI + API frameworks</li>
                <li>• Clean abstractions and fixtures</li>
                <li>• Deterministic test design</li>
              </ul>
              <p className="portfolio-stack">Playwright · TypeScript · API testing</p>
            </article>

            <article className="portfolio-card">
              <h3 className="text-base font-semibold text-slate-50">AI‑Assisted Test Development</h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• Copilot and MCP-assisted workflows</li>
                <li>• Prompt patterns for reliable output</li>
                <li>• Faster test authoring with guardrails</li>
              </ul>
              <p className="portfolio-stack">Copilot · MCP · Prompt engineering</p>
            </article>

            <article className="portfolio-card">
              <h3 className="text-base font-semibold text-slate-50">CI/CD &amp; Automation Pipelines</h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• PR feedback and release quality gates</li>
                <li>• Reliable nightly and regression runs</li>
                <li>• Pipeline-first QA strategy</li>
              </ul>
              <p className="portfolio-stack">Jenkins · Docker · Git workflows</p>
            </article>

            <article className="portfolio-card">
              <h3 className="text-base font-semibold text-slate-50">Quality Strategy &amp; Mentorship</h3>
              <ul className="space-y-1 text-sm leading-7 text-slate-100">
                <li>• QA strategy aligned with product delivery</li>
                <li>• Mentoring for QA and engineering teams</li>
                <li>• Test design and code review standards</li>
              </ul>
              <p className="portfolio-stack">Mentoring · Reviews · Test strategy</p>
            </article>
          </div>
        </section>

        <section id="portfolio" aria-labelledby="portfolio-heading" className="section-shell space-y-6">
          <div className="card">
            <div className="card-inner space-y-2">
              <p className="section-label">Portfolio</p>
              <h2 id="portfolio-heading" className="section-title">
                Selected Automation Work
              </h2>
              <p className="max-w-2xl text-base leading-8 text-slate-100">
                Open-source frameworks and toolkits focused on practical engineering outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="portfolio-card">
              <p className="portfolio-meta">Playwright Boilerplate</p>
              <h3 className="text-base font-semibold text-slate-50">UI + API Automation Framework</h3>
              <p className="text-sm leading-7 text-slate-100">
                Playwright starter framework with production-ready structure for UI and API automation.
              </p>
              <p className="portfolio-stack">Stack: Playwright · TypeScript · REST API</p>
              <div>
                <Link
                  href="https://github.com/dkrup/playwright-boilerplate"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">AI‑Driven Playwright Demo</p>
              <h3 className="text-base font-semibold text-slate-50">Copilot + MCP Workflows</h3>
              <p className="text-sm leading-7 text-slate-100">
                Demo of AI-generated Playwright tests with practical guardrails for consistent output.
              </p>
              <p className="portfolio-stack">Stack: Playwright · TypeScript · Copilot · MCP</p>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://github.com/dkrup/playwright-demo"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  href="https://youtu.be/fGFGtor0zWs?si=J5IRV6xd5hf7UIRT"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo video
                </Link>
              </div>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Cypress Automation Framework</p>
              <h3 className="text-base font-semibold text-slate-50">UI Automation Starter</h3>
              <p className="text-sm leading-7 text-slate-100">
                Cypress framework template focused on readability, maintainability, and fast onboarding.
              </p>
              <p className="portfolio-stack">Stack: Cypress · JavaScript/TypeScript · UI testing</p>
              <div>
                <Link
                  href="https://github.com/dkrup/cypress-boilerplate"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">WebdriverIO + Selenium Stack</p>
              <h3 className="text-base font-semibold text-slate-50">UI &amp; API in Docker</h3>
              <p className="text-sm leading-7 text-slate-100">
                Containerized setup for stable UI and API automation in reproducible environments.
              </p>
              <p className="portfolio-stack">Stack: WebdriverIO · Selenium · Mocha · Axios · Docker</p>
              <div>
                <Link
                  href="https://github.com/dkrup/wdio-mocha-typescript-boilerplate"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </article>

            <article className="portfolio-card">
              <p className="portfolio-meta">Postman + Newman API Toolkit</p>
              <h3 className="text-base font-semibold text-slate-50">API Collections for CI</h3>
              <p className="text-sm leading-7 text-slate-100">
                API validation toolkit designed for CI-friendly execution and clear failure signals.
              </p>
              <p className="portfolio-stack">Stack: Postman · Newman · CI integration</p>
              <div>
                <Link
                  href="https://github.com/dkrup/postman-newman-boilerplate"
                  className="pill-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section id="youtube" aria-labelledby="youtube-heading" className="section-shell space-y-6">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:items-center">
            <div className="card">
              <div className="card-inner space-y-5">
                <p className="section-label">YouTube</p>
                <h2 id="youtube-heading" className="section-title">
                  QA Education &amp; Modern Practices
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-100">
                  QA YouTube channel focused on practical automation engineering.
                </p>
                <p className="max-w-2xl text-base leading-8 text-slate-100">
                  Focused on modern automation engineering and AI-driven QA.
                </p>
                <Link
                  href="https://www.youtube.com/channel/UCLF3kBwJFbPK43C-BTFLKSw"
                  className="primary-button w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit YouTube channel
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card-inner space-y-5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-300">Channel Focus</p>
                <ul className="space-y-3 text-base leading-7 text-slate-100">
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                    <span>Playwright architecture and test design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>AI-assisted QA workflows with practical examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>CI/CD automation patterns for real teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className="section-shell space-y-5">
          <div className="card">
            <div className="card-inner space-y-2">
              <p className="section-label">Contact</p>
              <h2 id="contact-heading" className="section-title">
                Let&apos;s Talk
              </h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card">
              <div className="card-inner space-y-1.5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">Email</p>
                <Link
                  href="mailto:denniskrupchenko@gmail.com"
                  className="text-sm font-medium text-cyan-300 underline-offset-4 hover:underline"
                >
                  denniskrupchenko@gmail.com
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-inner space-y-1.5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">LinkedIn</p>
                <Link
                  href="https://www.linkedin.com/in/denniskrupchenko/"
                  className="text-sm font-medium text-cyan-300 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  /denniskrupchenko
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-inner space-y-1.5">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">GitHub</p>
                <Link
                  href="https://github.com/dkrup"
                  className="text-sm font-medium text-cyan-300 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/dkrup
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

