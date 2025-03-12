import "./App.css";
import { useEffect, useState } from "react";
import {
  getHighlightedProducts,
  getProducts,
  getSiteSettings,
} from "./lib/supabase";
import {
  AppContainer,
  Container,
  PageSubtitle,
  PageTitle,
} from "./styles/components";
import { Product, SiteSettings } from "./types/supabase";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { WhatsAppContact } from "./components/WhatsAppContact";
import { Tabs } from "./components/Tabs";
import { Carousel } from "./components/Carousel";

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

  return (
    <AppContainer>
      <Header
        title={siteSettings?.title || "Easter Market"}
        cartItems={cartItems}
      />

      <Container>
        <PageTitle>{siteSettings?.title}</PageTitle>
        <PageSubtitle>{siteSettings?.subtitle}</PageSubtitle>

        <Tabs
          tabs={[
            {
              label: "Produtos em Destaque",
              content: (
                <Carousel
                  products={highlightedProducts}
                  onAddToCart={addToCart}
                />
              ),
            },
            {
              label: "Todos os Produtos",
              content: (
                <ProductList
                  title="Catálogo Completo"
                  products={products}
                  onAddToCart={addToCart}
                />
              ),
            },
          ]}
        />
      </Container>

      <WhatsAppContact
        whatsappNumber={siteSettings?.whatsapp_number || 0}
        showBalloon={showWhatsAppBalloon}
        onBalloonClose={() => setShowWhatsAppBalloon(false)}
      />
    </AppContainer>
  );
}

export default App;
