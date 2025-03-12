import { Product } from "@/types/supabase";

export interface HeaderProps {
  title: string;
  cartItems: Product[];
}