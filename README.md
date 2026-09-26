# VoiceDesk AI — Landing Page

Marketing landing page for **VoiceDesk AI**, an AI voice agent for customer support. Built as a university lab project.

Design reference: [Figma](https://www.figma.com/design/1hS8zxGpayB2rIHrwlQJDP/VoiceDesk-AI?node-id=0-1&p=f&t=4b9HXYnRGnI5HcIp-0)

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework.

- **Fonts:** Outfit, Geist, Geist Mono (Google Fonts)
- **Layout:** Flexbox only (no CSS Grid)
- **CSS:** BEM naming, mobile-first with grouped `@media (min-width: ...)` breakpoints

## Project structure

```
├── index.html    # Page markup (hero, how it works, features, video, pricing, contact)
├── style.css     # All styling
├── main.js       # Burger menu toggle + video play/pause control
└── assets/       
  └──    img/          # Image (JPG)
  └──    video/        # Video file (MP4)
```

## Running locally

No build tools required — just serve the folder and open it in a browser: