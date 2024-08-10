import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pclzvpjpbppbztdcdjzd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbHp2cGpwYnBwYnp0ZGNkanpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MDk1NTgsImV4cCI6MjAzNTk4NTU1OH0.IzpCje3Xfa6pio5qFozrkYk0P0qK1s1FxQxVl09nINI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
