# Mohammed Shakib — Portfolio

A cinematic, responsive portfolio built in the existing Next.js App Router environment, with React, CSS, and minimal client-side JavaScript. No database, authentication, or contact-form backend is used.

## Content and assets

- `app/page.tsx`: assembles the complete portfolio.
- `app/globals.css`: visual system, responsive layouts, reduced-motion styles, and CSS animations.
- `components/`: navigation, hero playback, progressive motion, editorial sections, skills, work, and exploration rail.
- `lib/portfolio.ts`: profile, verified public links, projects, and skill categories.
- `public/assets/hero-video.mp4`: optimized 12-second camera-motion loop made from the original landscape artwork.
- `public/assets/hero-poster.webp`: matching fallback image.
- `public/assets/gesture.webp`: illustrative project artwork, not an application screenshot.
- `public/resume.html`: standalone, downloadable, print-ready resume. The Print / Save as PDF button uses the browser print dialog.

The hero does not automatically load video when reduced motion or data saving is enabled. Off-screen and background-tab playback is paused. Video failure leaves the poster visible.

Public email and LinkedIn links were verified against the owner's existing public portfolio. The calculator and student-record GitHub links explicitly point to web versions, distinct from the Python/C studies described in the supplied brief. All project images are labeled concept visuals.

The existing Next.js environment is retained rather than introducing a second static build system. The home route is `/`, and the resume is `/resume.html`. Use the connected GitHub repository or the v0 project installation command to install the project elsewhere.
