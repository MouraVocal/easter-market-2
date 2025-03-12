import { createClient } from '@supabase/supabase-js';
import { Product, SiteSettings } from '@/types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
};

export const getHighlightedProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_highlighted', true)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as Product[];
};

export const getSiteSettings = async () => {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*')
    .single();

  if (error) throw error;
  return data as SiteSettings;
};