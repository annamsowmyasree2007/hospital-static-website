# QuickCare Hospital – Static Website

## Project Overview
QuickCare Hospital is a modern, responsive static website designed for a B.Tech mini project or professional portfolio. It presents a healthcare brand with a premium UI, reusable design system, and patient-focused information architecture.

## Features
- Modern hospital landing page with hero section and CTA
- Six static pages: Home, About, Doctors, Departments, Services, Contact
- Responsive navigation for desktop and mobile devices
- Appointment form validation using vanilla JavaScript
- FAQ accordion interaction
- Back-to-top button and smooth scrolling
- Clean, semantic HTML5 and CSS3 structure
- Accessible color contrast and mobile-friendly design

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Font Awesome

## Project Structure
```text
hospital-static-website/
├── index.html
├── about.html
├── doctors.html
├── departments.html
├── services.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── ai-ambulance.svg
│   ├── ai-cardiology.svg
│   ├── ai-emergency.svg
│   ├── ai-neurology.svg
│   ├── cardiology.svg
│   ├── hero-hospital-scene.svg
│   ├── hospital-care-team.svg
│   ├── modern-hospital-exterior.svg
│   ├── neurology.svg
│   ├── orthopedics.svg
│   └── pediatrics.svg
└── README.md
```

## JavaScript Functionality
- Mobile navigation menu toggle
- Appointment form validation and confirmation
- FAQ accordion expand/collapse
- Back-to-top button visibility and smooth scroll
- Active navigation state based on current page

## Security
- Each page uses a Content Security Policy that blocks external scripts, plugins, and unapproved resource origins.
- The Font Awesome stylesheet is pinned with Subresource Integrity, and external links opened in new tabs use `noopener noreferrer`.
- The appointment form is front-end only and does not store or send submissions. Add server-side validation and secure storage before connecting it to a backend.
- For deployment, configure security response headers at the hosting provider: `Content-Security-Policy` with `frame-ancestors 'none'`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and a restrictive `Permissions-Policy`. Enable HSTS only after HTTPS is configured for the full domain.
- Static website files cannot protect a visitor's device or a compromised hosting account. Use trusted hosting, HTTPS, multifactor authentication, and keep deployment credentials private.

## Local Setup
1. Clone or download the project folder.
2. Open the project directory in a browser, or run a local static server:

```bash
cd hospital-static-website
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.

## GitHub Deployment
```bash
git init
git add .
git commit -m "Initial hospital website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Repository name: `hospital-static-website`

## Firebase Hosting Deployment
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy --only hosting
```

The included `firebase.json` serves this directory as a multi-page static site. During `firebase init hosting`, keep the public directory as `.` and answer **No** when asked to configure as a single-page app.

## Testing Checklist
- All internal navigation links work
- CTA buttons redirect to appropriate pages
- Appointment form validates required inputs
- FAQ accordion opens and closes correctly
- Mobile menu opens/closes properly
- Back-to-top button appears after scrolling
- Images load without broken paths
- Layout remains responsive on desktop, tablet, and mobile
- Browser console has no JavaScript errors

## Future Enhancements
- Add more animations and scroll effects
- Include a real appointment scheduling flow
- Create patient testimonials and health blog sections
- Add more pages such as departments detail and doctors profile pages
- Convert to a full-stack or CMS-backed version later

## Author
Developed as a modern static hospital website for academic and portfolio use.
