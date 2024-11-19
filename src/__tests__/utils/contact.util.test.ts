import {
  getWhatsappMessage,
  FORMATTED_PHONE,
  getWhatsappLink,
  IFOOD_LINK,
} from "../../utils/contact.util";

describe("Utility Functions", () => {
  describe("getWhatsappMessage", () => {
    it("should return the default message when no product is passed", () => {
      const result = getWhatsappMessage();
      expect(result).toBe(
        encodeURIComponent("Olá! Gostaria de fazer um pedido.")
      );
    });

    it("should return the personalized message when a product is passed", () => {
      const product = { title: "Pizza", size: "M" };
      const result = getWhatsappMessage(product);
      expect(result).toBe(
        encodeURIComponent(
          "Olá! Gostaria de fazer um pedido de Pizza tamanho M."
        )
      );
    });
  });

  describe("FORMATTED_PHONE", () => {
    it("should correctly format the phone number", () => {
      expect(FORMATTED_PHONE).toBe("(16) 98765-1234");
    });
  });

  describe("getWhatsappLink", () => {
    it("should return the default WhatsApp link without product information", () => {
      const result = getWhatsappLink();
      expect(result).toBe(
        `https://wa.me/5516987651234?text=${encodeURIComponent(
          "Olá! Gostaria de fazer um pedido."
        )}`
      );
    });

    it("should return the WhatsApp link with product information", () => {
      const product = { title: "Bolo", size: "P" };
      const result = getWhatsappLink(product);
      expect(result).toBe(
        `https://wa.me/5516987651234?text=${encodeURIComponent(
          "Olá! Gostaria de fazer um pedido de Bolo tamanho P."
        )}`
      );
    });
  });

  describe("IFOOD_LINK", () => {
    it("should contain the correct link for iFood", () => {
      expect(IFOOD_LINK).toBe(
        "https://www.ifood.com.br/delivery/teresopolis-rj/jaya-culinaria-natural-varzea/ead9bf5e-b4ec-4e8a-b37c-2f1d01a06271"
      );
    });
  });
});
