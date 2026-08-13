# Mobile Clock Toolkit (digital_clock)

A simple, static web-based clock toolkit providing a live local clock, multiple world time displays, an analog canvas clock, stopwatch, countdown timer, and alarm — implemented with plain HTML, CSS and JavaScript.

## Overview

This project is a frontend-only clock utility intended as a small interactive web application that demonstrates JavaScript DOM manipulation, time handling, canvas drawing and UI styling.

Why this exists
- Built as a compact utility / learning project to explore timers, the HTML5 Canvas API, and user interactions in vanilla JavaScript.

Who can use it
- Students and beginners learning JavaScript, DOM timers and canvas drawing, or anyone who wants a simple browser-based clock toolkit.

## Key Features (implemented)

- Local live clock (updates every second)
- World times for UTC, London, Tokyo, New York and Delhi (uses Intl time zone formatting)
- Analog clock drawn on a Canvas element (hour/minute/second hands)
- Stopwatch with Start / Pause / Reset
- Countdown timer with Start / Pause / Reset and visual/alarm notification when finished
- Settable alarm (hour and minute) that plays a bundled audio file when triggered
- Dark mode toggle
- Simple responsive layout and CSS styles

(These features were confirmed by inspecting index.html, script.js, style.css and the included audio file.)

## Tech Stack

- Frontend: HTML5, CSS3, Vanilla JavaScript
- UI: Canvas API for the analog clock
- Assets: bundled alarm audio (diet_mountain_dew.mp3)
- No backend, database, or build tools are used in this repository

## How it works (brief)

- index.html provides the page structure and links to style.css and script.js.
- script.js contains the application logic:
  - Repeated setInterval (1s) updates the local clock, world clocks, analog clock drawing and alarm checks.
  - Stopwatch and countdown use their own intervals and update DOM elements.
  - Alarm time is compared to the current hour/minute/second, and when matched the bundled audio is played and a visual flash is shown.
  - The analog clock is rendered using the Canvas API (drawing face, numbers, and hands each second).
- style.css contains styling for light and dark modes, layout, and simple animations.

## Architecture

This is a single-page static application (no client/server split). The runtime shape is a browser page that runs script.js and manipulates DOM elements and the canvas.

Main modules/files:
- index.html — application UI and elements
- style.css — visual styling and dark-mode styles
- script.js — all application logic (timers, canvas drawing, alarm handling)
- diet_mountain_dew.mp3 — bundled alarm audio asset

## Project structure (important files)

```
index.html        # main HTML UI
style.css         # styles and dark mode
script.js         # all JS logic: clocks, stopwatch, countdown, alarm, canvas drawing
diet_mountain_dew.mp3  # audio asset used for alarm
```

## Installation / Run locally

This project is static — no build steps or package managers are required. Two easy ways to run it locally:

1) Open directly in the browser (may have audio autoplay restrictions)

```bash
# Clone the repository
git clone https://github.com/vinay5ain/digital_clock.git
cd digital_clock
# Open index.html in your browser (double-click or use your editor's Live Preview)
```

2) Serve with a minimal local HTTP server (recommended to avoid some browser media restrictions):

```bash
# Using Python 3 (recommended)
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

Or use VS Code Live Server extension to preview the page.

## Environment variables

- This project does not use environment variables.

## API Documentation

- There is no backend API — all functionality runs in the browser via script.js.

## Screenshots / Demo

- The repository does not include screenshots or a live deployment. You can run the app locally (see Installation) to try the features.

## Challenges & Learning (inferred from code)

From the implementation you can see the author worked with:
- Accurate time handling across time zones using JavaScript Intl APIs
- Managing multiple timer loops (setInterval) and preventing conflicting intervals for stopwatch/countdown
- Canvas 2D drawing for the analog clock (face, numbers, hands)
- Handling browser audio autoplay restrictions by user interaction
- Styling for both light/dark themes and responsive layout

These show experience with DOM APIs, event handling, and client-side state management.

## Future improvements (realistic and relevant)

- Persist alarms and stopwatch state using localStorage so settings survive page reloads
- Add selectable time zones (UI to add/remove world clocks) rather than a fixed list
- Improve accessibility (ARIA attributes, keyboard support and focus management)
- Better mobile responsiveness and layout tuning for narrow screens
- Add unit tests for pure JS utility functions (where applicable)
- Convert to a small React app to demonstrate component design and state management
- Add a build step and deploy as a GitHub Pages site for a live demo URL

## What this project demonstrates

- JavaScript DOM manipulation and event handling
- Time zone formatting (Intl timeZone)
- Canvas API for drawing an analog clock
- UI work with CSS and responsive layout
- Small-scale frontend app design and user interaction handling

These are relevant to roles involving frontend development, problem solving and practical use of JavaScript fundamentals.

## Author / Maintainers

- Repository owner: vinay5ain (GitHub user)
- Project footer indicates: "Made by Shivani Mourya | BCA Project" (this string appears in index.html footer)

## Repository link

https://github.com/vinay5ain/digital_clock

---

If you'd like, I can also:
- Add screenshots captured from a local run and include them in the README,
- Provide a short CONTRIBUTING.md with development notes,
- Convert the app to a small React or Node-backed project as a learning exercise to better match your MCA/placement portfolio.
