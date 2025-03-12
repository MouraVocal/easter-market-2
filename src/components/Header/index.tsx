import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CartButton, CartCount, Container } from "@/styles/components";
import { NavigationList, Title } from "./styles";
import { HeaderProps } from "./types";

export function Header({ title, cartItems }: HeaderProps) {
  return (
    <NavigationMenu.Root>
      <Container>
        <NavigationList>
          <NavigationMenu.Item>
            <Title>{title || "Easter Market"}</Title>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <CartButton>
              🛒 Cart
              {cartItems.length > 0 && (
                <CartCount>{cartItems.length}</CartCount>
              )}
            </CartButton>
          </NavigationMenu.Item>
        </NavigationList>
      </Container>
    </NavigationMenu.Root>
  );
}
