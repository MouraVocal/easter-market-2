import { WhatsAppBalloon, WhatsAppButton } from "@/styles/components";
import { BalloonContent, BalloonIcon, BalloonText, CloseButton } from "./styles";

interface WhatsAppContactProps {
  whatsappNumber: number;
  showBalloon: boolean;
  onBalloonClose: () => void;
  onWhatsAppClick: () => void;
}

export function WhatsAppContact({
  showBalloon,
  onBalloonClose,
  onWhatsAppClick,
}: WhatsAppContactProps) {
  return (
    <>
      {showBalloon && (
        <WhatsAppBalloon>
          <BalloonContent>
            <BalloonText>
              <BalloonIcon>👋</BalloonIcon>
              Não achou o que queria? Fale comigo no whatsapp!
            </BalloonText>
            <CloseButton onClick={onBalloonClose}>×</CloseButton>
          </BalloonContent>
        </WhatsAppBalloon>
      )}
      <WhatsAppButton onClick={onWhatsAppClick}>💬 WhatsApp</WhatsAppButton>
    </>
  );
}
