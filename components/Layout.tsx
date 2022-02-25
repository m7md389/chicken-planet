import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import layoutStyles from "../styles/Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <link rel="icon" href="/logo.png" />
      </Head>

      <header>
        <Navbar />
      </header>
      <main className={layoutStyles.main}>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
