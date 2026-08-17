# Portfolio

Personal portfolio site — a terminal-themed single page showcasing projects, skills, and experience.

[live site](https://www.ayleenroque.dev/)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

## About

This is a personal developer portfolio built as a single static page with a terminal/command-line aesthetic. It's meant to give visitors a quick, scannable overview of who I am, what I've built, and what technologies I work with — no build tooling or backend required, just plain HTML and CSS.

## Features

- **Terminal-styled UI** — sections framed as shell commands (`$ whoami`, `$ ls -la ./projects`, `$ cat stack.txt`)
- **Project showcase** — list of projects with descriptions, tags, and links to live demos and READMEs
- **Skills & experience** — quick-reference tech stack and work/education timeline

## Project Structure

```
.
├── css/
│   └── style.css   # Site styling
├── index.html      # Page markup and content
└── README.md
```

## Deployment

Hosted on AWS using a fully static, serverless setup:

- **Amazon S3** — stores the site files privately
- **Amazon CloudFront** — CDN + free HTTPS via AWS Certificate Manager
- **Cloudflare** — domain registration and DNS

## Roadmap

- [ ] Add animations
- [ ] Restructure to use React framework
- [ ] Explore other designs and colors
- [x] Add favicon
