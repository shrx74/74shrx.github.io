# 74shrx.github.io

Personal developer portfolio for **74shrx**.

## Current stack

- Plain HTML
- CSS
- Vanilla JavaScript
- GitHub Pages

## Portfolio structure

The site is intentionally minimal and dark. It includes:

- Developer intro
- Five project/video showcase slots
- A real GitHub link for the Roblox Data System project
- About/toolbox section
- Discord + GitHub contact section
- Responsive mobile layout
- Lightweight reveal animations

## Updating the Discord username

Open `index.html` and replace both instances of:

```
YOUR_DISCORD_USERNAME
```

with the real Discord username.

## Adding showcase videos

Each project currently contains a `.video-slot` placeholder.

For a locally hosted MP4, replace the contents of a slot with something like:

```html
<video controls preload="metadata">
  <source src="assets/videos/project-01.mp4" type="video/mp4">
</video>
```

Then add the video file under:

```
assets/videos/
```

For YouTube or another host, an embedded iframe can be used instead.

## Publishing

This repository is intended for GitHub Pages at:

```
https://74shrx.github.io
```
