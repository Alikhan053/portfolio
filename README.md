# Mohid Pathan portfolio

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step. Includes a canvas-rendered rotating 3D torus, reduced-motion support, three standalone working browser applications, and a contact form.

## Preview

Open `index.html` in a browser, or run `python -m http.server 8080` from this folder and visit http://localhost:8080.

## Publish and use on Fiverr

Upload `index.html`, `style.css`, `script.js`, and the `assets` and `projects` folders together to a static host (for example Netlify, Cloudflare Pages, or GitHub Pages). The published HTTPS URL is the link to paste into the portfolio field shown in your Fiverr screenshot. A local file or localhost URL will not work for clients. No hosting account or domain was supplied, so this project has not been publicly deployed.

## Email activation — required

The contact form posts to `https://formsubmit.co/mohidalip@gmail.com`. On first submission from the published website, FormSubmit sends the owner an activation email. Activate it in that inbox, then submit a fresh test enquiry and verify receipt. Delivery cannot be claimed before activation and a successful end-to-end check. FormSubmit handles the submission and CAPTCHA on its own page. The site does not falsely show an email-sent confirmation. The direct email link and the validated “Open an email draft” action work without FormSubmit, but require a configured email app and manual sending.

Form submissions are processed by a third party. Review https://formsubmit.co/ before publishing. No email credentials are embedded in the site. Do not put SMTP credentials or private API keys in frontend JavaScript.

## Working projects

At your request, three new apps were created inside `projects/`:

- `erp.html`: student create/edit/delete, search, department filters, attendance updates, fee status, local persistence, CSV export, and reset.
- `cars.html`: fictional vehicle catalog, search, filters, sorting, persistent favorites, comparison of three vehicles, and rule-based recommendations.
- `ml.html`: real logistic regression in JavaScript on 1,000 synthetic equipment records, 800/200 train/test split, optional class balancing, computed metrics, confusion matrix, predictions, scatterplot, and downloadable weights.

These are new browser implementations, not the original Python/MERN/Flask applications described in the resume. Resume results are distinguished from calculated synthetic-model metrics. There is no production backend, multi-user authentication, real student database, or healthcare model. ERP and car state persist locally in the browser. The downloadable resume is in `assets/`.

## Design references

- https://bruno-simon.com/ — 3D as an interactive demonstration of technical work.
- https://www.creativebloq.com/portfolios/examples-712368 — work-first presentation and clear project case studies.
- https://formsubmit.co/ — static-site email form service and activation documentation.

Visual direction is original: charcoal, warm orange, sage dashboard surfaces, oversized editorial typography, and procedural 3D. Project previews are built in HTML/CSS; they are not screenshots of original deployments. Google Fonts is optional; local font fallbacks keep the layout working if it cannot load.

For Fiverr-origin clients, keep communication and orders on Fiverr; the website displays a reminder near the contact section.
