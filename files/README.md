# Theme Park Village — site structure

Plain HTML/CSS, no build step. Push this straight to a GitHub repo and turn on
GitHub Pages (Settings → Pages → deploy from `main` branch, root folder).

```
theme-park-village/
├── index.html                  # home page, links to each section
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css           # shared design system for the whole site
│   ├── img/
│   │   ├── disneyland/
│   │   │   ├── 2007-08/
│   │   │   │   ├── thumb.jpg
│   │   │   │   ├── 01.jpg
│   │   │   │   ├── 02.jpg
│   │   │   │   └── ...
│   │   │   └── 2009-03/
│   │   ├── six-flags/
│   │   │   ├── 2003-06/
│   │   │   └── 2013-09/
│   │   ├── knotts/
│   │   │   └── 2005-10/
│   │   └── universal/
│   │       └── 2011-07/
│   └── fonts/                  # only needed if you later self-host fonts
│                                # instead of using the Google Fonts CDN link
├── archive/                    # dated photo-log entries (the "no photo, no
│   │                            # entry" section)
│   ├── index.html               # gallery/grid of all entries
│   ├── disneyland-2007-08.html
│   ├── six-flags-2003-06.html
│   ├── knotts-2005-10.html
│   ├── disneyland-2009-03.html
│   ├── universal-2011-07.html
│   └── six-flags-2013-09.html
├── ephemera/                    # (future) park maps, tickets, brochures
│   └── index.html
└── memorabilia/                 # (future) merch, pins, other physical items
    └── index.html
```

## Conventions to keep as you add content

**Image paths.** `assets/img/<park-slug>/<YYYY-MM>/`, with `thumb.jpg` as the
card image and `01.jpg`, `02.jpg`, etc. as the full photos for that entry.
Keeping park and date in the path (not just the filename) means you can tell
what a file is just by its path, which matters once you have hundreds of them.

**Entry filenames.** `archive/<park-slug>-<YYYY-MM>.html`, matching the image
folder above it. If you ever have two visits to the same park in the same
month, add a letter: `disneyland-2007-08a.html`, `...-08b.html`.

**One entry = one photo folder.** Never split a single visit's photos across
two folders, and never put two visits in one folder — this is what makes
"which folder do I drop new scans into" a non-question later.

**Adding a new entry:**
1. Drop photos into a new `assets/img/<park>/<YYYY-MM>/` folder, plus a
   `thumb.jpg`.
2. Copy `archive/disneyland-2007-08.html` as a starting template, update the
   title, park name, date, image paths, and captions.
3. Add one `<a class="ticket-card">` block to `archive/index.html` linking to
   the new page.

**Adding a new top-level section** (ephemera, memorabilia): copy the
`archive/` folder's pattern — an `index.html` grid plus one HTML file per
item or set — and add a card for it on the home page. The shared
`assets/css/style.css` already has the card/grid styles, so new sections
inherit the same look for free.

**Site-wide style changes** (colors, fonts, spacing) only need to happen in
`assets/css/style.css` — every page links to that one file.
