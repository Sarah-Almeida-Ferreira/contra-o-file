import * as React from "react";
import { HeadFC, PageProps } from "gatsby";
import { LuVegan } from "react-icons/lu";

import "../styles/index.css";


const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found-page">
      <div className="not-found-container">
        <h1 className="title" data-testid="not-found-title">4<LuVegan />4</h1>
        <p>
          Desculpe, não encontramos a página que você está procurando.
        </p>
        <a className="link" href="/">Ir para o site</a>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title key="not-found-title">Contra o Filé</title>;
