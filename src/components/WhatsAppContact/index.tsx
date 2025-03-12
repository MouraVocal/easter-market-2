import { WhatsAppBalloon, WhatsAppButton } from "@/styles/components";

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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p>Não achou o que queria? Fale comigo no whatsapp!</p>
            <button
              onClick={onBalloonClose}
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
      <WhatsAppButton onClick={onWhatsAppClick}>💬 WhatsApp</WhatsAppButton>
    </>
  );
}
