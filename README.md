# Portfolio Website

Personal portfolio site for **Ruturaj Amit Rajwade** — B.Tech CSE student and aspiring software engineer.

Built with React 19 + Vite, deployed on Vercel.

## Stack

- **React 19** with Vite 8 (HMR, fast builds)
- **react-icons** for iconography
- **Oxlint** for linting
- Plain CSS (no UI framework)

## Sections

- Hero
- About
- Tech stack
- Projects
- Achievements
- Education
- Documents (marksheets & certificates)
- Contact
- Footer

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # run oxlint
```

## Project structure

```
src/
  assets/
    icons/     SVG icons
    images/    photos and project thumbnails
  components/  one folder per section
  data/        content (personal info, projects, achievements, etc.)
  hooks/       useReveal, useScrollSpy, useScrollToTop
  utils/       shared constants
  App.jsx      layout / section composition
  App.css      styles
public/
  achievements/  hackathon photos
  certificates/  certificate scans / PDFs
  documents/     marksheets & course certificates
```

## Deployment

Pushing to the default branch triggers a Vercel build. Output goes to `dist/`.
