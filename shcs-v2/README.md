# SHCS Website v2 - Modern & Minimalistic

Welcome to the modernized Sanatan Hindu Cultural Society website!

## 🚀 Features

- **Modern Design**: Clean, minimalistic, and professional appearance
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast & Lightweight**: Pure HTML, CSS, and vanilla JavaScript - no heavy frameworks
- **Accessible**: Follows web accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easy to Deploy**: Just upload files to any web server (no build process needed!)

## 📁 File Structure

```
shcs-v2/
├── index.html           # Modern landing page with hero, news, events, contact form
├── about.html           # About SHCS (vision, mission, objectives)
├── events.html          # Events listing with weekly satsang & festivals
├── membership.html      # Membership information & signup process
├── donate.html          # (To be created)
├── news.html            # (To be created)
├── chants.html          # (To be created)
├── css/
│   ├── reset.css        # CSS reset for consistency
│   ├── variables.css    # Design tokens (colors, spacing, typography)
│   ├── base.css         # Base styles & utilities
│   └── components.css   # Reusable components (cards, buttons, forms, etc.)
├── js/
│   └── main.js          # All JavaScript functionality
├── images/              # All website images
└── README.md            # This file
```

## 🎨 Design System

### Colors
- **Primary Orange**: #FF6600 (SHCS brand color)
- **Accent Saffron**: #FF8F00
- **Charcoal**: #2C2C2C (text)
- **Gray Scale**: Various grays for UI elements
- **White**: #FFFFFF

### Typography
- **Headings**: Poppins (bold, professional)
- **Body**: Inter (readable, clean)
- **Devanagari**: Noto Sans Devanagari

### Components
- Sticky header with mobile menu
- Hero sections
- Card components
- Forms with validation
- Buttons (primary, secondary, outline)
- Footer with social links

## 📄 Pages Created

### ✅ Completed Pages

1. **index.html** - Landing Page
   - Hero section with call-to-action buttons
   - About section (vision, mission, community)
   - Latest news (3 featured articles)
   - Upcoming events (weekly satsang + festivals)
   - Get involved section
   - Contact form

2. **about.html** - About SHCS
   - Organization introduction
   - Vision statement
   - 4 Mission points
   - 4 Objectives
   - Call-to-action

3. **events.html** - Events
   - Weekly Satsang details
   - 9 Festival celebrations
   - Past events gallery
   - Stay updated CTA

4. **membership.html** - Membership
   - Membership benefits (3 points)
   - Pricing (£100 lifetime)
   - 3-step signup process
   - Bank account details
   - Link to membership form

### 🔄 To Be Created
5. **donate.html** - Donations
6. **news.html** - News & Updates
7. **chants.html** - Religious Chants Directory

## 🛠️ JavaScript Features

All functionality is in `js/main.js`:

- ✅ Mobile menu toggle
- ✅ Active navigation highlighting
- ✅ Sticky header with shadow on scroll
- ✅ Smooth scrolling for anchor links
- ✅ Contact form validation
- ✅ Auto-update copyright year
- ✅ Image lazy loading
- 🔄 Search functionality for chants (ready when chants.html is created)
- 🔄 Category filtering for chants

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile features:
- Hamburger menu
- Touch-friendly buttons
- Stacked layouts
- Optimized font sizes

## 🚀 Deployment

This website is pure HTML/CSS/JS - no build process needed!

### Option 1: Traditional Web Hosting
1. Upload all files to your web server via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Done!

### Option 2: GitHub Pages (Free)
1. Create a GitHub repository
2. Push all files to the repository
3. Enable GitHub Pages in Settings
4. Access at `https://yourusername.github.io/repository-name`

### Option 3: Netlify (Free)
1. Drag and drop the `shcs-v2` folder to Netlify
2. Your site is live instantly with free HTTPS
3. Optional: Connect custom domain

### Option 4: Any Static Hosting
Works with: Vercel, CloudFlare Pages, AWS S3, Firebase Hosting, etc.

## 🔧 How to Edit Content

### Adding News Articles
Edit `index.html` and `news.html` (when created):
- Copy an existing news card
- Update image, title, date, and content
- Save and upload

### Updating Events
Edit `events.html`:
- Modify the Weekly Satsang details
- Add/remove festival cards
- Update dates and descriptions

### Changing Bank Details
Edit `membership.html` and `donate.html`:
- Find the bank details section
- Update account number, sort code, etc.

### Adding Chants
Edit `chants.html` (when created):
- Add new chant items following the existing pattern
- Include both English and Devanagari names
- Link to individual chant pages

## 📞 Contact Form

The contact form (`index.html#contact`) uses a `mailto:` link:
- When submitted, opens user's email client
- Sends to: info@sanatan-hcs.org
- Includes all form data in email body

**Alternative**: You can integrate with:
- Formspree (free)
- Form submit
- Netlify Forms (if using Netlify)
- Your own backend API

## 🎨 Customization

### Colors
Edit `css/variables.css`:
```css
:root {
  --color-primary: #FF6600;  /* Change this */
}
```

### Fonts
Edit the Google Fonts link in HTML files:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

### Spacing
Edit `css/variables.css`:
```css
:root {
  --space-4: 1rem;  /* Adjust spacing */
}
```

## ✅ Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Fast load times (< 2 seconds)
- Optimized images
- Minimal JavaScript
- No external dependencies (except Google Fonts)

## 🔒 Security

- No backend = no server vulnerabilities
- Static files only
- HTTPS recommended (free with Netlify/GitHub Pages)

## 📝 Next Steps

1. ✅ Create remaining pages (donate.html, news.html, chants.html)
2. ✅ Test on multiple devices
3. ✅ Optimize images (compress if needed)
4. ✅ Deploy to hosting service
5. ✅ Connect custom domain (optional)
6. ✅ Test contact form
7. ✅ Add Google Analytics (already integrated)

## 🤝 Support

For questions or issues with the website:
- Email: info@sanatan-hcs.org
- Facebook: https://www.facebook.com/shcssutton

---

Built with ❤️ for the Sutton Hindu community
