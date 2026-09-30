# Toolcube

A free directory of AI tools, built as a static site (plain HTML/CSS/JS, no build step).

## Deploy on Cloudflare Pages via GitHub
1. Push this folder's contents to a new GitHub repository (root of the repo, not in a subfolder).
2. In Cloudflare dashboard: Workers & Pages -> Create -> Pages -> Connect to Git -> select the repo.
3. Build settings: Framework preset "None", Build command empty, Build output directory `/`.
4. Deploy. Cloudflare gives a `*.pages.dev` URL immediately; a custom domain can be attached later in Pages -> Custom domains.

## Notes
- Google Search Console verification meta tag is already in every page's <head>.
- Contact/Submit/Advertise forms use `data-netlify="true"` (Netlify-only). On Cloudflare Pages these forms will not submit anywhere until replaced with Cloudflare Pages Forms, a Worker, or a service like Formspree.
- To track clicks, set GA_ID in site.js (currently empty).
