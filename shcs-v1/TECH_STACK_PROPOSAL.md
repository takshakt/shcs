# SHCS Website - Modern Tech Stack Proposal

## Recommended Technology Stack

### Option A: React + JSON-based CMS (RECOMMENDED)
**Best for:** Easy maintenance, modern development, no backend required

#### Frontend Framework
- **React 18** with functional components and hooks
- **Vite** for blazing-fast development and building
- **React Router** for client-side routing
- **Tailwind CSS** for rapid, consistent styling

#### Content Management
- **JSON files** for content (news, events, chants)
- **Simple admin panel** (React-based) for editing JSON
- **Markdown support** for rich text content
- **Image upload** with preview

#### Key Features
- ✅ Non-technical content editing via web interface
- ✅ No database or server required (static site)
- ✅ Fast performance (static generation)
- ✅ Easy deployment (Netlify, Vercel, GitHub Pages)
- ✅ Version control for content (Git)
- ✅ Component reusability

#### Project Structure
```
shcs-v2/
├── public/
│   ├── images/
│   ├── pdfs/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NewsCard.jsx
│   │   ├── EventCard.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── News.jsx
│   │   ├── Membership.jsx
│   │   ├── Donate.jsx
│   │   ├── Chants.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── news.json
│   │   ├── events.json
│   │   ├── chants.json
│   │   └── site-config.json
│   ├── admin/
│   │   ├── AdminPanel.jsx
│   │   ├── NewsEditor.jsx
│   │   └── EventsEditor.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

#### Content Files (JSON Example)

**data/news.json**
```json
{
  "articles": [
    {
      "id": "1",
      "title": "SHCS's Rang Barse Holi Event 2024",
      "date": "2024-03-24",
      "excerpt": "Over 1000 people from Sutton and beyond celebrated...",
      "content": "Full article content here...",
      "image": "/images/holi1.jpg",
      "featured": true
    }
  ]
}
```

**data/events.json**
```json
{
  "recurring": [
    {
      "id": "1",
      "title": "Weekly Satsang",
      "schedule": "Every Sunday, 7pm - 9pm",
      "location": "Rosehill Pavillion Hall, Rosehill Park, Sutton SM1 3HH",
      "image": "/images/shcslogo.png"
    }
  ],
  "upcoming": [
    {
      "id": "2",
      "title": "Diwali Celebration 2026",
      "date": "2026-11-01",
      "time": "6pm - 10pm",
      "location": "TBD",
      "description": "Join us for our annual Diwali celebration..."
    }
  ]
}
```

#### Admin Panel Features
- Protected route (simple password auth)
- Visual editor for news/events
- Markdown editor with preview
- Image upload with drag-and-drop
- Form validation
- Save to JSON files (downloads for manual commit)

### Option B: Next.js + Headless CMS
**Best for:** More complex needs, SEO optimization, future scalability

#### Stack
- **Next.js 14** (App Router)
- **TinaCMS** or **Sanity.io** (free tier)
- **Tailwind CSS**
- **MDX** for rich content

#### Pros
- Better SEO (server-side rendering)
- Visual editing interface
- More powerful CMS features
- Scalable for future growth

#### Cons
- Slightly more complex setup
- May require backend/database for some CMS features

### Option C: Vue 3 + Composition API
**Best for:** Simpler learning curve, similar to Option A

#### Stack
- **Vue 3** with Composition API
- **Vite**
- **Vue Router**
- **Tailwind CSS**
- **JSON-based content**

## RECOMMENDED: Option A (React + Vite + JSON)

### Why This Stack?

1. **Easy Content Management**
   - Simple JSON files for content
   - Web-based admin panel (no terminal needed)
   - Visual editing experience
   - Non-technical users can add news/events

2. **Modern & Maintainable**
   - Component-based architecture
   - Reusable UI components
   - Modern JavaScript (ES6+)
   - Easy to extend

3. **Performance**
   - Fast load times
   - Optimized builds
   - Code splitting
   - Lazy loading

4. **Developer Experience**
   - Hot Module Replacement (instant updates)
   - Great tooling
   - Large community support
   - Easy debugging

5. **Deployment**
   - Deploy to Netlify/Vercel for free
   - Automatic builds from Git
   - HTTPS included
   - Global CDN

### Content Management Workflow (Non-Technical)

#### Adding a News Article
1. Visit `/admin` (password protected)
2. Click "Add News Article"
3. Fill in form:
   - Title
   - Date
   - Upload image
   - Write content (rich text editor)
   - Mark as featured (optional)
4. Click "Save"
5. Download updated JSON file
6. Send to developer OR commit to Git

#### Alternative: Netlify CMS Integration
- Git-based CMS
- No JSON file downloads needed
- Direct editing via web interface
- Auto-commits to repository
- Non-technical friendly

### Features for Easy Maintenance

1. **Visual Admin Panel**
   ```
   /admin/news     - Manage news articles
   /admin/events   - Manage events
   /admin/chants   - Manage chants directory
   /admin/settings - Site-wide settings
   ```

2. **Form Builder**
   - Drag-and-drop form fields
   - Automatic validation
   - Email integration

3. **Image Management**
   - Upload images via UI
   - Automatic optimization
   - Thumbnail generation

4. **Content Scheduling**
   - Schedule news posts
   - Auto-publish at specific time

5. **SEO Management**
   - Edit meta titles/descriptions per page
   - OpenGraph image settings
   - Automatic sitemap generation

## Implementation Plan

### Phase 1: Setup (Day 1)
```bash
# Create React + Vite project
npm create vite@latest shcs-v2 -- --template react
cd shcs-v2
npm install

# Install dependencies
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install react-markdown
npm install lucide-react  # Modern icons
npm install react-hook-form  # Form handling
npm install date-fns  # Date formatting
```

### Phase 2: Design System (Day 1-2)
- Set up Tailwind config with SHCS colors
- Create base components (Button, Card, Input, etc.)
- Build Header/Footer components
- Create layout templates

### Phase 3: Core Pages (Day 2-3)
- Home page with hero
- About page
- Events page
- News page
- Membership page
- Donate page
- Chants page
- Contact page

### Phase 4: Data Integration (Day 3-4)
- Create JSON content files
- Build data loading hooks
- Integrate content into pages
- Add search/filter functionality

### Phase 5: Admin Panel (Day 4-5)
- Build admin authentication
- Create news editor
- Create events editor
- Image upload functionality
- JSON export/download

### Phase 6: Polish & Deploy (Day 5-6)
- Responsive testing
- Performance optimization
- Accessibility audit
- Deploy to Netlify/Vercel

## File Structure Breakdown

### Component Examples

**NewsCard.jsx**
```jsx
export default function NewsCard({ article }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <time className="text-sm text-gray-500">{article.date}</time>
        <h3 className="text-xl font-bold mt-2 mb-3">{article.title}</h3>
        <p className="text-gray-600 mb-4">{article.excerpt}</p>
        <Link to={`/news/${article.id}`} className="text-orange-600 font-semibold hover:underline">
          Read More →
        </Link>
      </div>
    </article>
  )
}
```

**EventCard.jsx**
```jsx
export default function EventCard({ event }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
      <div className="space-y-2 text-gray-600">
        <p className="flex items-center gap-2">
          <CalendarIcon size={18} />
          {event.schedule || event.date}
        </p>
        <p className="flex items-center gap-2">
          <MapPinIcon size={18} />
          {event.location}
        </p>
      </div>
      {event.description && (
        <p className="mt-4 text-gray-700">{event.description}</p>
      )}
    </div>
  )
}
```

### Data Loading Hook

**useNews.js**
```jsx
import { useState, useEffect } from 'react'

export function useNews() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => {
        setNews(data.articles)
        setLoading(false)
      })
  }, [])

  return { news, loading }
}
```

## Tailwind Configuration

**tailwind.config.js**
```js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'shcs-orange': '#FF6600',
        'shcs-saffron': '#FF8F00',
        'shcs-charcoal': '#2C2C2C',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
        'devanagari': ['Noto Sans Devanagari', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

## Deployment Options

### Option 1: Netlify (Recommended)
- Free tier: Perfect for this site
- Automatic builds from Git
- Free SSL
- CDN included
- Form handling built-in
- Easy custom domain setup

### Option 2: Vercel
- Free tier
- Excellent performance
- Zero-config deployment
- Automatic HTTPS

### Option 3: GitHub Pages
- Completely free
- Simple setup
- Good for static sites

## Next Steps

1. **Approve tech stack** (React + Vite + Tailwind + JSON)
2. **Initialize project** in shcs-v2 directory
3. **Set up development environment**
4. **Build component library**
5. **Create pages with real content**
6. **Build admin panel** for easy content management
7. **Deploy to Netlify**

## Benefits Summary

✅ **Modern & Fast** - Latest React with Vite for instant updates
✅ **Easy to Maintain** - JSON files + admin panel for non-technical users
✅ **Mobile-First** - Tailwind CSS for responsive design
✅ **SEO-Friendly** - Proper meta tags and semantic HTML
✅ **Free Hosting** - Netlify/Vercel free tier is perfect
✅ **Scalable** - Easy to add new features later
✅ **No Backend Needed** - Static site, no server costs
✅ **Version Controlled** - Git tracks all content changes
✅ **Component-Based** - Reusable UI elements throughout
✅ **TypeScript Ready** - Can add TypeScript later if needed

---

**Ready to build?** This stack will give you a modern, maintainable website that non-technical users can update easily through a web interface!
