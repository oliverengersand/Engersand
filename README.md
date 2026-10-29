# Engersand

Portfolio site for Oliver Engersand, video editor and filmmaker. Static HTML, CSS and vanilla JS. GitHub Pages serves it from the repository root at `https://oliverengersand.github.io/Engersand/`.

## Run locally

From this folder:

```bash
python3 -m http.server 8765
```

Open `http://127.0.0.1:8765/`.

Paths are relative, so the same files work under `/Engersand/`. To match the live prefix (needed for `404.html`, which uses absolute `/Engersand/` links):

```bash
mkdir -p /tmp/pages
ln -s "$PWD" /tmp/pages/Engersand
python3 -m http.server 8765 --directory /tmp/pages
```

Then open `http://127.0.0.1:8765/Engersand/`.

## Design tokens

Cobalt blue leads. Aero glass, bubbles and the sky gradient sit on UI pieces only. Burgundy is a small accent (the REC dot, the Now playing tag, close orbs).

| Token | Value | Use |
|---|---|---|
| `--blue` | `#0E15E4` | Hero field, links on light, primary buttons |
| `--ink` | `#050871` | Text on light surfaces |
| `--night` | `#0A0A0A` | Dark sections, lightbox, footer |
| `--paper` | `#FDFDFE` | Light sections, text on dark |
| `--frost` | `#E1ECF3` | Cards |
| `--sky` | `#9EC1E2` | Muted text on dark, sky gradient |
| `--slate` | `#334A74` | Muted text on light |
| `--burgundy` | `#800020` | Accent only |

Type: Instrument Serif for display, Space Grotesk for body and buttons, JetBrains Mono for labels. The three families are self-hosted latin subsets in `assets/fonts`.

## Rules

- English only.
- No em dashes or en dashes in copy, alt text, meta, or comments.
- Never publish the CV, phone number, home address or birth year. The CV is requested by email only.
- Homesync stays text only. No images, video or logo.
- Hjemmeløs gutten stays off the site.
- Do not link `about.html` until Oliver approves that page.
