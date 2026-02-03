# SHCS Website Modernization Plan

## Executive Summary
Transform the Sanatan Hindu Cultural Society (SHCS) website into a modern, minimalistic, and professional web presence while preserving all essential content and functionality.

## Current State Analysis

### Existing Pages (7 main pages)
1. **index.html** - Homepage with about content
2. **about.html** - Identical to index (duplicate)
3. **membership.html** - Lifetime membership information
4. **events.html** - Weekly Satsang information
5. **donate.html** - Donation options (Bank Transfer & PayPal)
6. **chants.html** - Directory of 15+ religious chants and bhajans
7. **news.html** - 3 major news articles (2024 Holi, 2023 Ravan Dahan, 2021 COVID Charity)

### Technical Debt
- Legacy HTML structure with nested tables
- Inline styles and outdated CSS
- Heavy JavaScript dependencies
- No modern framework
- Not mobile-first design
- Duplicate content (index.html = about.html)
- Inconsistent markup patterns

## Modernization Strategy

### Technology Stack (New)
- **HTML5** - Semantic markup
- **CSS3** - Modern layouts with CSS Grid & Flexbox
- **Vanilla JavaScript** - Minimal, modern ES6+
- **No frameworks** - Pure, lightweight code
- **Mobile-first** - Responsive design approach
- **Performance-focused** - Optimized assets

### Design System

#### Color Palette
- **Primary Orange**: #FF6600 (SHCS brand color from current site)
- **Deep Saffron**: #FF8F00 (Accent)
- **Charcoal**: #2C2C2C (Text)
- **Warm Gray**: #F5F5F5 (Background)
- **White**: #FFFFFF
- **Success Green**: #4CAF50
- **Border Gray**: #E0E0E0

#### Typography
- **Headings**: 'Poppins', sans-serif (Modern, professional)
- **Body**: 'Inter', sans-serif (Readable, clean)
- **Devanagari**: 'Noto Sans Devanagari', sans-serif (For Hindi text)

#### Spacing System
- Base unit: 8px
- Scale: 8px, 16px, 24px, 32px, 48px, 64px, 96px

#### Component Library
- Navigation bar (sticky)
- Hero section
- Card components
- Form elements
- Buttons (primary, secondary, outline)
- Footer
- Modal/dialog
- News article cards
- Event cards

### New Site Structure

```
shcs-v2/
├── index.html                 # NEW: Modern landing page
├── about.html                 # About SHCS (Vision, Mission)
├── events.html                # Events listing & calendar
├── membership.html            # Membership information
├── donate.html                # Donation options
├── chants.html                # Religious chants directory
├── news.html                  # News & updates
├── contact.html               # NEW: Contact/Enquiry form
├── css/
│   ├── reset.css             # CSS reset
│   ├── variables.css         # Design tokens
│   ├── base.css              # Base styles
│   ├── components.css        # Reusable components
│   └── pages.css             # Page-specific styles
├── js/
│   ├── main.js               # Core functionality
│   ├── navigation.js         # Nav behavior
│   └── forms.js              # Form validation
├── images/
│   └── (optimized copies from original)
└── assets/
    └── (fonts, icons, etc.)
```

## Page Specifications

### 1. NEW Landing Page (index.html)

#### Sections:
1. **Hero Section**
   - Full-width background image/gradient
   - SHCS logo
   - Tagline: "Promoting Sanatan Hindu Dharma in Sutton"
   - CTA buttons: "Become a Member" | "Upcoming Events"

2. **Quick About**
   - Brief introduction (2-3 sentences)
   - Link to full About page

3. **Latest News** (Dynamic section)
   - Display 2-3 most recent news items
   - Card-based layout with images
   - "View All News" button

4. **Upcoming Events**
   - Weekly Satsang information
   - Next special event (if any)
   - "View All Events" button

5. **Get Involved Section**
   - Quick links to Membership, Donate, Volunteer
   - Icon-based cards

6. **Contact/Enquiry Form** (NEW)
   - Name, Email, Phone, Message
   - Subject dropdown (General Enquiry, Membership, Events, Other)
   - Submit button
   - Sends to info@sanatan-hcs.org

### 2. About Page (about.html)
- Hero with page title
- Organization introduction
- Vision statement (highlighted box)
- Mission (4 points in grid)
- Objectives (4 points in grid)
- Contact section in footer

### 3. Events Page (events.html)
**Current:** Only shows Weekly Satsang
**New Enhancement:**
- Weekly Satsang (prominent card)
- Past events section (with images from news)
- Calendar view option (future enhancement)

### 4. Membership Page (membership.html)
- Hero section
- "What is Lifetime Membership?" (3 benefits)
- Pricing (£100)
- How to join (step-by-step)
- Link to member list
- Embedded membership form OR link to form

### 5. Donate Page (donate.html)
- Hero with emotional appeal
- Two donation methods in cards:
  - Bank Transfer (account details)
  - PayPal (embedded button)
- Transparent use of funds statement
- CTA: "Every contribution helps"

### 6. Chants Page (chants.html)
**Current:** 15+ chants in table format
**New Enhancement:**
- Searchable/filterable list
- Card-based layout with:
  - Chant name (English)
  - Chant name (Devanagari)
  - Link to detail page
- Categories: Aartis, Bhajans, Stotrams, Mantras

### 7. News Page (news.html)
- Grid of news article cards
- Each card: Image, Title, Date, Excerpt
- Click to expand/read full article
- Chronological order (newest first)

### 8. NEW Contact Page (contact.html)
- Contact form (Name, Email, Phone, Subject, Message)
- Contact information (Email, Social Media)
- Office hours (if applicable)
- FAQ section (optional)

## Content Migration Strategy

### Pages to Convert (Priority Order)
1. ✅ index.html → NEW landing page
2. ✅ about.html → Modernized about page
3. ✅ events.html → Enhanced events page
4. ✅ membership.html → Modernized membership
5. ✅ donate.html → Modernized donate
6. ✅ news.html → Card-based news
7. ✅ chants.html → Searchable directory
8. ✅ contact.html → NEW enquiry form

### Pages to KEEP but Link
All individual chant/bhajan pages (15+ pages) will remain as-is but get:
- Modernized header/footer wrapper
- Consistent styling
- Breadcrumb navigation

### Pages to IGNORE/SKIP
- amazon.html (appears unused)
- forwardpolicy.html (might be old)
- indexrd.html (appears to be duplicate/test)
- Event-specific pages (holi2024, dussehra2023, ravandahan2024) - will integrate into news
- Form pages (will be embedded or linked)
- gallery.html (will review content and integrate)

## Features & Enhancements

### New Features
1. **Hero section** on landing page
2. **Contact/Enquiry form** with validation
3. **Latest news widget** on homepage
4. **Upcoming events widget** on homepage
5. **Mobile navigation** (hamburger menu)
6. **Search functionality** for chants
7. **Smooth scrolling** between sections
8. **Form validation** (client-side)

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Alt text for all images
- Focus indicators

### Performance
- Optimized images (WebP with fallback)
- Minified CSS/JS
- Lazy loading images
- Critical CSS inlined
- Reduced HTTP requests

### SEO
- Proper meta tags
- Open Graph tags
- Structured data (Organization schema)
- Semantic HTML
- Mobile-friendly

## Development Phases

### Phase 1: Foundation (Setup & Design System)
- Create directory structure
- Set up CSS architecture (variables, reset, base)
- Define component library
- Create reusable header/footer

### Phase 2: Landing Page
- Build hero section
- Create "Latest News" section
- Create "Upcoming Events" section
- Add contact/enquiry form
- Mobile responsive design

### Phase 3: Core Pages
- About page
- Events page
- Membership page
- Donate page

### Phase 4: Content Pages
- News page (card layout)
- Chants page (directory)
- Individual chant pages (wrapper)

### Phase 5: Polish & Testing
- Cross-browser testing
- Mobile testing
- Form functionality testing
- Performance optimization
- Accessibility audit

## Assets to Migrate
- ✅ SHCS logo (images/SHCS-3.png)
- ✅ Favicon (images/favicon.ico)
- ✅ News images (holi1-3.jpg, charity1-3.jpg)
- ✅ Event images (shcslogo.png)
- ✅ PDFs (Aarti_Bhajans.pdf, etc.)

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Success Metrics
- Modern, professional appearance
- Mobile-friendly (Google Mobile-Friendly Test)
- Fast load times (< 2 seconds)
- Accessible (WCAG AA)
- Easy to navigate
- Clear call-to-actions
- Functional contact form

## Next Steps
1. Get approval on this plan
2. Create shcs-v2 directory structure
3. Build design system (CSS variables, components)
4. Develop landing page
5. Convert core pages
6. Test and refine
7. Deploy

---

**Estimated Scope:**
- 8 new/modernized pages
- 15+ chant pages (minimal updates)
- Complete design system
- Mobile-responsive throughout
- Modern, minimalistic aesthetic
- Professional and accessible
