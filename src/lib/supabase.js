import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://dofbulrrxtlxvyknjkcx.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvZmJ1bHJyeHRseHZ5a25qa2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MzIzOTIsImV4cCI6MjEwMDIwODM5Mn0.7mwOT7dmBH1ZwwPXFjyOub9W-QbS0MW27ImDnqyaosg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
