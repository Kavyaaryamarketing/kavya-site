# Kavya — personal site

A fast, static personal-brand site built with [Astro](https://astro.build).
You write posts as Markdown files; the site rebuilds and deploys itself.

---

## Part 1 — Get it live (one time, ~20 minutes)

You'll put the code on GitHub, then connect it to Vercel, which hosts it free
and rebuilds automatically every time you push a change.

### Step 1 — Run it on your laptop first (optional but recommended)
You need [Node.js](https://nodejs.org) (v18+). Then, in this folder:

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:4321). You should see the site.
Press Ctrl+C to stop.

### Step 2 — Put it on GitHub
1. Create a new **empty** repo on GitHub (e.g. `kavya-site`).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/kavya-site.git
   git push -u origin main
   ```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New → Project**, pick your `kavya-site` repo.
3. Vercel auto-detects Astro. Just click **Deploy**.
4. ~1 minute later you have a live URL like `kavya-site.vercel.app`.

That's it — you're live. (Netlify works the same way if you prefer it.)

### Step 4 — Your own domain (when ready)
Buy a domain (Namecheap, Google Domains, etc.). In Vercel: **Project → Settings →
Domains → Add**, then follow its DNS instructions. Once set, open
`astro.config.mjs` and change the `site:` value to your real domain, and update
`public/robots.txt` to match. Commit and push.

---

## Part 2 — How to post (the everyday part)

### A journal post
Create a new file in `src/content/journal/`, e.g. `my-post-title.md`.
The filename becomes the URL: `/journal/my-post-title`.

Start it with this block (the "frontmatter"), then write in Markdown below:

```markdown
---
title: "Your post title"
description: "One sentence that sells the post — used in lists and on Google."
date: 2026-07-01
pillar: "Life"        # must be one of: Life, Wellness, Books, Career
draft: false          # set true to hide it while you work on it
---

Write your post here. Plain text becomes paragraphs.

## A subheading

- bullet points work
- so do [links](https://example.com)

> A blockquote becomes a pull-quote.
```

Save, commit, push:
```bash
git add . && git commit -m "New post" && git push
```
Vercel rebuilds automatically. Live in about a minute.

### A Growth Lab post
Same idea, in `src/content/lab/`. Frontmatter:
```markdown
---
title: "Month 1: did organic traffic move?"
description: "The first real numbers."
date: 2026-07-15
result: "won"         # won | lost | inconclusive | ongoing
metric: "+120 visits" # optional headline number shown on the card
draft: false
---
```

There are example posts already in both folders — copy one as a starting point.

---

## Part 3 — Wiring up the marketing tools

Everything below is done in your own accounts and pasted into the code. None of it
is built-in, but all of it is a few lines.

**Newsletter (do this first).** Sign up for [Kit](https://kit.com) or
[Beehiiv](https://beehiiv.com). Create a form; they give you an embed. Open
`src/components/Signup.astro` and replace the form's `action="#"` with the form
URL and the input `name` they specify. Now every signup box on the site works.

**Google Analytics 4.** Create a property at
[analytics.google.com](https://analytics.google.com), copy the gtag snippet, and
paste it into the `<head>` of `src/layouts/Base.astro` (there's a comment marking
the spot).

**Google Search Console.** Add your site at
[search.google.com/search-console](https://search.google.com/search-console),
verify with the meta tag (also goes in `Base.astro` `<head>`), and submit
`https://yourdomain.com/sitemap-index.xml`. This is how you get found.

**Ads later.** When you run Meta or Google ads, paste their pixel/tag into the same
`<head>`, point the ad at `/newsletter`, and tag the link with UTM parameters so
GA4 shows you what each campaign did. Then write it up in the Growth Lab.

**Update the Growth Lab stat cards.** Open `src/pages/lab/index.astro` and edit the
three numbers in the `stats` array as you grow.

---

## Things to personalise before launch
- Social links in `src/components/Footer.astro` (currently `#`).
- The `hello@example.com` email in `about.astro`.
- The placeholder domain in `astro.config.mjs` and `robots.txt`.
- An Open Graph image at `public/og-default.png` (1200×630) for nice link previews.

That's everything. Write often, push often, and let the Growth Lab tell the story.
