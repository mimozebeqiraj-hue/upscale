# CLAUDE.md - AI Assistant Development Guide

> **Last Updated**: December 6, 2025
> **Project**: Upscale Home Builders Website
> **Purpose**: Guide AI assistants in understanding and contributing to this codebase

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Routing Architecture](#routing-architecture)
5. [Styling Conventions](#styling-conventions)
6. [Component Patterns](#component-patterns)
7. [Data Management](#data-management)
8. [Development Workflow](#development-workflow)
9. [Deployment](#deployment)
10. [Code Conventions](#code-conventions)
11. [Common Tasks](#common-tasks)
12. [Important Files](#important-files)

---

## Project Overview

**Upscale Home Builders** is a professional, modern marketing website built for a UK-based home construction and renovation company. The site showcases services including loft conversions, extensions, and full home renovations.

### Key Features
- Responsive, mobile-first design
- SEO-optimized with multiple URL patterns for key services
- Location-based landing pages (Croydon, Streatham, etc.)
- Service-specific pages (builders near me, contractors, etc.)
- Blog with detailed articles
- Project portfolio with before/after galleries
- Contact form integration

### Business Context
- **Target Market**: UK homeowners seeking builders/contractors
- **Primary Services**: Loft conversions, extensions, full renovations
- **Service Areas**: London (Croydon, Streatham, Hackney, Clapham) and surrounding areas
- **Brand Colors**: Amber/Gold (#D97706 - amber-600) and Dark Slate (#0F172A - slate-900)

---

## Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.2.0 | UI framework |
| **Vite** | 5.0.8 | Build tool & dev server |
| **React Router DOM** | 6.21.0 | Client-side routing |
| **Tailwind CSS** | 3.4.0 | Utility-first styling |
| **Lucide React** | 0.263.1 | Icon library |
| **PostCSS** | 8.4.32 | CSS processing |
| **Autoprefixer** | 10.4.16 | CSS vendor prefixing |

### Development Environment
- **Node.js**: Version 18 or higher required
- **Package Manager**: npm
- **Module Type**: ES Modules (type: "module" in package.json)
- **Dev Server Port**: 5173 (Vite default)

---

## Project Structure

```
upscale-home-builders/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header with mobile menu
│   │   └── Footer.jsx       # Site footer with contact info
│   │
│   ├── pages/               # Route-based page components
│   │   ├── Home.jsx         # Homepage with hero, services, contact form
│   │   ├── Home2.jsx        # Alternative homepage (legacy/testing)
│   │   ├── About.jsx        # About page
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Blog.jsx         # Blog listing page
│   │   ├── BlogPost.jsx     # Individual blog post view
│   │   ├── Projects.jsx     # Project portfolio listing
│   │   ├── ProjectDetail.jsx # Individual project detail view
│   │   │
│   │   ├── services/        # Service-specific landing pages
│   │   │   ├── BuildersNearMe.jsx
│   │   │   └── BuildingContractorsNearMe.jsx
│   │   │
│   │   └── location/        # Location-specific landing pages
│   │       ├── Croydon/
│   │       │   └── BuildersCroydon.jsx
│   │       └── Streatham/
│   │           ├── BuildersStreatham.jsx
│   │           └── ConstructionCompanyStreatham.jsx
│   │
│   ├── data/                # Static data exports
│   │   ├── blogPosts.js     # Blog content array
│   │   └── projects.js      # Project portfolio data
│   │
│   ├── App.jsx              # Main app component with routing
│   ├── App1.jsx             # Legacy/alternative version
│   ├── App2.jsx             # Legacy/alternative version
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles & Tailwind imports
│
├── public/                  # Static assets
├── index.html               # HTML template
├── .htaccess                # Apache rewrite rules for SPA
├── package.json             # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── README.md                # Development documentation
├── DEPLOYMENT.md            # Deployment checklist
└── CLAUDE.md                # This file
```

---

## Routing Architecture

### Router Setup
The app uses **React Router v6** with `BrowserRouter`. All routes are defined in `src/App.jsx`.

### Route Categories

#### Main Pages
```javascript
/ → Home.jsx                    // Homepage
/about → About.jsx              // About page
/contact → Contact.jsx          // Contact page
/blog → Blog.jsx                // Blog listing
/blog/:id → BlogPost.jsx        // Individual blog post (dynamic)
/projects → Projects.jsx        // Project portfolio
/project/:id → ProjectDetail.jsx // Project detail (dynamic)
```

#### Service Pages (Multiple URL Patterns for SEO)
```javascript
// Builders Near Me (3 URL patterns → same component)
/services/builders-near-me → BuildersNearMe.jsx
/builders-near-me → BuildersNearMe.jsx
/local-builders → BuildersNearMe.jsx

// Building Contractors (3 URL patterns)
/services/building-contractors → BuildingContractorsNearMe.jsx
/building-contractors-near-me → BuildingContractorsNearMe.jsx
/building-contractors → BuildingContractorsNearMe.jsx
```

#### Location Pages (Multiple URL Patterns for SEO)
```javascript
// Croydon (3 URL patterns)
/location/croydon → BuildersCroydon.jsx
/builders-croydon → BuildersCroydon.jsx

// Streatham - Builders (3 URL patterns)
/location/streatham → BuildersStreatham.jsx
/builders-streatham → BuildersStreatham.jsx

// Streatham - Construction Company (2 URL patterns)
/location/streatham/construction → ConstructionCompanyStreatham.jsx
/construction-company-streatham → ConstructionCompanyStreatham.jsx
```

### SEO Strategy
Multiple URL patterns point to the same component to capture different search queries while maintaining a single source of truth for content.

### .htaccess Configuration
The `.htaccess` file contains rewrite rules for proper SPA routing on Apache servers:
- Redirects all non-file requests to `index.html`
- Ensures client-side routing works correctly
- Required for production deployment on Hostinger

---

## Styling Conventions

### Tailwind CSS
All styling uses **Tailwind CSS utility classes**. No custom CSS modules or styled-components.

### Color Scheme
```javascript
Primary Brand Colors:
- amber-600 (#D97706)  // Primary brand color (gold/amber)
- amber-700 (#B45309)  // Hover states for primary buttons

Text Colors:
- slate-900 (#0F172A)  // Dark text, headings
- slate-700 (#334155)  // Body text, secondary text
- slate-50  (#F8FAFC)  // Light backgrounds

Neutral Colors:
- white (#FFFFFF)      // Backgrounds, cards
- slate-100 to slate-900 // Various UI elements
```

### Design Patterns
```javascript
// Buttons (Primary)
className="bg-amber-600 text-white px-6 py-2.5 rounded-sm
           hover:bg-amber-700 transition-colors font-medium"

// Buttons (Secondary/Outline)
className="border-2 border-slate-900 text-slate-900 px-6 py-2.5
           rounded-sm hover:bg-slate-900 hover:text-white
           transition-colors font-medium"

// Navigation Links (Active)
className="text-amber-600"

// Navigation Links (Inactive)
className="text-slate-700 hover:text-amber-600 transition-colors"

// Cards
className="bg-white rounded-lg shadow-lg overflow-hidden"

// Containers
className="max-w-7xl mx-auto px-6"

// Sections
className="py-16 md:py-24"
```

### Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Common pattern: `md:flex` (stack on mobile, flex on desktop)
- Mobile menu toggle at `md:` breakpoint (768px)

---

## Component Patterns

### Standard Component Structure
```javascript
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconName } from 'lucide-react';

export default function ComponentName() {
  // State management
  const [state, setState] = useState(initialValue);

  // Hooks
  const location = useLocation();

  // Event handlers
  const handleEvent = (e) => {
    // Handler logic
  };

  // Render
  return (
    <div className="tailwind-classes">
      {/* Component JSX */}
    </div>
  );
}
```

### Navigation Pattern (Header.jsx)
```javascript
// Active route detection
const isActive = (path) => location.pathname === path;

// Conditional styling
className={`${isActive(link.path) ? 'text-amber-600' : 'text-slate-700'}`}

// Mobile menu state
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Smooth scroll to anchor
onClick={(e) => {
  if (location.pathname === '/') {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}}
```

### Form Handling Pattern
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

const handleSubmit = async (e) => {
  e.preventDefault();
  setFormStatus('submitting');
  // Form submission logic
};
```

---

## Data Management

### Static Data Files
All content data is stored in `src/data/` as ES6 module exports.

### Blog Posts (`src/data/blogPosts.js`)
```javascript
export const blogPosts = [
  {
    id: number,
    slug: "url-friendly-slug",
    title: "Post Title",
    excerpt: "Short description...",
    content: `<p>HTML content...</p>`, // HTML string
    image: "URL to featured image",
    author: "Author Name",
    date: "YYYY-MM-DD",
    category: "Category Name",
    readTime: "X min read"
  },
  // ... more posts
];
```

### Projects (`src/data/projects.js`)
```javascript
export const projects = [
  {
    id: number,
    slug: "url-friendly-slug",
    title: "Project Title",
    category: "Loft Conversion" | "Extension" | "Full Renovation",
    location: "Area, City",
    duration: "X weeks",
    budget: "£XX,XXX",
    description: "Detailed description...",
    features: ["Feature 1", "Feature 2", ...],
    beforeImage: "URL",
    afterImage: "URL",
    images: ["URL1", "URL2", "URL3"],
    testimonial: {
      text: "Client testimonial...",
      author: "Client Name",
      rating: 5
    }
  },
  // ... more projects
];

export const projectCategories = [
  { name: "All Projects", value: "all" },
  { name: "Loft Conversions", value: "Loft Conversion" },
  { name: "Extensions", value: "Extension" },
  { name: "Full Renovations", value: "Full Renovation" }
];
```

### Adding New Content

**New Blog Post:**
1. Add entry to `src/data/blogPosts.js`
2. Ensure unique `id` and `slug`
3. Use HTML string for `content` field
4. Access via `/blog/:id` route

**New Project:**
1. Add entry to `src/data/projects.js`
2. Ensure unique `id` and `slug`
3. Include all required fields
4. Access via `/project/:id` route

**New Location/Service Page:**
1. Create component in `src/pages/location/` or `src/pages/services/`
2. Add route(s) in `src/App.jsx`
3. Import component at top of `App.jsx`

---

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
- **URL**: http://localhost:5173
- **Hot Module Replacement**: Enabled by default
- **Port**: 5173 (configurable in vite.config.js)

### Build Process
```bash
npm run build
```
Output: `dist/` folder containing:
- `index.html`
- `assets/` (JS, CSS with content hashes)
- `.htaccess` (must be copied manually if needed)

### File Watching
Vite automatically watches and reloads:
- All files in `src/`
- `index.html`
- Configuration files (requires server restart)

---

## Deployment

### Target Platform: Hostinger
The site is designed for deployment on **Hostinger shared hosting**.

### Deployment Process
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload to Hostinger**:
   - Navigate to `public_html` folder in File Manager
   - Upload **contents** of `dist/` folder (not the folder itself)
   - Ensure files are at root of `public_html/`, not in a subdirectory

3. **Upload .htaccess**:
   - Copy `.htaccess` from project root to `public_html/`
   - This ensures React Router works correctly

4. **Set Permissions**:
   - Files: 644
   - Folders: 755

5. **Enable SSL**:
   - Install free Let's Encrypt SSL in hPanel
   - Enable "Force HTTPS"

### Common Deployment Issues

**White/blank page after upload**
- ✅ Ensure files are in `public_html` root, not a subfolder
- ✅ Check that `index.html` is in the root

**Assets not loading**
- ✅ Verify `assets/` folder uploaded correctly
- ✅ Check file permissions (644 for files, 755 for folders)

**404 on page refresh**
- ✅ Upload `.htaccess` file to `public_html`
- ✅ Verify Apache mod_rewrite is enabled

See `DEPLOYMENT.md` for detailed deployment checklist.

---

## Code Conventions

### File Naming
- **Components**: PascalCase (e.g., `Header.jsx`, `BuildersNearMe.jsx`)
- **Data files**: camelCase (e.g., `blogPosts.js`, `projects.js`)
- **Utilities**: camelCase with `.js` extension

### Import Order
```javascript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party libraries
import { Link, useLocation } from 'react-router-dom';

// 3. Icons
import { Menu, X, Phone } from 'lucide-react';

// 4. Components
import Header from './components/Header';

// 5. Data
import { blogPosts } from './data/blogPosts';

// 6. Styles (if any)
import './styles.css';
```

### Component Exports
Use **default exports** for components:
```javascript
export default function ComponentName() { ... }
```

Use **named exports** for data/utilities:
```javascript
export const blogPosts = [...];
export const projects = [...];
```

### State Management
- Use `useState` for local component state
- No global state management (Redux, Context) currently in use
- Props are passed directly between components
- URL parameters used for dynamic routing (`useParams`)

### Event Handlers
Prefix with `handle`:
```javascript
const handleSubmit = (e) => { ... }
const handleClick = () => { ... }
const handleChange = (e) => { ... }
```

### Conditional Rendering
```javascript
// Ternary for simple conditions
{isActive ? <ActiveComponent /> : <InactiveComponent />}

// Logical && for show/hide
{showMenu && <MobileMenu />}

// Early return for complex conditions
if (!data) return <Loading />;
return <DataDisplay data={data} />;
```

---

## Common Tasks

### Adding a New Page
1. Create component in `src/pages/` or appropriate subfolder
2. Import in `src/App.jsx`:
   ```javascript
   import NewPage from './pages/NewPage';
   ```
3. Add route in `<Routes>`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
4. Update navigation in `src/components/Header.jsx` if needed

### Adding a New Service Area
1. Create folder in `src/pages/location/[AreaName]/`
2. Create component (e.g., `BuildersAreaName.jsx`)
3. Add multiple routes in `App.jsx` for SEO:
   ```javascript
   <Route path="/location/area-name" element={<BuildersAreaName />} />
   <Route path="/builders-area-name" element={<BuildersAreaName />} />
   ```

### Modifying Colors
All colors use Tailwind classes. To change the brand color:
1. Find and replace throughout codebase:
   - `amber-600` → new color (primary)
   - `amber-700` → new color (hover state)
2. Common files to update:
   - `src/components/Header.jsx`
   - `src/pages/Home.jsx`
   - All service/location pages

### Adding Images
1. **External images**: Use Unsplash URLs (current pattern)
2. **Local images**: Place in `public/` folder, reference as `/image-name.jpg`
3. **Optimization**: Consider image size for performance

### Updating Contact Information
Search for and update in:
- `src/components/Footer.jsx` (phone, email, address)
- `src/pages/Home.jsx` (contact form, hero section)
- `src/pages/Contact.jsx`

---

## Important Files

### Configuration Files

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Important: must be '/' for correct routing
})
```

**tailwind.config.js**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Scans these files for Tailwind classes
  ],
  theme: {
    extend: {},  // Custom theme extensions go here
  },
  plugins: [],
}
```

**package.json** - Key Scripts
```json
{
  "scripts": {
    "dev": "vite",           // Start dev server
    "build": "vite build",   // Production build
    "preview": "vite preview" // Preview production build
  }
}
```

### Critical Files for Routing

**.htaccess** (Apache Rewrite Rules)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**src/main.jsx** (Entry Point)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used throughout
- No IE11 support
- Mobile browsers fully supported

---

## Performance Considerations

### Current Implementation
- ✅ Code splitting via dynamic imports (React Router)
- ✅ Vite's build optimization
- ✅ CSS purging via Tailwind
- ✅ Lazy loading of routes

### Potential Improvements
- Consider image optimization/lazy loading
- Implement route-based code splitting
- Add service worker for offline support
- Optimize Unsplash image sizes

---

## SEO Considerations

### Current SEO Features
- Multiple URL patterns for key pages (SEO-friendly routing)
- Semantic HTML structure
- Location-specific landing pages
- Service-specific landing pages
- Blog for content marketing

### Potential Improvements
- Add meta tags for each route (react-helmet)
- Implement structured data (JSON-LD)
- Add sitemap.xml
- Implement OpenGraph tags
- Add canonical URLs

---

## Testing

### Current State
No automated tests currently implemented.

### Recommended Testing Strategy
1. **Unit Tests**: Jest + React Testing Library
2. **E2E Tests**: Playwright or Cypress
3. **Visual Regression**: Chromatic or Percy
4. **Performance**: Lighthouse CI

---

## Environment Variables

### Current Setup
No environment variables currently in use.

### Future Considerations
If adding backend integration:
```bash
# .env.local
VITE_API_URL=https://api.example.com
VITE_CONTACT_FORM_ENDPOINT=/api/contact
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Troubleshooting

### Development Issues

**Port 5173 already in use**
```bash
# Kill the process using port 5173
lsof -ti:5173 | xargs kill -9

# Or change port in vite.config.js
export default defineConfig({
  server: { port: 3000 }
})
```

**Changes not reflecting**
- Hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart dev server

**Build errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Production Issues

**Routing broken after deployment**
- Ensure `.htaccess` is uploaded to `public_html/`
- Verify mod_rewrite is enabled on server
- Check that `base: '/'` in vite.config.js

**Styles not loading**
- Verify `assets/` folder uploaded correctly
- Check browser console for 404 errors
- Clear browser cache

---

## AI Assistant Guidelines

### When Making Changes

✅ **DO:**
- Read relevant files before suggesting changes
- Follow existing patterns and conventions
- Use Tailwind utility classes for styling
- Maintain the color scheme (amber-600 primary)
- Keep components functional with hooks
- Export components as default exports
- Test changes in development mode
- Consider mobile responsiveness

❌ **DON'T:**
- Add new dependencies without discussion
- Use inline styles or CSS modules
- Create new state management solutions
- Break existing routing patterns
- Remove SEO-friendly URL patterns
- Change color scheme without approval
- Introduce breaking changes
- Over-engineer simple solutions

### Code Review Checklist
Before committing changes, verify:
- [ ] Code follows existing patterns
- [ ] Tailwind classes used correctly
- [ ] Component is responsive (mobile-first)
- [ ] No console errors in browser
- [ ] Routing works correctly
- [ ] Build succeeds (`npm run build`)
- [ ] No unused imports
- [ ] Proper error handling
- [ ] Accessible markup (semantic HTML)

### Communication Style
When explaining changes:
- Reference specific file paths and line numbers
- Explain the "why" behind decisions
- Note any trade-offs or alternatives considered
- Document any new patterns introduced

---

## Resources

### Documentation
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Router](https://reactrouter.com)
- [Lucide Icons](https://lucide.dev)

### Project-Specific
- `README.md` - Development setup and overview
- `DEPLOYMENT.md` - Deployment checklist and troubleshooting

### Support
- **Hostinger Documentation**: https://support.hostinger.com
- **Vite Troubleshooting**: https://vitejs.dev/guide/troubleshooting.html

---

## Changelog

### 2025-12-06
- Initial CLAUDE.md creation
- Documented complete project structure
- Added routing patterns and SEO strategy
- Included styling conventions and color scheme
- Documented data management patterns
- Added development and deployment workflows

---

## Contact

For questions about this codebase or deployment:
- Review existing documentation (README.md, DEPLOYMENT.md)
- Check Hostinger support for hosting issues
- Consult Vite/React documentation for framework questions

---

**End of CLAUDE.md**
