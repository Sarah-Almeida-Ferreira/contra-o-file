type Product = {
  title: string;
  size: string;
};
const PHONE = "5516987651234";

export const getWhatsappMessage = (product?: Product) => {
  const message = product ? ` de ${product.title} tamanho ${product.size}` : "";
  return encodeURIComponent(`Olá! Gostaria de fazer um pedido${message}.`);
};

export const FORMATTED_PHONE = PHONE.replace("55", "").replace(
  /(\d{2})(\d{5})(\d{4})/,
  "($1) $2-$3"
);

export const IFOOD_LINK =
  "https://www.ifood.com.br/delivery/teresopolis-rj/jaya-culinaria-natural-varzea/ead9bf5e-b4ec-4e8a-b37c-2f1d01a06271";

export const getWhatsappLink = (product?: Product) => {
  const message = getWhatsappMessage(product);
  return `https://wa.me/${PHONE}?text=${message}`;
};
