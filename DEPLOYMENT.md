# 🚀 Quick Deployment Checklist for Hostinger

## Before You Start
- [ ] Have Node.js installed (download from nodejs.org)
- [ ] Have Hostinger hosting account ready
- [ ] Have domain pointed to Hostinger

## Step-by-Step Deployment

### 1️⃣ Build the Project Locally

```bash
# Open terminal/command prompt in project folder
npm install
npm run build
```

### 2️⃣ Login to Hostinger

- Go to https://hpanel.hostinger.com
- Login with your credentials

### 3️⃣ Access File Manager

- Click on "File Manager" in hPanel
- Navigate to `public_html` folder

### 4️⃣ Clean Public HTML (if needed)

- Delete all existing files in `public_html`
- This is your website's root folder

### 5️⃣ Upload Built Files

- Go to your computer's project folder
- Open the `dist` folder
- Select ALL files inside `dist` folder:
  - index.html
  - assets/ folder
  - vite.svg (if present)
- Upload these files to `public_html` (NOT in a subfolder!)

### 6️⃣ Upload .htaccess File

- Upload the `.htaccess` file from project root to `public_html`
- This ensures proper routing for the React app

### 7️⃣ Set Permissions (if needed)

- Right-click folders → "Change Permissions" → 755
- Right-click files → "Change Permissions" → 644

### 8️⃣ Enable SSL (HTTPS)

- In hPanel, go to "Security" → "SSL"
- Install free Let's Encrypt SSL
- Enable "Force HTTPS"

### 9️⃣ Test Your Website

- Visit your domain: https://yourdomain.com
- Check all pages and links work
- Test on mobile and desktop

### 🎉 Done! Your website is live!

---

## Common Issues & Solutions

**❌ White/blank page after upload**
✅ Make sure files are in `public_html` root, not in a subfolder
✅ Check that `index.html` is in the root of `public_html`

**❌ Images/assets not loading**
✅ Verify the `assets` folder uploaded correctly
✅ Check file permissions (644 for files, 755 for folders)

**❌ Page not found when refreshing**
✅ Upload the `.htaccess` file to `public_html`

**❌ Still having issues?**
✅ Clear browser cache (Ctrl+Shift+Delete)
✅ Check Hostinger status page
✅ Contact Hostinger support (24/7 available)

---

## Updating Your Website

When you need to make changes:

1. Edit files in `src/App.jsx`
2. Run `npm run build`
3. Upload new files from `dist` folder to `public_html`
4. Overwrite existing files

---

## Need Help?

- Hostinger Knowledge Base: https://support.hostinger.com
- Hostinger Live Chat: Available in hPanel
- Email: support@hostinger.com

## Project Structure in public_html

After upload, your `public_html` should look like:

```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── (other asset files)
└── vite.svg (optional)
```

✅ ALL files should be at the ROOT of public_html
❌ NOT in: public_html/dist/ or public_html/upscale-home-builders/
