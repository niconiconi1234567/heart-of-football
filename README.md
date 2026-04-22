# The Heart of Football — Jekyll Site

This is a maintainable Jekyll/GitHub Pages implementation of **The Heart of Football: Order, Control, and Passion**.

## What is included

- Dark-only, content-first site design
- Home page with hero, core section cards, featured writings, and latest notes
- Topic hubs for:
  - Vision & Philosophy
  - My Love
  - Models & Systems
- Independent subtopic pages under each topic hub
- Writing pages with:
  - metadata
  - restrained breadcrumbs
  - optional table of contents
  - related writings
- Match Notes collection
- Archive page grouped by year and type labels
- About page and My Football Footprint page
- Minimal global search in the top-right corner
- Data-driven navigation and topic structure for maintainability

## Before publishing

Open `_config.yml` and update:

- `url`
- `baseurl`

Use these rules:

- If the repository is `USERNAME.github.io`, set `baseurl: ""`
- If the repository is a project site such as `heart-of-football`, set `baseurl: "/heart-of-football"`

The current contact email is already set to:

- `wangzhishan50@gmail.com`

The academic website link is stored in `_data/site_meta.yml`.

## Main content folders

- `_writings/` → long-form essays, analysis, reflections, model notes
- `_notes/` → match notes
- `vision-philosophy/` → topic hub and subtopic pages
- `my-love/` → topic hub and subtopic pages
- `models-systems/` → topic hub and subtopic pages

## How to add a new long-form writing

Create a Markdown file in `_writings/` with front matter like this:

```yaml
---
title: "Your Title"
date: 2026-04-21
hub_key: vision-philosophy
subtopic_key: reading-football-through-control
section_title: "Vision & Philosophy"
reading_time: 7 min
type_label: Essay
tags:
  - Philosophy
  - Control
concept_order: 10
excerpt: "A short summary shown in listings and search."
featured: false
featured_order: 99
toc: true
---
```

Then write the article body in Markdown.

## How to add a new Match Note

Create a Markdown file in `_notes/` with front matter like this:

```yaml
---
title: "Your Match Note"
date: 2026-04-23
reading_time: 3 min
tags:
  - Chelsea
  - Big Match
excerpt: "A short summary for search and notes listing."
---
```

## Publishing on GitHub Pages

This project includes a GitHub Actions workflow at:

- `.github/workflows/pages.yml`

After pushing the repository to GitHub:

1. Go to **Settings → Pages**
2. Set the source to **GitHub Actions**
3. Push to `main`

GitHub Pages supports Jekyll, and GitHub’s documentation also allows publishing from a branch or from a GitHub Actions workflow. If you do not need special build control, branch publishing is also possible, but this repository is already prepared for the GitHub Actions route.

## Local preview

If you want to preview locally with Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open the local address shown in the terminal.

Trigger deploy
