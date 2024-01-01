import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://qoqjthmhfgmumhsixzxb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvcWp0aG1oZmdtdW1oc2l4enhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEzNDcxMDgsImV4cCI6MjAxNjkyMzEwOH0.kI11t6yFPc_YVVrrR1NjCwQuYg-0FoDUUB_oq6oe7RQ';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
