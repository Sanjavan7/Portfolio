# Sanjavan Ghodasara — Portfolio

Personal portfolio at **[sanjavan.com](https://sanjavan.com)**.

Machine Learning Engineer · AI Researcher · Hackathon Builder. MS in Machine Learning at Stevens Institute of Technology.

## Highlights

- **Animated 3D intro loader** — fullscreen video reveal that plays once per session, click anywhere to enter
- **Animated favicon** — rolling-then-flipping orange coin with "S", driven by a `<canvas>` and `requestAnimationFrame`
- **Section-driven SPA** — Hero, Featured Projects, Stats, Research, Experience, Story, Contact
- **Coinly-inspired UI** — playful palette, rounded chips, hand-drawn SVG decorations (sparkles, clouds, squiggles)
- **Custom OG card** for clean previews on LinkedIn / Twitter / Slack / iMessage

## Stack

| Layer | Tools |
|------|-------|
| Build | Vite, TypeScript, SWC |
| UI | React 18, Tailwind CSS, shadcn-ui, framer-motion |
| Routing | React Router |
| State | TanStack Query |
| Hosting | GitHub Pages (custom domain via CNAME) |

## Local development

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build to dist/
npm run lint     # eslint
npm run test     # vitest
```

Requires Node 18+.

## Project layout

```
src/
├── components/
│   ├── portfolio/        # page sections (Hero, FeaturedProjects, …, IntroLoader)
│   └── ui/               # shadcn primitives
├── hooks/
│   ├── useAnimatedFavicon.ts
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── pages/
│   ├── Index.tsx         # main portfolio page
│   └── NotFound.tsx
├── App.tsx
└── main.tsx
public/
├── intro.mp4             # fullscreen loader video
├── intro-poster.jpg      # first-frame poster
├── og-image.jpg          # social share thumbnail (1200×630)
├── SResume_Sanjavan_Updated.pdf
├── origin-photo.png
└── CNAME                 # sanjavan.com
```

## Deployment

Pushes to `main` are deployed to GitHub Pages, which serves the contents of `dist/` at `sanjavan.com` via the `CNAME` file in `public/`.

To force re-scrape of OG/Twitter cards after updating the social preview:

- LinkedIn: <https://www.linkedin.com/post-inspector/>
- Twitter/X: <https://cards-dev.twitter.com/validator>
- Facebook/iMessage/Slack: <https://developers.facebook.com/tools/debug/>

## Contact

- Email: [sanjavan7@gmail.com](mailto:sanjavan7@gmail.com)
- LinkedIn: [linkedin.com/in/sanjavan-ghodasara-854138235](https://www.linkedin.com/in/sanjavan-ghodasara-854138235/)
- GitHub: [@Sanjavan7](https://github.com/Sanjavan7)
- Devpost: [devpost.com/sanjavan7](https://devpost.com/sanjavan7)
