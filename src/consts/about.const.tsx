import { LuVegan } from "react-icons/lu";
import { GiCorn } from "react-icons/gi";
import { FaHandsHelping } from "react-icons/fa";
import React from "react";

export const ABOUT = {
  title: "Sobre nós",
  text: "Somos um restaurante vegano com a proposta de ser saudável e com custo acessível.",
  items: [
    {
      title: "Comida vegana saudável e fresca",
      text: "Não importa se você começou ontem no veganismo ou já está no caminho a tempos, temos algo que vai agradar o seu paladar.",
      icon: <LuVegan />,
    },
    {
      title: "Produtores locais e orgânicos",
      text: "Trabalhamos com produtos de agricultura familiar e incentivamos a produção de comida local.",
      icon: <GiCorn />,
    },
    {
      title: "Acessível a todos",
      text: "Comida vegana não precisa ser cara e inacessível, o Contra o Filé tenta democratizar o acesso a esse tipo de produto.",
      icon: <FaHandsHelping />,
    },
  ]
};
