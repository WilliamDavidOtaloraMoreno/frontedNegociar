import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "3013408000"; // Reemplaza con tu número de teléfono

  const handleClick = () => {
    const message = encodeURIComponent(
      "Se esta comunicando con Negociar.com.co."
    );
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <button className="whatsapp-button" onClick={handleClick}>
        <FaWhatsapp />
        <p>Enviar mensaje de WhatsApp!</p>
      </button>
    </>
  );
};

export default WhatsAppButton;