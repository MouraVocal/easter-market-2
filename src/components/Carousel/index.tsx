import { useState, useEffect } from "react";
import { Product } from "@/types/supabase";
import { ProductCard } from "../ProductCard";
import {
  CarouselContainer,
  CarouselTrack,
  CarouselSlide,
  CarouselButton,
  CarouselDots,
  CarouselDot,
} from "./styles";

interface CarouselProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export function Carousel({ products, onAddToCart }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isAutoPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <CarouselContainer
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <CarouselTrack
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {products.map((product) => (
          <CarouselSlide key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </CarouselSlide>
        ))}
      </CarouselTrack>

      <CarouselButton className="prev" onClick={handlePrevSlide}>←</CarouselButton>
      <CarouselButton className="next" onClick={handleNextSlide}>→</CarouselButton>

      <CarouselDots>
        {products.map((_, index) => (
          <CarouselDot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselDots>
    </CarouselContainer>
  );
}
