import { WhatsAppButton, WhatsAppBalloon } from "@/styles/components";
import { FaWhatsapp } from "react-icons/fa";
import { translations } from "@/constants/translations";
import { BalloonContent, BalloonText, BalloonIcon, CloseButton } from "./styles";

interface WhatsAppContactProps {
  whatsappNumber: number;
  showBalloon: boolean;
  onBalloonClose: () => void;
}

export function WhatsAppContact({
  whatsappNumber,
  showBalloon,
  onBalloonClose,
}: WhatsAppContactProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(translations.whatsapp.message);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      {showBalloon && (
        <WhatsAppBalloon>
          <BalloonContent>
            <BalloonText>
              <BalloonIcon>👋</BalloonIcon>
              {translations.whatsapp.balloon}
            </BalloonText>
            <CloseButton onClick={onBalloonClose}>×</CloseButton>
          </BalloonContent>
        </WhatsAppBalloon>
      )}
      <WhatsAppButton onClick={handleWhatsAppClick}>
        <FaWhatsapp size={24} />
        {translations.whatsapp.button}
      </WhatsAppButton>
    </>
  );
}
