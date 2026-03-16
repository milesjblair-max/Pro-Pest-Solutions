# Pro Pest Solutions — Website

A production-ready static website for **Pro Pest Solutions**, a professional pest management business operating across the Greater Perth metropolitan area.

Built with plain HTML, CSS, and minimal vanilla JavaScript. No frameworks, no build tools, no dependencies.

---

## Project Structure

```
Pro-Pest-Solutions/
├── index.html              # Home / Landing Page
├── about.html              # About page
├── services.html           # Services page
├── testimonials.html       # Testimonials page
├── contact.html            # Contact page
├── booking.html            # Quote / Booking form
├── assets/
│   ├── css/
│   │   └── styles.css      # All styles — design tokens, components, layout
│   ├── js/
│   │   └── main.js         # Navigation, scroll, form, reveal animations
│   └── img/
│       ├── logo.svg        # Horizontal logo (mark + wordmark)
│       ├── logo-mark.svg   # Compact hexagonal mark only
│       └── favicon.svg     # Browser tab favicon
└── README.md
```

---

## Running Locally

No build step required. Open any `.html` file directly in a browser, or use a local static server for best results:

**Option 1 — VS Code Live Server**
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click `index.html` → Open with Live Server

**Option 2 — Python**
```bash
python3 -m http.server 8080
# Then open http://localhost:8080
```

**Option 3 — Node.js (npx)**
```bash
npx serve .
```

---

## Deploying to GitHub Pages

### Option A — Deploy from `main` branch root

1. Push all files to the `main` branch of your GitHub repository
2. Go to **Settings → Pages** in your repository
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` and folder to `/ (root)`
5. Click **Save** — your site will be live at `https://yourusername.github.io/repo-name/`

### Option B — Custom domain

1. Add a `CNAME` file to the project root containing your domain:
   ```
   propestsolutions.com.au
   ```
2. Configure your domain's DNS:
   - Add a `CNAME` record pointing to `yourusername.github.io`
   - Or use A records pointing to GitHub Pages IPs (see GitHub Pages docs)
3. In GitHub Pages settings, enter your custom domain and enable HTTPS

---

## Where to Update Content

### Phone Number
The phone number `0403 812 255` appears in multiple files. Search all `.html` files for `0403812255` (tel link) and `0403 812 255` (display text) to update them all.

Files containing the phone number:
- `index.html`
- `about.html`
- `services.html`
- `testimonials.html`
- `contact.html`
- `booking.html`

### Business Hours
In `contact.html`, find the text `Hours placeholder — update with actual business hours` and replace with real hours.

### Testimonials
In `testimonials.html` and `index.html`, find the `testimonial-card` blocks marked with "Testimonial placeholder". Replace each with:
- Real customer quote
- Customer's first name (or initials)
- Customer's role / property type and suburb

Remove the `.placeholder-notice` banner in `testimonials.html` once real testimonials are added.

### Canonical URLs and meta tags
Each page has `<link rel="canonical" href="...">` and `<meta property="og:url">`. Update `propestsolutions.com.au` with your actual domain once it is live.

---

## Setting Up the Contact and Booking Forms

The forms use a Formspree-style POST action. GitHub Pages cannot process forms server-side, so you need a third-party form service.

### Using Formspree (recommended, free tier available)

1. Go to [formspree.io](https://formspree.io) and create an account
2. Click **+ New Form**, give it a name (e.g., "Pro Pest Solutions — Quote Request")
3. Copy the endpoint URL — it will look like: `https://formspree.io/f/abcdefgh`
4. In both `contact.html` and `booking.html`, find:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual Formspree form ID
6. Deploy — form submissions will be emailed to your registered Formspree address

### Alternative form services
- [Netlify Forms](https://www.netlify.com/products/forms/) — if hosting on Netlify instead of GitHub Pages
- [Basin](https://usebasin.com)
- [EmailJS](https://www.emailjs.com) — JavaScript-based, requires minor code changes

---

## Logo Assets

All logos are stored in `assets/img/`:

| File | Usage |
|------|-------|
| `logo.svg` | Full horizontal logo — standalone use, email signatures |
| `logo-mark.svg` | Compact hexagonal mark — app icons, watermarks |
| `favicon.svg` | Browser tab icon — linked in all HTML `<head>` sections |

The logos are also embedded inline within each HTML page's `<header>` and `<footer>` to avoid extra HTTP requests and rendering flash. To update logo colours site-wide, edit both the standalone SVG files and the inline SVG blocks in the HTML files. Search for `nLogoGrad` (nav logo) and `fLogoGrad` (footer logo) to find all inline instances.

---

## Colour Scheme

All colours are defined as CSS custom properties in `assets/css/styles.css`:

```css
:root {
  --pps-bg-main:        #0F1113;  /* Primary background */
  --pps-bg-panel:       #1A1D21;  /* Cards, panels, secondary backgrounds */
  --pps-blue-primary:   #3A86C8;  /* Primary accent blue */
  --pps-blue-highlight: #5FA6E0;  /* Highlight blue — links, active states */
  --pps-blue-deep:      #2C6DA7;  /* Deep accent blue — gradient bottom */
  --pps-accent-soft:    #6E8FA8;  /* Soft accent */
  --pps-text-primary:   #FFFFFF;  /* Headings, primary text */
  --pps-text-secondary: #C9CED3;  /* Body text */
  --pps-text-muted:     #8E969D;  /* Labels, secondary metadata */
  --pps-border:         #2A2E33;  /* Borders and dividers */
}
```

---

## Adding New Pages

To add a new page:

1. Copy any existing inner page (e.g., `about.html`) as a template
2. Update `<title>`, `<meta name="description">`, and `<link rel="canonical">` in `<head>`
3. Update the `aria-current="page"` attribute on the correct nav link
4. Replace the main content between the page hero and footer sections
5. Add a link to the new page in the nav and footer of all other pages

---

## Browser Support

Targets all modern browsers:
- Chrome / Edge 90+
- Firefox 90+
- Safari 14+

Uses CSS custom properties, CSS Grid, `clamp()`, `backdrop-filter`, and `100svh` — all broadly supported in modern browsers.

---

## Performance Notes

- No external fonts — uses native system font stack for instant text render
- No JavaScript libraries or frameworks
- All icons are inline SVG — zero additional HTTP requests
- Logos are inline SVG in nav/footer — no image requests on page load
- Single CSS file with no unused rules
- JavaScript is ~3KB unminified with no dependencies

---

© Pro Pest Solutions. All rights reserved.
