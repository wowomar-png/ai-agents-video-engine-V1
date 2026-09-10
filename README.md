# AI Agents Video Engine V2

Isolated Remotion renderer for the AI Agents Quest car-learning YouTube channel. This repository has no connection to Halo Halo Operations.

## What works

- 13-minute 1920×1080 educational car video
- Local English AI narration generated with Piper
- Five separate 1080×1920 Shorts
- One 1280×720 thumbnail
- Manual GitHub Actions production from the AI Agents Quest Site
- Downloadable upload pack retained for seven days

## Run locally

```bash
npm install
npm run studio
```

Run `npm run prepare:shorts`, generate the narration files, then use `npm run render:all`. Change `public/lesson.json` and `narration/long.txt` to produce a different lesson.

## Current boundary

This engine renders the approved lesson package without an AI API key. New-topic research and script generation remain a reviewed step. YouTube uploading is manual.

Remotion uses a special license. Confirm eligibility before commercial use: https://github.com/remotion-dev/remotion/blob/main/LICENSE.md
