# Altria Yang — A room of my own

The public portfolio is hosted at https://altriaart.github.io/.

## Update artwork

Use the protected editor at https://altria-yang-room.yangziyi96.chatgpt.site/studio with the owner ChatGPT account. Save and publish a project there; the public site reads published content live on page load. Drafts and editor operations remain protected on the editor service.

## Public frontend

The active website source is in `web/`. The earlier Astro prototype under `src/` is retained as history and is not part of the current build.

- `npm ci`
- `npm run build`
- `npm run dev`

GitHub Actions deploys `dist/` after a push to `main`. Known public routes get HTML entrypoints at build time, and `404.html` supports direct links to projects created after the latest frontend deployment. Browser navigation keeps the GitHub Pages hostname. Fonts are bundled in `web/public/fonts/` with their licences. Visitor colour choices use only local browser storage.

The public content endpoint exposes published work only. The contact form sends notes to the protected studio inbox. No editor credentials or API secrets are shipped in the public bundle.
