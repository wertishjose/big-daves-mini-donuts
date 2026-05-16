# Big Dave's Mini Donuts

Mobile-first React + Vite + Tailwind + Supabase website for a Minnesota food trailer focused on one job first: helping customers find where Big Dave is today.

## Stack

- React
- Vite
- Tailwind CSS
- Supabase Auth + JSON-backed content table

## Pages

- `/` public website
- `/admin` password-protected admin dashboard

## Setup

1. Install dependencies with your package manager of choice.
2. Copy `.env.example` to `.env` and fill in your Supabase project values.
3. Run the SQL in [supabase/schema.sql](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/supabase/schema.sql:1).
4. Start the Vite dev server.

## GitHub Pages Deployment

This project is prepared for GitHub Pages without redesigning the app.

### What is already configured

- Vite reads an optional `VITE_BASE_PATH` in [vite.config.js](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/vite.config.js:1)
- React Router uses `import.meta.env.BASE_URL` in [src/main.jsx](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/src/main.jsx:1)
- `404.html` provides SPA fallback routing so direct visits to `/admin` still load correctly on GitHub Pages
- A GitHub Actions workflow is included at [deploy-github-pages.yml](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/.github/workflows/deploy-github-pages.yml:1)

### GitHub setup steps

1. Push this project to a GitHub repository
2. In GitHub, open `Settings > Pages`
3. Set the source to `GitHub Actions`
4. In GitHub, open `Settings > Secrets and variables > Actions`
5. Add these repository secrets:
   `VITE_SUPABASE_URL`
6. Add:
   `VITE_SUPABASE_ANON_KEY`
7. Make sure your default branch is `main`
8. Push to `main` or run the workflow manually from the `Actions` tab

### How routing works on GitHub Pages

- The site is built with a repository base path such as `/your-repo-name/`
- Direct visits to routes like `/admin` are handled by the included `404.html` redirect
- React Router then restores the correct in-app route

### How environment variables work in deployment

- Vite only exposes variables that start with `VITE_`
- GitHub Pages is a static host, so these values must be present at build time
- The workflow passes:
  `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- Do not use a Supabase service-role key in GitHub Pages

### Manual build note

If you build locally for GitHub Pages, set:

```env
VITE_BASE_PATH=/your-repository-name/
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-public-key
```

Then run the normal production build.

## Notes

- The site falls back to local default content when Supabase environment variables are missing.
- The admin dashboard keeps V1 simple with a lightweight featured-image control instead of a full media library.
- The public site now uses the real trailer, food, promo, and review reference assets stored under `public/images` and `public/reviews`.
- Supabase setup steps are documented in [SUPABASE_SETUP.md](/C:/Users/josep/Documents/Codex/2026-05-15/build-a-modern-visually-rich-mobile/SUPABASE_SETUP.md:1).
