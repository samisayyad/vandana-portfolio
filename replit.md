# Portfolio Application

## Overview

This is a full-stack portfolio application built with React, Express.js, and PostgreSQL. It showcases a personal portfolio website for Vandana Patil, an engineering student, with features including project displays, skills showcase, education information, and a contact form. The application uses modern web technologies and follows a clean, component-based architecture.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Built-in session handling with connect-pg-simple

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend API
├── shared/          # Shared types and schemas
├── components.json  # shadcn/ui configuration
├── drizzle.config.ts # Database configuration
└── vite.config.ts   # Frontend build configuration
```

## Key Components

### Frontend Components
- **Portfolio Page**: Main landing page with all sections
- **Navigation**: Smooth scrolling navbar with mobile support
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Personal information and qualities
- **Skills Section**: Technical skills with progress indicators
- **Projects Section**: Portfolio projects showcase
- **Education Section**: Academic background and achievements
- **Contact Form**: Interactive contact form with validation
- **UI Components**: Comprehensive shadcn/ui component library

### Backend Components
- **API Routes**: RESTful endpoints for contact form and data retrieval
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: Drizzle ORM schema for users and contacts
- **Development Server**: Vite integration for hot reloading

## Data Flow

### Contact Form Submission
1. User fills out contact form in React component
2. Form data is validated using Zod schemas
3. React Query mutation sends POST request to `/api/contact`
4. Express.js route validates data and stores in database
5. Success/error response sent back to frontend
6. Toast notification displays result to user

### Data Validation
- **Frontend**: React Hook Form with Zod resolvers
- **Backend**: Zod schemas for request validation
- **Database**: Drizzle ORM with PostgreSQL constraints

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Type-safe CSS variants

### Database and ORM
- **Drizzle ORM**: TypeScript ORM for PostgreSQL
- **Neon Database**: Serverless PostgreSQL provider
- **Connect PG Simple**: PostgreSQL session store

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for production
- **Replit Plugins**: Development environment integration

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with Express.js API
- **Hot Reloading**: Automatic refresh on file changes
- **Environment Variables**: DATABASE_URL for database connection
- **Logging**: Custom request logging middleware

### Production Build
- **Frontend**: Vite builds React app to static files
- **Backend**: ESBuild bundles Express.js server
- **Database**: Drizzle migrations for schema management
- **Static Serving**: Express.js serves built React application

### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle ORM
- **Migrations**: Generated and applied using `drizzle-kit`
- **Connection**: Serverless connection to Neon PostgreSQL
- **Development**: In-memory storage fallback for testing

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar services that support Node.js applications with PostgreSQL databases.