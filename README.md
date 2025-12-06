# Upscale Home Builders Website

A professional, modern website for Upscale Home Builders built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
```bash
cd upscale-home-builders
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

This will create a `dist` folder with all the optimized files ready for deployment.

## 🌐 Deploying to Hostinger

### Method 1: File Manager Upload (Easiest)

1. **Build the project:**
```bash
npm run build
```

2. **Login to Hostinger:**
   - Go to your Hostinger control panel (hPanel)
   - Navigate to "File Manager"

3. **Navigate to public_html:**
   - Open the `public_html` folder (this is your website root)
   - Delete any existing files if this is a fresh installation

4. **Upload files:**
   - Select all files from the `dist` folder on your computer
   - Upload them to `public_html`
   - Make sure files like `index.html`, `assets/` folder are in the root of `public_html`

5. **Set permissions:**
   - Right-click on folders and select "Change Permissions"
   - Set folders to 755
   - Set files to 644

6. **Visit your domain:**
   - Your site should now be live at your domain!

### Method 2: FTP Upload

1. **Build the project:**
```bash
npm run build
```

2. **Get FTP credentials from Hostinger:**
   - In hPanel, go to "Files" → "FTP Accounts"
   - Use the provided credentials

3. **Upload using FTP client (FileZilla recommended):**
   - Connect to your FTP server
   - Navigate to `/public_html`
   - Upload all contents from the `dist` folder

### Method 3: Git Deployment (Advanced)

1. **Connect to Hostinger via SSH** (if available on your plan)

2. **Navigate to your website directory:**
```bash
cd public_html
```

3. **Clone your repository:**
```bash
git clone <your-repo-url> .
```

4. **Install dependencies:**
```bash
npm install
```

5. **Build the project:**
```bash
npm run build
```

6. **Move build files to root:**
```bash
mv dist/* .
rm -rf dist
```

## 📋 File Structure

```
upscale-home-builders/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md           # This file
```

## 🎨 Customization

### Updating Content

Edit `src/App.jsx` to update:
- Services and features
- Testimonials
- Contact information
- Business hours
- Phone numbers and email

### Changing Colors

The color scheme uses Tailwind CSS classes. Main colors:
- Primary: `amber-600` (gold)
- Dark: `slate-900` (charcoal)
- Light: `slate-50` (off-white)

To change colors, search and replace these classes throughout `App.jsx`.

### Adding Images

Place images in the `public` folder and reference them like:
```jsx
<img src="/your-image.jpg" alt="Description" />
```

## 🔧 Configuration

### Domain Setup on Hostinger

1. Point your domain to Hostinger nameservers
2. In hPanel, add your domain
3. Upload files to the domain's `public_html` folder

### SSL Certificate (HTTPS)

1. In hPanel, go to "SSL"
2. Install a free Let's Encrypt SSL certificate
3. Force HTTPS redirect in settings

## 📱 Features

✅ Fully responsive design
✅ Mobile-friendly navigation
✅ Contact form with validation
✅ Smooth animations
✅ SEO optimized
✅ Fast loading times
✅ Modern design

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts** - Typography

## 📞 Support

For any issues or questions:
- Check Hostinger's knowledge base
- Contact Hostinger support
- Review Vite documentation: https://vitejs.dev

## 📄 License

© 2024 Upscale Home Builders. All rights reserved.

---

## Troubleshooting

### Issue: White screen after deployment
**Solution:** Make sure all files from `dist` folder are in `public_html`, not in a subfolder.

### Issue: Assets not loading
**Solution:** Check that the `assets` folder is uploaded correctly and file permissions are set to 644.

### Issue: Page not found on refresh
**Solution:** Add a `.htaccess` file in `public_html`:
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

### Issue: Slow loading
**Solution:** Enable Gzip compression in Hostinger settings and use their CDN if available.
