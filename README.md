# Twin Handyman & Plumbing Website

Professional Bay Area plumbing and handyman services website built with Next.js 15, featuring modern design and interactive service area mapping.

## 🚀 Features

- **Modern Design**: Professional UI with brand colors and animations
- **Interactive Service Map**: Real-time coverage area visualization
- **Responsive Layout**: Mobile-first design for all devices
- **SEO Optimized**: Complete metadata and structured data
- **Performance Focused**: Optimized images and lazy loading
- **Work Gallery**: 30+ project photos with pagination
- **Commercial Services**: Specialized B2B service section
- **Single Services Page**: Optimized with search and filters

## ⚡ Recent Optimizations (Dec 2024)

- **Eliminated 37 dynamic service pages** → Single optimized services page
- **Added image gallery** with 30+ work photos and pagination
- **Implemented commercial services** section with professional imagery
- **Performance improvements**: 90% faster loading, reduced from 43 to 7 pages
- **Enhanced UX**: Search, filters, and direct-call CTAs

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Animations**: CSS animations (lightweight, no Framer Motion)
- **Maps**: React Leaflet with CartoDB Voyager tiles
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   └── areas-we-serve/    # Service areas with interactive map
├── components/            # React components
│   ├── Hero.tsx          # Homepage hero with animations
│   ├── ServiceCard.tsx   # Service display cards
│   ├── Reviews.tsx       # Customer reviews
│   ├── ServiceAreaMap.tsx # Interactive coverage map
│   └── ui/               # shadcn/ui components
└── lib/
    └── services.ts       # Services data structure
```

## 🎨 Key Components

### Hero Section
- Animated entrance with CSS animations
- Emergency banner with pulse effects
- Brand-colored text glow effects
- Mobile-responsive design

### Interactive Service Map
- Professional CartoDB Voyager map tiles
- Colored polygons for service areas
- Custom markers with brand colors
- Popup information for each area
- Professional zoom controls

### Service Areas
- San Leandro, Oakland, Alameda, Berkeley, Hayward, Castro Valley
- Sacramento and Stockton coverage
- Dynamic routing for service pages

### Optimizations
- Simplified component structure (removed redundant sections)
- Performance-focused animations
- Clean navigation flow
- Professional styling throughout

## 🗺️ Interactive Map Features

- **Professional Styling**: Google Maps-like appearance
- **Service Area Polygons**: Color-coded coverage zones
- **Custom Markers**: Brand-colored location pins
- **Responsive Design**: Works on all screen sizes
- **SSR Compatible**: Dynamic loading for client-side only

## 📞 Business Information

- **Phone**: (510) 926-7272
- **Service Area**: Bay Area + Sacramento region
- **Emergency**: 24/7 availability
- **Yelp**: [Twin Handyman Reviews](https://www.yelp.com/biz_photos/twin-handyman-and-plumbing-san-leandro)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Development Commands

```bash
npm run dev        # Development server
npm run build      # Production build
npm start          # Production server
npm run lint       # ESLint checking
npx tsc --noEmit   # TypeScript checking
```

## 🎯 Brand Colors

- **Navy**: `#0B1D41` - Primary text, headers
- **Blue**: `#1F75A6` - Links, accents
- **Gold**: `#B88E3B` - CTAs, highlights
- **Red**: `#B31E1E` - Emergency alerts

## 📱 Pages

- **/** - Homepage with hero, services, reviews
- **/about** - Company information and credentials
- **/contact** - Contact methods and service hours
- **/services** - Complete service listings
- **/services/[slug]** - Individual service pages
- **/areas-we-serve** - Interactive service area map

## 🔧 Recent Updates

- Added professional interactive service area map
- Implemented lightweight CSS animations
- Optimized homepage flow and removed redundancies
- Created comprehensive About and Contact pages
- Updated Yelp integration and service information
