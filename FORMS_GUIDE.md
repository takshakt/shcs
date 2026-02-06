# Forms Guide - SHCS Website

## Overview

This guide explains how the forms work on your SHCS website and what happens when visitors submit them.

---

## 1. Membership Form

**File:** [membershipform.html](membershipform.html)
**Link from:** [membership.html](membership.html)

### How It Works

The membership form uses **Google Forms** embedded in an iframe. This is a reliable, free solution that:

- ✅ Collects responses automatically in Google Sheets
- ✅ Sends email notifications when someone submits
- ✅ No backend server required
- ✅ Easy to manage responses
- ✅ Can be customized from Google Forms dashboard

### What Happens When Someone Fills It Out

1. Visitor clicks "Go to Membership Form" on [membership.html](membership.html)
2. They're taken to [membershipform.html](membershipform.html)
3. The Google Form is displayed (embedded)
4. When they submit:
   - Response is saved to your Google Sheets
   - You receive an email notification (if configured)
   - User sees Google Forms confirmation message

### Managing the Form

To edit the form or view responses:

1. Go to https://docs.google.com/forms
2. Find your SHCS Membership Form
3. Click "Responses" tab to view submissions
4. Click "Edit" to modify questions

### Current Form URL
```
https://docs.google.com/forms/d/e/1FAIpQLScfHnrsDSyNCUJW_gSJWHzhos7yQJRjo6hSC8CEXONKyJxjhQ/viewform
```

---

## 2. Contact Form

**File:** [index.html](index.html) (in the Contact section)

### How It Works

The contact form currently uses the **mailto:** protocol. This is the simplest approach:

- ✅ No backend server required
- ✅ No external services needed
- ✅ Works immediately
- ⚠️ Requires user to have email client configured
- ⚠️ User sees their email client open (not seamless)

### What Happens When Someone Fills It Out

1. Visitor fills out the contact form on [index.html](index.html)
2. JavaScript validates the fields
3. When they click "Send Message":
   - Validation runs (checks for valid email, required fields)
   - If valid, their **default email client opens** (like Outlook, Gmail app, Mail)
   - Email is **pre-filled** with:
     - **To:** info@suttonmandir.org.uk
     - **Subject:** Selected subject (General Enquiry, Membership, Events)
     - **Body:** Their name, email, phone, and message
   - User must click "Send" in their email client to actually send

### Current Implementation

Located in [index.html:281-324](index.html#L281-L324) and [js/main.js:41-81](js/main.js#L41-L81):

```javascript
// Form validation and mailto: link creation
const mailtoLink = `mailto:info@suttonmandir.org.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
window.location.href = mailtoLink;
```

---

## 3. Alternative Solutions for Contact Form

If you want a more seamless contact form experience, here are free alternatives:

### Option A: Formspree (Recommended)

**Best for:** Seamless user experience without backend

1. **Sign up:** https://formspree.io (free tier: 50 submissions/month)
2. **Update form action:**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. **Benefits:**
   - User stays on your site
   - Email sent directly to info@suttonmandir.org.uk
   - No email client required
   - Spam protection included

### Option B: Netlify Forms

**Best for:** If deploying to Netlify

1. **Add to form tag:**
   ```html
   <form name="contact" method="POST" data-netlify="true">
   ```
2. **Deploy to Netlify**
3. **Benefits:**
   - Free unlimited submissions
   - View submissions in Netlify dashboard
   - Email notifications
   - Spam filtering

### Option C: Keep Current mailto: Approach

**Best for:** Simplicity, no dependencies

- Already implemented
- Works everywhere
- Zero setup required
- Just requires user to have email client

---

## 4. Recommendations

### For Membership Form
✅ **Keep as is** - Google Forms is perfect for this use case

### For Contact Form
Consider one of these options:

1. **Keep current (mailto:)** if:
   - Most visitors have email clients configured
   - You want zero dependencies
   - You're okay with the user experience

2. **Switch to Formspree** if:
   - You want better user experience
   - You're okay with 50 submissions/month limit
   - You don't mind depending on external service

3. **Switch to Netlify Forms** if:
   - You're deploying to Netlify
   - You want unlimited submissions
   - You want dashboard access to submissions

---

## 5. Testing the Forms

### Before Deployment

Test the contact form locally:
```bash
python3 -m http.server 8000
# Visit http://localhost:8000
# Fill out contact form
# Click "Send Message"
# Your email client should open
```

Test the membership form:
- Visit [membershipform.html](membershipform.html)
- The Google Form should load
- Try filling it out (use test data)
- Check your Google Sheets for the response

### After Deployment

1. Test contact form on live site
2. Test membership form on live site
3. Verify emails arrive at info@suttonmandir.org.uk
4. Check Google Sheets for membership responses

---

## 6. Current Email Addresses

All forms send to: **info@suttonmandir.org.uk**

Make sure this email address is:
- ✅ Active and monitored
- ✅ Has sufficient storage
- ✅ Configured to accept emails from contact forms

---

## 7. Quick Reference

| Form | Location | Method | Receives At |
|------|----------|--------|-------------|
| Contact Form | index.html | mailto: | info@suttonmandir.org.uk |
| Membership Form | membershipform.html | Google Forms | Google Sheets + email |

---

## Need Help?

If you want to:
- Switch from mailto: to Formspree → See "Option A" above
- Customize the Google Form → Visit https://docs.google.com/forms
- Change email address → Update in index.html (contact form) and Google Forms (membership)

---

**Last Updated:** February 3, 2026
**Contact:** info@suttonmandir.org.uk
