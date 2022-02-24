import React from "react";
import Navbar from "./Navbar";
import homeStyles from "../styles/Home.module.css";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={homeStyles.container}>
        <main className={homeStyles.main}>{children}</main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
