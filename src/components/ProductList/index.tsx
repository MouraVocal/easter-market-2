import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/types/supabase";
import { ProductGrid } from "@/styles/components";

interface ProductListProps {
  title: string;
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function ProductList({
  title,
  products,
  onAddToCart,
}: ProductListProps) {
  return (
    <section>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "1rem",
          color: "#2A4365",
        }}
      >
        {title}
      </h2>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </ProductGrid>
    </section>
  );
}
