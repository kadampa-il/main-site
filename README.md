# Kadampa Israel website

Plain static site (Hebrew, RTL): landing page plus the "איך לפתוח את הלב?" series page. No build step, no dependencies.

Run: open `index.html` directly, or serve the folder with `python3 -m http.server` and visit http://localhost:8000.

- `index.html`: landing page (hero sunrise, about, upcoming series, December note, gallery, WhatsApp band)
- `series.html`: series details page
- `styles.css`: all styles; colors are CSS custom properties named after the design tokens
- `main.js`: the hero sunrise (adds `.is-risen` to `.sun`), navbar active-section highlight and scroll shadow
- `assets/`: photos

Gallery: in `index.html` under `<section id="gallery">`, replace each `<figure class="placeholder ...">` with a figure holding `<img class="photo" ...>` (keep the `gallery-item--*` class for the aspect ratio).
