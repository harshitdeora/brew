## Royal Chai House – Coming Soon Landing Page

A simple, elegant project page introducing a premium Indian chai brand before launch.  
Visual direction: palace-inspired, antique gold, and warm cream tones, with switchable light/dark modes and animated chai vapours.

### Tech Stack

- **Frontend**: React (functional components), Vite
- **Styling**: CSS Modules
- **Fonts**: Google Fonts – Playfair Display (headings), Poppins (body)
- **State**: Local React state only (no backend, no API calls)

### Project Structure (key files)

- `index.html` – HTML shell + Google Fonts
- `src/main.jsx` – React entry
- `src/App.jsx` – Layout shell, theme toggle (light/dark), section composition
- `src/App.css` – App-level layout, card shell, theme-toggle styling
- `src/index.css` – Global resets, CSS variables for both themes
- `src/components/Logo/Logo.jsx` – Brand mark and tagline
- `src/components/HeroSection/HeroSection.jsx` – Hero copy + chai cup with animated vapours
- `src/components/EmailSignup/EmailSignup.jsx` – Email form with validation and success state
- `src/components/Footer/Footer.jsx` – Minimal footer with social icons

### Getting Started

From the project root:

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

### Build for Production

```bash
npm run build
```

Vite will emit static assets into the `dist` folder.

### Features

- **Hero Section**
  - Logo + brand lockup: “Royal Chai House – Brew the Royal Tradition”
  - Tagline and short brand description
  - Decorative “Launching Soon” divider
  - CSS-drawn chai cup with animated steam / vapours (different styling for light vs dark mode)

- **Email Signup**
  - Email input with **frontend validation** (regex)
  - Error state for invalid addresses, success message for valid submissions
  - Gold “Notify Me” button with glow hover and soft shadows
  - No data is sent anywhere – all handled in React state only

- **Theming**
  - **Light and dark modes**, controlled via a toggle pill inside the main card
  - Implemented with `data-theme` attribute on `<html>` and CSS custom properties
  - Colors, backgrounds, and text adapt cleanly between both modes

- **Animations & UX**
  - Subtle fade/slide entrance animations for sections
  - Smooth hover transitions on buttons, card shells, and social icons
  - Responsive, mobile-first layout: stacks gracefully on small screens, two-column hero on wider viewports

### Customization Tips

- **Colors**: Adjust theme variables in `src/index.css` (`--color-royal-brown`, `--color-antique-gold`, etc.).
- **Copy**: Update brand text in:
  - `Logo.jsx`
  - `HeroSection.jsx`
  - `EmailSignup.jsx`
  - `Footer.jsx`
- **Steam look**: Tweak vapour color and animation in `HeroSection.module.css`  

 