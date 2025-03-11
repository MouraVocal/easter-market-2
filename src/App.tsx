import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useEffect, useState } from "react";
import {
  getHighlightedProducts,
  getProducts,
  getSiteSettings,
} from "./lib/supabase";
import {
  Button,
  CartButton,
  CartCount,
  Container,
  PageSubtitle,
  PageTitle,
  ProductCard,
  ProductDescription,
  ProductGrid,
  ProductImage,
  ProductPrice,
  ProductTitle,
  WhatsAppBalloon,
  WhatsAppButton,
} from "./styles/components";
import { Product, SiteSettings } from "./types/supabase";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [highlightedProducts, setHighlightedProducts] = useState<Product[]>([]);
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [showWhatsAppBalloon, setShowWhatsAppBalloon] = useState(true);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, highlightedData, settings] = await Promise.all([
          getProducts(),
          getHighlightedProducts(),
          getSiteSettings(),
        ]);

        setProducts(productsData);
        setHighlightedProducts(highlightedData);
        setSiteSettings(settings);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const handleWhatsAppClick = () => {
    if (siteSettings?.whatsapp_number) {
      window.open(`https://wa.me/${siteSettings.whatsapp_number}`, "_blank");
    }
  };

  return (
    <div style={{ background: "#F0F9FF", minHeight: "100vh" }}>
      <NavigationMenu.Root>
        <Container>
          <NavigationMenu.List
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem 0",
            }}
          >
            <NavigationMenu.Item>
              <h1 style={{ color: "#2A4365" }}>
                {siteSettings?.title || "Easter Market"}
              </h1>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <CartButton>
                🛒 Cart
                {cartItems.length > 0 && (
                  <CartCount>{cartItems.length}</CartCount>
                )}
              </CartButton>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </Container>
      </NavigationMenu.Root>

      <Container>
        <PageTitle>{siteSettings?.title}</PageTitle>
        <PageSubtitle>{siteSettings?.subtitle}</PageSubtitle>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
              color: "#2A4365",
            }}
          >
            Featured Products
          </h2>
          <ProductGrid>
            {highlightedProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image_url} alt={product.name} />
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </ProductCard>
            ))}
          </ProductGrid>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              margin: "2rem 0 1rem",
              color: "#2A4365",
            }}
          >
            All Products
          </h2>
          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id}>
                <ProductImage src={product.image_url} alt={product.name} />
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDescription>{product.description}</ProductDescription>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                  <Button onClick={() => addToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </ProductCard>
            ))}
          </ProductGrid>
        </section>
      </Container>

      {showWhatsAppBalloon && (
        <WhatsAppBalloon>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Não achou o que queria? Fale comigo no whatsapp!</p>
            <button
              onClick={() => setShowWhatsAppBalloon(false)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2rem",
              }}
            >
              ×
            </button>
          </div>
        </WhatsAppBalloon>
      )}

      <WhatsAppButton onClick={handleWhatsAppClick}>💬 WhatsApp</WhatsAppButton>
    </div>
  );
}

export default App;
