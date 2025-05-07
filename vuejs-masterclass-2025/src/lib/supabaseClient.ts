import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);


//will import and hold environment variables
console.log(import.meta.env.VITE_SUPABASE_URL); 
console.log(import.meta.env.VITE_SUPABASE_KEY); 