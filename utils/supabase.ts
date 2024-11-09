import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.APP_URL;
const supabaseKey = process.env.APP_KEY;
console.log(`supabaseUrl = ${supabaseUrl}`)
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or Key is missing in environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey,{ db: { schema: 'portfolio' } });
