import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import Hero from "../components/Hero";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Contra o Filé</title>;
