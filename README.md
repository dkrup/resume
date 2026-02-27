## Denis Krupchenko — Personal Site

Modern, minimalistic personal website for a **Senior Automation QA Engineer**, built as a professional landing page (not just a CV copy).

### Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design**: Dark theme by default, responsive, developer‑oriented
- **SEO**: Next.js `Metadata` API with OpenGraph/Twitter tags

### Project Structure (key parts)

- `src/app/layout.tsx` — root layout, global metadata, favicon, dark theme
- `src/app/page.tsx` — main landing page (Hero, About, Core Expertise, Portfolio, YouTube, Contact)
- `src/app/globals.css` — Tailwind and global design tokens/utilities
- `public/icon.svg` — favicon placeholder

### Getting Started

```bash
cd d:\resume-site
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

By default, the **Download CV** button points to `public/cv/Denis-Krupchenko-CV.pdf`.  
Place your latest PDF there (create the `public/cv` folder if it does not exist).

### Main npm Scripts

- **`npm run dev`** — starts the dev server at `http://localhost:3000`
- **`npm run build`** — creates a production build
- **`npm run start`** — runs the production server (after `npm run build`)
- **`npm run lint`** — runs Next.js/ESLint checks

### Deploy to Vercel

1. **Initialize a git repository** (if you have not done it yet):
   ```bash
   cd d:\resume-site
   git init
   git add .
   git commit -m "Initial commit: personal QA site"
   ```
2. **Create a repository** on GitHub / GitLab / Bitbucket and push this project.
3. Go to [Vercel](https://vercel.com), click **New Project**, and select your repository.
4. Vercel will automatically detect **Next.js**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click **Deploy** and wait for the build to finish.

After deployment, update `metadataBase` and `openGraph.url` in `src/app/layout.tsx` to your real domain, for example `https://your-domain.vercel.app`.

