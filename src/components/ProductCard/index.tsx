import {
  Button,
  ProductCard as Card,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "@/styles/components";
import { PriceContainer } from "./styles";
import { ProductCardProps } from "./types";

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card>
      <ProductImage src={product.image_url} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <PriceContainer>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <Button onClick={() => onAddToCart(product)}>Add to Cart</Button>
      </PriceContainer>
    </Card>
  );
}
