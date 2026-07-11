# Armaghan Ahmad Shad — Portfolio

Personal portfolio site for Armaghan Ahmad Shad, a BS Information Technology student
at MNS UET Multan building toward a career in cloud and DevOps engineering. Built with
plain HTML, CSS, and JavaScript — no frameworks, no build step.

**Live site:** https://armaghanahmadshad.github.io/Portfolio *(update this if hosted elsewhere)*

## Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero, current stack, and a certificates preview |
| About | `about.html` | Background, timeline, and approach |
| Skills | `skills.html` | Full skills breakdown grouped by proficiency |
| Certificates | `certificates.html` | Coursera / Google / Microsoft certifications |
| Projects | `projects.html` | CI/CD, IaC, and containerization practice projects |
| Blog | `blog.html` | Short write-ups on CI/CD, GitOps, and containers |
| Contact | `contact.html` | Contact form + direct links (email, LinkedIn, GitHub) |

## Tech stack

- **HTML5 / CSS3** — no CSS framework, custom design tokens in `styles.css`
- **Vanilla JavaScript** (`script.js`) — mobile nav toggle, scroll-reveal animations,
  and the contact form handler
- **Fonts** — [Manrope](https://fonts.google.com/specimen/Manrope) (body/UI) and
  [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code/labels),
  loaded from Google Fonts
- **Forms** — [Formspree](https://formspree.io) handles contact form submissions
  (see below)

## Project structure

```
.
├── index.html
├── about.html
├── skills.html
├── certificates.html
├── projects.html
├── blog.html
├── contact.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── blog/                  # individual blog post pages
│   ├── why-learn-cicd-early.html
│   ├── first-pipeline-lessons.html
│   └── compose-to-kubernetes.html
└── assets/
    ├── avatar.png         # homepage portrait
    └── avatar.ico         # favicon
```

## Running locally

No build tools or dependencies required. Either:

1. Open `index.html` directly in a browser, or
2. Serve the folder with a local static server for correct relative paths:

   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## Contact form setup

The contact form on `contact.html` submits to Formspree via `fetch()` in `script.js`
(AJAX — no page reload). It currently points at:

```
https://formspree.io/f/mpqggnnl
```

To point it at your own Formspree form:

1. Create a form at [formspree.io](https://formspree.io) and copy its endpoint.
2. Replace the `action` attribute on the `<form class="contact-form">` element in
   `contact.html`.
3. Submit a test message — Formspree requires you to confirm the first submission
   from your inbox before the form goes live.

## SEO

- Each page has a unique `<title>`, meta description, canonical URL, and Open Graph /
  Twitter card tags for link previews.
- `index.html` includes `Person` structured data (JSON-LD) for search engines.
- `sitemap.xml` and `robots.txt` are included at the project root — update the domain
  in both if you deploy somewhere other than `armaghanahmadshad.github.io`.

## Known items to keep an eye on

- Project "Repository" links on `projects.html` currently point to the GitHub profile
  rather than individual repos — update once those repos are public.
- Skill proficiency levels are listed independently on the homepage and on
  `skills.html`; keep both in sync when updating.

## License

Personal project — feel free to reference the structure, but please don't reuse the
content or certificates as your own.
