# Portfolio Website - Visca Gyebi Afram

## Overview

This is a modern, single-page portfolio website for Visca Gyebi Afram, a Flutter and Dart developer. The application showcases professional experience, technical skills, projects, and provides a contact interface. Built as a full-stack web application using React with TypeScript on the frontend and Express.js on the backend, it features a clean, Material Design-inspired aesthetic that reflects Flutter development principles.

The portfolio is designed to be responsive across all devices, with smooth scroll animations, theme toggling (light/dark mode), and interactive components. The site includes sections for hero introduction, statistics, about me, skills showcase, project portfolio, experience timeline, and contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing

**UI Component System:**
- shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming with light/dark mode support
- Material Design principles with Flutter-inspired aesthetics per design guidelines

**State Management:**
- React Query (TanStack Query) for server state management and data fetching
- React Context API for theme management (ThemeProvider)
- Local component state with React hooks

**Design System:**
- Typography: Inter/DM Sans for body text, Fira Code for code snippets
- Spacing: Standardized Tailwind units (4, 8, 12, 16, 20, 24, 32)
- Color System: HSL-based color tokens with CSS custom properties
- Responsive breakpoints: Mobile-first approach with md: (768px) and lg: breakpoints
- Animation: Intersection Observer-based scroll animations via custom useInView hook

**Project Structure:**
- `/client/src/components` - Reusable UI components (Navbar, Footer, sections)
- `/client/src/components/ui` - shadcn/ui base components
- `/client/src/pages` - Page-level components (Portfolio, NotFound)
- `/client/src/hooks` - Custom React hooks (use-in-view, use-mobile, use-toast)
- `/client/src/lib` - Utility functions and query client configuration

### Backend Architecture

**Server Framework:**
- Express.js with TypeScript for the HTTP server
- ES Modules (type: "module") throughout the codebase
- Custom logging middleware for API request tracking

**Development vs Production:**
- Development: Vite middleware integration for HMR and SSR
- Production: Static file serving from compiled dist/public directory
- Environment-aware build process (NODE_ENV checks)

**Storage Layer:**
- In-memory storage implementation (MemStorage class) as the default storage interface
- IStorage interface defines CRUD operations for users and contact messages
- Designed to be swappable with database implementations (PostgreSQL prepared via Drizzle config)

**API Design:**
- RESTful API structure with `/api` prefix convention
- JSON request/response bodies with automatic parsing
- Raw body capture for webhook verification support

### Data Storage Solutions

**Database Schema (Prepared but not actively used):**
- Drizzle ORM configured for PostgreSQL with Neon Database serverless driver
- Schema definitions in `/shared/schema.ts`:
  - `users` table: id (UUID), username (unique), password
  - `contact_messages` table: id (UUID), name, email, message, createdAt timestamp
- Zod schemas for runtime validation (insertUserSchema, insertContactMessageSchema)
- Migration support configured with drizzle-kit

**Current Storage:**
- In-memory Map-based storage for development/demo purposes
- Implements the same IStorage interface for easy migration to persistent storage

### Authentication and Authorization

**Current State:**
- Authentication infrastructure prepared but not implemented
- User schema exists with username/password fields
- No active session management or protected routes
- Future implementation would leverage express-session with connect-pg-simple

### External Dependencies

**Third-Party UI Libraries:**
- @radix-ui/* packages - Accessible, unstyled component primitives (40+ components)
- class-variance-authority - Type-safe component variant management
- cmdk - Command palette component
- embla-carousel-react - Carousel/slider functionality
- lucide-react - Icon library
- react-icons - Additional icon sets (SiGithub, SiLinkedin)

**Form Management:**
- @hookform/resolvers - Validation resolver for React Hook Form
- Zod integration for schema-based form validation

**Utilities:**
- clsx & tailwind-merge - Conditional className utilities
- date-fns - Date formatting and manipulation
- nanoid - Unique ID generation

**Development Tools:**
- @replit/vite-plugin-* - Replit-specific development enhancements
- tsx - TypeScript execution for development server
- esbuild - Fast bundling for production builds

**Database & Backend:**
- @neondatabase/serverless - PostgreSQL driver for Neon Database
- drizzle-orm & drizzle-zod - ORM and schema validation
- connect-pg-simple - PostgreSQL session store (prepared for future use)

**Asset Management:**
- Static assets stored in `/attached_assets/generated_images/`
- Vite alias `@assets` configured for easy imports
- Images include profile photo and project screenshots