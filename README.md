# AI Agents Video Engine V1

Isolated Remotion renderer for the AI Agents Quest car-learning YouTube channel. This repository has no connection to Halo Halo Operations.

## What works

- React-based educational car video template
- 1920×1080 long-video render
- 1080×1920 Shorts render
- Manual GitHub Actions rendering
- Automatic daily rendering at 08:00 Qatar time
- Downloadable MP4 artifacts retained for seven days

## Run locally

```bash
npm install
npm run studio
```

Render both formats with `npm run render:all`. Change `public/lesson.json` to produce a different lesson.

## Current boundary

This first engine renders supplied lesson data. AI research, narration, generated images, AI Agents Quest job control and YouTube OAuth publishing are the next connection layer and require separate credentials. Do not commit API keys or account tokens.

Remotion uses a special license. Confirm eligibility before commercial use: https://github.com/remotion-dev/remotion/blob/main/LICENSE.md
