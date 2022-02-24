import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpenedNavbar, setIsOpenedNavbar] = useState(false);

  const navbarClass = `collapse navbar-collapse${
    isOpenedNavbar ? " show" : ""
  }`;

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light  my-navbar-container"
    >
      <Link href="/">
        <span className="navbar-brand">
          <img className="ms-4 me-3" src="/logo.png" width="60" alt="logo" />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        onClick={() => {
          setIsOpenedNavbar(!isOpenedNavbar);
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className={navbarClass} id="navbarNav">
        <div className="navbar-nav">
          <div className="navbar-links-content-container">
            <span className="nav-item nav-link nav-link-tabs">
              <Link href="/">Home</Link>
            </span>
            {/* <span className="nav-item nav-link nav-link-tabs">
              <Link href="/login">Login</Link>
            </span>
            <span className="nav-item nav-link nav-link-tabs">
              <Link href="/register">Register</Link>
            </span>
            <span className="nav-item nav-link nav-link-tabs">
              <Link href="/logout">Logout</Link>
            </span> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
