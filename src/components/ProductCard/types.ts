import { Product } from "@/types/supabase";

export interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}