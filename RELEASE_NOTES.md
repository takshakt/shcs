# SHCS Website - Release Notes

All notable changes to the Sanatan Hindu Cultural Society website will be documented in this file.

---

## [1.4.0] - 2026-02-04

### 📿 Enhanced - Complete Chants Modal System

**User Request:** Make all chants use modal with Om chanting sound consistently

#### Changes
- **Unified Experience**: All 19 chants now open in modal with Om chanting audio
- **Added 13 New Chant Entries** to chants-data.js:
  1. Lingashtakam (लिङ्गाष्टकम्) - Full text in modal
  2. Vishnu Sahasranama (श्री विष्णु सहस्रनाम) - Introduction with PDF download
  3. Lalita Sahasranama (श्री ललिता सहस्रनाम) - Introduction with PDF download
  4. Ram Raksha Stotram (राम रक्षा स्तोत्रम्) - Introduction with PDF download
  5. Mahishasura Mardini (महिषासुरमर्दिनि स्तोत्रम्) - Introduction with PDF download
  6. Shri Ram Stuti (श्री राम स्तुति) - Introduction with PDF download
  7. Kala Bhairavashtakam (काल भैरवाष्टकम्) - Introduction with PDF download
  8. Sankatmochan Hanuman Ashtak (संकट मोचन हनुमानाष्टक) - Introduction with PDF download
  9. Sunderkand (सुन्दरकाण्ड) - Introduction with PDF download
  10. Ganesh Bhajan & Aarti (गणेशा भजन एवं आरती) - Introduction with PDF download
  11. Shivratri Bhajans (शिवरात्रि भजन) - Introduction with PDF download
  12. Jai Ho (जय हो) - Introduction with PDF download

#### Consistent User Experience
- **Short Chants**: Full text displayed in modal with Om chanting
- **Long Chants**: Introduction displayed with "Download PDF" button for complete text
- **All Chants**: Om chanting audio auto-plays when modal opens
- Removed all direct PDF links - unified modal interface

**Impact:** Consistent, immersive devotional experience across all chants with Om chanting background audio

---

### 🔧 Enhanced - Calendar Integration

**User Request:** Improve calendar modal with event URLs and remove emoji icons

#### Changes
- Added website event URL (https://suttonmandir.org/events.html) to all calendar invites
- Included "More info" links in Google and Outlook calendar descriptions
- Added URL field to iCalendar (.ics) format for Apple/Other calendars
- Removed emoji icons (📅 📧 🍎) from calendar modal, using text-only labels
- Cleaner, more professional calendar selection interface

**Impact:** Calendar invites now include direct link back to event page for complete information

---

## [1.4.0] - 2026-02-04

### 🎉 Added - Upcoming Events Section

**New Feature:** Dedicated upcoming events showcase on events page

#### Event Listings
- Added prominent "Upcoming Events" section to [events.html](events.html)
- Events automatically sequenced by date (nearest first)
- Professional event cards with complete details

#### Maha Shivratri 2026
- **Date:** Sunday, 15 February 2026, 6:00 PM onwards
- **Venue:** Carshalton High School for Girls, West Street, Carshalton SM5 2QX
- **Highlights:**
  - Rudrabhishek Puja
  - Dwadash Jyotirlingas Darshan
  - Cultural Performances
  - Jal Abhishek
  - Prasad Distribution
- Online registration required via WhatsApp
- Event poster included (shivratri.jpeg)

#### Holi 2026 - Festival of Colors
- **Date:** Sunday, 8 March 2026, 11:00 AM - 3:00 PM
- **Venue:** Manor Park, Sutton
- **Highlights:**
  - Holika Dahan Ceremony
  - Unlimited Colors (Gulal)
  - Live DJ & Dance
  - Food Stalls
  - Cultural Performances
- Event poster included (SHCSHoliFlyer.jpeg)

#### Event Card Features
- Next event highlighted with red "NEXT EVENT" badge
- Date prominently displayed
- Full venue address with map icon
- Event highlights in bullet format
- WhatsApp registration/inquiry links
- Mandir Project fundraising message
- Mobile responsive cards

**Impact:** Clear visibility of upcoming celebrations, easy registration process, professional event promotion

---

### 🎵 Enhanced - Om Chanting Auto-Play

**User Request:** Make Om chanting play automatically when modal opens

#### Changes
- Modified `openChantModal()` function to auto-start audio
- Om chanting now plays immediately upon opening any chant modal
- Creates immersive devotional atmosphere from the start
- Users can still pause/resume using toggle button
- Audio stops automatically when modal closes

**Impact:** Enhanced spiritual experience, seamless audio integration, more engaging chant reading experience

---

## [1.3.0] - 2026-02-04

### 🚨 Updated - Urgent Appeal Banner System

**Enhancement:** Added compact urgent appeal banner to all pages with improved visibility

#### Urgent Top Banner
- Added compact alert banner to all 11 HTML pages (immediately after header)
- Design: Gradient red-orange background with pulsing "URGENT" badge
- Text: "URGENT: Bidding Date - Feb 2026 | Funding Gap: £150,000"
- Clickable banner links to [mandir-appeal.html](mandir-appeal.html)
- CSS animation: pulse effect on urgent badge
- Mobile responsive design

#### Date Updates
- Changed all references from "24 February 2026" to "Feb 2026"
- Updated in [index.html](index.html), [mandir-appeal.html](mandir-appeal.html)
- More concise presentation while maintaining urgency

#### Donation Platform Update
- Replaced PayPal with JustGiving in [donate.html](donate.html)
- New link: https://www.justgiving.com/campaign/sutton-mandir#supportersList
- JustGiving provides Gift Aid support and better charity donation tracking
- Updated card text to explain JustGiving benefits

#### Bank Account Name Correction
- Fixed bank account name to official format: "SANATAN HINDU CULTUR"
- Updated in [donate.html](donate.html), [membership.html](membership.html), [mandir-appeal.html](mandir-appeal.html)
- Ensures accurate bank transfer information

**Impact:** Maximum visibility for urgent appeal across entire website, accurate donation information

---

### 📿 Enhanced - Chants Modal System with Om Chanting Audio

**Major Enhancement:** Complete interactive chants modal system with devotional background audio

#### Chants Modal Implementation
- Created modal popup system for displaying full chant text
- 8 popular chants now use modal instead of PDF links:
  1. Om Jai Jagdish (ॐ जय जगदीश हरे) - Aarti
  2. Hanuman Ji Ki Aarti (श्रीहनुमानलला की आरती) - Aarti
  3. Shri Ramayan Ji Ki Aarti (आरती श्री रामायण जी की) - Aarti
  4. Shri Hanuman Chalisa (श्री हनुमान चालीसा) - Stotram
  5. Gayatri Mantra (गायत्री मंत्र) - Mantra
  6. Mahamritunjaya Mantra (महामृत्युंजय मंत्र) - Mantra
  7. Bhor Bhai Din Chad Gaya (भोर भई दिन चढ़ गया) - Bhajan
  8. Jai Shiv Omkara (जय शिव ओंकारा) - Aarti (in data)

#### Om Chanting Background Audio
- Added peaceful Om chanting audio file (om-chanting.mp3, 193KB)
- Group vocal chanting creates devotional meditation atmosphere
- Audio loops continuously while modal is open
- Play/Pause toggle button with visual feedback
- Pulse animation on playing state
- Audio stops automatically when modal closes

#### Modal Features
- Full chant text display in Devanagari script
- English transliteration where applicable
- Meaning/translation for mantras
- Clean, readable typography with proper spacing
- Download PDF button for offline access
- Close on ESC key or outside modal click
- Prevents body scroll when modal open
- Mobile responsive design (max-height on small screens)
- Smooth fadeIn and slideUp animations

#### Technical Implementation
- Created [js/chants-data.js](js/chants-data.js) - JavaScript object with chant content
- Modal HTML structure with header, body, footer sections
- CSS animations in [css/components.css](css/components.css)
- HTML5 Audio API with fallback error handling
- Graceful degradation if audio file missing

**Impact:** Enhanced devotional experience with instant chant access, beautiful presentation, and meditative Om chanting background

---

### 🔧 Updated - Banner Position

**User Request:** Move urgent appeal banner above header/navigation

#### Changes
- Repositioned urgent banner to appear before `<header>` tag on all 11 pages
- Banner now first element users see (above logo and navigation)
- Matches layout of dedicated mandir-appeal.html page
- Ensures maximum visibility for urgent fundraising appeal

**Impact:** Urgent appeal impossible to miss, appears before any navigation

---

## [1.2.0] - 2026-02-03

### 🚨 Added - Urgent Mandir Appeal

**Major Addition:** Complete Mandir fundraising appeal system

#### Landing Page Banner
- Added prominent urgent appeal section on [index.html](index.html) after hero
- Visual gradient background (orange theme)
- Key statistics display: £500k target | £350k+ pledged | £150k gap
- Bidding deadline: 24 February 2026
- Three action buttons: View Appeal, Make Pledge, Donate

#### New Page: mandir-appeal.html
- Comprehensive 22KB dedicated appeal page
- Sections:
  - Urgent banner at top with deadline
  - Key statistics cards (Target, Pledged, Gap)
  - Property information (near Carshalton Beeches station)
  - What has been achieved (charity status, property identified, pledges)
  - What needs to be achieved (£150k funding gap)
  - Donation options (£500+ with Gift Aid benefits)
  - Interest-free loan options (£5000+, 6-8 year repayment)
  - Family name engraving benefits for donors/lenders
  - Mandir plan with 10 planned deities
  - Comprehensive FAQ section
  - Bank details and contact information
  - Legal disclaimer
- Links to external pledge form: https://tinyurl.com/shcsmandir
- All information extracted from official appeal PDF

**Impact:** Provides urgent fundraising visibility to help close £150k gap before Feb 24, 2026 deadline

---

### 📿 Fixed - Chants Page

**Problem:** All 19 chant cards linked to non-existent HTML files, causing 404 errors

#### Solution Implemented
- Created `pdfs/` folder structure
- Copied Aarti_Bhajans.pdf (280KB) from old site backup
- Updated all 33 chant card links to open comprehensive PDF
- Added informational banner explaining PDF download system
- Maintained search and filter functionality

**Impact:** Users can now access all chants via single comprehensive PDF download

---

### 📋 Added - Additional Pages

#### membershipform.html
- Modernized Google Forms embedded membership registration
- Updated design to match new site theme
- Added WhatsApp button and modern header/footer
- Bank details reminder section

#### memberlist.html
- List of 150+ active lifetime members in grid layout
- Modernized design with responsive columns
- Call-to-action to join membership

#### privacy.html
- Complete privacy policy page
- GDPR-compliant information collection disclosure
- Cookie policy, data sharing, security sections
- Modern layout with clear sectioning

**Impact:** Complete site functionality with all referenced pages working

---

### 📄 Documentation

- Created FORMS_GUIDE.md explaining contact and membership form behavior
- Updated SITE_MIGRATION_COMPLETE.md with 11-page site structure
- Consolidated all standalone update documents into this RELEASE_NOTES.md

---

## [1.1.0] - 2026-02-03

### ✅ Initial Migration Complete

**Major Achievement:** Successfully migrated from old 54-page HTML site to modern 7-page design

#### Core Pages Created
1. index.html - Modern landing page with hero, news, events, contact form
2. about.html - Vision, mission, objectives
3. events.html - Weekly satsang, 9 festivals, past events gallery
4. membership.html - Benefits, pricing (£100 lifetime), signup process
5. donate.html - Bank transfer and PayPal donation options
6. news.html - 3 full news articles (Holi 2024, Dussehra 2023, COVID 2021)
7. chants.html - 19 chants with search and category filters

#### CSS Architecture
- reset.css - Modern CSS reset
- variables.css - Design tokens (colors, spacing, typography)
- base.css - Base styles and utilities
- components.css - Reusable component styles

#### Features Implemented
- Modern minimalistic design (orange brand color #FF6600)
- Fully responsive (mobile, tablet, desktop breakpoints)
- Floating WhatsApp button on all pages (+447443801223)
- Mobile hamburger menu with smooth transitions
- Contact form with client-side validation (mailto: submission)
- Chants search and filter functionality
- Google Analytics integration (G-VTPFXLBKLL)
- Social media links (Facebook)

#### Technical Stack
- Pure HTML/CSS/JavaScript (no build process)
- Mobile-first responsive design
- Semantic HTML5
- CSS Grid and Flexbox layouts
- Vanilla JavaScript (no dependencies)

#### Site Structure
- Main directory: Modern 7-page site (LIVE)
- shcs-v1/: Complete backup of old 54-page site
- shcs-v2/: Development copy (can be deleted post-deployment)

---

## [1.0.0] - 2026-02-03

### 🎉 Project Initialization

**Setup:** Cloned repository and analyzed existing site structure

#### Initial State
- 906 files total in old site
- 54 HTML pages with individual chant pages
- Identified 7 core navigation pages in use
- Multiple CSS/JS files from old template

#### Technology Decision
- User rejected React + Vite approach (deployment complexity)
- Chose pure HTML/CSS/JS for easy deployment
- No build process, no dependencies
- Optimized for simple FTP upload deployment

#### Backup Strategy
- Moved all old site files to shcs-v1/ directory
- Preserved all 54 original pages
- Kept all images, PDFs, and resources
- Created safety net for rollback if needed

---

## Deployment Status

**Current Version:** 1.2.0
**Status:** ✅ Production Ready
**Total Pages:** 11 (7 main + 4 supporting)
**Total Files:** HTML (11), CSS (4), JS (1), PDFs (1), Images (92)

### Pre-Deployment Checklist
- [x] WhatsApp number configured (+447443801223)
- [x] All 11 pages complete and functional
- [x] Mandir appeal integrated
- [x] Chants linking to PDF
- [x] All forms working
- [x] Mobile responsive design
- [x] Google Analytics integrated
- [ ] Test locally (optional)
- [ ] Upload to server
- [ ] Test live site
- [ ] Verify WhatsApp button
- [ ] Test forms submission
- [ ] Test on mobile device

---

## Contact

**Website:** suttonmandir.org
**Email:** info@sanatan-hcs.org | shcs.sutton@gmail.com
**WhatsApp:** +447443801223
**Charity Number:** 1197115

---

## Notes

This is a living document. All significant changes will be added to the top of this file with appropriate version numbers and dates.
