# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build`  
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`
- **Type check**: `npx tsc --noEmit`

## 📋 Project Overview

**Twin Handyman & Plumbing** is a professional service business website built with modern web technologies. This is a **Next.js 15 App Router** project serving the Bay Area plumbing and handyman service industry.

### 🎯 Business Focus
- **Primary Service Area**: San Leandro, Oakland, Bay Area
- **Contact**: (510) 926-7272
- **Specialties**: 24/7 emergency plumbing, licensed/bonded/insured
- **Services**: 60+ plumbing and handyman services
- **Target Audience**: Residential and commercial property owners

### 🛠️ Technology Stack

#### Core Framework
- **Next.js 15.4.6** with App Router and React 19.1.0
- **TypeScript 5.x** for type safety and better developer experience
- **Node.js 16+** runtime environment

#### Styling & UI
- **Tailwind CSS 3.4.17** with custom configuration
- **shadcn/ui components** for consistent UI patterns
- **Framer Motion 12.23.12** for smooth animations
- **Lucide React 0.539.0** for consistent iconography
- **Custom brand color system** (see Brand Colors section)

#### Forms & Validation
- **React Hook Form 7.62.0** for performant form handling
- **Zod 4.0.17** for runtime type validation
- **@hookform/resolvers 5.2.1** for form validation integration

#### Development Tools
- **ESLint 9.x** with Next.js configuration
- **Autoprefixer & PostCSS** for CSS processing
- **Turbopack** for faster development builds

### 🎨 Brand Identity & Design System

#### Brand Colors (Tailwind Configuration)
```css
brand-navy: #0B1D41     /* Primary dark blue - Headers, navigation, primary text */
brand-blue: #1F75A6     /* Secondary blue - Links, secondary elements, accents */
brand-gold: #B88E3B     /* Accent gold - Highlights, premium service indicators */
brand-red: #B31E1E      /* Emergency/CTA red - Emergency alerts, urgent CTAs */
```

#### Typography
- **Primary Font**: Inter (Google Fonts)
- **Font Loading**: Optimized with Next.js font optimization
- **Font Weights**: 400, 500, 600, 700

#### Component Design Patterns
- **Cards**: Consistent shadow, border-radius, padding
- **Buttons**: Primary (brand-blue), Secondary (outline), Emergency (brand-red)
- **Forms**: Consistent input styling with validation states
- **Icons**: Lucide React icons with consistent sizing

#### Visual Design Principles
- **Professional & Trustworthy**: Clean, modern design
- **Emergency-Ready**: Clear emergency contact visibility
- **Service-Focused**: Service cards and clear CTAs
- **Mobile-First**: Responsive design for all devices

#### Responsive Breakpoints (Tailwind)
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## 🏗️ Project Architecture

### 📁 Directory Structure

```
handymanproject/
├── public/                     # Static assets
│   ├── handymanlogo.png       # Company logo
│   ├── before-after.jpg       # Service showcase images
│   ├── lavamanos.jpg          # Plumbing work examples
│   ├── plumbing.jpg           # Service category images
│   └── *.svg                  # Icon assets
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles & Tailwind
│   │   └── services/          # Services pages
│   │       ├── page.tsx       # Services listing
│   │       └── [slug]/        # Dynamic service pages
│   ├── components/            # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Hero.tsx           # Homepage hero section
│   │   ├── ServiceCard.tsx    # Service display component
│   │   ├── RequestCallback.tsx # Contact form modal
│   │   ├── Process.tsx        # How it works section
│   │   ├── Reviews.tsx        # Customer testimonials
│   │   ├── CtaBanner.tsx      # Call-to-action banner
│   │   ├── ImageCarousel.tsx  # Image gallery component
│   │   └── ui/                # shadcn/ui components
│   └── lib/
│       ├── services.ts        # Services data & utilities
│       └── utils.ts           # Utility functions
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies & scripts
```

### 🎯 Core Architecture Patterns

#### Services Data Structure
The heart of the application is `/src/lib/services.ts` which defines:

```typescript
interface Service {
  slug: string;                    // URL-friendly identifier
  title: string;                   // Display name
  short: string;                   // Brief description
  description: string;             // Detailed description
  benefits: string[];              // Service benefits list
  faq: { question: string; answer: string }[]; // FAQ items
  category: 'installation' | 'repair' | 'featured'; // Service type
  icon: string;                    // Lucide icon name
}
```

**Key Features:**
- **60+ Services**: Comprehensive plumbing/handyman services
- **Categorization**: Services organized by type (installation, repair, featured)
- **SEO-Friendly**: URL slugs for dynamic routing
- **Rich Content**: Benefits, FAQs, and detailed descriptions
- **Icon Integration**: Lucide React icons referenced by string names

#### Routing Architecture

```
/ (Homepage)
├── Hero Section with Emergency Banner
├── Featured Services Grid
├── Popular Services Carousel
├── Process Steps
├── Customer Reviews
└── CTA Banner

/services (Services Listing)
├── All Services Grid
├── Category Filters
└── Service Cards

/services/[slug] (Dynamic Service Pages)
├── Service Hero
├── Benefits List
├── FAQ Section
└── Contact CTA
```

#### Component Architecture

**Layout Components:**
- `Header.tsx` - Navigation with logo, menu, emergency contact
- `Footer.tsx` - Company info, services links, contact details
- `layout.tsx` - Root layout with metadata and global providers

**Page Sections:**
- `Hero.tsx` - Homepage hero with emergency banner and main CTA
- `Process.tsx` - "How it works" steps with icons
- `Reviews.tsx` - Customer testimonials carousel
- `CtaBanner.tsx` - Call-to-action sections throughout site

**Core Components:**
- `ServiceCard.tsx` - Reusable service display with hover effects
- `RequestCallback.tsx` - Contact form modal with validation
- `ImageCarousel.tsx` - Image gallery for service showcases

**UI Components:**
- shadcn/ui components in `/src/components/ui/`
- Consistent design system with Tailwind classes
- Accessible components with proper ARIA labels

### 🔧 Technical Implementation

#### State Management
- **React State**: Local component state with useState/useEffect
- **Form State**: React Hook Form for complex forms
- **No Global State**: Simple architecture without Redux/Zustand

#### Data Flow
1. **Static Data**: Services loaded from `/src/lib/services.ts`
2. **Dynamic Routing**: Next.js generates pages from service slugs
3. **Client Interaction**: Forms and modals handle user interactions
4. **SEO Optimization**: Metadata API for dynamic page titles/descriptions

#### Performance Optimizations
- **Next.js Image**: Optimized images with lazy loading
- **Font Optimization**: Google Fonts with Next.js font optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Turbopack**: Fast development builds

### 📱 Mobile-First Implementation
- Base styles for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interface elements
- Optimized navigation for mobile

### 🔍 SEO & Performance Optimization

#### SEO Implementation
- **Dynamic Metadata**: Service-specific titles and descriptions
- **Structured Data**: Business information markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Image Alt Text**: Descriptive alt attributes for all images
- **Sitemap**: Auto-generated for all service pages
- **Robots.txt**: Configured for optimal crawling

#### Performance Targets
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Lighthouse Score**: Target 90+ for all categories
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Images**: Next.js Image component with lazy loading
- **Fonts**: Google Fonts with Next.js optimization

### 🛠️ Development Workflow

#### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Next.js recommended configuration
- **Prettier**: Code formatting (if configured)
- **Git Hooks**: Pre-commit validation (if configured)

#### Testing Strategy
- **Manual Testing**: Cross-browser and device testing
- **Accessibility**: WCAG 2.1 compliance checking
- **Performance**: Regular Lighthouse audits
- **Form Validation**: User experience testing

### 📞 Business Logic Integration

#### Contact Information
- **Primary Phone**: (510) 926-7272 (prominently displayed)
- **Service Area**: San Leandro, Oakland, Bay Area
- **Emergency Service**: 24/7 availability messaging
- **Credentials**: Licensed, bonded, insured messaging

#### Service Categories
- **Installation Services**: New installations and upgrades
- **Repair Services**: Fixes and maintenance
- **Featured Services**: High-demand or specialized services

#### Lead Generation
- **Multiple CTAs**: Phone calls, callback requests, contact forms
- **Emergency Emphasis**: Urgent service availability
- **Trust Signals**: Licensing, insurance, experience highlights

## 🔧 Development Guidelines

### 📝 Code Style & Standards

#### TypeScript Best Practices
```typescript
// ✅ Good: Explicit interface definitions
interface ServiceCardProps {
  service: Service;
  className?: string;
  onClick?: () => void;
}

// ✅ Good: Proper component typing
const ServiceCard: React.FC<ServiceCardProps> = ({ service, className, onClick }) => {
  // Component implementation
};

// ❌ Avoid: Any types
const handleClick = (data: any) => { /* ... */ };

// ✅ Good: Specific types
const handleClick = (data: Service) => { /* ... */ };
```

#### Component Structure
```typescript
// Recommended component structure
'use client'; // Only if client-side features needed

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Service } from '@/lib/services';

interface ComponentProps {
  // Props interface
}

export default function Component({ prop1, prop2 }: ComponentProps) {
  // 1. State declarations
  const [state, setState] = useState<Type>(initialValue);
  
  // 2. Effects
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // 3. Event handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // 4. Render
  return (
    <div className="component-styles">
      {/* JSX content */}
    </div>
  );
}
```

#### Tailwind CSS Guidelines
```typescript
// ✅ Good: Organized class names
const cardClasses = [
  'bg-white rounded-lg shadow-md',
  'p-6 hover:shadow-lg transition-shadow',
  'border border-gray-200'
].join(' ');

// ✅ Good: Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// ✅ Good: Brand color usage
<button className="bg-brand-blue hover:bg-brand-navy text-white">

// ❌ Avoid: Inline styles (use Tailwind classes instead)
<div style={{ backgroundColor: '#1F75A6' }}>
```

### 🗂️ File Organization

#### Component Naming
- **PascalCase**: `ServiceCard.tsx`, `RequestCallback.tsx`
- **Descriptive**: Names should clearly indicate component purpose
- **Consistent**: Follow established patterns in the codebase

#### Import Organization
```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

// 3. Internal components
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';

// 4. Types and utilities
import { Service } from '@/lib/services';
import { cn } from '@/lib/utils';
```

### 🎨 Design Implementation

#### Responsive Design Implementation
```typescript
// Mobile-first responsive patterns
<div className="
  flex flex-col space-y-4 p-4
  md:flex-row md:space-y-0 md:space-x-6 md:p-6
  lg:p-8 xl:max-w-7xl xl:mx-auto
">
```

#### Animation Guidelines
```typescript
// Framer Motion best practices
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Hover effects with Tailwind
<div className="transform hover:scale-105 transition-transform duration-200">
```

### 🔍 SEO Implementation

#### Metadata Best Practices
```typescript
// Dynamic metadata for service pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Twin Handyman & Plumbing',
    };
  }
  
  return {
    title: `${service.title} | Twin Handyman & Plumbing`,
    description: service.short,
    keywords: `${service.title}, plumbing, handyman, Bay Area`,
    openGraph: {
      title: service.title,
      description: service.short,
      type: 'website',
    },
  };
}
```

#### Structured Data
```typescript
// JSON-LD for business information
const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Twin Handyman & Plumbing",
  "telephone": "(510) 926-7272",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Leandro",
    "addressRegion": "CA"
  }
};
```

## ⚙️ Configuration Files

### Tailwind Configuration
```javascript
// tailwind.config.js - Brand colors and responsive utilities
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': '#0B1D41',
        'brand-blue': '#1F75A6', 
        'brand-gold': '#B88E3B',
        'brand-red': '#B31E1E',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animate')],
}
```

### TypeScript Configuration
```json
// tsconfig.json - Strict typing with path aliases
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "jsx": "preserve",
    "moduleResolution": "bundler",
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

## 🚀 Production Deployment

### Quality Assurance Checklist
- [ ] **Performance**: Core Web Vitals passing, Lighthouse 90+
- [ ] **SEO**: Unique metadata, proper headings, alt text, structured data
- [ ] **Accessibility**: WCAG 2.1 compliance, keyboard navigation
- [ ] **Responsive**: All breakpoints tested
- [ ] **Type Safety**: No TypeScript errors
- [ ] **Build**: Production build successful

## 🤝 Contributing Guidelines

### Making Changes
1. **Understand the Business**: Review service offerings and target audience
2. **Follow Patterns**: Use existing component and styling patterns
3. **Test Thoroughly**: Check responsive design and accessibility
4. **Maintain Performance**: Ensure changes don't impact Core Web Vitals

### Common Tasks

#### Adding a New Service
1. Add service object to `/src/lib/services.ts`
2. Ensure proper categorization and icon selection
3. Test dynamic routing works correctly
4. Verify SEO metadata generation

#### Creating New Components
1. Follow established component structure
2. Use TypeScript interfaces for props
3. Implement responsive design
4. Add proper accessibility attributes

#### Styling Updates
1. Use Tailwind classes consistently
2. Follow brand color guidelines
3. Test across all breakpoints
4. Maintain design system consistency

### Code Review Focus Areas
- **TypeScript**: Proper typing and no `any` usage
- **Performance**: Image optimization and bundle size
- **Accessibility**: ARIA labels and keyboard navigation
- **SEO**: Metadata and structured data
- **Responsive**: Mobile-first design implementation
- **Brand Consistency**: Color usage and design patterns

## 📚 Resources & References

### Documentation
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Hook Form Documentation](https://react-hook-form.com/)

### Tools & Extensions
- **VS Code Extensions**: ES7+ React/Redux/React-Native snippets, Tailwind CSS IntelliSense
- **Browser Tools**: React Developer Tools, Lighthouse
- **Design Tools**: Figma (for design references)
- **Testing Tools**: Chrome DevTools, Accessibility Insights

---

*This documentation is maintained to help developers understand and contribute to the Twin Handyman & Plumbing website effectively. Keep it updated as the project evolves.*