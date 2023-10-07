import { createClient } from "@supabase/supabase-js";

const url = 'https://vusklxcvxrupqfachjbm.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1c2tseGN2eHJ1cHFmYWNoamJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTkzODgsImV4cCI6MjAwNDA3NTM4OH0.0I2DHUwJtOc4KmokQiFN5LeTyAENOWbExMs5Ltq1YVw';

export const database = createClient(url,key);  