import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({
    lang: "pt-BR",
  });

  setHeadComponents([
    <meta
      key="description"
      name="description"
      content="Saúde vegana ao seu alcance, com sabor e consciência local."
    />,
    <meta
      key="keywords"
      name="keywords"
      content="Contra o Filé, restaurante vegano, comida vegana, comida saudável"
    />,
    <meta key="author" name="author" content="Contra o Filé" />,
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />,
  ]);
};
