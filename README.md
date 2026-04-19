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
├── contact.html            # Contact page
├── booking.html            # Quote / Booking form
├── thank-you.html          # Post-submit confirmation page
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
   propestsolutionswa.com
   ```
2. Configure your domain's DNS:
   - Add a `CNAME` record pointing to `yourusername.github.io`
   - Or use A records pointing to GitHub Pages IPs (see GitHub Pages docs)
3. In GitHub Pages settings, enter your custom domain and enable HTTPS

---

## Where to Update Content

### Phone Number
The phone number `(08) 6558 0407` appears in multiple files. Search all `.html` files for `0865580407` (tel link) and `(08) 6558 0407` (display text) to update them all.

Files containing the phone number:
- `index.html`
- `about.html`
- `services.html`
- `contact.html`
- `booking.html`
- `thank-you.html`

### Business Hours
Set in `contact.html` in the Contact Information list. Currently "Monday – Saturday, 9:00 am – 5:30 pm".

### Canonical URLs and meta tags
Each page has `<link rel="canonical" href="...">` and `<meta property="og:url">`. These currently point to `propestsolutionswa.com` — update if the production domain changes.

---

## Setting Up the Contact and Booking Forms

Both forms POST to [FormSubmit.co](https://formsubmit.co), which forwards submissions to `Elliott@propestsolutionswa.com` with the subject **"New Enquiry"**. No account or API key required.

### One-time activation
The very first form submission triggers an activation email from FormSubmit to Elliott. Elliott must click the confirmation link inside before any further submissions are delivered. Until then, submissions return an activation prompt instead of being forwarded.

### How to test
1. Open the site locally or once deployed.
2. Submit either the `contact.html` or `booking.html` form with real values.
3. Check Elliott's inbox (and spam folder) for the FormSubmit activation email and click **Confirm**.
4. Submit the form again — the submission should arrive at Elliott's inbox, titled "New Enquiry", containing all field values.

### Hidden configuration fields
Each form includes these hidden inputs controlling FormSubmit's behaviour:
- `_subject` — email subject line (currently "New Enquiry")
- `_template` — output format ("table" gives a clean tabular email)
- `_captcha` — set to `false` to skip FormSubmit's captcha page
- `_next` — redirect URL after a successful submission (currently `thank-you.html`)

### Hiding the email from the form action
The current setup exposes `Elliott@propestsolutionswa.com` in the form's `action` URL, which scrapers can find. To hide it, submit any form once, activate it, then replace the action URL with the hashed version FormSubmit provides in the activation email (e.g. `https://formsubmit.co/a1b2c3d4...`).

### Alternative form services
- [Formspree](https://formspree.io) — requires signup, more features, free tier 50/mo
- [Netlify Forms](https://www.netlify.com/products/forms/) — if hosting on Netlify
- [Basin](https://usebasin.com)

---

## Logo Assets

The site header and footer use an **inline SVG logo** (a hex-shield mark with gradient, a certification checkmark, and the "PRO PEST / SOLUTIONS" wordmark). Inlining keeps the logo crisp at every size, matches the brand colour tokens, and removes a network request.

| File | Usage |
|------|-------|
| `assets/img/logo.svg` | Standalone horizontal logo — email signatures, off-site use |
| `assets/img/logo-mark.svg` | Compact hexagonal mark — app icons, watermarks |
| `assets/img/favicon.svg` | Browser tab icon — linked in every page's `<head>` |

To change the site logo, edit the inline SVG block in the `<header>` and `<footer>` of each HTML page, **and** update `assets/img/logo.svg` so off-site usage stays in sync. The colours come from `--pps-blue-highlight / primary / deep` — tweak the `<linearGradient>` stops to rebrand.

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
