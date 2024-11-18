import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import "../styles/index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage: React.FC<PageProps> = () => {
  return (<>
    <Header />
    <main className="main">
      <Hero />
      <About />
      <Menu />
      <Contact />
    </main>
    <Footer />
  </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Contra o Filé</title>;
