# Professional Portfolio Website

## Overview

This is a full-stack professional portfolio website built with React/TypeScript frontend and Express.js backend. The application showcases an AI Engineer's professional profile with modern dark theme design, responsive layout, and interactive contact functionality. The site features multiple sections including hero, about, skills, projects, education, and contact, all built as reusable React components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Styling**: Tailwind CSS with custom CSS variables for dark theme and gradient highlights
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **API Design**: RESTful API structure with JSON request/response format
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes
- **Development**: Hot reload with Vite integration for seamless full-stack development

### Data Storage Solutions
- **Database**: PostgreSQL as primary database (configured via Drizzle)
- **ORM**: Drizzle ORM for type-safe database operations and schema management
- **Migrations**: Drizzle Kit for database schema migrations and version control
- **Fallback Storage**: In-memory storage implementation for development/testing scenarios
- **Connection**: Neon Database serverless PostgreSQL for production deployment

### Component Architecture
- **Layout**: Modular section-based components (Navigation, Hero, About, Skills, Projects, Education, Contact, Footer)
- **UI Library**: Comprehensive set of reusable UI components with consistent styling
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities
- **Theme System**: Dark theme with CSS custom properties and gradient accents
- **Typography**: Custom font loading with Inter font family and multiple font options

### API Structure
- **Contact Endpoint**: POST /api/contact for form submissions with Zod validation
- **Admin Endpoint**: GET /api/contact for retrieving submissions (admin functionality)
- **Request Validation**: Schema-based validation using Zod for data integrity
- **Response Format**: Consistent JSON responses with success/error status and messages

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Database URL**: Environment-based configuration for different deployment environments

### UI and Styling
- **Radix UI**: Headless UI component primitives for accessibility and customization
- **Tailwind CSS**: Utility-first CSS framework for rapid styling and responsive design
- **Lucide React**: Icon library for consistent iconography throughout the application

### Development Tools
- **TypeScript**: Static type checking for improved code quality and developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS post-processing for Tailwind CSS and autoprefixer support

### Form and Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation library for runtime type checking
- **Hookform Resolvers**: Integration between React Hook Form and Zod validation

### Image Assets
- **Unsplash**: External image service for placeholder professional photos and workspace images
- **Responsive Images**: Optimized image loading with proper alt text for accessibility

### Fonts and Typography
- **Google Fonts**: Multiple font families including Inter, DM Sans, Fira Code, and Geist Mono
- **Font Loading**: Preconnect and preload strategies for optimal font performance

### Development Environment
- **Replit Integration**: Specialized tooling for Replit development environment including error overlays and cartographer plugin
- **Hot Module Replacement**: Fast development workflow with instant code changes