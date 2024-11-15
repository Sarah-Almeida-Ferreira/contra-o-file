import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="main">
      <Hero />
      <About />
      <Menu />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Contra o Filé</title>;
