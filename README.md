# Armghan Ahmad Shad — Portfolio

A static, animated portfolio site for a DevOps/cloud-focused student profile. No build step, no framework — plain HTML, CSS, and JavaScript.

## What's in here

```
index.html                     Homepage: hero, about, skills, projects, blog previews, contact
styles.css                     All styling (design tokens are CSS variables at the top)
script.js                      Mobile nav toggle, scroll-reveal animations, contact form handling
blog/
  why-learn-cicd-early.html
  first-pipeline-lessons.html
  compose-to-kubernetes.html
```

## Before you publish this

This site is written honestly for where you are right now — a 2nd-semester IT student building toward DevOps/cloud, not someone with professional DevOps job history. A few things are placeholders you should replace before sharing the link with employers:

1. **Repo links** — every "→ Repository" link currently points to `https://github.com/armaghanahmadshad`. Once you push the three sample projects (or your real equivalents) as actual repos, point each link at the specific repo, e.g. `https://github.com/armaghanahmadshad/flask-cicd-pipeline`.
2. **Project screenshots** — the project visuals are hand-drawn SVG diagrams, not screenshots, since there's no live project to screenshot yet. Once a project is actually running, swap the `<svg>...</svg>` block in `index.html` for a real screenshot (`<img src="projects/screenshot-1.png" alt="...">`) or an embedded demo GIF.
3. **"Live demo (coming soon)" link** on the first project — replace with the real deployed URL once it exists, or remove the link entirely.
4. **Blog posts** — the three posts are written for you as realistic, honest starting drafts. Edit them to reflect your actual experience once you've built the matching projects.

## Deploying it

Any static host works since there's no backend. Three easy options:

### GitHub Pages (free, ties to your GitHub profile)
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/armaghanahmadshad/portfolio.git
git push -u origin main
```
Then in the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**. Your site will be live at `https://armaghanahmadshad.github.io/portfolio/`.

### Netlify (free, easiest drag-and-drop)
Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole project folder in. It deploys instantly and gives you a URL you can later point a custom domain at.

### Vercel
```bash
npm install -g vercel
vercel
```
Follow the prompts from inside the project folder — no configuration needed for a static site.

## Contact form

The form in the Contact section is currently a **static demo** — it validates input and shows a message, but doesn't send email anywhere (see the comment in `script.js`). To make it actually deliver messages, pick one:

- **Formspree** (easiest): sign up at [formspree.io](https://formspree.io), get a form endpoint, then change the `<form>` tag in `index.html` to:
  ```html
  <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
  and remove the `e.preventDefault()` handling in `script.js` (or adapt it to submit via `fetch` and show the success state).
- **Netlify Forms** (if hosting on Netlify): add `netlify` and `data-netlify="true"` attributes to the `<form>` tag — Netlify handles submissions automatically, no JS changes needed.

## Customizing the design

All colors, fonts, and spacing tokens live at the top of `styles.css` under `:root`. Change `--accent-cyan` / `--accent-amber` to re-theme the whole site without touching layout code.

## Browser/device testing checklist

- [ ] Resize down to ~375px width (mobile) — nav collapses into the hamburger menu
- [ ] Tab through the page with keyboard only — every link/button/input should show a visible focus ring
- [ ] Toggle "reduce motion" in OS accessibility settings — animations should stop, not break layout
- [ ] Test in Chrome, Firefox, and Safari (or at least two of the three) before sharing the link
