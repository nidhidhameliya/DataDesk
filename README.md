# DataDesk - SQL Practice Platform

## 🌐 Live Demo

Live Application:
https://data-desk-om5e8xvh7-nidhidhameliyas-projects.vercel.app

DataDesk is a browser-based SQL practice platform designed for software engineering candidates preparing for interviews and placement rounds. It lets you solve real SQL problems directly in the browser using an in-memory SQLite engine powered by sql.js and Web Workers.

## What this project includes

- Practice SQL on 10+ built-in databases such as Airlines, Banking, E-commerce, Hospital, HR, Library, Movies, Music, Sports, and University
- Work through progressive SQL questions covering joins, aggregations, window functions, subqueries, CTEs, and more
- Use a schema-aware Monaco editor with autocomplete, result tables, query history, and table previews
- Explore database schemas with ER-style visuals and join analysis tools
- Try interview-focused mode and a sandbox for uploading your own CSV or SQLite datasets
- Track progress and sync learning activity with Supabase-backed authentication and profile features

## Tech stack

- React 19 and Vite 8 for the frontend experience
- Monaco Editor for the SQL editor
- sql.js with WebAssembly for browser-based SQLite execution
- Web Workers to keep the UI responsive during heavy SQL operations
- Supabase for authentication and progress syncing
- React Router, lucide-react, and custom CSS for the interface

## Getting started

1. Clone the repository
   ```bash
   git clone https://github.com/nidhidhameliya/DataDesk.git
   cd DataDesk
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a local environment file
   ```bash
   cp .env.example .env
   ```

   Add your Supabase credentials:

   ```md
   3. Create a local environment file

   Create a `.env` file in the project root:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   ```

   With:

   ```env
   VITE_SUPABASE_URL=https://dofbulrrxtlxvyknjkcx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZmJ1bHJyeHRseHZ5a25qa2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MzIzOTIsImV4cCI6MjEwMDIwODM5Mn0.7mwOT7dmBH1ZwwPXFjyOub9W-QbS0MW27ImDnqyaosg
   ```

   For deployment, keep the environment variables in your local `.env` file, add the same values in Vercel Environment Variables, and do not commit any `.env` file to GitHub.

4. Start the development server
   ```bash
   npm run dev
   ```

   The app should open at http://localhost:5173

5. Build for production
   ```bash
   npm run build
   ```

## Supabase setup

If you want authenticated progress syncing, make sure your Supabase project has the required tables and policies. The SQL schema for user progress is available in the repository under [supabase-schema.sql](supabase-schema.sql).

## Project structure

- [src/pages](src/pages) – main app pages such as Home, Practice, and Custom Dataset
- [src/features](src/features) – practice, interview, AI, auth, and gamification modules
- [src/data](src/data) – database schemas and SQL questions
- [src/hooks](src/hooks) – reusable app logic for auth, SQL execution, and gamification
- [supabase](supabase) – database migration and schema files

## License

This project is for educational and interview-preparation use.
