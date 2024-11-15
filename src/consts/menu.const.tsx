import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const MENU = [
  {
    title: "Bowl de Quinoa com Legumes Assados",
    description:
      "Uma base de quinoa macia com legumes assados no forno, incluindo abóbora, cenoura, batata-doce e pimentões coloridos. Coberto com sementes de girassol e molho de tahine.",
    prices: [
      { label: "P", price: 25.0 },
      { label: "M", price: 32.0 },
      { label: "G", price: 40.0 },
    ],
    image: <StaticImage alt="Imagem meramente ilustrativa" src="../assets/quinoa-bowl.jpg" />
  },
  {
    title: "Risoto de Cogumelos e Espinafre",
    description:
      "Risoto cremoso feito com arroz arbóreo, cogumelos frescos (shitake e paris) e folhas de espinafre, finalizado com castanhas de caju trituradas para um toque crocante.",
    prices: [
      { label: "P", price: 28.0 },
      { label: "M", price: 35.0 },
      { label: "G", price: 45.0 },
    ],
    image: <StaticImage alt="Imagem meramente ilustrativa" src="../assets/risotto.jpg" />
  },
  {
    title: "Wrap de Falafel com Homus e Salada",
    description:
      "Wrap de pão integral recheado com bolinhos de falafel, homus, alface, tomate e cebola roxa, servido com molho tahine e ervas frescas.",
    prices: [
      { label: "P", price: 20.0 },
      { label: "M", price: 26.0 },
      { label: "G", price: 33.0 },
    ],
    image: <StaticImage alt="Imagem meramente ilustrativa" src="../assets/wrap-with-falafel.jpg" />
  },
  {
    title: "Curry de Grão-de-Bico com Arroz Integral",
    description:
      "Curry aromático feito com grão-de-bico, leite de coco, pimentão, tomate e espinafre, temperado com especiarias como cúrcuma e cominho. Acompanha arroz integral.",
    prices: [
      { label: "P", price: 27.0 },
      { label: "M", price: 34.0 },
      { label: "G", price: 42.0 },
    ],
    image: <StaticImage alt="Imagem meramente ilustrativa" src="../assets/curry.jpg" />
  },
  {
    title: "Salada Mediterrânea com Tofu Grelhado",
    description:
      "Uma refrescante salada com mix de folhas, tomate cereja, pepino, azeitonas pretas e tofu grelhado, servida com molho de limão e azeite de oliva.",
    prices: [
      { label: "P", price: 22.0 },
      { label: "M", price: 29.0 },
      { label: "G", price: 36.0 },
    ],
    image: <StaticImage alt="Imagem meramente ilustrativa" src="../assets/salad.jpg" />
  },
];
