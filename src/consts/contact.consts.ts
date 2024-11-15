const MESSAGE = encodeURIComponent("Olá! Gostaria de fazer um pedido.");

export const PHONE = "5516987651234";
export const FORMATTED_PHONE = PHONE.replace("55", "").replace(
  /(\d{2})(\d{5})(\d{4})/,
  "($1) $2-$3"
);
export const WHATSAPP_LINK = `https://wa.me/${PHONE}?text=${MESSAGE}`;
export const IFOOD_LINK =
  "https://www.ifood.com.br/delivery/teresopolis-rj/jaya-culinaria-natural-varzea/ead9bf5e-b4ec-4e8a-b37c-2f1d01a06271";
