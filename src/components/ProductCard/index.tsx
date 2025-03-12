import { Button, ProductCard as Card } from "@/styles/components";
import {
  PriceContainer,
  ProductDescription,
  ProductImage,
  ProductPrice,
  ProductTitle,
} from "./styles";
import { ProductCardProps } from "./types";
import { translations } from "@/constants/translations";

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card>
      <ProductImage src={product.image_url} alt={product.name} />
      <ProductTitle>{product.name}</ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <PriceContainer>
        <ProductPrice>{translations.common.price}{product.price.toFixed(2)}</ProductPrice>
        <Button onClick={() => onAddToCart(product)}>{translations.common.addToCart}</Button>
      </PriceContainer>
    </Card>
  );
}
