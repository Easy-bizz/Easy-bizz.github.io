# WebDev Academy - Learning Platform

## Overview

WebDev Academy is a comprehensive web development learning platform built with React, TypeScript, and Vite. The application provides interactive courses, progress tracking, achievements, and a premium subscription model for aspiring web developers. Users can browse courses on HTML/CSS, JavaScript, React, Node.js, and other web technologies while tracking their learning journey through an intuitive dashboard interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- React Router for client-side routing and navigation between pages

**UI Component Strategy**
- Radix UI primitives as the foundation for accessible, unstyled components
- shadcn/ui design system built on top of Radix for pre-styled, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- CSS variables-based theming system supporting light/dark modes via next-themes

**State Management Approach**
- React Query (TanStack Query) for server state management and data fetching
- React Context for theme management
- Local component state for UI interactions
- No global state management library (Redux, Zustand) currently implemented

**Design System**
- Custom color palette using HSL values defined in CSS variables
- Gradient-based primary colors with glow effects for visual appeal
- Consistent spacing, border radius (0.75rem), and shadow tokens
- Inter font family for modern typography

### Application Structure

**Page Organization**
- **Index (Dashboard)**: Overview of learning progress with stats cards and featured courses
- **Courses**: Browse all available courses with filtering by status (in-progress, completed, available)
- **CourseDetail**: Individual course view with modules, lessons, and progress tracking
- **Achievements**: Gamification system displaying unlocked badges and progress toward goals
- **Profile**: User profile management with skills tracking and interests
- **Settings**: Application preferences for notifications and account settings
- **Upgrade**: Premium subscription page with PayPal payment integration

**Routing Strategy**
- Client-side routing with React Router DOM
- Catch-all route redirects to custom 404 page
- Dynamic routing for course details using URL parameters

**Component Architecture**
- Reusable presentational components (CourseCard, StatsCard, Sidebar)
- Page-level components handling business logic
- Shared UI components from shadcn/ui library
- Custom hooks for responsive behavior (use-mobile, use-toast)

### Data Management

**Current Implementation**
- Static course data defined in page components
- Mock progress tracking with hardcoded percentages
- No database integration currently implemented
- Local storage potential for user preferences (not actively used)

**Expected Backend Integration**
- Ready for REST API or GraphQL integration via React Query
- Course enrollment and progress tracking endpoints needed
- User authentication and profile management APIs anticipated
- Achievement/gamification system backend support required

### External Dependencies

**Payment Integration**
- PayPal payment links for premium subscription ($49.99/year)
- Direct PayPal.me integration for simplified checkout
- No complex payment gateway SDK currently integrated

**Advertising**
- Google AdSense integration (publisher ID: ca-pub-6787123558060737)
- Ad slots configured in index.html
- ads.txt file for publisher verification

**Analytics & SEO**
- Open Graph meta tags for social sharing
- Twitter Card integration
- robots.txt configured for search engine crawling
- Semantic HTML for accessibility and SEO

**Development Tools**
- ESLint for code quality with TypeScript support
- PostCSS with Tailwind and Autoprefixer
- Lovable component tagger for development mode
- React Developer Tools compatible

### Configuration Decisions

**TypeScript Configuration**
- Strict mode disabled for faster development
- Unused variables/parameters warnings disabled
- Path aliases (@/) for clean imports
- Separate configs for app and node environments

**Build Configuration**
- Production base path set to root (/)
- Development server on port 5000 with host 0.0.0.0
- allowedHosts: true configured for Replit proxy/iframe compatibility
- SWC plugin for fast React refresh
- Optimized for Replit deployment environment
- Production deployment uses vite preview on port 5000

**Deployment Setup**
- GitHub Actions workflow configured for GitHub Pages deployment (.github/workflows/deploy.yml)
- Autoscale deployment configured in Replit
- Build command: npm run build
- Start command: npm run start (runs vite preview)
- Compatible with Easy-bizz.github.io hosting

**Styling Approach**
- Tailwind prefix-free for cleaner class names
- CSS variables for runtime theme switching
- Component-scoped styles avoided in favor of utility classes
- Gradient utilities and custom animations defined globally