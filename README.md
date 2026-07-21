# DataDesk (SQL Practice Environment)

## 🌐 Live Demo

🚀 Live Application:  
https://data-desk-jgkjjokwm-nidhidhameliyas-projects.vercel.app/

---

DataDesk is a professional, browser-based SQL practice platform built specifically for software engineering candidates preparing for technical interviews, coding rounds, and placement drives.

The platform allows users to solve complex, real-world SQL problems directly inside the browser without requiring any backend database server. It uses **WebAssembly-powered SQLite (sql.js)** with **Dedicated Web Workers** to create an isolated, high-performance SQL execution environment for every user session.

---

# 🚀 Key Features

## ⚡ Beast-Mode Performance Architecture

### Non-Blocking SQL Execution
- Database initialization and heavy SQL computations run inside dedicated Web Workers.
- Keeps the React interface smooth and responsive even during complex queries.

### LRU Query Caching Layer
- Implements query-level caching to instantly return previously executed queries.
- Reduces unnecessary SQL computation and improves execution speed.

### Optimized Frontend Architecture
- Dynamic module loading using React lazy loading and Suspense.
- Heavy modules like Monaco Editor, Schema Viewer, and Dashboard components are loaded only when required.

### Production-Optimized Builds
- Vite-based optimized bundling.
- Efficient dependency chunking for faster production deployments.

---

# 🗄 Core SQL Execution Engine

## In-Browser SQLite Runtime

Execute real SQL queries directly in the browser using:

- SQLite powered by WebAssembly
- sql.js execution engine
- Dedicated Web Workers

Supports advanced SQL concepts:

- Complex JOIN operations
- Aggregations
- Window Functions
- Subqueries
- Common Table Expressions (CTEs)
- Query Optimization

---

## 📚 10+ Real-World Database Systems

Practice SQL on realistic, normalized datasets including:

- ✈️ Airlines
- 🏦 Banking
- 🛒 E-commerce
- 🏥 Hospital
- 👥 Human Resources
- 📚 Library
- 🎬 Movies
- 🎵 Music
- 🏆 Sports
- 🎓 University

Each database includes structured schemas and interview-focused SQL problems.

---

# 🧠 Smart SQL Learning Features

## Schema-Aware Monaco SQL Editor

Powered by Monaco Editor (VS Code's editing engine):

- Intelligent SQL autocomplete
- Table and column suggestions
- Syntax highlighting
- Error detection
- Professional coding experience

---

## Query Execution Plan (EXPLAIN)

Understand how SQLite executes queries:

- Query planning visualization
- Table scan analysis
- Performance optimization practice
- Database indexing concepts

---

## Interactive ER Diagrams

Explore database structures visually:

- Entity Relationship diagrams
- Table relationships
- Foreign key connections
- Interactive zoom and navigation

---

## Query History

Automatically stores recently executed queries:

- Retrieve previous SQL solutions
- Re-run complex queries
- Review learning progress

---

## Table Data Preview

Before writing queries:

- Inspect sample table records
- Understand database structure
- Explore relationships between tables

---

# 🎯 Gamification & Progress Tracking

## Cloud Progress Sync

Integrated with Supabase for:

- Secure authentication
- User profiles
- Progress synchronization
- Completed question tracking

---

## Analytics Dashboard

Personal learning dashboard with:

- SQL practice statistics
- Question completion tracking
- Skill progression
- Activity monitoring
- Learning achievements

---

## Hint & Solution System

For difficult problems:

- Progressive hints
- Step-by-step guidance
- Complete SQL solutions when required

---

## Sandbox Mode

A safe SQL playground where users can:

- Write custom SQL queries
- Execute INSERT, UPDATE, DELETE statements
- Experiment freely
- Reset database state instantly

---

# 🏗 Architecture & Design

## Modern Frontend Architecture

- React Router based navigation
- Protected routes for authenticated users
- Modular feature-based structure
- Optimized rendering performance

Protected sections include:

```
/practice
/profile
/guide
```

---

## Premium Design System

Built with:

- Custom Vanilla CSS design system
- Responsive layouts
- Minimal modern interface
- Full Dark Mode support

---

## Isolated Data Layer

Database definitions, schemas, and SQL challenges are separated from UI components for:

- Better maintainability
- Smaller bundles
- Cleaner architecture

---

# 🛠 Tech Stack

## Frontend

- React 19
- Vite 8
- React Router
- Vanilla CSS

## SQL Editor

- Monaco Editor

## Database Engine

- sql.js
- WebAssembly SQLite
- Dedicated Web Workers

## Authentication & Backend Services

- Supabase
- PostgreSQL
- Authentication
- Row Level Security Policies

## Visualization

- Mermaid.js
- react-zoom-pan-pinch

---

# 💻 Getting Started

## Clone Repository

```bash
git clone https://github.com/nidhidhameliya/DataDesk.git

cd DataDesk
```

---

## Install Dependencies

```bash
npm install
```

---

## Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

⚠️ Do not commit `.env` files or secret credentials to GitHub.

---

## Supabase Setup

To enable authentication and progress tracking:

1. Create a Supabase project.
2. Add your environment variables.
3. Run the provided database schema:

```
supabase-schema.sql
```

This creates the required user progress tables and policies.

---

## Run Development Server

```bash
npm run dev
```

The application will start locally:

```
http://localhost:5174
```

---

## Build Production Version

```bash
npm run build
```

The project is optimized for deployment on:

- Vercel
- Netlify
- Static hosting platforms

---

# 📂 Project Structure

```
DataDesk
│
├── src
│   ├── pages          # Application pages
│   ├── features       # Practice, Auth, AI, Gamification modules
│   ├── data           # Database schemas and SQL questions
│   ├── hooks          # Reusable application logic
│   └── components     # UI components
│
├── supabase           # Database migrations and schema files
│
└── public             # Static assets
```

---

# 📜 License

This project is developed for educational purposes and SQL interview preparation.

---

⭐ Built to help software engineering candidates master SQL through realistic, hands-on database practice.